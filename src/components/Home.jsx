import '../styles/Home.css';
import React, { useEffect, useRef, useState } from 'react';
import {
  faArrowLeft,
  faSearch,
  faVirusCovid,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import {
  useDispatch,
  useSelector,
} from 'react-redux';
import GetData from '../redux/Home/HomeAPI';
import Component from './Details';
import { setDetails } from '../redux/Home/HomeSlice';

const Info = ({ confirmed, deaths }) => (
  <div className="Info">
    <h2 className="global">
      GLOBAL (2020 - PRESENT)
    </h2>
    <div className="Info-Wrapper">
      <span className="span">
        <p className="confirmed-text-home">
          CONFIRMED
        </p>
        <p className="confirmed">{confirmed}</p>
      </span>
      <span>
        <p className="deaths-text">DEATHS</p>
        <p className="deaths">{deaths}</p>
      </span>
    </div>
  </div>
);

const Section = ({ country, cases, index }) => {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(setDetails(index));
  }
  return (
    <button
      type="button"
      className="section"
      onClick={() => handleClick()}
    >
      <i className="arrow">
        <i>
          <FontAwesomeIcon icon={faArrowRight} />
        </i>
      </i>
      <p className="country-section-text">{country}</p>
      <p className="cases">{cases}</p>
    </button>
  );
};

const Home = () => {
  const dispatch = useDispatch();
  const { data, state, details } = useSelector(
    (store) => store.Home,
  );
  const [searchData, setSearchData] = useState('');
  const arrowBack = useRef(null);

  useEffect(() => {
    if (data.length < 1) {
      dispatch(GetData());
    }
  }, [dispatch, data]);

  function handleArrowBack() {
    dispatch(setDetails(null));
    arrowBack.current.style.display = 'none';
  }

  let content;

  if (state === 'Success') {
    content = data.rawData
      .slice(0, 700)
      .filter((x) => x.Country_Region.toLowerCase().includes(
        searchData.toLowerCase(),
      ))
      .map((item, index) => (
        <Section
          key={uuidv4()}
          index={index}
          country={
            item.Country_Region === 'US'
              ? `US: ${item.Province_State}`
              : item.Country_Region
          }
          cases={item.Confirmed}
        />
      ));
  }

  if (state === 'Success' && details !== null && arrowBack.current !== null) {
    arrowBack.current.style.display = 'block';
    content = (
      <Component
        date={data.rawData[details].Last_Update}
        country={
          data.rawData[details].Country_Region
        }
        incident={parseFloat(
          data.rawData[details].Incident_Rate,
        ).toFixed(4)}
        cases={data.rawData[details].Confirmed}
        deaths={data.rawData[details].Deaths}
        ratio={parseFloat(
          data.rawData[details]
            .Case_Fatality_Ratio,
        ).toFixed(4)}
      />
    );
  }
  return (
    <div className="home">
      <nav className="navbar">
        <i
          ref={arrowBack}
          role="button"
          tabIndex={0}
          className="goBack"
          onClick={handleArrowBack}
          onKeyDown={handleArrowBack}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </i>
        <p className="covid-19-report">
          <FontAwesomeIcon icon={faVirusCovid} />
          COVID 19 REPORT
        </p>
        <span className="searchBar">
          <input
            type="text"
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
            placeholder="Search Country"
          />
          <i className="search-icon">
            <FontAwesomeIcon icon={faSearch} />
          </i>
        </span>
      </nav>
      <Info
        confirmed={
          state === 'Success'
            ? data.summaryStats.global.confirmed
            : 0
        }
        deaths={
          state === 'Success'
            ? data.summaryStats.global.deaths
            : 0
        }
      />
      <div className="second-row">{content}</div>
    </div>
  );
};

Info.propTypes = {
  confirmed: PropTypes.number.isRequired,
  deaths: PropTypes.number.isRequired,
};

Section.propTypes = {
  country: PropTypes.string.isRequired,
  cases: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
export default Home;
