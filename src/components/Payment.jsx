// Checkout.jsx
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


const Payment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
const navigate = useNavigate();

  const [cartTotal, setCartTotal] = useState({
    subtotal: 2200,
    discount: 250,
    shipping: 0,
    total: 0,
  });
const onSubmit = (data) => {
  console.log("Form Data Submitted:", data);
  alert("Order Placed Successfully!");

  localStorage.removeItem("cartItems");
  localStorage.removeItem("discount");

  // You can redirect if needed:
   navigate("/order");
};
useEffect(() => {
  const items = JSON.parse(localStorage.getItem("cartItems")) || [];
  const discount = parseInt(localStorage.getItem("discount")) || 0;

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shipping = 0;
  const total = subtotal - discount + shipping;

  setCartTotal({
    subtotal,
    discount,
    shipping,
    total,
  });
}, []);

  return (
    <div className="px-6 md:px-20 py-10 font-[Poppins]">
      {/* Breadcrumb */}
      <p className="text-sm text-black-600 font-semibold mb-4">
        Home &gt; Add to Cart &gt; <span className="text-black font-medium">Payments</span>
      </p>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Form Section */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 bg-[#f1f9fc] p-6 rounded-md border border-blue-100"
        >
          <h2 className="text-2xl font-semibold mb-4">Details</h2>

          {/* Input Fields */}
          <div className="space-y-4">
            <div>
              <label>First Name<span className="text-red-500">*</span></label>
              <input {...register("firstName", { required: true })}
                className="w-full p-2 bg-[#dceef3] rounded-md outline-none" />
              {errors.firstName && <p className="text-red-500 text-sm">First Name is required</p>}
            </div>

            <div>
              <label>Company Name</label>
              <input {...register("companyName")}
                className="w-full p-2 bg-[#dceef3] rounded-md outline-none" />
            </div>

            <div>
              <label>Street Address</label>
              <input {...register("street", { required: true })}
                className="w-full p-2 bg-[#dceef3] rounded-md outline-none" />
              {errors.street && <p className="text-red-500 text-sm">Street is required</p>}
            </div>

            <div>
              <label>Apartment, Floor, etc (Optional)</label>
              <input {...register("apartment")}
                className="w-full p-2 bg-[#dceef3] rounded-md outline-none" />
            </div>

            <div>
              <label>Tower/City<span className="text-red-500">*</span></label>
              <input {...register("city", { required: true })}
                className="w-full p-2 bg-[#dceef3] rounded-md outline-none" />
              {errors.city && <p className="text-red-500 text-sm">City is required</p>}
            </div>

            <div>
              <label>Phone Number<span className="text-red-500">*</span></label>
              <input type="tel" {...register("phone", {
                required: true,
                pattern: /^[6-9]\d{9}$/,
              })} className="w-full p-2 bg-[#dceef3] rounded-md outline-none" />
              {errors.phone && <p className="text-red-500 text-sm">Valid phone number required</p>}
            </div>

            <div>
              <label>Email Address<span className="text-red-500">*</span></label>
              <input type="email" {...register("email", { required: true })}
                className="w-full p-2 bg-[#dceef3] rounded-md outline-none" />
              {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
            </div>

            <div className="flex items-center">
              <input type="checkbox" {...register("saveInfo")}
                className="mr-2" />
              <label>Save this information for next use</label>
            </div>
          </div>
        </form>

        {/* Cart Summary */}
        <div className="w-full lg:w-[40%] bg-white border border-blue-100 p-6 rounded-md">
          <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>₹{cartTotal.subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount:</span>
              <span>₹{cartTotal.discount}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>₹{cartTotal.total}</span>
            </div>
          </div>

{/* Payment Options */}
<div className="flex flex-wrap gap-2 mt-6">
  {[
    { name: "GPay", src: "./src/assets/images/payment1.png" },
    { name: "Apple Pay", src: "./src/assets/images/payment2.png" },
    { name: "Amazon", src: "./src/assets/images/payment3.png" },
    { name: "PayPal", src: "./src/assets/images/payment4.png" },
    { name: "Mastercard", src: "./src/assets/images/payment5.png" },
    { name: "+ ADD", src: "" },
  ].map((pay, i) => (
    <div
      key={i}
      className="border p-2 px-4 rounded-md bg-gray-50 text-xs font-medium flex items-center justify-center min-w-[90px] min-h-[40px]"
    >
      {pay.src ? (
        <img src={pay.src} alt={pay.name} className="h-5 object-contain" />
      ) : (
        <span>{pay.name}</span>
      )}
    </div>
  ))}
</div>

          {/* Cash on delivery */}
          <div className="flex items-center mt-4">
            <input type="radio" name="payment" defaultChecked className="mr-2" />
            <label>Cash on delivery</label>
          </div>

          {/* Place Order Button */}
          <button
            onClick={handleSubmit(onSubmit)}
            className="w-full mt-4 bg-[#00B4D8] text-white py-2 rounded-md hover:bg-[#009ec2]"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
