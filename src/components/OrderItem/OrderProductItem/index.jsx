import React from 'react';

const OrderProductItem = ({ itemData }) => {
  return (
    <div className="account-section__order-product">
      <div className="order-product-img">
        <img
          src={
            itemData.productImgURL ||
            'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/blurred-gray-background-brandon-bourdages.jpg'
          }
          alt=""
        />
      </div>
      <div className="order-product-name">{itemData.productName}</div>
      <div className="order-product-price-details">
        <span className="order-product-quantity">{itemData.quantityOrder}</span>
        <div className="separator">x</div>
        <div className="order-product-price">
          {itemData.price}
          <span className="details-price-tag">₴</span>
        </div>
      </div>
    </div>
  );
};

export default OrderProductItem;
