import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h3>Student Management System</h3>
      <NavLink to="/">Student</NavLink>
      <NavLink to="/add">Add Student</NavLink>
    </nav>
  );
}

export default Navbar;
