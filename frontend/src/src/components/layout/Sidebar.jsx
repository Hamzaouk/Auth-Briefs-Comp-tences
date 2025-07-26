import React from 'react';
import { useAuth } from '../auth/AuthContext';
import { 
  Home, 
  FileText, 
  Award, 
  Users, 
  Settings, 
  LogOut,
  X,
  User,
  ChevronRight
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
  const { user, logout } = useAuth();

  const menuItems = [
    { icon: Home, label: 'Accueil', path: '/', roles: ['APPRENANT', 'FORMATEUR', 'ADMIN'] },
    { icon: FileText, label: 'Consulter les briefs', path: '/display-brief', roles: ['APPRENANT', 'FORMATEUR', 'ADMIN'] },
    { icon: FileText, label: 'Ajouter un brief', path: '/add-brief', roles: ['FORMATEUR', 'ADMIN'] },
    { icon: Award, label: 'Compétences', path: '/competences', roles: ['APPRENANT', 'FORMATEUR', 'ADMIN'] },
    { icon: Users, label: 'Utilisateurs', path: '/users', roles: ['ADMIN'] },
    { icon: Settings, label: 'Paramètres', path: '/settings', roles: ['FORMATEUR', 'ADMIN'] }
  ];

  const filteredMenuItems = menuItems.filter(item => 
    user && item.roles.includes(user.role)
  );

  const getRoleColor = (role) => {
    switch(role) {
      case 'ADMIN': return 'bg-red-500';
      case 'FORMATEUR': return 'bg-blue-500';
      case 'APPRENANT': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={onClose}
        />
      )}
      
      <div className={`
        fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 
        backdrop-blur-xl border-r border-slate-700/50 text-white transform transition-all duration-300 ease-out z-50
        ${isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:inset-0 lg:shadow-none
      `}>
        {/* Header */}
        <div className="relative p-6 border-b border-slate-700/50">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">4</span>
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                404.js
              </h2>
            </div>
            <button 
              onClick={onClose}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-700/50 transition-all duration-200 hover:scale-105"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* User Profile */}
        {user && (
          <div className="p-6 border-b border-slate-700/50">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-700/30 to-slate-600/30 rounded-xl"></div>
              <div className="relative p-4 rounded-xl backdrop-blur-sm">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg ring-2 ring-slate-600/50">
                      <User size={20} className="text-white" />
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getRoleColor(user.role)} rounded-full border-2 border-slate-800`}></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-white truncate text-lg">{user.username}</p>
                    <div className="flex items-center space-x-2">
                      <span className={`inline-block w-2 h-2 ${getRoleColor(user.role)} rounded-full`}></span>
                      <p className="text-sm text-slate-300 capitalize">{user.role.toLowerCase()}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 p-6">
          <div className="space-y-2">
            {filteredMenuItems.map((item, index) => (
              <div key={item.path} className="group">
                <NavLink to={item.path} className={({ isActive }) =>
                  `w-full flex items-center justify-between p-4 rounded-xl hover:bg-gradient-to-r hover:from-slate-700/50 hover:to-slate-600/50 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg relative overflow-hidden ${isActive ? 'bg-gradient-to-r from-blue-700/30 to-purple-700/30' : ''}`
                }>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all duration-300"></div>
                  <div className="relative flex items-center space-x-4">
                    <div className="p-2 rounded-lg bg-slate-700/50 group-hover:bg-slate-600/50 transition-colors duration-200">
                      <item.icon size={20} className="text-slate-300 group-hover:text-white transition-colors duration-200" />
                    </div>
                    <span className="font-medium text-slate-200 group-hover:text-white transition-colors duration-200">
                      {item.label}
                    </span>
                  </div>
                  <ChevronRight size={16} className="text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-200 opacity-0 group-hover:opacity-100" />
                </NavLink>
              </div>
            ))}
          </div>
        </nav>

        {/* Logout */}
        {user && (
          <div className="p-6 border-t border-slate-700/50">
            <button 
              onClick={logout}
              className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-gradient-to-r hover:from-red-600/20 hover:to-red-500/20 transition-all duration-300 transform hover:scale-[1.02] group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 to-red-500/0 group-hover:from-red-600/10 group-hover:to-red-500/10 transition-all duration-300"></div>
              <div className="relative flex items-center space-x-4">
                <div className="p-2 rounded-lg bg-red-600/20 group-hover:bg-red-600/30 transition-colors duration-200">
                  <LogOut size={20} className="text-red-400 group-hover:text-red-300 transition-colors duration-200" />
                </div>
                <span className="font-medium text-red-400 group-hover:text-red-300 transition-colors duration-200">
                  Déconnexion
                </span>
              </div>
              <ChevronRight size={16} className="text-red-400 group-hover:text-red-300 group-hover:translate-x-1 transition-all duration-200 opacity-0 group-hover:opacity-100" />
            </button>
          </div>
        )}

        {/* Decorative bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none"></div>
      </div>
    </>
  );
};

export default Sidebar;