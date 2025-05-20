"use client";

import Link from "next/link";
import { deleteProduct } from "../services/productService";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }) {
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm(`¿Eliminar "${product.name}"?`)) return;
    try {
      await deleteProduct(product.id);
      alert("Producto eliminado");
      window.location.reload();
    } catch (err) {
      alert("Error al eliminar");
      console.error(err);
    }
  };

  return (
    <div className=" border border-gray-300 p-4 w-[250px]">
      <h3 className="text-center mb-2 font-bold">{product.name}</h3>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <p
        className={
          product.available
            ? "text-green-400 font-light"
            : "text-red-400 font-light"
        }
      >
        {product.available ? "Disponible" : "No disponible"}
      </p>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <Link href={`/edit-product/${product.id}`}>
          <button className="bg-white hover:bg-blue-500 hover:text-white  px-4 py-2 w-full col-span-1 text-black">
            Editar
          </button>
        </Link>
        <button
          onClick={handleDelete}
          className="bg-rose-600 hover:bg-rose-700  px-4 py-2 w-full col-span-1 text-white"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
