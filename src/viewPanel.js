import React from "react";
import "./viewPanel.css";

export class ViewPanel extends React.Component {
  render() {
    const { url, name, description } = this.props.bigPicture;

    return (
      <div className="viewPanelContainer">
        <img src={url} className="view-Panel-Image" />
        <div>{name}</div>
        <div>{description}</div>
      </div>
    );
  }
}
