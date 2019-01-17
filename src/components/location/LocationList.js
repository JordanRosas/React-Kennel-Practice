import React, { Component } from 'react'

export default class LocationList extends Component{
  render() {
    return (
      <section className="locationClass">
        <h1>Locations</h1>
        {
          this.props.locations.map(location =>
            <div key={location.id}>
              <h1>{location.name}</h1>
              {location.address}
            </div>
          )
        }
      </section>
    );
  }
}
// props are being read from the owning component- Kennel.js