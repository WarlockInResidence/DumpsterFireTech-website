import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Logo from "../assets/Dumpster Fire Tech.png";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img className="nav-logo" src={Logo} alt={"Dumpster Fire Tech logo"} />
        Dumpster Fire Tech
      </Link>
      <ul>
        <CustomLink to="/products">Products</CustomLink>
        <CustomLink to="/customize">Customize</CustomLink>
        <CustomLink to="/pricing">Pricing</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
    </nav>
  );
};

// @ts-ignore
const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};

export { Navbar, CustomLink };
