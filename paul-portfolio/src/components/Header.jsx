import { useLocation } from "react-router-dom";
import githubLogo from "../assets/github-mark-white.png";
import gmailLogo from "../assets/gmail-logo.png";
import linkedinLogo from "../assets/linkedin-logo.png";
import instagramLogo from "../assets/instagram-logo.png";
import xLogo from "../assets/x-logo.png";

export const Header = () => {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg audiowide-regular">
      <div className="container-fluid">
        <div>
          <a className="nav-link red-glow logo" href="/">
            PS
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav w-35 justify-content-around">
            <li className="nav-item">
              <a
                className={
                  location.pathname === "/work"
                    ? "nav-link red-glow"
                    : "nav-link"
                }
                href="/work"
              >
                Work
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  location.pathname === "/resume"
                    ? "nav-link red-glow"
                    : "nav-link"
                }
                href="/resume"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav justify-content-between">
          <li className="nav-item">
            <a
              target="_blank"
              className="nav-link icon"
              href="https://github.com/pauldsherrill"
            >
              <img src={githubLogo} alt="Github Logo" width="30" height="30" />
            </a>
          </li>
          <li className="nav-item">
            <a
              target="_blank"
              className="nav-link icon"
              href="mailto:sherrillpaul21@gmail.com"
            >
              <img src={gmailLogo} alt="Gmail Logo" width="30" height="30" />
            </a>
          </li>
          <li className="nav-item">
            <a
              target="_blank"
              className="nav-link icon"
              href="https://www.linkedin.com/in/paul-sherrill-167154231"
            >
              <img
                src={linkedinLogo}
                alt="LinkedIn Logo"
                width="30"
                height="30"
              />
            </a>
          </li>
          <li className="nav-item">
            <a
              target="_blank"
              className="nav-link icon"
              href="https://www.instagram.com/pauldsherrill/"
            >
              <img
                src={instagramLogo}
                alt="Instagram Logo"
                width="30"
                height="30"
              />
            </a>
          </li>
          <li className="nav-item">
            <a
              target="_blank"
              className="nav-link icon"
              href="https://x.com/PaulSherrill12"
            >
              <img src={xLogo} alt="X Logo" width="30" height="30" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
