import React, { useState } from "react";
import type { Item } from "../types";

interface Props {
  item: Item;
  onCancel: () => void;
  onSave: (updatedItem: Item) => void;
}

export const EditItemForm: React.FC<Props> = ({ item, onCancel, onSave }) => {
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description || "");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("El nombre es obligatorio");
      return;
    }
    setError("");
    onSave({ ...item, name, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Editar Item</h3>
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
      <button type="submit">Guardar</button>{" "}
      <button type="button" onClick={onCancel}>
        Cancelar
      </button>
    </form>
  );
};
