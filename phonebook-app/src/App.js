import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./component/ContactForm";
import ContactList from "./component/ContactList";

// 화면구성
// 1. 왼쪽에는 연락처 등록하는 폼과 오른쪽에는 연락처 리스트와 search창이 있다.
// 2. 리스트에 유저이름과 전화번호를 추가할 수 있다.
// 3. 리스트에 아이템이 총 몇 개인지 또는 검색결과가 몇개인지 보인다.
// 4. 사용자가 유저를 이름으로 검색해서 찾을 수 있다.
function App() {
  return (
    <div className="App">
      <h1 className="title">연락처</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
