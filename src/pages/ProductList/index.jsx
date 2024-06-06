import { useEffect, useState } from 'react';
import ProductListItem from '../../components/ProductListItem';
import axios from '../../utils/axios';
import './styles.css';
import { useSelector } from 'react-redux';

const ProductList = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [products, setProducts] = useState([]);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [editData, setEditModalData] = useState([]);
  const [itemId, setItemId] = useState(null);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const res = await axios.get('products');
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProductList();
  }, []);

  const handleOpenEditModal = (itemData) => {
    setEditModalData(itemData);
    setOpenEditModal(true);
  };

  const handleOpenDeleteModal = (itemId) => {
    setItemId(itemId);
    setOpenDeleteModal(true);
  };

  const handleUpdateProduct = async () => {};

  const handleDeleteProduct = async () => {
    console.log(itemId);
  };

  return (
    <>
      {openEditModal && (
        <EditModal
          handleUpdateProduct={handleUpdateProduct}
          editData={editData}
          setOpenEditModal={setOpenEditModal}
        />
      )}
      {openDeleteModal && (
        <DeleteModal
          setOpenDeleteModal={setOpenDeleteModal}
          handleDeleteProduct={handleDeleteProduct}
        />
      )}
      <section>
        <div>
          <div className="account-section-orders">
            <h2 className="account-section__header">Список товарів</h2>
            {products.map((item) => {
              return (
                <ProductListItem
                  handleOpenEditModal={handleOpenEditModal}
                  handleOpenDeleteModal={handleOpenDeleteModal}
                  status={currentUser.role == 'admin' ? true : false}
                  key={item._id}
                  item={item}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

const EditModal = ({ editData, setOpenEditModal }) => {
  const [name, setName] = useState(editData.name);
  const [brandname, setBrandname] = useState(editData.brandname);
  const [price, setPrice] = useState(editData.price);
  const [description, setDescription] = useState(editData.description);
  const [quantity, setQuantity] = useState(editData.quantity);

  return (
    <>
      <div className="modal__backdrop"></div>
      <section className="modal-popup edit-modal">
        <div onClick={() => setOpenEditModal()} className="modal__close-button icon-close"></div>
        <h2>Редагувати інформацію про товар</h2>
        <div className="edit-form">
          <form className="form-list">
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
          <button className="addproduct">Підтвердити</button>
        </div>
      </section>
    </>
  );
};

const DeleteModal = ({ handleDeleteProduct, setOpenDeleteModal }) => {
  return (
    <>
      <div className="modal__backdrop"></div>
      <section className="modal-popup delete-modal">
        <div
          onClick={() => setOpenDeleteModal(false)}
          className="modal__close-button icon-close"></div>
        <h2>Видалити товар?</h2>
        <div className="delete-modal__actions">
          <button onClick={handleDeleteProduct} className="registernow-button">
            Видалити
          </button>
          <button onClick={() => setOpenDeleteModal(false)} className="addproduct">
            Скасувати
          </button>
        </div>
      </section>
    </>
  );
};

export default ProductList;
