import { Row, Col, Card, Form, Select, Input, Button, message, notification } from "antd";
import './PatientLogin.scss';
import Logo from '../../../assets/images/persivia-logo.png';
import LoginGraphic from '../../../assets/images/patient-login.svg';
import Permission1 from '../../../assets/images/permission-1.png';
import Modals from "../../common/Modals/Modals";
import type { NotificationPlacement } from 'antd/lib/notification';
import {
  BorderTopOutlined
} from '@ant-design/icons';
import { useState } from "react";
function PatientLogin() {
  const [modal1Visible, setModal1Visible] = useState(false);
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const { Option } = Select;
  const modalJSX = (
    <>
      <p>Telehealth needs access to your camera and microphone so that other participants can see and hear you. Telehealth will ask you to confirm this decision on each browser and device you use</p>
      <p>When message prompt click allow button. In case of no such message pop up on your browser <a href="">Read More.</a></p>
      <img src={Permission1} style={{ maxWidth: "100%", marginTop: "20px" }} />
    </>

  )

  const openNotification = (placement: NotificationPlacement) => {
    notification.open({
      message: "Permission to access cam/mic was denied. Please allow access to use Telehealth services.",
      duration: 0,
      placement,
      className: "th-alert warning"
    });
  };

  return (
    <>
      <div className="ant-container">
        <Row align="middle" className="th-midbox">
          <Col md={12}>
            <h1 className="h1">Welcome to</h1>
            <img src={Logo} width={140} onClick={() => openNotification('top')} /> <span className="logo-tagline">Telehealth</span>
            <br /><br />
            <div className="th-card-wrapper">
              <p>Please enter your name, select your language preference and click on submit</p>
              <Card className="th-card">
                <Form onFinish={onFinish} onFinishFailed={onFinishFailed} layout="vertical" autoComplete="off" className="th-form">
                  <span className="general-error" style={{ color: "#E05A5A", fontWeight: "600", marginBottom: "10px", display: "block" }}>Login unsuccessful. Invalid username or password.</span>
                  <Form.Item label="Full Name" name="name" rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input placeholder="John Doe" />
                  </Form.Item>
                  <Form.Item className="th-language-select" name="Preferred Language" label="Preferred Language" rules={[{ required: true }]}>
                    <Select placeholder="Default English (US)" allowClear >
                      <Option value="english"><i className="flag en"></i> Default &nbsp; English (US)</Option>
                      <Option value="spanish"><i className="flag es"></i> Spanish</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item>
                    <Button htmlType="submit" className="w-100" onClick={() => setModal1Visible(true)}>Submit</Button>
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
      <Modals className="th-modal warning-modal" setModal1Visible={setModal1Visible} modal1Visible={modal1Visible} title="Allow Telehealth to use your camera & microphone" modalJSX={modalJSX} width={1000} />
    </>
  );
}
export default PatientLogin