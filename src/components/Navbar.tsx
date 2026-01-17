import { Link, Users, UtensilsCrossed } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'Snacks', icon: UtensilsCrossed },
        { path: '/students', label: 'Students', icon: Users },
    ];

    return (
        <header className="bg-white shadow-md border-b border-orange-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-3">
                        <div className="bg-gradient-to-br from-orange-500 to-yellow-500 p-2 rounded-lg">
                            <UtensilsCrossed className="h-6 w-6 text-white" />
                        </div>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                            School Canteen
                        </h1>
                    </div>
                    <nav className="flex space-x-1">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    data-testid={`nav-${item.label.toLowerCase()}`}
                                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${isActive
                                        ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md'
                                        : 'text-gray-600 hover:bg-orange-50 hover:text-orange-600'
                                        }`}
                                >
                                    <Icon className="h-4 w-4" />
                                    <span>{item.label}</span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </header>
    )
}
