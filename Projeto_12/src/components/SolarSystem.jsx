import React, { Component } from 'react';
import './project.css';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <section data-testid="solar-system">
        <div className="container">
          <Title headline="Planetas" />
        </div>
        <div className="flex-container">
          {
            planets.map(({ name, image }) => (
              <PlanetCard key={ name } planetName={ name } planetImage={ image } />
            ))
          }
        </div>
      </section>
    );
  }
}

export default SolarSystem;
