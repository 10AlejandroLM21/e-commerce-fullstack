"use client";

import { useState } from "react";
import { addProduct } from "../../services/productService";
import { useRouter } from "next/navigation";

export default function AddProduct() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    available: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    

  if (name === "price") {
    const numericValue = parseFloat(value);

    if (numericValue < 0) {
      setErrors({...errors,price: "El precio debe ser un número positivo",});
      return;
    } else {
      setErrors({...errors,price: "",});
    }
  }
      setForm({...form,[name]: newValue,});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProduct(form);
      alert("Producto agregado correctamente");
      router.push("/");
    } catch (error) {
      alert("Error al agregar producto");
      console.error(error);
    }
  };

  return (
    <main className="p-6 max-w-6xl mx-auto flex h-screen justify-center items-center">
      
      <form 
        onSubmit={handleSubmit} 
        className="grid grid-cols-12 gap-4"
      >
        <h2 className="col-span-12 text-4xl font-bold mb-6 text-center">
          Agregar producto
        </h2>
        {errors.price && <p className="text-red-600 text-sm col-span-12">- {errors.price}</p>}
        <input
          className="col-span-6 p-1 border border-gray-300 rounded"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="col-span-12 md:col-span-6 p-2 border border-gray-300 rounded"
          name="description"
          placeholder="Descripción corta"
          value={form.description}
          onChange={handleChange}
          required
        />
        <input
          className="col-span-6 p-2 border border-gray-300 rounded"
          name="price"
          type="number"
          placeholder="Precio"
          value={form.price}
          onChange={handleChange}
          required
        />
        

        <label className="col-span-6 flex items-center space-x-2">
          <input
            type="checkbox"
            name="available"
            checked={form.available}
            onChange={handleChange}
            className="w-5 h-5"
          />
          <span>Disponible</span>
        </label>

        <button
          type="submit"
          className="col-span-12 bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
        >
          Guardar
        </button>
      </form>
    </main>
  );
}
