import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "My Tasks", href: "#tasks" },
    { name: "Analytics", href: "#analytics" },
    { name: "Settings", href: "#settings" },
  ];

  return (
    <header className="bg-gradient-to-r from-[#00C9A7] to-[#005B41] shadow-md sticky top-0 z-50">
      <div className="max-w-8xl mx-3 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-white font-bold text-2xl tracking-wide">ToDoWeb</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-white/80 transition"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#005B41] px-4 pb-4 space-y-3 py-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-white hover:text-white/80"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
