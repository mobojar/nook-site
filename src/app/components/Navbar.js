"use client"
import '../styles/Home.css'
import Link from "next/link"
import Image from "next/image"
import React, {useState} from 'react';
import EmailModal from '../Modals/EmailModal';
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const [showEmailModal, setShowEmailModal] = useState(false);

  return (
    <>
          <nav className="navbar navbar-expand-lg bg-white shadow-lg fixed-top w-75 mx-auto px-4 p-2">
      <div className="container nav-section ">
        <Link className="navbar-brand" href="/">
          <Image
            src="/images/nook-logo.png"
            alt="nook Logo"
            className="img-fluid logo me-4"
            height={50}
            width={100}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto  mb-lg-0">
            <li className="nav-item fw-bold">
              <Link
                href="/"
                className={`nav-link ${pathname === "/" ? "active" : ""}`}
                style={{ color: pathname === "/" ? "#5E5CE6" : "" }}
              >
                What we do
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === "/AboutUs" ? "active" : ""}`}
                href="/AboutUs"
                style={{ color: pathname === "/AboutUs" ? "#5E5CE6" : "" }}

              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link 
               className={`nav-link ${pathname === "/PrivacyPolicy" ? "active" : ""}`}
                href="/PrivacyPolicy"
                style={{ color: pathname === "/PrivacyPolicy" ? "#5E5CE6" : "" }}
              >
                Privacy Policy
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathname === "/Terms&Conditions" ? "active" : ""}`}
                href="/Terms&Conditions"
                style={{ color: pathname === "/Terms&Conditions" ? "#5E5CE6" : "" }}>
                Terms & Condition
              </Link>
            </li>

            {/* <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-list text-black fw-bolder"></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Terms & conditions
                    </a>
                  </li>
                </ul>
              </li> */}

            {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}

          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <button className="loginBtn d-flex align-items-center" onClick={() => setShowEmailModal(true)}>
              <span className="me-2">Download</span>
              <i className="bi bi-box-arrow-down fs-5"></i>
            </button>
          </ul>
        </div>
      </div>
    </nav>

    {
      showEmailModal && (
        <EmailModal 
        showEmailModal={showEmailModal}
        setShowEmailModal={setShowEmailModal}
        />
      )
    }
    </>

  )
}

