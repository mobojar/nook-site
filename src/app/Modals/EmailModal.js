import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styles from './EmailModal.module.css'; // Import your CSS module
export default function EmailModal({ showEmailModal, setShowEmailModal }) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleClose = () => setShowEmailModal(false)

  const handleSubmit = () => {
    if (!email || !email.includes("@")) return

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset after showing success message
      setTimeout(() => {
        setEmail("")
        setIsSuccess(false)
        handleClose()
      }, 1500)
    }, 800)
  }


  return (
    <>
      {/* <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                show={showEmailModal}
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>

                    <div className="form-floating-sm mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="emailInput"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal> */}

      <Modal
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        show={showEmailModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered

      >
        <div className={styles.modalBackground}></div>

        <Modal.Header className={`border-0 ${styles.modalHeader}`}>
          <button className={styles.closeButton} onClick={handleClose} aria-label="Close">
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
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </Modal.Header>

        <Modal.Body className={styles.modalBody}>
          <div className={styles.iconContainer}>
            <div className={styles.iconCircle}>
              {/* <svg
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
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg> */}
                 <i className="bi bi-google-play fs-2"></i>
            </div>
          </div>

          {/* <h3 className={styles.modalTitle}>Email</h3> */}

          <p className={styles.modalDescription}>
            You&apos;ll be notified once the apps are live on the App Store and Play Store.
          </p>

          <div className={styles.formGroup}>
            <div className={`form-floating ${styles.inputWrapper}`}>
              <input
                type="email"
                className={`form-control ${styles.emailInput}`}
                id="emailInput"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="emailInput" className={styles.inputLabel}>
                Email
              </label>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer className={`border-0 ${styles.modalFooter}`}>
          <Button
            className={`${styles.submitButton} ${isSuccess ? styles.successButton : ""}`}
            onClick={handleSubmit}
            disabled={isSubmitting || isSuccess || !email}
          >
            {isSubmitting ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                <span>processing...</span>
              </>
            ) : isSuccess ? (
              <>
                <span>Notified !</span>
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
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </>
            ) : (
              <>
                <span>Notify</span>
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
          </Button>

          <Button variant='link' className={`btn-link-custom bg-light w-100 `} onClick={handleClose}>
            No thanks
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
