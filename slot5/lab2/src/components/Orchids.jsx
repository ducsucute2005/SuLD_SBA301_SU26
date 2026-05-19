import { useState } from "react";

import { Row, Col, Container, Card, Button } from "react-bootstrap";

import { OrchidsData } from "../data/Orchid";

import OrchidModal from "./OrchidModal";

export default function Orchids() {
  const [show, setShow] = useState(false);

  const [selectedOrchid, setSelectedOrchid] = useState(null);

  function handleClose() {
    setShow(false);
  }

  function handleShow(orchid) {
    setSelectedOrchid(orchid);

    setShow(true);
  }

  return (
    <Container className="mt-4">
      <Row>
        {OrchidsData.map((orchid) => (
          <Col md={3} key={orchid.id}>
            <Card className="mb-4">
              <Card.Img
                variant="top"
                src={orchid.image}
                style={{
                  height: "250px",
                  objectFit: "cover",
                }}
              />

              <Card.Body>
                <Card.Title>{orchid.orchidName}</Card.Title>

                <Card.Text>{orchid.category}</Card.Text>

                <Button variant="primary" onClick={() => handleShow(orchid)}>
                  Detail
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <OrchidModal
        show={show}
        handleClose={handleClose}
        orchid={selectedOrchid}
      />
    </Container>
  );
}
