import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

export function Navigation() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/contact", label: "Contact" },
  ];

  // Catppuccin Mocha colors: mauve (#cba6f7) -> lavender (#b4befe)
  const backgroundColor = scrolled
    ? "rgba(180, 190, 254, 0.1)" // lavender
    : "rgba(203, 166, 247, 0.08)"; // mauve

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-surface1 shadow-lg transition-colors duration-300"
      style={{ backgroundColor }}
    >
      <div className="max-w-5xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200"
          >
            <img 
              src="/catppuccin-logo.svg" 
              alt="Catppuccin Logo" 
              className="w-8 h-8"
            />
          </Link>

          {/* Navigation Links */}
          <ul className="flex items-center justify-center gap-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={`relative text-base font-semibold transition-all duration-200 group ${
                      isActive
                        ? "text-lavender"
                        : "text-subtext1 hover:text-text"
                    }`}
                  >
                    {item.label}
                    {/* Active indicator */}
                    {isActive && (
                      <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-lavender to-blue rounded-full"></span>
                    )}
                    {/* Hover indicator */}
                    {!isActive && (
                      <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-lavender/50 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Spacer for balance */}
          <div className="w-8"></div>
        </div>
      </div>
    </nav>
  );
}
