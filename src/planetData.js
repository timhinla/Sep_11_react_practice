export function PlanetData() {
  const data = [
    {
      idNum: 1,
      name: "Mercury",
      distFromSun: 57.9,
      diameter: 4879,
      dayLength: 4222.6,
      url: "https://solarsystem.nasa.gov/images/galleries/PIA15160_br.jpg",
      description: "Little Mercury is the closest planet to the sun."
    },
    {
      idNum: 2,
      name: "Venus",
      distFromSun: 108.2,
      diameter: 12104,
      dayLength: 2802.0,
      url: "https://solarsystem.nasa.gov/docs/venus_clouds_mariner10_lrg.jpg",
      description: "The thick atmosphere of Venus prevents us from seeing the surface of the planet."
    },
    {
      idNum: 3,
      name: "Earth",
      distFromSun: 149.6,
      diameter: 12756,
      dayLength: 24.0,
      url:
        "https://svs.gsfc.nasa.gov/vis/a000000/a002600/a002680/apollo17_earth_print.jpg",
        description: "The blue marble we call home."
    },
    {
      idNum: 4,
      name: "Mars",
      distFromSun: 227.9,
      diameter: 6792,
      dayLength: 24.7,
      url:
        "https://www.nasa.gov/sites/default/files/thumbnails/image/mars_2.jpg",
        description: "The rovers Curiosity and Opportunity have been operating on Mars for many years now."
    },
    {
      idNum: 5,
      name: "Jupiter",
      distFromSun: 778.6,
      diameter: 142984,
      dayLength: 9.9,
      url:
        "https://www.nasa.gov/sites/default/files/thumbnails/image/jupapr3color-jd-170304.png",
        description: "The king of the planets in our solar system is Jupiter."
    },
    {
      idNum: 6,
      name: "Saturn",
      distFromSun: 1433.5,
      diameter: 120536,
      dayLength: 10.7,
      url: "https://saturn.jpl.nasa.gov/internal_resources/628/",
      description: "Is there anything as beautiful in the solar system as Saturn's rings?"
    },
    {
      idNum: 7,
      name: "Uranus",
      distFromSun: 2872.5,
      diameter: 51118,
      dayLength: 17.2,
      url:
        "https://www.nasa.gov/sites/default/files/thumbnails/image/pia18182-uranus-voyager1.png",
        description: "Though you might not be able to tell from this picture, Uranus is tilted about 90 degrees on its axis!"
    },
    {
      idNum: 8,
      name: "Neptune",
      distFromSun: 4495.1,
      diameter: 49528,
      dayLength: 16.1,
      url:
        "https://voyager.jpl.nasa.gov/assets/images/galleries/images-voyager-took/neptune/neptunex.gif",
        description: "The last of the recognized planets in our solar system discovered, Neptune just recently completed its first revolution around the sun since its discovery."
    },
    {
      idNum: 9,
      name: "Pluto",
      distFromSun: 5906.4,
      diameter: 2370,
      dayLength: 153.3,
      url:
        "https://www.nasa.gov/sites/default/files/thumbnails/image/tn-p_lorri_fullframe_color.jpg",
        description: "Distant Pluto is still a planet to many people."
    }
  ];
  return data;
}
