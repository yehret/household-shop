import axios from '../../utils/axios';
import setCanvasPreview from '../../utils/setCanvasPreview';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { useCallback, useEffect, useRef, useState } from 'react';
import app from '../../../firebase';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ReactCrop, { centerCrop, convertToPixelCrop, makeAspectCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const AddProduct = () => {
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const { currentUser } = useSelector((state) => state.user);
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
  const [openModal, setOpenModal] = useState(true);
  const [crop, setCrop] = useState();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const getUser = useCallback(async () => {
    if (currentUser) {
      try {
        const userRes = await axios.get(`users/checkuser/${currentUser?._id}`);
        if (userRes.data.status === false) {
          navigate('/');
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      navigate('/');
    }
  }, [currentUser, navigate]);

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
    getUser();
    const fetchCategories = async () => {
      try {
        const categRes = await axios.get('categories');
        setCategories(categRes.data);
        if (categRes.data.length > 0) {
          setCategory(categRes.data[0].name);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, [getUser]);

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
          const imageElement = new Image();
          imageElement.src = downloadURL;

          imageElement.addEventListener('load', (e) => {
            if (error) setError('');
            const { naturalWidth, naturalHeight } = e.currentTarget;
            if (naturalWidth < 225 || naturalHeight < 225) {
              setError('Розміри зображення повинні бути як мінімум 227х227 пікселів');
              return setImgURL('');
            }
          });
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

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const onImageLoad = (e) => {
    const { width, height } = e.currentTarget;
    const cropWidthInPercent = (227 / width) * 100;

    const crop = makeAspectCrop(
      {
        unit: '%',
        width: cropWidthInPercent,
      },
      1,
      width,
      height,
    );

    const centeredCrop = centerCrop(crop, width, height);
    setCrop(centeredCrop);
  };

  return (
    <>
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
              <div className="addimage-button">
                <button onClick={() => setOpenModal(true)} className="addimage">
                  Завантажити зображення
                </button>
              </div>
              {openModal && (
                <>
                  <div className="modal__backdrop"></div>
                  <section className="addimage-modal">
                    <div
                      onClick={handleCloseModal}
                      className="modal__close-button icon-close"></div>
                    <h2>Завантажити зображення</h2>
                    <div className="addimage-block">
                      {error && <p className="image-error">{error}</p>}
                      {imgPerc > 0 && imgPerc != 100
                        ? 'Uploading:' + imgPerc + '%'
                        : !imageURL && (
                            <input
                              className="addimage"
                              onChange={(e) => setImg(e.target.files[0])}
                              type="file"
                              accept="image/*"></input>
                          )}
                      {imageURL && (
                        <>
                          <ReactCrop
                            onChange={(percentCrop) => setCrop(percentCrop)}
                            crop={crop}
                            keepSelection
                            aspect={1}
                            minHeight={227}>
                            <img
                              ref={imgRef}
                              className="img-preview"
                              src={imageURL}
                              alt="Upload"
                              onLoad={onImageLoad}
                            />
                          </ReactCrop>
                          {crop && (
                            <canvas
                              ref={previewCanvasRef}
                              style={{
                                //   display: 'none',
                                border: '1px solid black',
                                objectFit: 'contain',
                                width: 227,
                                height: 227,
                              }}
                            />
                          )}
                          <div className="addimage-buttons">
                            <button
                              onClick={() => {
                                setCanvasPreview(
                                  imgRef.current,
                                  previewCanvasRef.current,
                                  convertToPixelCrop(
                                    crop,
                                    imgRef.current.width,
                                    imgRef.current.height,
                                  ),
                                );
                              }}
                              className="addproduct clearbutton">
                              Завантажити
                            </button>
                            <button className="addproduct clearbutton" onClick={clearImgFields}>
                              Очистити
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </section>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddProduct;
