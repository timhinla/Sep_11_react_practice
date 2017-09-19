import React from "react";
import "./smallPlanets.css";

export class SmallPlanets extends React.Component {
  render() {
    return (
      <div className="thumbContainer">
        {this.props.allPlanets.map((thumb, i) => {
          return (
            <div key={thumb.idNum}>
              <img src={thumb.url} className="thumbPics" alt={thumb.name}/>
              <div>{thumb.name}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
