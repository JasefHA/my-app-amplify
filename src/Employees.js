// Employees.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/normalize.css";
import "./css/bootstrap.min.css";
import { FaAddressBook } from "react-icons/fa";
import "./css/style.css";
import { IoPersonCircleOutline, IoPersonAddOutline } from "react-icons/io5";
import { CiViewList } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Llamada a la API para obtener la lista de empleados
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://3.129.24.254:8000/employees/");
        setEmployees(response.data);

        console.log("Response:", response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="full-box page-content">
      <div class="full-box page-header">
        <h3 class="text-left">
          <FaAddressBook /> Empleados
        </h3>
        <p class="text-justify">
          En el módulo EMPLEADOS usted podrá registrar a los colabores que
          ingresen a planilla de la empresa, para poder tener un seguimiento
          total de su gestión dentro del negocio.
        </p>
      </div>
      <div class="container-fluid">
        <ul class="full-box list-unstyled page-nav-tabs">
          <li>
            <IoPersonAddOutline /> &nbsp; AGREGAR EMPLEADO
          </li>
          <li>
            <CiViewList /> &nbsp; LISTA DE EMPLEADO
          </li>
          <li>
            <FaSearch /> &nbsp; BUSCAR EMPLEADO
          </li>
        </ul>
      </div>

      <div class="container-fluid">
        <div class="table-responsive">
          <table className="table table-dark table-sm">
            <thead>
              <tr className="text-center roboto-medium">
                <th>Name</th>
                <th>Area ID</th>
                <th>Supervisor ID</th>
                <th>Schedule ID</th>
                <th>ACTUALIZAR</th>
                <th>ELIMINAR</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr className="text-center" key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.area_id}</td>
                  <td>{employee.supervisor_id}</td>
                  <td>{employee.schedule_id}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-info"
                      data-toggle="popover"
                      data-trigger="hover"
                      title="Nombre del cliente"
                      data-content="Direccion completa del cliente"
                    >
                      <GrUpdate />
                    </button>
                  </td>
                  <td>
                    <a href="" class="btn btn-success">
                      <MdDelete />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Employees;
