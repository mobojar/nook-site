import "./subscribeModal.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { BellIcon, XIcon, SendIcon } from "lucide-react";

const SubscibeModal = ({ showSubscribeModal, setShowSubscribeModal }) => {
  const handleClose = () => setShowSubscribeModal(false);

    const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = () => {
    if (!email) return

    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      setTimeout(() => {
        setEmail("")
        setIsSuccess(false)
        handleClose()
      }, 1500)
    }, 800)
  }
  return (
    <>

<Modal
      show={showSubscribeModal}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
      className="subscribe-modal"
    >
      <div className="modal-background"></div>
      <Modal.Header className="border-0 pb-0">
        <button className="btn-close-custom" onClick={handleClose} aria-label="Close">
          <XIcon size={20} />
        </button>
      </Modal.Header>
      <Modal.Body className="pt-0 pb-4 px-4">
        <div className="text-center mb-4">
          <div className="icon-circle mb-3">
            <BellIcon size={28} className="bell-icon" />
          </div>
          <Modal.Title className="fw-bold mb-2">Join our newsletter 🎉</Modal.Title>
          <p className="text-muted">Get tips on well-being and find peace in your nook</p>
        </div>

        <div className="subscription-form">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="emailInput"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="emailInput">Email address</label>
          </div>

          <div className="d-grid gap-2">
            <Button
              className={`btn-subscribe ${isSuccess ? "btn-success" : ""}`}
              onClick={handleSubmit}
              disabled={isSubmitting || isSuccess}
            >
              {isSubmitting ? (
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              ) : isSuccess ? (
                <>
                  <span className="me-2">Subscribed</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-check-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <SendIcon size={16} className="ms-2" />
                </>
              )}
            </Button>

            <Button variant="link" className="btn-link-custom bg-light" onClick={handleClose}>
              No thanks
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
    </>
  );
};

export default SubscibeModal;
