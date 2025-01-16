import React from "react";
import Link from "next/link";

const TermsAndConditions = () => {
  return (
    <section className="bg-gray-100 min-h-screen py-16 px-8 pt-28">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Terms and Conditions
        </h1>
        <div className="space-y-4 text-gray-700">
          <p>
            Welcome to Sikkim Rideasy! By accessing or using our service, you
            agree to be bound by these terms and conditions. Please read them
            carefully.
          </p>

          <h2 className="text-xl font-semibold">1. General Terms</h2>
          <p>
            - You must be 18 years or older to use this service. <br />
            - All bookings are subject to availability and confirmation.
          </p>

          <h2 className="text-xl font-semibold">2. Payment Terms</h2>
          <p>
            - Payment must be made in advance or as per the chosen payment
            option during booking. <br />
            - Cancellation charges may apply as per our cancellation policy.
          </p>

          <h2 className="text-xl font-semibold">3. Cancellation and Refund</h2>
          <p>
            - If cancelled 3 days prior, Zero cancellation charge.<br/>
            - If a traveler cancels 24 hours prior the pick-up time, 30% of the total trip cost will be deducted.<br/>
            - If a traveler cancels within 24 hours prior the pick-up time, no refund.<br/>
            - The refunds will be made by online transfer to the customer’s bank account. No cash refund requests.<br/>
            - The amount will be refunded approximately within 7 business days.
          </p>

          <h2 className="text-xl font-semibold">4. Use of Service</h2>
          <p>
            - You agree not to misuse the service or violate any applicable
            laws. <br />
            - Sikkim Rideasy reserves the right to deny service at its
            discretion.
          </p>

          <h2 className="text-xl font-semibold">4. Ownership</h2>
          <p>
          Sikkim Rideasy is owned and operated by Sikkim RidEasy, headquartered in Tadong , Gangtok , Sikkim. As a dedicated provider of taxi and travel services in Sikkim , we strive to ensure that every journey with us reflects our commitment to safety, reliability, and exceptional customer service. All intellectual property, including the Sikkim Rideasy brand name, logo, and platform, is solely owned by us. By choosing Sikkim Rideasy, you entrust your travel experience to a team that takes full responsibility for delivering the highest standards of service across the region.
          </p>

          <h2 className="text-xl font-semibold">5. Liability</h2>
          <p>
            - Sikkim Rideasy is not responsible for delays caused by
            uncontrollable circumstances (e.g., weather, traffic). <br />
            - Users are responsible for ensuring the accuracy of booking
            details.
          </p>

          <h2 className="text-xl font-semibold">6. Amendments</h2>
          <p>
            - Sikkim Rideasy reserves the right to modify these terms at any
            time. <br />
            - Continued use of the service constitutes acceptance of the updated
            terms.
          </p>

          <h2 className="text-xl font-semibold">7. Contact Us</h2>
          <p>
            If you have any questions about these Terms and Conditions, please
            contact us at:
          </p>
          <ul className="list-disc list-inside">
            <li>Email: support@sikkimrideasy.com</li>
            <li>Phone: +91-7478913770</li>
          </ul>
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-sm font-bold bg-blue-400 p-3 rounded-lg shadow-md shadow-slate-700">
              Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
