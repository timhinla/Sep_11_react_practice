import React from "react";
import "./longestDay.css";

export class LongestDay extends React.Component {
  render() {
    return (
      <div className="longestDayLabel myFlexItem2">
        <h2 className="h2LD">Longest Day</h2>
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
