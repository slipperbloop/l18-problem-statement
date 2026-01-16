import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="brand">RP Portal</div>

        <nav className="nav-links">
          <NavLink to="/diplomas" className="nav-link">
            Diplomas
          </NavLink>
          <NavLink to="/register" className="nav-link">
            Register
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
