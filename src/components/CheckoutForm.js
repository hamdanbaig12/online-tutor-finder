import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements, PaymentRequestButtonElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentStatus, setPaymentStatus] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentRequest, setPaymentRequest] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState({
    amount: localStorage.getItem("amount") || 2000,
    currency: "usd",
  });

  // Setup Payment Request (for Google Pay, Apple Pay, etc.)
  useEffect(() => {
    if (!stripe) return;

    const pr = stripe.paymentRequest({
      country: "US",
      currency: paymentDetails.currency,
      total: {
        label: "Total",
        amount: parseInt(paymentDetails.amount), // Amount in cents
      },
      requestPayerName: true,
      requestPayerEmail: true,
    });

    pr.canMakePayment().then((result) => {
      if (result) {
        setPaymentRequest(pr);
      }
    });
  }, [stripe, paymentDetails]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessing(true);

    // Create a PaymentIntent on the backend
    const response = await fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(paymentDetails),
    });

    const { clientSecret } = await response.json();

    // Confirm the payment using the clientSecret
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (error) {
      setPaymentStatus(`Payment failed: ${error.message}`);
    } else if (paymentIntent.status === "succeeded") {
      setPaymentStatus("Payment successful!");
      // Store the payment details in localStorage
      localStorage.setItem("paymentStatus", "success");
      localStorage.setItem("amount", paymentIntent.amount_received);
    }

    setIsProcessing(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-50 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Complete your Payment</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <CardElement className="p-4 border border-gray-300 rounded-md" />
        
        {paymentRequest && (
          <PaymentRequestButtonElement className="w-full bg-blue-600 text-white py-3 rounded-md" paymentRequest={paymentRequest} />
        )}

        <button 
          type="submit" 
          disabled={!stripe || isProcessing} 
          className={`w-full py-3 rounded-md text-white font-semibold ${isProcessing ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {isProcessing ? "Processing..." : "Pay"}
        </button>
      </form>

      <div className="mt-6 p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-xl font-medium mb-3">Payment Details</h3>
        <p className="text-gray-600"><strong>Amount:</strong> ${(paymentDetails.amount / 100).toFixed(2)}</p>
        <p className="text-gray-600"><strong>Currency:</strong> {paymentDetails.currency.toUpperCase()}</p>
        {paymentStatus && <p className="text-sm text-green-600 mt-3">{paymentStatus}</p>}
      </div>
    </div>
  );
};

export default CheckoutForm;