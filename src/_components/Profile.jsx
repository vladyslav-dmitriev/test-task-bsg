import React, { Component } from 'react';
import { Modal, Button } from 'antd';

import ProfileForm from './ProfileForm';

class Profile extends Component {
  state = {
    isModalVisible: false,
    name: '',
    surname: '',
    email: '',
    phone: '',
  };

  showModal = () => {
    this.setState({ isModalVisible: true });
  };

  handleSave = () => {
    this.setState({ isModalVisible: false });
  };

  handleCancel = () => {
    this.setState({ isModalVisible: false });
  };

  renderModalFooter = () => [
    <Button key="back" onClick={this.handleCancel}>Cancel</Button>,
    <Button key="submit" type="primary" onClick={this.handleSave}>Save</Button>,
  ];

  render() {
    const {
      name,
      surname,
      email,
      phone,
    } = this.state;

    return (
      <div className="profile">
        <Button type="primary" onClick={this.showModal}>Open Modal</Button>
        <Modal
          title="Edit Profile"
          visible={this.state.isModalVisible}
          onOk={this.handleSave}
          onCancel={this.handleCancel}
          footer={this.renderModalFooter()}
          centered
        >
          <ProfileForm
            name={name}
            surname={surname}
            email={email}
            phone={phone}
          />
        </Modal>
      </div>
    );
  }
}

export default Profile;
