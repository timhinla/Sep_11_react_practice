import React from "react";
import "./shortestDay.css";

export class ShortestDay extends React.Component {
  render() {
    return (
      <div className="shortestDayLabel myFlexItem">
        <h2 className="h2SD">Shortest Day</h2>
        {this.props.planets.map((thumb, i) => {
          return (
            <div key={thumb.idNum}>
              <img src={thumb.url} className="thumbPics" alt={thumb.name} />
              <div>{thumb.name}</div>
              <div className="thumbLabel">{thumb.dayLength} hours</div>
            </div>
          );
        })}
      </div>
    );
  }
}
