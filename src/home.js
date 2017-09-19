import React from "react";
import { SmallPlanets } from "./smallPlanets";
import { PlanetData } from "./planetData";
import { LargestPlanets } from "./largestPlanets";
import { SmallestPlanets } from "./smallestPlanets";
import { LongestDay } from "./longestDay";
import { ShortestDay } from "./shortestDay";
import { ViewPanel } from "./viewPanel";
import { sortBy } from "lodash";
import _ from "lodash";
import "./home.css";

const mockThumbnail = {
  idNum: 9,
  name: "Pluto",
  distFromSun: 5906.4,
  diameter: 2370,
  dayLength: 153.3,
  url:
    "https://www.nasa.gov/sites/default/files/thumbnails/image/tn-p_lorri_fullframe_color.jpg",
  description: "Distant Pluto is still a planet to many people."
};

export class Home extends React.Component {
  render() {
    const planetInfo = PlanetData();

    const sortedArray = planetInfo.sort((infoA, infoB) => infoA.diameter - infoB.diameter)
    console.log(sortedArray)

    const sortedArray1 = planetInfo.sort((infoA, infoB) => infoA.name.localeCompare(infoB.name))
    .filter(info=>info.diameter<15000)
    .map(info=>info.name + 'xxx')
    console.log('sortedArray1', sortedArray1)
    console.log('planetinfo', planetInfo)
    
/*
    let large2small = _.orderBy(planetInfo, ["diameter"], ["desc"]).slice(0, 3);
    let small2large = _.orderBy(planetInfo, ["diameter"], ["desc"])
      .slice(6, 9)
      .reverse();
    let long2short = _.orderBy(planetInfo, ["dayLength"], ["desc"]).slice(0, 3);
    let short2long = _.orderBy(planetInfo, ["dayLength"], ["desc"])
      .slice(6, 9)
      .reverse();
*/
    return (
      <div>
        <SmallPlanets allPlanets={planetInfo} />
        <ViewPanel bigPicture={mockThumbnail} />
        <div className="topThree">
          <LargestPlanets planets={sortedArray} />
          <SmallestPlanets planets={sortedArray1} />
          <LongestDay planets={sortedArray} />
          <ShortestDay planets={sortedArray} />
        </div>
      </div>
    );
  }
}
