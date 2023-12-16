// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./css/normalize.css";
import "./css/style.css";
import avatar from "./images/avatar.png";
import { FaHome } from "react-icons/fa";
import { IoPersonCircleOutline, IoPersonAddOutline } from "react-icons/io5";
import { FaNetworkWired } from "react-icons/fa";

function Navbar() {
  return (
    <section className="full-box nav-lateral">
      <div className="full-box nav-lateral-bg show-nav-lateral"></div>
      <div className="full-box nav-lateral-content">
        <figure className="full-box nav-lateral-avatar">
          <i className="far fa-times-circle show-nav-lateral"></i>
          <img src={avatar} className="img-fluid" alt="Avatar" />
          <figcaption className="roboto-medium text-center">
            Carlos Alfaro <br />
            <small className="roboto-condensed-light">
              Gerente de Recursos Humanos
            </small>
          </figcaption>
        </figure>
        <div className="full-box nav-lateral-bar"></div>
        <nav className="full-box nav-lateral-menu">
          <ul>
            <li>
              <Link to="/">
                <FaHome /> &nbsp; Inicio
              </Link>
            </li>
            <li>
              <Link to="/Empleados">
                <IoPersonCircleOutline /> &nbsp; Empleados
              </Link>
            </li>
            <li>
              <Link to="/Areas">
                <FaNetworkWired /> &nbsp; Areas
              </Link>
            </li>
            <li>
              <Link to="/Marcaciones">
                <i className="fab fa-dashcube fa-fw"></i> &nbsp; Marcaciones
              </Link>
            </li>
            <li>
              <Link to="/Supervisores">
                <i className="fab fa-dashcube fa-fw"></i> &nbsp; Supervisores
              </Link>
            </li>
            <li>
              <Link to="/Reportes">
                <i className="fab fa-dashcube fa-fw"></i> &nbsp; Reportes
              </Link>
            </li>
            <li>
              <Link to="/Planilla">
                <i className="fab fa-dashcube fa-fw"></i> &nbsp; Planilla
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Navbar;
