function config ($logProvider, toastr, $mdThemingProvider, uiGmapGoogleMapApiProvider) {
	'ngInject';
	// Enable log
	$logProvider.debugEnabled(true);

	// Extend the light-blue theme with a few different colors
	var metromedBluePalette = $mdThemingProvider.extendPalette('cyan', {
		// By default, shades 500, 300 800 and A100 are used for primary and warn intentions, 
		// while 400, 300, 800 and A100 are used for accent.
		// '500': '2cbfd9'
		// 56cce1
		// 2ca6d9
		// 1b90da
	});

	// Register the new color palette map with the name metromedBlue
  $mdThemingProvider.definePalette('metromed-blue', metromedBluePalette);

  // Use that theme for the primary intentions
	$mdThemingProvider.theme('default')
							// .dark()
							// .primaryPalette('metromed-blue')
							.primaryPalette('cyan')
							// .primaryPalette('light-blue')
							// .primaryPalette('blue')
							.accentPalette('purple')
							.warnPalette('pink');
							// #9C27B0

	/* Default theme
			primary - indigo palette
			accent - pink palette
			warn - red palette
			background - grey palette (note that white is in this palette)
	*/

	/* Palettes
			red
			pink
			purple
			deep-purple
			indigo
			blue
			light-blue
			cyan
			teal
			green
			light-green
			lime
			yellow
			amber
			orange
			deep-orange
			brown
			grey
			blue-grey
	*/

	/* Theming in angular material uses classes to apply an intention group to a given component. 
		 Most components in Angular Material support intention classes as expected, including:

			md-button
			md-checkbox
			md-progress-circular
			md-progress-linear
			md-radio-button
			md-slider
			md-switch
			md-tabs
			md-text-float
			md-toolbar
	*/


	uiGmapGoogleMapApiProvider.configure({
		//    key: 'your api key',
		v: '3.17',
		libraries: 'weather,geometry,visualization'
	});


	// Set options third-party lib
	toastr.options.timeOut = 3000;
	toastr.options.positionClass = 'toast-top-right';
	toastr.options.preventDuplicates = true;
	toastr.options.progressBar = true;
}

export default config;
