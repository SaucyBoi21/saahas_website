import { Link } from "react-router";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-base/95 backdrop-blur-sm border-b border-surface0">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <ul className="flex items-center justify-center gap-8">
          <li>
            <Link
              to="/"
              className="text-text hover:text-lavender transition-colors duration-200 font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-text hover:text-lavender transition-colors duration-200 font-medium"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="text-text hover:text-lavender transition-colors duration-200 font-medium"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-text hover:text-lavender transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
