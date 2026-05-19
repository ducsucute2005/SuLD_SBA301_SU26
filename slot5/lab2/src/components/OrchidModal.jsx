import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function OrchidModal({ show, handleClose, orchid }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{orchid ? orchid.orchidName : ""}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {orchid ? (
          <div>
            <img
              src={orchid.image}
              alt={orchid.orchidName}
              style={{
                width: "100%",
              }}
            />

            <p className="mt-3">{orchid.description}</p>

            <p>
              <strong>Category:</strong> {orchid.category}
            </p>

            <p>
              <strong>Special:</strong> {orchid.isSpecial ? "Yes" : "No"}
            </p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
