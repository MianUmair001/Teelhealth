import { Modal } from 'antd';
import React, { ComponentProps } from 'react';

const Modals = ({
  modal1Visible, setModal1Visible,
  title, modalJSX, width, className
}: ComponentProps<any>) => {

  return (
    <>
      <Modal
        className={className}
        title={title}
        style={{ top: 20 }}
        visible={modal1Visible}
        onCancel={() => setModal1Visible(false)}
        centered
        footer={null}
        width={width}
        >
        {modalJSX}
      </Modal>
    </>
  );
};

export default Modals;