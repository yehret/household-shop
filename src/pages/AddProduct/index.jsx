import axios from '../../utils/axios';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { useEffect, useState } from 'react';
import app from '../../../firebase';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [brandname, setBrandname] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [img, setImg] = useState(undefined);
  const [imageURL, setImgURL] = useState('');
  const [imgPerc, setImgPerc] = useState(0);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');

  const clearImgFields = () => {
    setImg(undefined);
    setImgURL('');
    setImgPerc(0);
  };

  const clearFields = () => {
    setName('');
    setBrandname('');
    setPrice('');
    setDescription('');
    setQuantity('');
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categRes = await axios.get('categories');
        setCategories(categRes.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

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
      await axios.post(`products`, {
        name,
        brandname,
        imageURL,
        price,
        quantity,
        description,
        category,
      });

      clearImgFields();
      clearFields();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div>
        <h1 className="title">Додати товар</h1>
        <div>
          <div className="form-wrapper">
            <div className="login-form">
              <form className="form-list">
                <div className="form-list__item">
                  <label htmlFor="Middlename">Категорія</label>
                  <select
                    onChange={(e) => setCategory(e.target.value)}
                    name="Category"
                    tabIndex={0}>
                    <option value disabled="disabled">
                      Виберіть категорію
                    </option>
                    {categories.map((category) => (
                      <option key={category._id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-list__item">
                  <label htmlFor="Brandname">Назва бренду</label>
                  <input
                    id="Brandname"
                    value={brandname}
                    onChange={(e) => setBrandname(e.target.value)}
                    type="text"
                    name="Middlename"
                  />
                </div>
                <div className="form-list__item">
                  <label htmlFor="Name">Назва товару</label>
                  <input
                    id="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="Email"
                  />
                </div>
                <div className="form-list__item">
                  <label htmlFor="Description">Опис</label>
                  <textarea
                    id="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    type="tel"
                    name="Phone"
                  />
                </div>
                <div className="form-list__item">
                  <label htmlFor="Price">Ціна</label>
                  <div className="passwordcontainer">
                    <input
                      id="Price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      type="text"
                      name="Password"
                    />
                  </div>
                </div>
                <div className="form-list__item">
                  <label htmlFor="Quantity">Кількість</label>
                  <div className="passwordcontainer">
                    <input
                      id="Quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      type="text"
                      name="Password"
                    />
                  </div>
                </div>
              </form>
              <button onClick={handleUpload} className="addproduct">
                Додати товар
              </button>
            </div>
            <div className="addimage-block">
              <h3>Додати картинку товару</h3>
              {imgPerc > 0 && imgPerc != 100
                ? 'Uploading:' + imgPerc + '%'
                : !imageURL && (
                    <input
                      className="addimage"
                      onChange={(e) => setImg(e.target.files[0])}
                      type="file"
                      accept="image/*"></input>
                  )}
              {imageURL ? <img className="img-preview" src={imageURL} alt="category pic" /> : <></>}
              {imageURL && (
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

export default AddProduct;
