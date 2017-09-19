import React from "react";
import "./largestPlanets.css";

export class LargestPlanets extends React.Component {
  render() {
    return (
      <div className="largestPlanetLabel myFlexItem">
        <h2 className="h2LP">Largest Planets</h2>
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