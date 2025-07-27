import React, { useState } from "react";
import AddBrief from "./AddBrief";

const DisplayBrief = ({ briefs, addBrief }) => {
  const [expandedBrief, setExpandedBrief] = useState(null);

  const toggleExpanded = (index) => {
    setExpandedBrief(expandedBrief === index ? null : index);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <AddBrief addBrief={addBrief} disableNavigate />
      <h2 className="text-2xl font-bold mb-6 mt-8">Liste des Briefs</h2>
      {briefs.length === 0 ? (
        <p className="text-gray-500 text-center py-8">Aucun brief ajouté.</p>
      ) : (
        <div className="grid gap-6">
          {briefs.map((brief, idx) => (
            <div key={idx} className="border rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
              {/* Card Header - Always Visible */}
              <div 
                className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleExpanded(idx)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">{brief.title}</h3>
                      {brief.creatorLogo && (
                        <img 
                          src={brief.creatorLogo} 
                          alt="Creator logo" 
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      )}
                      {brief.creatorName && (
                        <span className="text-sm text-gray-600 font-medium">
                          par {brief.creatorName}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 line-clamp-2">{brief.contexteProjet}</p>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <svg 
                      className={`w-5 h-5 text-gray-400 transform transition-transform ${
                        expandedBrief === idx ? 'rotate-180' : ''
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Expanded Details */}
              {expandedBrief === idx && (
                <div className="px-6 pb-6 border-t bg-gray-50">
                  <div className="pt-4 space-y-6">
                    
                    {/* Contexte du projet */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">**Contexte du projet</h4>
                      <p className="text-gray-700 whitespace-pre-wrap">{brief.contexteProjet}</p>
                    </div>

                    {/* Modalités pédagogiques */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">**Modalités pédagogiques</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {brief.dureeTravail && (
                          <div className="bg-white p-3 rounded border">
                            <span className="font-medium text-gray-600">**Durée de travail:</span>
                            <p className="text-gray-800">{brief.dureeTravail}</p>
                          </div>
                        )}
                        {brief.dateLancement && (
                          <div className="bg-white p-3 rounded border">
                            <span className="font-medium text-gray-600">Date de lancement:</span>
                            <p className="text-gray-800">{new Date(brief.dateLancement).toLocaleDateString('fr-FR')}</p>
                          </div>
                        )}
                        {brief.dateLimite && (
                          <div className="bg-white p-3 rounded border">
                            <span className="font-medium text-gray-600">Date limite:</span>
                            <p className="text-gray-800">{new Date(brief.dateLimite).toLocaleDateString('fr-FR')}</p>
                          </div>
                        )}
                        {brief.derniereCommit && (
                          <div className="bg-white p-3 rounded border">
                            <span className="font-medium text-gray-600">Dernière commit:</span>
                            <p className="text-gray-800">{new Date(brief.derniereCommit).toLocaleString('fr-FR')}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Livrables */}
                    {brief.livrables && (
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">**Livrables</h4>
                        <div className="bg-white p-4 rounded border">
                          <p className="text-gray-700 whitespace-pre-wrap">{brief.livrables}</p>
                        </div>
                      </div>
                    )}

                    {/* Critères de performance */}
                    {brief.criteresPerformance && (
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">**Critères de performance</h4>
                        <div className="bg-white p-4 rounded border">
                          <p className="text-gray-700 whitespace-pre-wrap">{brief.criteresPerformance}</p>
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayBrief;