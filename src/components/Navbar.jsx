import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className="
        fixed top-[clamp(12px,2vw,24px)] left-1/2 -translate-x-1/2 z-50
        flex items-center justify-center

        h-[clamp(44px,5vw,56px)]
        px-[clamp(20px,4vw,48px)]

        rounded-full
        bg-[rgba(15,15,18,0.65)]
        backdrop-blur-xl
        border border-white/10

        shadow-[0_12px_40px_rgba(0,0,0,0.55)]
        transition-all duration-300 ease-out

        hover:px-[clamp(28px,6vw,72px)]
        hover:shadow-[0_18px_55px_rgba(0,0,0,0.7)]
        hover:scale-[1.04]
      "
    >
      <ul
        className="
          flex items-center
          gap-[clamp(14px,3vw,32px)]
          text-[clamp(12px,1.6vw,15px)]
          font-medium
        "
      >
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;

          return (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`
                  relative
                  px-[clamp(10px,1.8vw,16px)]
                  py-[clamp(6px,1vw,10px)]
                  rounded-full
                  transition-colors duration-200

                  ${
                    isActive
                      ? "text-white bg-gradient-to-r from-blue-500/30 to-purple-500/30"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }
                `}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
