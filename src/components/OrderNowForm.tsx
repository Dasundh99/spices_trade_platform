import React, { useState } from 'react';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from '../config/firebase';

const products = ['Cinnamon', 'Cardamom', 'Cloves', 'Turmeric', 'Ginger'];

const OrderNowForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [product, setProduct] = useState(products[0]);
  const [weight, setWeight] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    const orderData = {
      email,
      phone,
      product,
      weight,
      createdAt: new Date().toISOString(),
    };

    try {
      // Firestore
      try {
        await addDoc(collection(db, 'orders'), {
          ...orderData,
          createdAt: Timestamp.now(),
        });
        console.log('Order saved to Firestore');
      } catch (firestoreErr) {
        console.warn('Firestore error, saving to localStorage:', firestoreErr);
        const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
        existingOrders.push(orderData);
        localStorage.setItem('orders', JSON.stringify(existingOrders));
        console.log('Order saved to localStorage');
      }

      setEmail('');
      setPhone('');
      setProduct(products[0]);
      setWeight('');
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Failed to submit order';
      console.error('Submission error:', errorMsg);
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="order-now" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="py-5 text-2xl md:text-3xl font-semibold text-gray-900 text-center">
          Order Now
        </h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12 border border-gray-200"
        >
          {error && (
            <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg shadow-sm text-center">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg shadow-sm text-center">
              Order submitted successfully!
            </div>
          )}

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-spice-red focus:border-spice-red transition-all duration-300 shadow-sm"
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+1 555 555 5555"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-spice-red focus:border-spice-red transition-all duration-300 shadow-sm"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">
              Product
            </label>
            <select
              id="product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-spice-red focus:border-spice-red transition-all duration-300 shadow-sm"
            >
              {products.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Weight (kg)</label>
            <input
              type="text"
              required
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="e.g. 1, 5, 10"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-spice-red focus:border-spice-red transition-all duration-300 shadow-sm"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-spice-red text-white font-medium text-lg py-3 rounded-xl hover:bg-spice-red-dark transition-colors duration-300 shadow-md disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Order Now'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default OrderNowForm;