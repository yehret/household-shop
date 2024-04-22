import { useState } from 'react';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [brandname, setBrandname] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [img, setImg] = useState(undefined);

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
                  <select name="Category" tabIndex={0}>
                    <option value disabled="disabled">
                      Виберіть категорію
                    </option>
                    <option value="Категорія 1" selected="selected">
                      Категорія1
                    </option>
                    <option value="Категорія 1">Категорія2</option>
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
              <button className="addproduct">Додати товар</button>
            </div>
            <div className="addimage-block">
              <input
                className="addimage"
                onChange={(e) => setImg(e.target.files[0])}
                type="file"
                accept="image/*"></input>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
