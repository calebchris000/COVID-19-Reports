import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Component from '../components/Details';

describe('Ascertain the elements is rendered properly', () => {
  const { container } = render(
    <Component
      date="2023-03-10"
      country="Nigeria"
      incident="833.1222"
      cases="292829"
      deaths="29291"
      ratio="1.9393"
    />,
  );

  it('Should have all the elements', () => {
    const allWrappers = container.getElementsByClassName(
      'span-item',
    );

    const incidentText = container.getElementsByClassName(
      'incident-text',
    )[0];

    const incidentDetails = container.getElementsByClassName(
      'incident-details',
    )[0];

    const confrimedText = container.getElementsByClassName(
      'confirmed-text',
    )[0];

    const confrimedDetails = container.getElementsByClassName(
      'cases-details',
    )[0];

    const deathText = container.getElementsByClassName(
      'death-text',
    )[0];

    const deathDetails = container.getElementsByClassName(
      'deaths-details',
    )[0];
    expect(allWrappers.length).toEqual(4);
    expect(incidentText).toBeInTheDocument();
    expect(incidentDetails).toBeInTheDocument();
    expect(confrimedText).toBeInTheDocument();
    expect(confrimedDetails).toBeInTheDocument();
    expect(deathText).toBeInTheDocument();
    expect(deathDetails).toBeInTheDocument();
  });
});
