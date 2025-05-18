"use client";

import { useEffect, useState } from "react";
import {
  getProductById,
  updateProduct,
} from "../../../services/productService";
import { useParams, useRouter } from "next/navigation";

export default function EditProduct() {
  const { id } = useParams(); // obtenemos el ID de la URL
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    available: false,
  });

  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(id);

      setForm({
        name: data.name || "",
        description: data.description || "",
        price: data.price || "",
        available: data.available ?? false,
      });
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    if (name === "price") {
      const priceValue = parseFloat(value);

      if (priceValue < 0) {
        setErrors({...errors, price: "El valor debe ser un número positivo", });
        return;
      } else {
        setErrors({...errors, price: "" ,});
      }
    }

    setForm({ ...form, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProduct(id, form);
      alert("Producto actualizado");
      router.push("/");
    } catch (error) {
      alert("Error al actualizar");
      console.error(error);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto flex h-screen items-center justify-center">
      <form className="grid grid-cols-12 gap-4" onSubmit={handleSubmit}>
        <h2 className="col-span-12 text-center mb-6 font-bold text-4xl">
          Editar producto
        </h2>
        {errors.price && <p className="text-red-400 text-sm col-span-12">- {errors.price}</p>}
        <input
          className="col-span-12 md:col-span-6 border border-gray-400 p-2 rounded"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="col-span-12 md:col-span-6 border border-gray-400 p-2 rounded"
          name="description"
          placeholder="Descripcion"
          value={form.description}
          onChange={handleChange}
          required
        />
        <input
          className="col-span-12 md:col-span-6 border border-gray-400 p-2 rounded"
          name="price"
          type="number"
          placeholder="Precio"
          value={form.price}
          onChange={handleChange}
          required
        />
        <label className="col-span-12 md:col-span-6 gap-2 flex items-center">
          <input
            type="checkbox"
            name="available"
            checked={form.available}
            onChange={handleChange}
            className="w-4"
          />
          Disponible
        </label>
        <button
          className="col-span-12 font-semibold bg-blue-600 p-2 rounded"
          type="submit"
        >
          Actualizar
        </button>
      </form>
    </div>
  );
}
