import React, { useState } from 'react';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from '../config/firebase';

const products = [
  'Cinnamon',
  'Cardamom',
  'Cloves',
  'Turmeric',
  'Ginger',
];

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
      // Try Firestore first
      try {
        await addDoc(collection(db, 'orders'), {
          ...orderData,
          createdAt: Timestamp.now(),
        });
        console.log('Order saved to Firestore');
      } catch (firestoreErr) {
        // Fallback to localStorage if Firestore fails
        console.warn('Firestore error, saving to localStorage:', firestoreErr);
        const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
        existingOrders.push(orderData);
        localStorage.setItem('orders', JSON.stringify(existingOrders));
        console.log('Order saved to localStorage');
      }

      // Clear form and show success
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
    <section id="order-now" className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Order Now</h2>
        <form onSubmit={handleSubmit} className="max-w-xl">
          {error && (
            <div className="mb-4 p-3 bg-spice-red-light text-spice-red-dark rounded">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 p-3 bg-ceylon-green-light text-ceylon-green-dark rounded">
              Order submitted successfully!
            </div>
          )}

          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="+1 555 555 5555"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="product" className="block text-sm font-medium mb-1">Product</label>
            <select
              id="product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="w-full border rounded px-3 py-2"
            >
              {products.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Weight (kg)</label>
            <input
              type="text"
              required
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="e.g. 1, 5, 10"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-spice-red text-white px-6 py-2 rounded hover:bg-spice-red-dark transition-colors duration-300 disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Order Now'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default OrderNowForm;
