# 🌿 Paradise Nursery - Plant E-Commerce Application

**Paradise Nursery** is an interactive e-commerce Single Page Application (SPA) designed for indoor plant enthusiasts. Built with **React** and **Redux Toolkit**, this project serves as the final capstone deliverable for the **Developing Front-End Apps with React** course, offered by **IBM** on **Coursera**.

---

## 📌 Project Overview

The application allows users to seamlessly explore houseplant collections, learn about the company, and manage a dynamic shopping cart in real time. Key highlights include:

- **Landing Page & Branding:** A clean welcome interface highlighting the company's mission with an intuitive *"Get Started"* call-to-action.
- **Corporate Info (`AboutUs`):** A dedicated component detailing Paradise Nursery's story and commitment to plant lovers.
- **Categorized Product Catalog (`ProductList`):** Features multiple categories (Air Purifying, Aromatic, and Succulents) with at least 6 unique plants per category, displaying images, descriptions, and unit prices.
- **Global State Management (`CartSlice`):** Powered by Redux Toolkit to track items, prevent duplicate additions, and calculate real-time item counts in the navigation bar.
- **Interactive Shopping Cart (`CartItem`):** Provides dynamic subtotal and grand total calculations, quantity adjustments (`+` / `-`), item removal, and a *"Continue Shopping"* navigation flow.


# 🌿 Paradise Nursery - Aplicación de Comercio Electrónico de Plantas

Bienvenido al repositorio oficial de **Paradise Nursery**, una aplicación web interactiva desarrollada con **React** y **Redux Toolkit** diseñada para brindar una experiencia de compra fluida e intuitiva de plantas de interior.

---

## 🎓 Contexto del Curso

Este repositorio contiene la solución completa para el proyecto final del programa educacional de IBM en Coursera:
- **Curso:** Desarrollo de aplicaciones frontales con React
- **Ofrecido por:** IBM (vía Coursera)
- **Objetivo:** Aplicar conceptos avanzados de desarrollo Frontend en React, gestión de estado global con Redux Toolkit, diseño de componentes interactivos y flujo de datos unidireccional.

## 📋 Descripción del Proyecto

Paradise Nursery es una tienda en línea enfocada en la venta de plantas purificadoras, aromáticas y suculentas. La aplicación está estructurada como una *Single Page Application* (SPA) que permite a los usuarios:
1. Explora la filosofía de la empresa a través de la sección **Acerca de Nosotros**.
2. Navegar por un catálogo de productos organizado por categorías.
3. Agregar plantas al carrito de compras con actualización en tiempo real de la interfaz.
4. Administrar los artículos del carrito (modificar cantidades, eliminar productos y ver totales/subtotales calculados dinámicamente).

---

## 🚀 Características Principales

- **Página de Inicio (Landing Page):** Diseño visual atractivo con imagen de fondo, resumen de la empresa y botón de llamada a la acción *"Comenzar"*.
- **Gestión de Estado Global (Redux Toolkit):** Manejo centralizado del estado del carrito mediante `CartSlice`, asegurando la sincronización de datos entre componentes.
- **Catálogo Organizado:** Muestra plantas clasificadas en 3 categorías diferentes (Purificadoras, Aromáticas y Suculentas) con nombres, imágenes, descripciones y precios.
- **Interacción Dinámica:**
  - Desactivación de botones *"Agregar al Carrito"* una vez que un producto ha sido añadido.
  - Contador dinámico en la barra de navegación que muestra la cantidad total de artículos agregados.
- **Carrito de Compras Interactivo:**
  - Muestra subtotales por artículo y total general del carrito.
  - Botones `+` y `-` para ajustar las cantidades de cada planta.
  - Opción para eliminar artículos del carrito.
  - Botón de navegación para regresar al catálogo *"Continuar Comprando"*.

---

## 🛠️ Tecnologías Utilizadas

- **React** (Componentes funcionales y Hooks como `useState`).
- **Redux Toolkit** & **React-Redux** (`createSlice`, `useDispatch`, `useSelector`).
- **JavaScript (ES6+)** / **JSX**.
- **CSS3** (Estilos adaptativos y diseño responsive).

---

## 📂 Estructura del Proyecto

```text
src/
├── components/
│   ├── AboutUs.jsx       # Componente con información corporativa y detalles de la empresa
│   ├── CartItem.jsx      # Vista del carrito de compras (gestión de cantidades, subtotales y eliminación)
│   └── ProductList.jsx   # Catálogo de plantas agrupado por categorías, barra de navegación e interactividad
├── CartSlice.jsx         # Porción (Slice) de Redux Toolkit para gestionar las acciones del carrito (agregar, eliminar, actualizar)
├── App.jsx               # Componente principal que controla la vista de bienvenida (Landing Page) y el acceso a la tienda
├── App.css               # Estilos globales y diseño de la imagen de fondo de la página de inicio
└── main.jsx / index.js   # Punto de entrada de la aplicación React