/* global malarkey:false, toastr:false, moment:false */
import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';
import MainController from './main/main.controller';
import AboutUsController from './about/about.controller';
import ServicesController from './services/services.controller';
import DoctorsController from './doctors/doctors.controller';
import PrimaryCareController from './primary/care.controller';
import MapController from './map/map.controller';
import VirtualTourController from './virtual/tour.controller';
import GithubContributorService from '../app/components/githubContributor/githubContributor.service';
import WebDevTecService from '../app/components/webDevTec/webDevTec.service';
import NavbarDirective from '../app/components/navbar/navbar.directive';
import NavController from '../app/components/navbar/nav.controller';
import TabsmenuDirective from '../app/components/tabsmenu/tabsmenu.directive';
import LoremIpsumDirective from '../app/components/lorem-ipsum/ipsum.directive';
import FooterDirective from '../app/components/footer/footer.directive';
// import ToolbarController from '../app/components/navbar/toolbar.controller';
import MalarkeyDirective from '../app/components/malarkey/malarkey.directive';

angular.module('metromed', ['ngRoute', 'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial', 'uiGmapgoogle-maps', 'ngMdIcons'])
  .constant('malarkey', malarkey)
  .constant('toastr', toastr)
  .constant('moment', moment)
  .config(config)

  .config(routerConfig)

  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .controller('MainController', MainController)
  .controller('AboutUsController', AboutUsController)
  .controller('ServicesController', ServicesController)
  .controller('DoctorsController', DoctorsController)
  .controller('PrimaryCareController', PrimaryCareController)
  .controller('MapController', MapController)
  .controller('VirtualTourController', VirtualTourController)
  .controller('NavController', NavController)
  .directive('acmeNavbar', () => new NavbarDirective())
  .directive('tabsMenu', () => new TabsmenuDirective())
  .directive('loremIpsum', () => new LoremIpsumDirective())
  .directive('acmeFooter', () => new FooterDirective())
  .directive('acmeMalarkey', () => new MalarkeyDirective(malarkey));