"use client"
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
    time: ""
  });

  const [isEditing, setIsEditing] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setIsEditing(false); // Move to the summary page
  };

  const handlePaymentSubmit = () => {
    if (!paymentMethod) {
      alert("Please select a payment method!");
      return;
    }
    alert(`Booking Confirmed!\nDetails: ${JSON.stringify(details)}\nPayment Method: ${paymentMethod}`);
  };

    const searchParams = useSearchParams();
    const place = searchParams.get('place');
    const vehicle = searchParams.get('vehicle');
    const image = searchParams.get('image');

  return (
    <section className="bg-gray-100 min-h-screen pt-36 p-8 md:p-[10rem]">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 flex flex-col">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Review and Confirm Your Booking</h1>
        <img src={image}/>
        <p className="text-xl mb-6 text-center">
        <strong>Vehicle:</strong> {place || 'N/A'} <br />
        <strong>Price:</strong> {vehicle || 'N/A'}
      </p>

        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Passenger Details */}
              <div>
                <h2 className="text-lg font-semibold text-gray-700 mb-4">Passenger Details</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={details.name}
                    onChange={handleChange}
                    placeholder="Passenger Name"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="number"
                    name="age"
                    value={details.age}
                    onChange={handleChange}
                    placeholder="Age"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="tel"
                    name="mobile"
                    value={details.mobile}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={details.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Pickup and Dropoff Details */}
              <div>
                <h2 className="text-lg font-semibold text-gray-700 mb-4">Ride Details</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="pickup"
                    value={details.pickup}
                    onChange={handleChange}
                    placeholder="Pickup Location"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="text"
                    name="dropoff"
                    value={details.dropoff}
                    onChange={handleChange}
                    placeholder="Dropoff Location"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="time"
                    name="time"
                    value={details.time}
                    onChange={handleChange}
                    placeholder="Enter travel date"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </div>

            <input type="checkbox" required className="mr-2 mt-6" />
            <label>
              I agree to the <strong>Terms and Conditions</strong>.
            </label>

            <button
              type="submit"
              className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Save and Review Booking
            </button>
          </form>
        ) : (
          <div>
            {/* Booking Summary */}
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Booking Summary</h2>
            <div className="p-4 border rounded-lg bg-gray-50 space-y-4">
              <p><strong>Passenger Name:</strong> {details.name}</p>
              <p><strong>Age:</strong> {details.age}</p>
              <p><strong>Mobile:</strong> {details.mobile}</p>
              <p><strong>Email:</strong> {details.email}</p>
              <p><strong>Pickup Location:</strong> {details.pickup}</p>
              <p><strong>Dropoff Location:</strong> {details.dropoff}</p>
              <p><strong>Time:</strong> {details.time}</p>
            </div>

            <button
              className="mt-4 bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition"
              onClick={() => setIsEditing(true)}
            >
              Edit Details
            </button>

            {/* Payment Options */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Select Payment Method</h2>
              <div className="space-y-4">
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Credit Card"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    required
                  />
                  <span>Credit Card</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Debit Card"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    required
                  />
                  <span>Debit Card</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="UPI"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    required
                  />
                  <span>UPI</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Cash"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    required
                  />
                  <span>Cash</span>
                </label>
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
