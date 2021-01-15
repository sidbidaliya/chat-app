import React from 'react';
import { Button, Modal } from 'rsuite';
import { useModalState } from '../../../misc/custom-hooks';
import ProfileAvatar from '../../dashboard/ProfileAvatar';

const ProfileInfoBtnModal = ({ profile, ...btnProps }) => {
  const { isOpen, open, close } = useModalState();
  const shortName = profile.name.split(' ')[0];

  const { name, createdAt, avatar } = profile;

  const memberSince = new Date(createdAt).toLocaleDateString();

  return (
    <>
      <Button {...btnProps} onClick={open}>
        {shortName}
      </Button>
      <Modal show={isOpen} onHide={close}>
        <Modal.Header>
          <Modal.Title>{shortName} profile</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <ProfileAvatar
            name={name}
            src={avatar}
            className="height-200 width-200 img-fullsize font-huge"
          />
          <h4 className="mt-2">{name}</h4>
          <p>Member Since {memberSince}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button block onClick={close} appearance="primary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProfileInfoBtnModal;
