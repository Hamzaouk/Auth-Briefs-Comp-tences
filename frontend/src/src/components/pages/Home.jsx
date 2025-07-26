import React from 'react';
import { useAuth } from '../auth/AuthContext';
import { FileText, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { user } = useAuth();

  const getRoleColor = (role) => {
    switch (role) {
      case 'ADMIN': return 'bg-red-100 text-red-800';
      case 'FORMATEUR': return 'bg-blue-100 text-blue-800';
      case 'APPRENANT': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRoleDescription = (role) => {
    switch (role) {
      case 'ADMIN': return 'Accès complet à la gestion de la plateforme';
      case 'FORMATEUR': return 'Gestion des briefs, compétences et évaluations';
      case 'APPRENANT': return 'Consultation des briefs et soumission des rendus';
      default: return '';
    }
  };

  const mockStats = {
    ADMIN: [
      { label: 'Utilisateurs actifs', value: 142, icon: Users },
      { label: 'Briefs créés', value: 28, icon: FileText },
      { label: 'Compétences', value: 85, icon: Award }
    ],
    FORMATEUR: [
      { label: 'Mes briefs', value: 12, icon: FileText },
      { label: 'Rendus à évaluer', value: 24, icon: Award },
      { label: 'Apprenants suivis', value: 35, icon: Users }
    ],
    APPRENANT: [
      { label: 'Briefs assignés', value: 8, icon: FileText },
      { label: 'Rendus soumis', value: 15, icon: Award },
      { label: 'Compétences acquises', value: 42, icon: Award }
    ]
  };

  const stats = mockStats[user?.role] || [];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Bienvenue, {user?.username} !
        </h1>
        <div className="flex items-center space-x-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRoleColor(user?.role)}`}>
            {user?.role}
          </span>
          <span className="text-gray-600">{getRoleDescription(user?.role)}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <stat.icon className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Actions rapides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="/display-brief" className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <FileText className="h-6 w-6 text-blue-600" />
            <span>Consulter les briefs</span>
          </Link>
          {user?.role === 'ADMIN' && (
            <>
              <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Users className="h-6 w-6 text-blue-600" />
                <span>Gérer les utilisateurs</span>
              </button>
              <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Award className="h-6 w-6 text-purple-600" />
                <span>Gérer les compétences</span>
              </button>
            </>
          )}
          
          {user?.role === 'FORMATEUR' && (
            <>
              <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <FileText className="h-6 w-6 text-green-600" />
                <span>Créer un brief</span>
              </button>
              <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Award className="h-6 w-6 text-orange-600" />
                <span>Évaluer les rendus</span>
              </button>
              <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Users className="h-6 w-6 text-blue-600" />
                <span>Voir les apprenants</span>
              </button>
            </>
          )}
          
          {user?.role === 'APPRENANT' && (
            <>
              
              <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Award className="h-6 w-6 text-green-600" />
                <span>Soumettre un rendu</span>
              </button>
              <button className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Award className="h-6 w-6 text-purple-600" />
                <span>Mes compétences</span>
              </button>
            </>
          )}
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Activité récente</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {user?.role === 'APPRENANT' ? 'Nouveau brief disponible' : 
                   user?.role === 'FORMATEUR' ? 'Nouveau rendu à évaluer' : 
                   'Nouvel utilisateur inscrit'}
                </p>
                <p className="text-xs text-gray-500">Il y a {item} heure{item > 1 ? 's' : ''}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;