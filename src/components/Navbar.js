import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">Books</NavLink>
        <NavLink to="Categories">Categories</NavLink>
      </nav>
    </header>
  );
}

export default Header;
