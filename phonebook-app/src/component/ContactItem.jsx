import React from "react";
import { Row, Col } from "react-bootstrap";

export default function ContactItem() {
  return (
    <Row>
      <Col lg={2}>
        <img
          width={50}
          src="https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
          alt="user-img"
        />
      </Col>
      <Col lg={10}>
        <div>TOM</div>
        <div>1234557677</div>
      </Col>
    </Row>
  );
}
