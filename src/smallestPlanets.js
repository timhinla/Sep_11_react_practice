import React from "react";
import "./smallestPlanets.css";

export class SmallestPlanets extends React.Component {
  render() {
    return (
      <div className="smallestPlanetLabel myFlexItem">
        <h2 className="h2SP">Smallest Planets</h2>
        {this.props.planets.map((thumb, i) => {
          return (
            <div key={thumb.idNum}>
              <img src={thumb.url} className="thumbPics" alt={thumb.name} />
              <div>{thumb.name}</div>
              <div className="thumbLabel">{thumb.diameter} km</div>
            </div>
          );
        })}
      </div>
    );
  }
}
