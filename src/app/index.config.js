function config ($logProvider, toastr, $mdThemingProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  // Update the theme colors to use themes on font-icons
  $mdThemingProvider.theme('default')
        .primaryPalette("red")
        .accentPalette('green')
        .warnPalette('blue');

  // Set options third-party lib
  toastr.options.timeOut = 3000;
  toastr.options.positionClass = 'toast-top-right';
  toastr.options.preventDuplicates = true;
  toastr.options.progressBar = true;
}

export default config;
