import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 shadow-md">
      <div className="">
      {/* mx-0 lg:mx-40 */}
        <div className="navbar bg-base-100 ">
          <div className="navbar-start">
            <div className="dropdown">
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li tabIndex={0}>
                  <a className="justify-between">
                    Parent
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  <ul className="p-2"></ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <a className="normal-case text-xl cursor-pointer">
              <img src="https://cutpricebd.com/img/logo.jpg" className="h-20 ml-0 lg:ml-32 md:ml-5 xl:ml-32" alt="" />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1"></ul>
          </div>
          <div className="navbar-end">
            <a className="mr-0 lg:mr-32 xl:mr-32 md:mr-5 font-semibold flex items-center text-green-600 cursor-pointer" ><i class="fa-brands fa-whatsapp text-4xl mr-2 "></i> 01760075031</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
