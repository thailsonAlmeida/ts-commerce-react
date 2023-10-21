import CartIcon from "../CartIcon";
import AdminIcon from "../../assets/admin.svg";
import * as authService from "../../services/auth-services";
import { useContext } from "react";
import "./styles.css";

import { Link } from "react-router-dom";
import { ContextToken } from "../../utils/context-token";

export default function HeaderClient() {
  const { contextTokenPayload } = useContext(ContextToken);
  return (
    <header className="dsc-header-client">
      <nav className="dsc-container">
        <Link to={"/"}>
          <h1>DSCommerce</h1>
        </Link>
        <div className="dsc-navbar-right">
          <div className="dsc-menu-items-container">
            {
              contextTokenPayload &&
              authService.hasAnyRoles(['ROLE_ADMIN']) &&
              <Link to="/admin">
                <div className="dsc-menu-item">
                  <img src={AdminIcon} alt="Admin" />
                </div>
              </Link>
            }

            <Link to={"/cart"}>
              <div className="dsc-menu-item">
                <CartIcon />
              </div>
            </Link>
          </div>
          <Link to={"/login"}>Entrar</Link>
        </div>
      </nav>
    </header>
  );
}
