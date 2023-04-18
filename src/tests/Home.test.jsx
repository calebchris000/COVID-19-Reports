import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import Home from '../components/Home';
import '@testing-library/jest-dom/extend-expect';

const initialState = {
  data: {
    summaryStats: {
      global: {
        confirmed: '123435465656',
        deaths: '123435465656',
      },
    },
    rawData: [
      {
        Country_Region: 'Nigeria',
        Confirmed: '23421',
        Province_State: 'Nigeria',
      },
    ],
  },
  state: 'Success',
  detail: null,
};

const store = configureStore({
  reducer: {
    Home: (state = initialState) => state,
  },
});

beforeEach(() => {
  jest.resetModules();
});

describe('Testing Rendering Elements', () => {
  const { container } = render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );

  it('Should have elements in the document', () => {
    const navbar = container.getElementsByClassName(
      'navbar',
    )[0];
    const title = container.getElementsByClassName(
      'searchBar',
    )[0];
    expect(navbar).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});

describe('Testiing imported components', () => {
  it('Should have all imported components element', () => {
    const { container } = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    const global = container.getElementsByClassName(
      'global',
    )[0];

    const deaths = container.getElementsByClassName(
      'deaths',
    )[0];

    const cases = container.getElementsByClassName(
      'cases',
    )[0];

    expect(global).toBeInTheDocument();
    expect(deaths).toBeInTheDocument();
    expect(cases).toBeInTheDocument();
  });
});
