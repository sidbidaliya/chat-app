import React from 'react';
import { Input, Modal } from 'rsuite';
import { useModalState } from '../../../misc/custom-hooks';

const ImageBtnModal = ({ src, fileName }) => {
  const { isOpen, open, close } = useModalState();

  return (
    <>
      <Input
        type="image"
        src={src}
        alt="file"
        onClick={open}
        className="mw-100 mh-100 w-auto"
      />
      <Modal show={isOpen} onHide={close}>
        <Modal.Header>
          <Modal.Title>{fileName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <img src={src} height="100%" width="100%" alt="File" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <a href={src} target="_blank" rel="noopener noreferrer">
            View Original
          </a>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ImageBtnModal;
