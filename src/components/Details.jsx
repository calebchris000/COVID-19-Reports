import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  faSkull,
  faPeopleGroup,
  faChartSimple,
  faMaskFace,
} from '@fortawesome/free-solid-svg-icons';
import '../styles/Details.css';
import PropTypes from 'prop-types';

const Component = ({
  date,
  country,
  incident,
  cases,
  deaths,
  ratio,
}) => (
  <>
    <h2 className="Country">
      {country}
      {' '}
      (
      {date.slice(0, 10)}
      )
    </h2>
    <span className="span-item">
      <span className="header">
        <i className="icon-wrapper">
          <FontAwesomeIcon icon={faMaskFace} />
        </i>
        <p className="incident-text">INCIDENT</p>
      </span>
      <p className="incident-details">{incident}</p>
    </span>

    <span className="span-item">
      <span className="header">
        <i className="icon-wrapper">
          <FontAwesomeIcon icon={faPeopleGroup} />
        </i>
        <p className="confirmed-text">CONFIRMED</p>
      </span>
      <p className="cases-details">{cases}</p>
    </span>

    <span className="span-item">
      <span className="header">
        <i className="icon-wrapper">
          <FontAwesomeIcon icon={faSkull} />
        </i>
        <p className="death-text">DEATH(S)</p>
      </span>
      <p className="deaths-details">{deaths}</p>
    </span>

    <span className="span-item">
      <span className="header">
        <i className="icon-wrapper">
          <FontAwesomeIcon icon={faChartSimple} />
        </i>
        <p className="ratio-text">RATIO</p>
      </span>
      <p className="ratio-details">{ratio}</p>
    </span>
  </>
);

Component.propTypes = {
  date: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  cases: PropTypes.string.isRequired,
  deaths: PropTypes.string.isRequired,
  ratio: PropTypes.string.isRequired,
  incident: PropTypes.string.isRequired,
};

export default Component;
