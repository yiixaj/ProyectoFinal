import React, { useEffect, useState } from 'react';
import "./ItemsPage.css";

import type { Item } from "../types";
import { fetchItems, deleteItem, updateItem } from "../services/itemService";
import { AddItemForm } from "../components/AddItemForm";
import { EditItemForm } from "../components/EditItemForm";

export const ItemsPage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [editingItem, setEditingItem] = useState<Item | null>(null);

  const loadItems = () => {
    setLoading(true);
    fetchItems()
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error cargando items");
        setLoading(false);
      });
  };

  useEffect(() => {
    loadItems();
  }, []);

  const handleAddItem = (newItem: Item) => {
    setItems((prev) => [...prev, newItem]);
  };

  const handleDelete = async (id: number | undefined) => {
    if (!id) return;
    if (!window.confirm("¿Seguro que quieres eliminar este item?")) return;
    try {
      await deleteItem(id);
      setItems((prev) => prev.filter((item) => item.id !== id));
    } catch {
      alert("Error eliminando item");
    }
  };

  const handleEdit = (item: Item) => {
    setEditingItem(item);
  };

  const handleCancelEdit = () => {
    setEditingItem(null);
  };

  const handleSaveEdit = async (updatedItem: Item) => {
    if (!updatedItem.id) return;
    try {
      const saved = await updateItem(updatedItem.id, updatedItem);
      setItems((prev) =>
        prev.map((item) => (item.id === saved.id ? saved : item))
      );
      setEditingItem(null);
    } catch {
      alert("Error actualizando item");
    }
  };

  if (loading) return (
    <div className="app-wrapper">
      <p className="loading">Cargando...</p>
    </div>
  );
  if (error) return (
    <div className="app-wrapper">
      <p className="error">{error}</p>
    </div>
  );

  return (
    <div className="app-wrapper">
      <div className="items-container">
        <h2 className="page-title">Lista de Items</h2>
        <AddItemForm onAdd={handleAddItem} />

        {editingItem && (
          <EditItemForm
            item={editingItem}
            onCancel={handleCancelEdit}
            onSave={handleSaveEdit}
          />
        )}

        {items.length === 0 ? (
          <p className="no-items">No hay items</p>
        ) : (
          <ul className="items-list">
            {items.map((item) => (
              <li key={item.id} className="item-card">
                <div className="item-content">
                  <span className="item-name">{item.name}</span>
                  <span className="item-separator">:</span>
                  <span className="item-description">{item.description}</span>
                </div>
                <div className="item-buttons">
                  <button className="btn edit-btn" onClick={() => handleEdit(item)}>
                    Editar
                  </button>
                  <button className="btn delete-btn" onClick={() => handleDelete(item.id)}>
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};