class MainController {
	constructor () {
		'ngInject';

		// Create list of font-icon names with color overrides
		var iconData = [
			{name: 'icon-home'        , color: "#777" },
			{name: 'icon-user-plus'   , color: "rgb(89, 226, 168)" },
			{name: 'icon-google-plus2', color: "#A00" },
			{name: 'icon-youtube4'    , color:"#00A" },
			// Use theming to color the font-icon
			{name: 'icon-settings'    , color:"#A00", theme:"md-warn md-hue-5"}
		];

		// Create a set of sizes...
		this.sizes = [
			{size:48,padding:10},
			{size:36,padding:6},
			{size:21,padding:2},
			{size:12,padding:0}
		];

		this.fonts = [].concat(iconData);
	}
}

export default MainController;