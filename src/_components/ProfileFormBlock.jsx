import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';

const propTypes = {
  children: PropTypes.node,
  nameForParams: PropTypes.string,
  isVisibleInput: PropTypes.bool,
  value: PropTypes.string,
  title: PropTypes.string,
  handleBlockVisibility: PropTypes.func.isRequired,
};

const defaultProps = {
  children: null,
  nameForParams: '',
  isVisibleInput: false,
  value: '',
  title: '',
};

const ProfileFormBlock = ({
  nameForParams,
  isVisibleInput,
  value,
  title,
  handleBlockVisibility,
  children,
}) => (
  <Form.Item>
    <div className="profile__title" role="presentation" onClick={() => handleBlockVisibility(nameForParams)}>
      {title}
    </div>
    {isVisibleInput
      ? children
      : (
        <div className="profile__value" role="presentation" onClick={() => handleBlockVisibility(nameForParams)}>
          {value || '-'}
        </div>
      )
    }
  </Form.Item>
);

ProfileFormBlock.propTypes = propTypes;
ProfileFormBlock.defaultProps = defaultProps;

export default ProfileFormBlock;
