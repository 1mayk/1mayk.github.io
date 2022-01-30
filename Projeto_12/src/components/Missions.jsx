import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <section data-testid="missions">
        <div className="container segundo">
          <Title headline="Missões" />
        </div>
        <div className="missions-container">
          {
            missions.map(({ name, year, country, destination }) => (
              <MissionCard
                key={ name }
                name={ name }
                year={ year }
                country={ country }
                destination={ destination }
              />
            ))
          }
        </div>
      </section>
    );
  }
}

export default Missions;
