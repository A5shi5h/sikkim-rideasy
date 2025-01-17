"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

const BookingReview = () => {
  const [details, setDetails] = useState({
    name: "",
    age: "",
    mobile: "",
    email: "",
    pickup: "",
    dropoff: "",
    time: "",
  });

  const [isEditing, setIsEditing] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentAdvance, setPaymentAdvance] = useState(""); // New state for advance payment options

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handlePaymentSubmit = () => {
    if (!paymentAdvance) {
      alert("Please select an advance payment option!");
      return;
    }
    if (!paymentMethod) {
      alert("Please select a payment method!");
      return;
    }
    alert(
      `Booking Confirmed!\nDetails: ${JSON.stringify(details)}\nAdvance Payment: ${paymentAdvance}\nPayment Method: ${paymentMethod}`
    );
  };

  const searchParams = useSearchParams();
  const vehicle = searchParams.get("vehicle");
  const price = searchParams.get("price");
  const image = searchParams.get("image");
  const destination = searchParams.get("destination");
  const date = searchParams.get("date");

  return (
    <section className="bg-gray-100 min-h-screen pt-28 pb-8 px-4 md:px-16">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Review and Confirm Your Booking
        </h1>

        <img 
          src={image || '/images/default.jpg'} 
          alt={'Vehicle'} 
        />
        <div className="text-lg text-center mb-8 space-y-2">
          <p><strong>VEHICLE:</strong> {vehicle || "N/A"}</p>
          <p><strong>PRICE:</strong> ₹{price || "N/A"}</p>
          <p><strong>DESTINATION:</strong> {destination || "N/A"}</p>
          <p><strong>DATE:</strong> {date || "N/A"}</p>
        </div>

        {isEditing ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Passenger Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={details.name}
                onChange={handleChange}
                placeholder="Passenger Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="number"
                name="age"
                value={details.age}
                onChange={handleChange}
                placeholder="Age"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="tel"
                name="mobile"
                value={details.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                value={details.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                name="pickup"
                value={details.pickup}
                onChange={handleChange}
                placeholder="Pickup Location"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                name="dropoff"
                value={details.dropoff}
                onChange={handleChange}
                placeholder="Dropoff Location"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="time"
                name="time"
                value={details.time}
                onChange={handleChange}
                placeholder="Enter Travel Time"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mt-6">
              <input type="checkbox" required className="mr-2" />
              <label>
                I agree to the <strong><Link href={"/terms-and-conditions"}>Terms and Conditions</Link></strong>.
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Save and Review Booking
            </button>
          </form>
        ) : (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-700">Booking Summary</h2>
            <div className="p-4 border border-gray-300 rounded-lg bg-gray-50">
              <p><strong>Passenger Name:</strong> {details.name}</p>
              <p><strong>Age:</strong> {details.age}</p>
              <p><strong>Mobile:</strong> {details.mobile}</p>
              <p><strong>Email:</strong> {details.email}</p>
              <p><strong>Pickup Location:</strong> {details.pickup}</p>
              <p><strong>Dropoff Location:</strong> {details.dropoff}</p>
              <p><strong>Time:</strong> {details.time}</p>
            </div>

            {/* Advance Payment Options */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Advance Payment Options</h2>
              <div className="space-y-4">
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="paymentAdvance"
                    value="Full Payment"
                    onChange={(e) => setPaymentAdvance(e.target.value)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    required
                  />
                  <span>Advance Full Payment</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="paymentAdvance"
                    value="50% Advance"
                    onChange={(e) => setPaymentAdvance(e.target.value)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    required
                  />
                  <span>50% Advance Payment</span>
                </label>
              </div>
            </div>

            {/* Payment Method Options */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Select Payment Method</h2>
              <div className="space-y-4">
                {["Credit Card", "Debit Card", "UPI", "Cash"].map((method) => (
                  <label key={method} className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      required
                    />
                    <span>{method}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              onClick={handlePaymentSubmit}
              className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
            >
              Confirm Booking
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookingReview;
