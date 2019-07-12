import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Icon } from 'antd';

const propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  email: PropTypes.string,
  id: PropTypes.number,
  language: PropTypes.string,
  showModal: PropTypes.func.isRequired,
};

const defaultProps = {
  name: '',
  surname: '',
  email: '',
  id: '',
  language: '',
};

const ProfileTable = ({
  name,
  surname,
  email,
  id,
  language,
  showModal,
}) => (
  <div className="profile-table">
    <Row className="profile-table__head">
      <Col className="profile-table__col" span={19}>
        <div className="profile-table__person">{`${name} ${surname}`}</div>
        <div className="profile-table__email">{email}</div>
      </Col>
      <Col className="profile-table__col profile-table__col_right" span={5}>
        <div className="profile-table__id">{`ID ${id}`}</div>
        <div className="profile-table__mode">Демо режим</div>
      </Col>
    </Row>
    <div className="profile-table__item" role="presentation" onClick={showModal}>
      <Row>
        <Col className="profile-table__col" span={19}>
          <div className="profile-table__section">Имя, телефон, email</div>
        </Col>
        <Col className="profile-table__col profile-table__col_right" span={5}>
          <Icon type="right" />
        </Col>
      </Row>
    </div>
    <div className="profile-table__item" role="presentation" onClick={showModal}>
      <Row>
        <Col className="profile-table__col" span={19}>
          <div className="profile-table__section">Страна, часовой пояс, язык</div>
        </Col>
        <Col className="profile-table__col profile-table__col_right profile-table__col_multi" span={5}>
          <div className="profile-table__value">{language}</div>
          <Icon type="right" />
        </Col>
      </Row>
    </div>
  </div>
);

ProfileTable.propTypes = propTypes;
ProfileTable.defaultProps = defaultProps;

export default ProfileTable;
