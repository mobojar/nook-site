import React from 'react'
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <>

      <footer className="footer">
        <div className="container-footer position-relative">
          <div className="footer-bg-image"></div>
          <hr className="footer-divider" />

          <div className="footer-main">
            <div className="socialIcons">
              <Link
                href="https://x.com/?lang=en"
                target="_blank"
                className="socialIcon"
              >
                <Image
                  src="/images/icon-x.png"
                  alt="X"
                  width={16}
                  height={16}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/"
                target="_blank"
                className="socialIcon"
              >
                <Image
                  src="/images/icon-linkedin.png"
                  alt="LinkedIn"
                  width={16}
                  height={16}
                />
              </Link>
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                className="socialIcon"
              >
                <Image
                  src="/images/icon-facebook.png"
                  alt="Facebook"
                  width={16}
                  height={16}
                />
              </Link>
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                className="socialIcon"
              >
                <Image
                  src="/images/icon-instagram.png"
                  alt="Instagram"
                  width={16}
                  height={16}
                />
              </Link>
              <Link
                href="https://www.youtube.com/"
                target="_blank"
                className="socialIcon"
              >
                <Image
                  src="/images/icon-youtube.png"
                  alt="YouTube"
                  width={16}
                  height={16}
                />
              </Link>
            </div>

            <div className="contactInfo">
              {/* <div className="contactItem">
                <div className="contact-icon rounded-circle">
                  <i className="bi bi-telephone-fill text-dark p-2"></i>
                </div>
                <div className="contact-text">
                  <span>Call</span>
                  <p className="text-black fw-semibold">000-000-0000</p>
                </div>
              </div>

              <div className="contactItem">
                <div className="contact-icon rounded-circle">
                  <i className="bi bi-envelope-fill text-dark p-2"></i>
                </div>
                <div className="contact-text">
                  <span>Email</span>
                  <p className="text-black fw-semibold">Email@nook.com</p>
                </div>
              </div>

              <div className="contactItem">
                <div className="contact-icon rounded-circle">
                  <i className="bi bi-geo-alt-fill text-dark p-2"></i>
                </div>
                <div className="contact-text">
                  <span>Address</span>
                  <p className="text-black fw-semibold">
                    000 Newbury St, 6th Floor,Boston, MA 00000
                  </p>
                </div>
              </div> */}

              <div className="footerLinks">
                <Link href="/PrivacyPolicy" className="text-dark fw-semibold">
                  {" "}
                  <u>Privacy Policy</u>{" "}
                </Link>
                <Link href="/Terms&Conditions" className="text-dark fw-semibold">
                  {" "}
                  <u>Terms & Conditions</u>{" "}
                </Link>
                <Link href="/Cookies" className="text-dark fw-semibold">
                  {" "}
                  <u> Cookies Settings</u>
                </Link>

                <Link href="/DataDeletion" className="text-dark fw-semibold">
                  {" "}
                  <u> Data Deletion</u>
                </Link>
              </div>
            </div>
          </div>

          <hr className="footer-divider" />

          <div className="footerBottom d-flex justify-content-center">
            <p className="text-dark fw-semibold">
              © 2025 nook. All rights reserved.
            </p>

          </div>
        </div>
      </footer>

    </>
  )
}
