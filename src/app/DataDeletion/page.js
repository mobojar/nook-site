"use client"
import { useState } from "react"
import Link from "next/link"
import styles from "./css/dataDeletion.module.css"

export default function DataDeletionRequest() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setEmail("")
      setMessage("")
    }, 1500)
  }

  return (
    <div className={styles.deletionContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className={styles.heroTitle}>
                Data <span className={styles.highlight}>Deletion</span> Request
              </h1>
              <p className={styles.heroSubtitle}>We respect your privacy and right to control your data</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className={styles.contentCard}>
                <div className={styles.infoSection}>
                  <div className={styles.iconContainer}>
                    <div className={styles.iconCircle}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="9" y1="15" x2="15" y2="15"></line>
                      </svg>
                    </div>
                  </div>

                  <div className={`${styles.infoText}`}>
                    <p>
                      To ensure the safety and privacy of your data, we offer a streamlined process for requesting its
                      removal from our servers. To initiate the deletion process, kindly send an email from your
                      registered email address to our dedicated email inbox at{" "}
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@yournook.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.emailLink}
                      >
                        contact@yournook.org
                      </a>{" "}
                      Upon based on your request, our team will thoroughly examine the provided details and proceed with
                      necessary actions in adherence to our privacy policies and legal obligations.
                    </p>

                    <div className={styles.signatureSection}>
                      <p>Sincerely,</p>
                      <p className={styles.teamSignature}>The Nook Team</p>
                    </div>
                  </div>
                </div>

                {/* <div className={styles.divider}></div>

                <div className={styles.formSection}>
                  <h2 className={styles.formTitle}>Request Data Deletion</h2>
                  <p className={styles.formDescription}>
                    You can also use the form below to submit your data deletion request directly.
                  </p>

                  {isSuccess ? (
                    <div className={styles.successMessage}>
                      <div className={styles.successIcon}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <h3 className={styles.successTitle}>Request Submitted</h3>
                      <p className={styles.successText}>
                        We&apos;ve received your data deletion request. Our team will review it and contact you within 5
                        business days.
                      </p>
                      <button className={styles.newRequestButton} onClick={() => setIsSuccess(false)}>
                        Submit Another Request
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className={styles.deletionForm}>
                      <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.formLabel}>
                          Your Registered Email <span className={styles.required}>*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          className={`form-control ${styles.formInput}`}
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor="message" className={styles.formLabel}>
                          Additional Information
                        </label>
                        <textarea
                          id="message"
                          className={`form-control ${styles.formTextarea}`}
                          placeholder="Please provide any additional details about your request"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows="4"
                        ></textarea>
                      </div>

                      <div className={styles.formGroup}>
                        <div className={styles.privacyConsent}>
                          <p>
                            By submitting this form, you confirm that you want to delete your data from our systems in
                            accordance with our{" "}
                            <Link href="/privacy-policy" className={styles.policyLink}>
                              Privacy Policy
                            </Link>
                            .
                          </p>
                        </div>
                      </div>

                      <button type="submit" className={styles.submitButton} disabled={!email || isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            <span>Processing...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Deletion Request</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="ms-2"
                            >
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                              <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className={styles.contactCard}>
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <h2 className={styles.contactTitle}>Contact Us</h2>
                    <p className={styles.contactText}>
                      If you have any questions about the data deletion process, please do not hesitate to reach out to
                      our support team.
                    </p>
                  </div>
                  <div className="col-md-4 text-md-end mt-3 mt-md-0">
                    <a    href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@yournook.org"
                        target="_blank"
                        rel="noopener noreferrer" className={styles.contactButton}>
                      Email Support
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ms-2"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
