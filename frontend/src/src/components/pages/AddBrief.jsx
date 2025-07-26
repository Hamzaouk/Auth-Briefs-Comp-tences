import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBrief = ({ addBrief, disableNavigate }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addBrief({ title, description });
    if (!disableNavigate) {
      navigate("/display-brief");
    } else {
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Ajouter un Brief</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Titre</label>
          <input
            className="w-full border rounded p-2"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            className="w-full border rounded p-2"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AddBrief;