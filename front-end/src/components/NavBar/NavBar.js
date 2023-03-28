import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="shadow p-2 mb-5 bg-body rounded d-flex justify-content-between">
        <h6 className="mt-2 mx-5">
          LOGO
        </h6>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              User
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
