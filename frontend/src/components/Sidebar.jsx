import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="w-64 bg-gradient-to-b from-indigo-800 to-blue-700 text-white p-6 flex flex-col">
      <div className="mb-10">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto" />
        <div className="text-center mt-4">
          <div className="font-bold text-lg">User</div>
          <div className="text-sm text-indigo-200">user@email.com</div>
          <div className="mt-1 text-xs bg-indigo-900/50 px-2 py-1 rounded-full inline-block">
            ROLE
          </div>
        </div>
      </div>
      <ul className="space-y-2 flex-1">
        <li>
          <Link 
            to="/" 
            className={`flex items-center px-4 py-3 rounded-lg transition-all ${
              isActive("/") 
                ? "bg-white/20 font-semibold" 
                : "hover:bg-white/10"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Dashboard
          </Link>
        </li>
        <li>
          <Link 
            to="/briefs" 
            className={`flex items-center px-4 py-3 rounded-lg transition-all ${
              isActive("/briefs") 
                ? "bg-white/20 font-semibold" 
                : "hover:bg-white/10"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
            </svg>
            Briefs
          </Link>
        </li>
      </ul>
      <div className="pt-6 border-t border-indigo-600/50">
        <div className="text-xs text-indigo-300">Plateforme 404.js • v2.0</div>
      </div>
    </aside>
  );
}