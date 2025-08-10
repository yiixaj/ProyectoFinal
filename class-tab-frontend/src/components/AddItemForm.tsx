import React, { useState } from "react";
import type { Item } from "../types";
import { createItem } from "../services/itemService";

interface Props {
  onAdd: (item: Item) => void;
}

export const AddItemForm: React.FC<Props> = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("El nombre es obligatorio");
      return;
    }
    setError("");
    try {
      const newItem = await createItem({ name, description });
      onAdd(newItem);
      setName("");
      setDescription("");
    } catch {
      setError("Error al crear el item");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Agregar nuevo Item</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <label>Nombre: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Descripción: </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Agregar</button>
    </form>
  );
};
