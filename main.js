import * as storymap from "storymap";

storymap.global.config = {
	debug: false,
	data: "./sample/bruges.geojson",
	path: "./sample/path.json",
	container: "container",
	citycenter: [3.227183, 51.209651],
  spawn: {
    buildings: true,
    ground: false,
    roads: false,
    water: false,
    green: false  
  },
	color_background: 0x7C8892, //62717F
	color_buildings: 0xDADCDF,
  color_ground: 0x7C8892,
  color_roads: 0xffffff,
  color_water: 0x42a5f5,
  color_green: 0x658251,
	grid: { primary: 0x555555, secondary: 0x333333 },
	color_ground: 0x658251,
	opacity_ground: 0.25,
};

storymap.start();
