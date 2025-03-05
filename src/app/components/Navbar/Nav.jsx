import { usePathname } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";

const navLinks = [
  { id: "home", name: "Home"},
  { id: "about", name: "About" },
  { id: "projects", name: "Projects" },
  { id: "skills", name: "Skills" },
  { id: "contact", name: "Contact" },
];

const Nav = () => {
  return (
    <nav className="">
      <ul className="flex gap-x-5 text-white">
        {navLinks.map((link) => {
          return (
            <ScrollLink
              key={link.id}
              to={link.id}
              activeClass="active-menu"
              smooth={true}
              spy={true}
              className="p-1 cursor-pointer uppercase"
            >
              {link.name}
            </ScrollLink>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;