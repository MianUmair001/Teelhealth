import { Button, Modal } from 'antd';
import React, { ComponentProps, useState } from 'react';

const Modals = ({
  modal1Visible, setModal1Visible,
  title,ModalJSX
}: ComponentProps<any>) => {

  return (
    <>
      {/* <Button type="primary" onClick={() => setModal1Visible(true)}>
        Display a modal dialog at 20px to Top
      </Button> */}
      <Modal
        title={title}
        style={{ top: 20 }}
        visible={modal1Visible}
        onOk={() => setModal1Visible(false)}
        onCancel={() => setModal1Visible(false)}
      >
        {ModalJSX}
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};

export default Modals;