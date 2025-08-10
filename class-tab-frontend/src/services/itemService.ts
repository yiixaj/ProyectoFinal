import type { Item } from "../types";


const API_URL = import.meta.env.VITE_API_URL;

export async function fetchItems(): Promise<Item[]> {
  const response = await fetch(`${API_URL}/items`);
  if (!response.ok) {
    throw new Error("Error fetching items");
  }
  return response.json();
}

export async function createItem(item: Item): Promise<Item> {
  const response = await fetch(`${API_URL}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    throw new Error("Error creating item");
  }
  return response.json();
}

// Puedes agregar más funciones para update, delete cuando quieras

export async function deleteItem(id: number): Promise<void> {
  const response = await fetch(`${API_URL}/items/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Error eliminando item");
  }
}

export async function updateItem(id: number, item: Item): Promise<Item> {
  const response = await fetch(`${API_URL}/items/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    throw new Error("Error actualizando item");
  }
  return response.json();
}

