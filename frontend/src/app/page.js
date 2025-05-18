"use client";

import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getAllProducts } from "../services/productService";
import Link from "next/link";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((data) => setProducts(data))
      .catch(console.error);
  }, []);

  return (
    <main className="p-6 max-w-6xl mx-auto flex h-screen items-center justify-center">
      <div className="grid-cols-3">
        <h1 className="text-8xl font-bold mb-6 text-center">
        E-commercE
        </h1>

      <h1 className="text-3xl font-bold mb-6 text-center">
        Lista de productos
      </h1>

      <div className="mb-6 text-center">
        <Link href="/add-product">
          <button
            className="
            bg-blue-700
            hover:bg-blue-600
            text-white px-4 py-2 
             shadow"
          >
            Añadir producto
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      </div>

    </main>
  );
}
