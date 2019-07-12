import React, { Component } from 'react';
import { Modal, Button } from 'antd';

import ProfileTable from './ProfileTable';
import ProfileForm from './ProfileForm';

class Profile extends Component {
  state = {
    isModalVisible: false,
    isFormSubmit: false,
    id: 28366,
    name: 'Владимир',
    surname: 'Ена',
    email: 'makwild@gmail.com',
    phone: '093 772 16 25',
    country: 'Украина',
    timezone: '',
    language: 'Русский',
    section: '',
  };

  showModal = (section) => {
    this.setState({ isModalVisible: true, section });
  };

  handleFormSubmit = () => {
    this.setState({ isFormSubmit: true });
  };

  handleSave = (newProfileValues) => {
    this.setState(prevState => ({
      ...prevState,
      ...newProfileValues,
      isModalVisible: false,
      isFormSubmit: false,
    }));
  };

  handleModalClose = () => {
    this.setState({ isModalVisible: false });
  };

  renderModalFooter = () => [
    <Button key="back" onClick={this.handleModalClose}>Отменить</Button>,
    <Button key="submit" type="primary" onClick={this.handleFormSubmit}>Сохранить</Button>,
  ];

  render() {
    const {
      isModalVisible,
      isFormSubmit,
      id,
      name,
      surname,
      email,
      phone,
      country,
      timezone,
      language,
      section,
    } = this.state;

    return (
      <div className="profile">
        <ProfileTable
          id={id}
          name={name}
          surname={surname}
          email={email}
          phone={phone}
          language={language}
          showModal={this.showModal}
        />
        <Modal
          title="Редактирование профиля"
          visible={isModalVisible}
          onCancel={this.handleModalClose}
          onOk={this.handleFormSubmit}
          footer={this.renderModalFooter()}
          centered
        >
          <ProfileForm
            name={name}
            surname={surname}
            email={email}
            phone={phone}
            country={country}
            timezone={timezone}
            language={language}
            section={section}
            isFormSubmit={isFormSubmit}
            handleSave={this.handleSave}
          />
        </Modal>
      </div>
    );
  }
}

export default Profile;
