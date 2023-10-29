import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { close, menu } from "../assets";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className="w-full flex items-center py-5 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-95 xxs:h-56"
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <h2 className="flex item-center text-4xl text-erieBlack font-medium font-mova">
            Urnest
          </h2>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-french" : "text-erieBlack"
              } hover:text-taupe text-2xl font-medium font-mova
        uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}
            >
              <ScrollLink
                to={nav.id}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                {nav.title}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div
              className={`bg-flashWhite  absolute 
                top-0 left-0 w-screen h-screen z-10 menu ${
                  toggle ? "menu-open" : "menu-close"
                }`}
            >
              <div className="flex m-3 justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-10 h-10 object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul
                className="list-none flex flex-col gap-4
                items-start justify-end "
              >
                {navLinks.map((navmob) => (
                  <li
                    // id={navmob.id}
                    key={navmob.id}
                    className={`${
                      active === navmob.title
                        ? "text-french"
                        : "text-eerieBlack"
                    } text-7xl font-bold font-arenq 
                      uppercase tracking-wider cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(navmob.title);
                    }}
                  >
                    <a href={`#${navmob.id}`}>{navmob.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-10 h-10 object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
