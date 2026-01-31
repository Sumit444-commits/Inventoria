# 📦 Inventoria

### **A High-Performance, Client-Side Inventory Management & E-Commerce Interface**

Inventoria is a sophisticated, modern web application designed for seamless product management and browsing. Built as a high-fidelity frontend solution, it leverages **React 19** and **Vite** to deliver a lightning-fast user experience. By utilizing local storage for data persistence, Inventoria provides a robust "zero-backend" architecture, making it an ideal template for standalone applications or localized management tools.


[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?logo=vite&style=flat-square)](https://vitejs.dev/)

**🔗 [Explore the Live Demo](https://inventoriaapp.netlify.app/)**

---

### 🚀 Key Features

*   **⚡ Client-Side Data Persistence:** Engineered to operate entirely without a backend, utilizing `localStorage` to manage state across sessions.
*   **🛒 Comprehensive Cart System:** Dynamic shopping cart functionality allowing users to add, remove, and manage items in real-time.
*   **🔍 Dynamic Product Catalog:** Features a detailed product listing and individual item detail views via `react-router-dom` dynamic routing (`/product/:id`).
*   **🔐 Authentication UI Flow:** Pre-configured Login and Registration modules designed for seamless integration with future auth providers.
*   **🎨 Advanced UI Components:** Highly responsive interface built with **Tailwind CSS 4.0**, featuring **Swiper.js** for interactive carousels and **Lucide React** icons.
*   **📢 Real-time Feedback:** Integrated `react-toastify` for instantaneous user notifications on actions like adding items to the cart or logging in.
*   **⌨️ Engaging UX:** Custom `useTypeWriter` hook for dynamic text effects, enhancing the landing page experience.

---

### 🛠 Technology Stack

| Category | Technology | Version |
| :--- | :--- | :--- |
| **Core Framework** | React | `^19.1.0` |
| **Build Tool** | Vite | `^6.3.5` |
| **Styling** | Tailwind CSS | `^4.1.10` |
| **Routing** | React Router DOM | `^7.6.2` |
| **Icons** | Lucide React / React Icons | `^0.518.0` / `^5.5.0` |
| **State/Storage** | Context API & LocalStorage | Native |
| **UI Components** | Swiper / React Toastify | `^11.2.8` / `^11.0.5` |

---

### 📂 Directory Structure

```text
.
├── src/
│   ├── API/                # Local data source (Items.json) acting as the mock backend
│   ├── assets/             # Static project assets (logos, svg)
│   ├── components/         
│   │   ├── Layout/         # Core structural components (AppLayout, Header, Footer)
│   │   └── UI/             # Reusable Atomic components (Button, Card, Input, Loader)
│   ├── context/            # Global State Management (AppContext.jsx)
│   ├── hooks/              # Custom logic (useTypeWriter.jsx)
│   ├── Pages/              # View components (Home, Products, Cart, Auth)
│   ├── App.jsx             # Main router configuration
│   └── main.jsx            # Application entry point & provider wrapping
├── public/                 # Static assets and images
├── tailwind.config.js      # Styling configuration
└── package.json            # Project dependencies and scripts
```

---

### ⚙️ Getting Started

#### **Prerequisites**
- **Node.js:** Ensure you have the latest LTS version installed.
- **Package Manager:** `npm` (comes with Node) or `yarn`.

#### **Installation**

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/Sumit444-commits/Inventoria.git
    cd Inventoria
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Setup:**
    *Note: This project runs locally. Ensure no other service is occupying port 5173.*

4.  **Run Development Server:**
    ```bash
    npm run dev
    ```

5.  **Build for Production:**
    ```bash
    npm run build
    ```

---

### 👤 Author

**Sumit444-commits**
*Principal Developer*

- **GitHub:** [@Sumit444-commits](https://github.com/Sumit444-commits)
- **Portfolio:** [sumitsharma.codes](https://sumitsharma.codes)
- **LinkedIn:** [sumit-sharma-a0b2c7](www.linkedin.com/in/sumit-sharma-a0b2c7)

---

Designed with ❤️ Autome
