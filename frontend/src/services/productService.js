const API_URL = "http://localhost:8080/products";

export async function getAllProducts() {
  const res = await fetch(API_URL);
  return await res.json();
}

export async function addProduct(product) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw errorData;
  }

  return await res.json();
}

export async function getProductById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
}

export async function updateProduct(id, updatedProduct) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedProduct),
  });
  return await res.json();
}

export async function deleteProduct(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
}
