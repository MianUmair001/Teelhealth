import { Row, Col, Card, Form, Input, Button, message } from "antd";
import './Login.scss';
import Logo from '../../../assets/images/persivia-logo.png';
import LoginGraphic from '../../../assets/images/provider-login.svg';
function Login() {

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <div className="ant-container">
        <Row align="middle" className="th-midbox">
          <Col md={12}>
            <h1 className="h1">Welcome to</h1>
            <img src={Logo} width={140} /> <span className="logo-tagline">Telehealth</span>
            <br /><br />
            <div className="th-card-wrapper">
              <p>Sign in to your account</p>
              <Card className="th-card">
                <Form onFinish={onFinish} onFinishFailed={onFinishFailed} layout="vertical" autoComplete="off" className="th-form">
                  <span className="general-error" style={{ color: "#E05A5A", fontWeight: "600", marginBottom: "10px", display: "block" }}>Login unsuccessful. Invalid username or password.</span>
                  <Form.Item validateStatus="error"
                    rules={[
                      {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                      },
                      {
                        required: true,
                        message: 'Please input your E-mail!',
                      },
                    ]} name="username" label="Username">
                    <Input placeholder="John Doe" />
                  </Form.Item>
                  <Form.Item rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]} name="password" label="Password">
                    <Input.Password placeholder="******" />
                  </Form.Item>
                  <Form.Item>
                    <Button htmlType="submit" className="w-100">
                      Sign In
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </div>

          </Col>
          <Col md={12}>
            <img className="login-graphic" src={LoginGraphic} style={{ maxWidth: "100%" }} />
          </Col>
        </Row>
      </div>
    </>
  );
}
export default Login