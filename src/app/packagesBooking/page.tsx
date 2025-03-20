"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const PackageBooking = () => {

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
  const [paymentAdvance, setPaymentAdvance] = useState("");
  const [payableAmount, setPayableAmount] = useState(0); // Store the calculated amount

  const searchParams = useSearchParams();

  const destination = searchParams ? searchParams.get('destination') : null;
  const carType = searchParams ? searchParams.get("vehicle") : null;
  const image = searchParams ? searchParams.get("image") : null;
  const price = parseFloat(searchParams?.get("price") || "0"); // Convert to a number

  useEffect(() => {
    // Update payable amount based on the selected advance payment option
    if (paymentAdvance === "Full Payment") {
      setPayableAmount(price);
    } else if (paymentAdvance === "50% Advance") {
      setPayableAmount(price / 2);
    }
  }, [paymentAdvance, price]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsEditing(false); // Move to the summary page
  };

  const handlePaymentSubmit = () => {
    if (!paymentMethod) {
      alert("Please select a payment method!");
      return;
    }
    alert(
      `Booking Confirmed!\nDetails: ${JSON.stringify(
        details
      )}\nAdvance Payment: ${paymentAdvance}\nPayable Amount: ₹${payableAmount}\nPayment Method: ${paymentMethod}`
    );
  };

  return (
    <section className="bg-gray-100 min-h-screen pt-36 p-8 md:p-[10rem]">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 flex flex-col">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Review and Confirm Your Booking
        </h1>
        <Image
          src={image || "/images/default.jpg"}
          alt={carType || "Selected Car"}
          className="mb-6 rounded-lg"
        />
        <p className="text-xl mb-6 text-center">
          <strong>Destination:</strong> {destination || "N/A"} <br />
          <strong>Vehicle:</strong> {carType || "N/A"} <br />
          <strong>Amount:</strong> ₹{price || "N/A"}
        </p>

        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Passenger Details */}
              <div>
                <h2 className="text-lg font-semibold text-gray-700 mb-4">
                  Passenger Details
                </h2>
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
                <h2 className="text-lg font-semibold text-gray-700 mb-4">
                  Ride Details
                </h2>
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
                    type="time"
                    name="time"
                    value={details.time}
                    onChange={handleChange}
                    placeholder="Enter travel time"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
            </div>

            <input title="checkbox for packages booking" type="checkbox" required className="mr-2 mt-6" />
            <label>
              I agree to the{" "}
              <Link href={"/terms-and-conditions"}>
                <strong>Terms and Conditions</strong>
              </Link>
              .
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
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Booking Summary
            </h2>
            <div className="p-4 border rounded-lg bg-gray-50 space-y-4">
              <p>
                <strong>Passenger Name:</strong> {details.name}
              </p>
              <p>
                <strong>Age:</strong> {details.age}
              </p>
              <p>
                <strong>Mobile:</strong> {details.mobile}
              </p>
              <p>
                <strong>Email:</strong> {details.email}
              </p>
              <p>
                <strong>Pickup Location:</strong> {details.pickup}
              </p>
              <p>
                <strong>Dropoff Location:</strong> {details.dropoff}
              </p>
              <p>
                <strong>Time:</strong> {details.time}
              </p>
            </div>

            {/* Advance Payment Options */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Advance Payment Options
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label
                  className={`p-6 border rounded-lg cursor-pointer transition ${
                    paymentAdvance === "Full Payment"
                      ? "border-green-500 bg-green-50"
                      : "border-gray-300"
                  }`}
                  onClick={() => setPaymentAdvance("Full Payment")}
                >
                  <div className="flex items-center mb-2">
                    <div
                      className={`w-6 h-6 flex items-center justify-center rounded-full border-2 ${
                        paymentAdvance === "Full Payment"
                          ? "border-green-500 bg-green-500 text-white"
                          : "border-gray-400"
                      }`}
                    >
                      {paymentAdvance === "Full Payment" && <span>&#10003;</span>}
                    </div>
                    <div className="ml-3 text-green-600 font-semibold">SIKKIM RIDEASY</div>
                  </div>
                  <p className="text-sm text-gray-600">Pay full payment in advance</p>
                  <p className="text-2xl font-bold text-green-500 mt-2">₹{price}</p>
                </label>

                {/* Regular Option */}
                <label
                  className={`p-6 border rounded-lg cursor-pointer transition ${
                    paymentAdvance === "50% Advance"
                      ? "border-yellow-500 bg-yellow-50"
                      : "border-gray-300"
                  }`}
                  onClick={() => setPaymentAdvance("50% Advance")}
                >
                  <div className="flex items-center mb-2">
                    <div
                      className={`w-6 h-6 flex items-center justify-center rounded-full border-2 ${
                        paymentAdvance === "50% Advance"
                          ? "border-yellow-500 bg-yellow-500 text-white"
                          : "border-gray-400"
                      }`}
                    >
                      {paymentAdvance === "50% Advance" && <span>&#10003;</span>}
                    </div>
                    <div className="ml-3 text-yellow-600 font-semibold">SIKKIM RIDEASY</div>
                  </div>
                  <p className="text-sm text-gray-600">Pay half payment in advance</p>
                  <p className="text-2xl font-bold text-gray-800 mt-2">
                    ₹{(price / 2).toFixed(2)}
                  </p>
                </label>
              </div>
            </div>

            {/* Payment Options */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Select Payment Method
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Credit Card */}
                  <label
                    className={`p-6 border rounded-lg cursor-pointer transition ${
                      paymentMethod === "Credit Card"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-300"
                    }`}
                    onClick={() => setPaymentMethod("Credit Card")}
                  >
                    <div className="flex items-center mb-2">
                      <div
                        className={`w-6 h-6 flex items-center justify-center rounded-full border-2 ${
                          paymentMethod === "Credit Card"
                            ? "border-blue-500 bg-blue-500 text-white"
                            : "border-gray-400"
                        }`}
                      >
                        {paymentMethod === "Credit Card" && <span>&#10003;</span>}
                      </div>
                      <div className="ml-3 text-blue-600 font-semibold">Credit Card</div>
                    </div>
                    <p className="text-sm text-gray-600">Pay securely using your credit card.</p>
                  </label>

                  {/* Debit Card */}
                  <label
                    className={`p-6 border rounded-lg cursor-pointer transition ${
                      paymentMethod === "Debit Card"
                        ? "border-purple-500 bg-purple-50"
                        : "border-gray-300"
                    }`}
                    onClick={() => setPaymentMethod("Debit Card")}
                  >
                    <div className="flex items-center mb-2">
                      <div
                        className={`w-6 h-6 flex items-center justify-center rounded-full border-2 ${
                          paymentMethod === "Debit Card"
                            ? "border-purple-500 bg-purple-500 text-white"
                            : "border-gray-400"
                        }`}
                      >
                        {paymentMethod === "Debit Card" && <span>&#10003;</span>}
                      </div>
                      <div className="ml-3 text-purple-600 font-semibold">Debit Card</div>
                    </div>
                    <p className="text-sm text-gray-600">Pay directly from your bank account.</p>
                  </label>

                  {/* UPI */}
                  <label
                    className={`p-6 border rounded-lg cursor-pointer transition ${
                      paymentMethod === "UPI"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-300"
                    }`}
                    onClick={() => setPaymentMethod("UPI")}
                  >
                    <div className="flex items-center mb-2">
                      <div
                        className={`w-6 h-6 flex items-center justify-center rounded-full border-2 ${
                          paymentMethod === "UPI"
                            ? "border-green-500 bg-green-500 text-white"
                            : "border-gray-400"
                        }`}
                      >
                        {paymentMethod === "UPI" && <span>&#10003;</span>}
                      </div>
                      <div className="ml-3 text-green-600 font-semibold">UPI</div>
                    </div>
                    <p className="text-sm text-gray-600">Fast and easy payment using UPI.</p>
                  </label>
                </div>
              </div>

            <button
              onClick={handlePaymentSubmit}
              className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
            >
              Payable Amount ₹{payableAmount || price}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PackageBooking;
