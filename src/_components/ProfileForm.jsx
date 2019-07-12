import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';

const propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  email: PropTypes.string,
  id: PropTypes.number,
  language: PropTypes.string,
  handleSave: PropTypes.func.isRequired,
  isFormSubmit: PropTypes.func.isRequired,
};

const defaultProps = {
  name: '',
  surname: '',
  email: '',
  id: '',
  language: '',
};

class ProfileForm extends Component {
  componentDidUpdate() {
    if (this.props.isFormSubmit) {
      this.props.handleSave(this.state);
    }
  }

  handleChangeInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { name, surname } = this.props;
    return (
      <Form layout="vertical">
        <Form.Item>
          <Input name="name" defaultValue={name} onChange={this.handleChangeInput} placeholder="Имя" />
        </Form.Item>
        <Form.Item>
          <Input name="surname" defaultValue={surname} onChange={this.handleChangeInput} placeholder="Фамилия" />
        </Form.Item>
      </Form>
    );
  }
}

ProfileForm.propTypes = propTypes;
ProfileForm.defaultProps = defaultProps;

export default ProfileForm;
