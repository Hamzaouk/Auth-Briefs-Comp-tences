import React from "react";
import AddBrief from "./AddBrief";

const DisplayBrief = ({ briefs, addBrief }) => (
  <div className="p-6 max-w-2xl mx-auto">
    <AddBrief addBrief={addBrief} disableNavigate />
    <h2 className="text-2xl font-bold mb-4 mt-8">Liste des Briefs</h2>
    {briefs.length === 0 ? (
      <p>Aucun brief ajouté.</p>
    ) : (
      <ul className="space-y-4">
        {briefs.map((brief, idx) => (
          <li key={idx} className="border rounded p-4 bg-white shadow">
            <h3 className="text-lg font-semibold">{brief.title}</h3>
            <p>{brief.description}</p>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default DisplayBrief;