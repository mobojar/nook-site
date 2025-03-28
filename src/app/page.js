"use client";
import "./styles/Home.css";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { useState } from "react";

export default function Home() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    company: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleEmail = () => {
    const { name, email, contact, company, country } = formData;
  
    // Construct email body
    const emailBody = `${name}%0D%0A${email}%0D%0A${contact}%0D%0A${company}%0D%0A${country}`;
  
    // Gmail compose link
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=Contact@yournook.org&su=Inquiry&body=${emailBody}`;
  
    // Open in new tab
    window.open(gmailUrl, "_blank");
  };
  var settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <div className="row w-100 justify-content-center">
            <div className="col-12 col-lg-9 col-xl-8">
              <div className="d-flex navbar-container shadow-lg px-4 py-4 bg-white">
                <Link href="/" className="logoLink mt-1 ps-3">
                  <Image
                    src="/images/nook-logo.png"
                    alt="nook Logo"
                    className="logo"
                    height={100}
                    width={100}
                  />
                </Link>
                <button
                  className="navbar-toggler ms-auto"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav me-auto ms-5">
                    <li className="nav-item fw-bold">
                      <Link
                        href="#what-we-do"
                        className="nav-link"
                        style={{ color: "#5E5CE6" }}
                      >
                        What we do
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="#contact-us"
                        className="nav-link text-black fw-semibold"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                  <button className="loginBtn d-flex align-items-center">
                    <span className="me-2">Contact Us</span>
                    <i className="bi bi-box-arrow-right fs-5"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero w-100">
        <div className="heroContent">
          <h3 className="heroTitle">
            Find <span className="highlight">peace</span> in your nook.
            <div className="brainIcon">
              <Image
                src="/images/brain-icon.png"
                alt="Brain Icon"
                width={100}
                height={100}
              />
            </div>
          </h3>

          <p className="heroSubtitle">
            A science-based well-being solution to help you navigate life and
            work with confidence and peace.
          </p>
          <Link href="#contact-us">
            <button className="contactBtn">
              <span className="me-2">Contact Us</span>
              <i className="bi bi-box-arrow-right fs-5"></i>
            </button>
          </Link>
        </div>
      </section>

      <section className="bestSelf">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 bestSelf-content p-5">
              <h2 className="sectionTitle">
                Everyone deserves to be{" "}
                <span className="purple">their best self</span> at work and in
                life.
              </h2>
              <div className="sectionText">
                <p>
                  We&apos;ve all tried to improve our well-being. But we know
                  it&apos;s not always as easy as it seems, and we can do with a
                  bit of help, in the comfort of our Nook, our own little corner
                  of the world.
                </p>
                <p>
                  Nook is a science based solution. That&apos;s a given. But we
                  are more than that. We know it&apos;s hard to watch yet
                  another meditation video, and just listening to sleep stories
                  doesn&apos;t help all aspects of our well being. We know, that
                  to improve, you first have to understand. Our focus is on
                  educating you on you. To increase your awareness of yourself
                  in a way, that driving improvements becomes easy.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="image-gallery">
                <div className="gallery-main">
                  <Image
                    src="/images/mountain-hiker.png"
                    alt="Person hiking on mountain"
                    className="gallery-image"
                    width={800}
                    height={600}
                    priority
                  />
                </div>
                <div className="gallery-secondary">
                  <div className="gallery-top">
                    <Image
                      src="/images/beach-meditation.png"
                      alt="Person meditating on beach"
                      className="gallery-image"
                      width={500}
                      height={350}
                    />
                  </div>
                  <div className="gallery-bottom">
                    <Image
                      src="/images/yoga-pose.png"
                      alt="Person in yoga pose"
                      className="gallery-image"
                      width={500}
                      height={350}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customers Section */}

      <section className="customers">
        <div className="container">
          <div className="customerHeading">
            <div className="brainIconSmall">
              <Image
                className="img-fluid"
                src="/images/brain-two-icon.png"
                alt="Brain Icon"
                width={75}
                height={100}
              />
            </div>
            <h2 className="mt-5 fw-bold">Nook customers come from</h2>
          </div>
          <div className="">
            <Slider {...settings}>
              <div className="">
                <Image
                  className="img-fluid"
                  src="/images/amazon-logo.png"
                  alt="Amazon"
                  width={250}
                  height={200}
                />
              </div>
              <div className="">
                <Image
                  className="img-fluid"
                  src="/images/google-logo.png"
                  alt="Google"
                  width={250}
                  height={200}
                />
              </div>
              <div className="">
                <Image
                  className="img-fluid"
                  src="/images/netflix-logo.png"
                  alt="Netflix"
                  width={250}
                  height={200}
                />
              </div>
              <div className="">
                <Image
                  className="img-fluid"
                  src="/images/mckinsey-logo.png"
                  alt="McKinsey"
                  width={250}
                  height={200}
                />
              </div>
              <div className="">
                <Image
                  className="img-fluid"
                  src="/images/nhs-logo.png"
                  alt="NHS"
                  width={250}
                  height={200}
                />
              </div>
              <div className="">
                <Image
                  className="img-fluid"
                  src="/images/cisco-logo.png"
                  alt="Cisco"
                  width={250}
                  height={200}
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-us" className="contact">
        <div className="contact-bg-wrapper">
          <div className="container position-relative">
            <div className="card p-4 border-0 z-1">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <h2 className="contactTitle">
                      Contact us to <span className="purple">get started</span>
                    </h2>
                    <div className="contactForm">
                      <div className="formGroup">
                        <input
                          className="form-control fw-bold"
                           name="name"
                          type="text"
                          placeholder="Name*"
                          onChange={handleChange} 
                          required
                        />
                      </div>
                      <div className="formGroup">
                        <input
                          className="form-control fw-bold"
                          type="email"
                          placeholder="Email*"
                          name="email"
                          onChange={handleChange} 
                          required
                        />
                      </div>
                      <div className="formGroup">
                        <input
                          className="form-control fw-bold"
                          type="tel"
                          placeholder="Contact number*"
                          name="contact"
                          onChange={handleChange} 
                          required
                        />
                      </div>
                      <div className="formGroup">
                        <input
                          className="form-control fw-bold"
                          type="text"
                          placeholder="Company name"
                          name="company"
                          onChange={handleChange} 
                        />
                      </div>
                      <div className="formGroup">
                        <input
                          className="form-control fw-bold"
                          type="text"
                          placeholder="Country"
                          name="country"
                          onChange={handleChange} 
                        />
                      </div>
                      <button
                      onClick={handleEmail}
                     
                        type="submit"
                        className="submitBtn text-decoration-none"
                      >
                        <span className="me-2">Let&apos;s get started</span>
                        <i className="bi bi-box-arrow-right fs-5"></i>
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="contactImage">
                      <Image
                        className="img-fluid"
                        src="/images/reading-woman.png"
                        alt="Woman reading a book"
                        width={600}
                        height={600}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="container position-relative">
          <div className="newsletter-content text-center">
            <h2 className="newsletterTitle  fw-bold">
              <span className="purple">Join our newsletter</span> for <br />{" "}
              tips on well-being.
            </h2>
            <button className="subscribeBtn">
              <span className="me-2">Subscribe </span>
              <i className="bi bi-box-arrow-right fs-5"></i>
            </button>
          </div>
        </div>
      </section>

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
              <div className="contactItem">
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
              </div>
            </div>
          </div>

          <hr className="footer-divider" />

          <div className="footerBottom">
            <p className="text-dark fw-semibold">
              © 2024 nook. All rights reserved.
            </p>
            <div className="footerLinks">
              <Link href="#" className="text-dark fw-semibold">
                {" "}
                <u>Privacy Policy</u>{" "}
              </Link>
              <Link href="#" className="text-dark fw-semibold">
                {" "}
                <u>Terms of Service</u>{" "}
              </Link>
              <Link href="#" className="text-dark fw-semibold">
                {" "}
                <u> Cookies Settings</u>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
