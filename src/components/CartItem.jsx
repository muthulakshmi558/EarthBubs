import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const CartItem = () => {
  const [cartItems, setCartItems] = useState([]);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();

const handleCheckout = () => {
  localStorage.setItem("discount", discount); 
  navigate("/payment");
};
  useEffect(() => {
    const stored = localStorage.getItem("cartItems");
    if (stored) setCartItems(JSON.parse(stored));
  }, []);

  const updateLocalStorage = (items) => {
    localStorage.setItem("cartItems", JSON.stringify(items));
    setCartItems(items);
  };

  const handleQuantityChange = (index, qty) => {
    const quantity = parseInt(qty);
    if (quantity < 1) return; // prevent zero or negative

    const updated = [...cartItems];
    updated[index].quantity = quantity;
    updateLocalStorage(updated);
  };

  const handleRemove = (index) => {
    const updated = cartItems.filter((_, i) => i !== index);
    updateLocalStorage(updated);
  };

const handleApplyCoupon = () => {
  if (couponCode.trim().toLowerCase() === "baby250") {
    setDiscount(250);
    localStorage.setItem("discount", 250); // 👈 save to localStorage
  } else {
    setDiscount(0);
    localStorage.setItem("discount", 0);   // 👈 reset in localStorage
    alert("Invalid coupon!");
  }
};

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 0;
  const total = subtotal - discount + shipping;

  return (
    <div className="p-6 font-poppins">
      {/* Breadcrumb */}
      <p className="text-sm text-black-600 font-semibold mb-4">
        <Link to="/" className="text-black font-semibold">Home</Link> &gt; Add to Cart
      </p>

      {/* Table Head */}
      <div className="grid grid-cols-4 font-semibold border border-blue-200 p-4 text-center">
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Subtotal</div>
      </div>

      {/* Product Rows */}
      {cartItems.map((item, index) => (
        <div key={index} className="grid grid-cols-4 items-center border border-blue-200 p-4 mt-2 text-center relative">
          <div className="flex items-center gap-3 justify-center">
            <img src={item.image} alt={item.title} className="w-12 h-12 object-contain" />
<span className="text-sm">{(item.title || item.name || "No Name").split(",")[0]}</span>
          </div>
          <div>₹ {item.price}</div>
          <div>
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => handleQuantityChange(index, item.quantity - 1)}
                disabled={item.quantity <= 1}
                className="bg-blue-200 px-2 rounded disabled:opacity-50"
              >
                -
              </button>
              <span className="min-w-[24px] text-center">{item.quantity}</span>
              <button
                onClick={() => handleQuantityChange(index, item.quantity + 1)}
                className="bg-blue-200 px-2 rounded"
              >
                +
              </button>
            </div>
          </div>
          <div>₹ {item.price * item.quantity}</div>
          <button
            onClick={() => handleRemove(index)}
            className="absolute top-2 right-4 text-xl text-blue-400 hover:text-red-500"
          >
            ×
          </button>
        </div>
      ))}

      {/* Coupon + Totals */}
      <div className="flex flex-col lg:flex-row justify-between mt-6 gap-6">
        {/* Coupon Section */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Coupon Code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="bg-blue-50 px-4 py-2 border rounded w-48"
          />
          <button
            onClick={handleApplyCoupon}
            className="bg-blue-200 hover:bg-blue-300 px-4 py-2 rounded"
          >
            Apply Coupon
          </button>
        </div>

        {/* Total Summary */}
        <div className="border border-blue-300 p-4 rounded w-full lg:w-[300px] space-y-2">
          <h3 className="text-lg font-semibold mb-2">Cart Total</h3>
          <div className="flex justify-between">
            <span>Subtotal:</span> <span>₹ {subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Discount:</span> <span>₹ {discount}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping:</span> <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-2">
            <span>Total:</span> <span>₹ {total}</span>
          </div>
        <button
          onClick={handleCheckout}
          className="w-full mt-3 bg-[#00B4D8] text-white py-2 rounded hover:bg-[#0094b0]"
        >
          Process to checkout
        </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
