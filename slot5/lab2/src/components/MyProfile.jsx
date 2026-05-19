import style from "./MyProfile.module.css";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import {OrchidsData} from "../data/Orchid";
export default function MyProfile() {
  return (
    <>
      <Container className="mt-4">
        <h1 className="text-center mb-4">List Orchids</h1>

        <Row>
          {OrchidsData.map((profile) => (
            <Col md={4} className="mb-4" key={profile.id}>
              <Card className={style.card}>
                <Card.Img
                  variant="top"
                  src={profile.image}
                  className={style.cardImg}
                />

                <Card.Body>
                  <Card.Title className={style.cardTitle}>
                    {profile.orchidName}
                  </Card.Title>

                  <Card.Text className={style.cardText}>
                    Category: {profile.category}
                  </Card.Text>

                  <Card.Text className={style.cardText}>
                    Special: {profile.isSpecial ? "Yes" : "No"}
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
