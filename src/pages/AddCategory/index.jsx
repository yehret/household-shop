import { useState, useEffect } from 'react';
import axios from 'axios';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import app from '../../../firebase.js';

const AddCategory = () => {
  const [name, setCategoryName] = useState('');
  const [img, setImg] = useState(undefined);
  const [imgURL, setImgURL] = useState('');
  const [imgPerc, setImgPerc] = useState(0);

  const clearImgFields = () => {
    setImg(undefined);
    setImgURL('');
    setImgPerc(0);
  };

  const uploadFile = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, `images/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImgPerc(Math.round(progress));
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgURL(downloadURL);
        });
      },
    );
  };

  useEffect(() => {
    img && uploadFile(img);
  }, [img]);

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `http://localhost:8800/api/categories`,
        { name, imgURL },
        {
          withCredentials: true,
        },
      );

      clearImgFields();
      setCategoryName('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div>
        <h1 className="title">Додати категорію</h1>
        <div>
          <div className="form-wrapper">
            <div className="login-form">
              <form className="form-list">
                <div className="form-list__item">
                  <label htmlFor="CategoryName">Назва категорії</label>
                  <input
                    id="CategoryName"
                    value={name}
                    onChange={(e) => setCategoryName(e.target.value)}
                    type="text"
                    name="Middlename"
                  />
                </div>
              </form>
              <button className="addproduct" onClick={handleUpload}>
                Додати категорію
              </button>
            </div>
            <div className="addimage-block">
              <h3>Додати картинку категорії</h3>
              {imgPerc > 0 && imgPerc != 100
                ? 'Uploading:' + imgPerc + '%'
                : !imgURL && (
                    <input
                      className="addimage"
                      onChange={(e) => setImg(e.target.files[0])}
                      type="file"
                      accept="image/*"></input>
                  )}
              {imgURL ? <img className="img-preview" src={imgURL} alt="category pic" /> : <></>}
              {imgURL && (
                <button className="addproduct" onClick={clearImgFields}>
                  Очистити
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddCategory;
