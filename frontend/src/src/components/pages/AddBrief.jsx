import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBrief = ({ addBrief, disableNavigate }) => {
  const [title, setTitle] = useState("");
  const [contexteProjet, setContexteProjet] = useState("");
  const [dureeTravail, setDureeTravail] = useState("");
  const [dateLancement, setDateLancement] = useState("");
  const [dateLimite, setDateLimite] = useState("");
  const [derniereCommit, setDerniereCommit] = useState("");
  const [livrables, setLivrables] = useState("");
  const [criteresPerformance, setCriteresPerformance] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addBrief({ 
      title, 
      contexteProjet,
      dureeTravail,
      dateLancement,
      dateLimite,
      derniereCommit,
      livrables,
      criteresPerformance
    });
    if (!disableNavigate) {
      navigate("/display-brief");
    } else {
      setTitle("");
      setContexteProjet("");
      setDureeTravail("");
      setDateLancement("");
      setDateLimite("");
      setDerniereCommit("");
      setLivrables("");
      setCriteresPerformance("");
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
          <label className="block mb-1 font-medium">**Contexte du projet</label>
          <textarea
            className="w-full border rounded p-2"
            value={contexteProjet}
            onChange={e => setContexteProjet(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">**Modalités pédagogiques</label>
          
          <div className="space-y-3 mt-2">
            <div>
              <label className="block mb-1 text-sm font-medium">**Durée de travail</label>
              <input
                className="w-full border rounded p-2"
                value={dureeTravail}
                onChange={e => setDureeTravail(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label className="block mb-1 text-sm font-medium">Date de lancement du brief:</label>
              <input
                type="date"
                className="w-full border rounded p-2"
                value={dateLancement}
                onChange={e => setDateLancement(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label className="block mb-1 text-sm font-medium">Date limite de soumission</label>
              <input
                type="date"
                className="w-full border rounded p-2"
                value={dateLimite}
                onChange={e => setDateLimite(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label className="block mb-1 text-sm font-medium">Dernière commit</label>
              <input
                type="datetime-local"
                className="w-full border rounded p-2"
                value={derniereCommit}
                onChange={e => setDerniereCommit(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">**Livrables</label>
          <textarea
            className="w-full border rounded p-2"
            value={livrables}
            onChange={e => setLivrables(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">**Critères de performance</label>
          <textarea
            className="w-full border rounded p-2"
            value={criteresPerformance}
            onChange={e => setCriteresPerformance(e.target.value)}
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