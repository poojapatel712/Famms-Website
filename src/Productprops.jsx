const Productprops = (i) => {
  return (
    <div className="product-item">
      <div className="product-item-inner">
        <div className="product-image">
          {/* મેઈન ઈમેજ */}
          <img src={i.img} alt={i.name} />
          
          {/* હોવર કરવા પર દેખાતું Overlay */}
          <div className="hover_overlay">
            <div className="hover_buttons">
              <button className="add_cart_btn">Add To Cart</button>
              <button className="buy_now_btn">Buy Now</button>
            </div>
          </div>
        </div>
        
        <div className="product-text">
          <h5>{i.name}</h5>
          <p>{i.price}</p>
        </div>
      </div>
    </div>
  );
};
export default Productprops