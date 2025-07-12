# 🌸 Iris Flower Classifier - Full Stack ML App

A full-stack ML web app that classifies Iris flowers using sepal and petal measurements.

## 🔧 Tech Stack

- **Frontend**: Next.js (React)
- **Backend**: Node.js + Python
- **ML Model**: Random Forest (scikit-learn)
- **Deployment**: Ready for Vercel (Frontend) & Render/Fly.io (Backend)

---

## 📁 Project Structure

```
iris-classifier-app/
├── frontend/       # Next.js frontend
└── backend/        # Node + Python backend with ML model
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/YOUR_USERNAME/iris-classifier-app.git
cd iris-classifier-app
```

---

## ⚙️ Installation & Usage

### ▶️ Backend

```bash
cd backend
npm install                         # Install Node.js dependencies
pip install -r requirements.txt     # Install Python dependencies
python train_model.py               # Generate iris_model.pkl
node index.js                       # Start the backend server
```

Runs on: `http://localhost:5000`

---

### ▶️ Frontend

In a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Runs on: `http://localhost:3000`

---

## 🧪 How to Use

1. Visit `http://localhost:3000`
2. Enter sepal and petal measurements
3. Click **Predict**
4. You'll see the Iris flower species: `setosa`, `versicolor`, or `virginica`

---

## ☁️ Deployment

- **Frontend**: Deploy to [Vercel](https://vercel.com)
- **Backend**: Deploy to [Render](https://render.com), [Fly.io](https://fly.io), or [Railway](https://railway.app)

> Update the API URL in `frontend/pages/index.tsx` when deployed.

---

## 🙋‍♂️ Author

Made with 💻 by [@Omkar2240](https://github.com/Omkar2240)
