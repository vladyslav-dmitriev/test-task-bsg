import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Input,
  Divider,
  Select,
} from 'antd';

import ProfileFormBlock from './ProfileFormBlock';

const { Option } = Select;

const propTypes = {
  section: PropTypes.string.isRequired,
  name: PropTypes.string,
  surname: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  country: PropTypes.string,
  timezone: PropTypes.string,
  language: PropTypes.string,
};

const defaultProps = {
  name: '',
  surname: '',
  email: '',
  phone: '',
  country: '',
  timezone: '',
  language: '',
};

const getInitialState = {
  isVisibleInputFullName: false,
  isVisibleInputEmail: false,
  isVisibleInputPhone: false,
  isVisibleInputCountry: false,
  isVisibleInputTimezone: false,
  isVisibleInputLanguage: false,
};

class ProfileForm extends Component {
  state = {
    ...getInitialState,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.isFormSubmit) {
      nextProps.handleSave(prevState);
      return { ...getInitialState };
    }
    return null;
  }

  handleChangeInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChangeSelect = (name, event) => {
    this.setState({ [event.props.name]: event.props.value });
  };

  handleBlockVisibility = (value) => {
    this.setState({ [`isVisibleInput${value}`]: true });
  };

  render() {
    const {
      section,
      name,
      surname,
      email,
      phone,
      country,
      timezone,
      language,
    } = this.props;

    const {
      isVisibleInputFullName,
      isVisibleInputEmail,
      isVisibleInputPhone,
      isVisibleInputCountry,
      isVisibleInputTimezone,
      isVisibleInputLanguage,
    } = this.state;

    return (
      <Form className="profile__form" layout="vertical">
        {section === 'personal' && (
          <>
            <ProfileFormBlock
              nameForParams="FullName"
              isVisibleInput={isVisibleInputFullName}
              value={`${name} ${surname}`}
              title="Имя и фамилия"
              handleBlockVisibility={this.handleBlockVisibility}
            >
              <Input
                name="name"
                defaultValue={name}
                onChange={this.handleChangeInput}
                placeholder="Имя"
              />
              <Input
                name="surname"
                defaultValue={surname}
                onChange={this.handleChangeInput}
                placeholder="Фамилия"
              />
            </ProfileFormBlock>

            <Divider />
            <ProfileFormBlock
              nameForParams="Email"
              isVisibleInput={isVisibleInputEmail}
              value={email}
              title="E-mail"
              handleBlockVisibility={this.handleBlockVisibility}
            >
              <Input
                name="email"
                defaultValue={email}
                onChange={this.handleChangeInput}
                placeholder="E-mail"
              />
            </ProfileFormBlock>

            <Divider />
            <ProfileFormBlock
              nameForParams="Phone"
              isVisibleInput={isVisibleInputPhone}
              value={phone}
              title="Телефон"
              handleChangeInput={this.handleChangeInput}
              handleBlockVisibility={this.handleBlockVisibility}
            >
              <Input
                name="phone"
                defaultValue={phone}
                onChange={this.handleChangeInput}
                placeholder="Телефон"
              />
            </ProfileFormBlock>
          </>
        )}
        {section === 'location' && (
          <>
            <ProfileFormBlock
              nameForParams="Country"
              isVisibleInput={isVisibleInputCountry}
              value={country}
              title="Страна"
              handleBlockVisibility={this.handleBlockVisibility}
            >
              <Input
                name="country"
                defaultValue={country}
                onChange={this.handleChangeInput}
                placeholder="Страна"
              />
            </ProfileFormBlock>
            <Divider />

            <ProfileFormBlock
              nameForParams="Timezone"
              isVisibleInput={isVisibleInputTimezone}
              value={timezone}
              title="Часовой пояс"
              handleBlockVisibility={this.handleBlockVisibility}
            >
              <Input
                name="timezone"
                defaultValue={timezone}
                onChange={this.handleChangeInput}
                placeholder="Часовой пояс"
              />
            </ProfileFormBlock>
            <Divider />

            <ProfileFormBlock
              nameForParams="Language"
              isVisibleInput={isVisibleInputLanguage}
              value={language}
              title="Язык"
              handleBlockVisibility={this.handleBlockVisibility}
            >
              <Select defaultValue={language} onChange={this.handleChangeSelect}>
                <Option name="language" value="Русский">Русский</Option>
                <Option name="language" value="Английский">Английский</Option>
              </Select>
            </ProfileFormBlock>
          </>
        )}
      </Form>
    );
  }
}

ProfileForm.propTypes = propTypes;
ProfileForm.defaultProps = defaultProps;

export default ProfileForm;
