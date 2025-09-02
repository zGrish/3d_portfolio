# 🌐 3D Portfolio Website

> 🚀 A responsive and interactive 3D developer portfolio built using **React**, **Three.js**, and **Tailwind CSS**.

---

## 📌 Features

- 🌍 Interactive 3D Earth model using Three.js and `@react-three/fiber`
- 💼 Smooth scroll sections for About, Work, Skills, and Contact
- 📱 Fully responsive design with TailwindCSS
- 🎨 Dynamic hover effects and animations (Framer Motion)
- 💬 Integrated contact form with EmailJS
- ⚙️ Easy deployment on GitHub Pages

---

## 🖼️ Preview

![Portfolio Preview](./preview.png) <!-- Add a screenshot or screen recording here -->

---

## 🛠️ Tech Stack

| Frontend        | 3D / Animation        | Styling        |
|-----------------|-----------------------|----------------|
| React.js        | Three.js, React Three Fiber | Tailwind CSS |
| Vite            | Drei, Framer Motion   | EmailJS        |

---

## ⚙️ Getting Started

1. **Clone the Repository**
```bash
git clone https://github.com/zGrish/3d_portfolio.git
cd 3d_portfolio
````

2. **Install Dependencies**

```bash
npm install
```

3. **Run the Development Server**

```bash
npm run dev
```

4. **Build for Production**

```bash
npm run build
```

---

## 📤 Deployment (GitHub Pages)

1. In `vite.config.js`, make sure the `base` field matches your repo name:

```js
base: "/3d_portfolio/"
```

2. Build and push:

```bash
npm run build
git add dist
git commit -m "Build"
```

3. Use the [gh-pages](https://www.npmjs.com/package/gh-pages) package to deploy:

```bash
npm install gh-pages --save-dev
npm run deploy
```

OR manually push `/dist` to the `gh-pages` branch.

---

## ✍️ Contact Info

You can reach me via the contact form on the site or through:

* GitHub: [@zGrish](https://github.com/zGrish)
* LinkedIn: [Grishma Nair](https://www.linkedin.com/in/grishma-nair-in/)

---

## 🙏 Acknowledgements

* [EmailJS](https://www.emailjs.com/) — for handling client-side email submission
* [Three.js + React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
