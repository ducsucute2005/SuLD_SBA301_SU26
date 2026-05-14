import style from "./MyProfile.module.css";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import profiles from "../data/Orchid";
export default function MyProfile() {
  return (
    <>
      <Container className="mt-4">
        <h1 className="text-center mb-4">List orchids</h1>

        <Row>
          {profiles.map((profile) => (
            <Col md={4} className="mb-4" key={profile.id}>
              <Card className={style.card}>
                <Card.Img
                  variant="top"
                  src={profile.avatar}
                  className={style.cardImg}
                />

                <Card.Body>
                  <Card.Title className={style.cardTitle}>
                    {profile.name}
                  </Card.Title>

                  <Card.Text className={style.cardText}>
                    Description: {profile.description}
                  </Card.Text>
                  <Button className={style.cardButton}>Detail</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
