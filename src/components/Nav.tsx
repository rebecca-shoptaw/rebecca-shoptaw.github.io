import { useReset } from "../hooks/useReset";
import { NavInfo } from "../data/NavInfo";

const Nav = () => {
  const resetUrl = useReset();

  return (
    <nav id="navbar">
      <div className="nav-content">
        <span>
          <a
            className="welcome-link"
            href="#welcome-section"
            onClick={resetUrl}
          >
            Rebecca Shoptaw
          </a>
        </span>
        <span>
          <div className="nav-links">
            {NavInfo.map((item) => (
              <a className={item.class} href={item.ref} onClick={resetUrl}>
                {item.title}
              </a>
            ))}
          </div>
        </span>
      </div>
    </nav>
  );
};

export default Nav;
