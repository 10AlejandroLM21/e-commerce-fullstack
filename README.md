# 🛒 Proyecto E-commerce - Fullstack

Este es un proyecto **fullstack** para la gestión de productos de un e-commerce.  
Incluye un **backend** con Spring Boot y un **frontend** con Next.js (React + Tailwind CSS).

---

## 📁 Estructura del Proyecto

```
mi-proyecto-ecommerce/
├── backend/     # API REST con Spring Boot
├── frontend/    # Interfaz de usuario con Next.js
└── README.md    # Documentación del proyecto
```

---

## 🚀 Requisitos

Asegúrate de tener instalado:

- ✅ Java 17 o superior  
- ✅ Node.js 18 o superior  
- ✅ Git  
- ✅ Navegador web moderno (Chrome, Firefox, Edge, etc.)

---

## ⚙️ Instrucciones de Ejecución

### 🧩 Backend – Spring Boot

📁 Ubicación: `./backend`

#### ▶️ Pasos para ejecutar:

1. Abre una terminal y navega al directorio del backend:

   ```bash
   cd backend
   ```

2. Ejecuta el servidor con Maven Wrapper:

   ```bash
   ./mvnw spring-boot:run
   ```

3. La API estará disponible en:

   ```
   http://localhost:8080
   ```

#### 🛠️ Endpoints principales

| Método | Endpoint              | Descripción                |
|--------|-----------------------|----------------------------|
| GET    | `/api/products`       | Listar productos           |
| GET    | `/api/products/{id}`  | Obtener producto por ID    |
| POST   | `/api/products`       | Crear nuevo producto       |
| PUT    | `/api/products/{id}`  | Actualizar producto        |
| DELETE | `/api/products/{id}`  | Eliminar producto          |

#### 💾 Base de Datos

Este proyecto utiliza **Spring Data JPA** y una base de datos **persistente en AWS RDS (PostgreSQL)** para el entorno de producción.


### 💻 Frontend – Next.js + Tailwind CSS

📁 Ubicación: `./frontend`

#### ▶️ Pasos para ejecutar:

1. Abre una nueva terminal y navega al directorio del frontend:

   ```bash
   cd frontend
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Ejecuta la aplicación:

   ```bash
   npm run dev
   ```

4. El frontend estará disponible en:

   ```
   http://localhost:3000
   ```

---

## 🔗 Conexión Frontend - Backend

Asegúrate de que el frontend haga peticiones a la URL correcta del backend (`http://localhost:8080`).  
Puedes configurar la URL base en un archivo `.env.local` dentro del directorio `frontend`:

```
NEXT_PUBLIC_API_URL=http://localhost:8080/api
```

---

## 🧑‍💻 Autor

Desarrollado por [10AlejandroLM21]  
GitHub: [https://github.com/10AlejandroLM21](https://github.com/10AlejandroLM21)

---
