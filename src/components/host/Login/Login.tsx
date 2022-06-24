import { Row, Col, Card, Form, Input, Button, message } from "antd";
import './Login.scss';
import Logo from '../../../assets/images/persivia-logo.png';
import LoginGraphic from '../../../assets/images/img-login.png';
function Login() {
  return (
    <>
      <div className="ant-container">
        <Row align="middle" className="th-midbox">
          <Col md={12}>
            <h1 className="h1">Welcome <span>to</span></h1>
            <img src={Logo} width={140} /> <span className="logo-tagline">Telehealth</span>
            <br /><br />
            <div className="th-card-wrapper">
              <p>Sign in to your account</p>
              <Card className="th-card">
                <Form layout="vertical" autoComplete="off" className="th-form">
                  <Form.Item name="username" label="Username">
                    <Input placeholder="John Doe" />
                  </Form.Item>
                  <Form.Item name="password" label="Password">
                    <Input placeholder="******" />
                  </Form.Item>
                  <Form.Item>
                    <Button htmlType="button" className="w-100">
                      Sign In
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </div>

          </Col>
          <Col md={12}>
            <img src={LoginGraphic} style={{ maxWidth: "100%" }} />
          </Col>
        </Row>
      </div>
    </>
  );
}
export default Login