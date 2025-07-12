import { useState } from 'react';

export default function App() {
  const [form, setForm] = useState({
    sepal_length: 5.0,
    sepal_width: 3.0,
    petal_length: 1.5,
    petal_width: 0.2,
  });
  const [result, setResult] = useState('');

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: parseFloat(e.target.value) });
  };

  const predict = async () => {
    const res = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setResult(data.prediction);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f7f7f7',
      }}
    >
      <div
        style={{
          padding: '2rem',
          maxWidth: 400,
          width: '100%',
          background: '#fff',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Iris Flower Classifier</h2>

        <div>
          <label>Sepal Length: {form.sepal_length}</label>
          <input
            type="range"
            name="sepal_length"
            min="4"
            max="8"
            step="0.1"
            value={form.sepal_length}
            onChange={handleChange}
            style={{ width: '100%' }}
          />
        </div>

        <div>
          <label>Sepal Width: {form.sepal_width}</label>
          <input
            type="range"
            name="sepal_width"
            min="2"
            max="4.5"
            step="0.1"
            value={form.sepal_width}
            onChange={handleChange}
            style={{ width: '100%' }}
          />
        </div>

        <div>
          <label>Petal Length: {form.petal_length}</label>
          <input
            type="range"
            name="petal_length"
            min="1"
            max="7"
            step="0.1"
            value={form.petal_length}
            onChange={handleChange}
            style={{ width: '100%' }}
          />
        </div>

        <div>
          <label>Petal Width: {form.petal_width}</label>
          <input
            type="range"
            name="petal_width"
            min="0.1"
            max="2.5"
            step="0.1"
            value={form.petal_width}
            onChange={handleChange}
            style={{ width: '100%' }}
          />
        </div>

        <button
          onClick={predict}
          style={{
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            width: '100%',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Predict
        </button>

        {result && <h3 style={{ marginTop: '1rem', textAlign: 'center' }}>Prediction: {result}</h3>}
      </div>
    </div>
  );
}
