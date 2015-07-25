class NavbarDirective {
  constructor () {
    'ngInject';

    let directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }
}

class NavbarController {
  constructor (moment, $mdSidenav) {
    'ngInject';

    // "this.creation" is avaible by directive option "bindToController: true"
    this.relativeDate = moment(this.creationDate).fromNow();

    this.toggleSidenav = function (navID) {
      $mdSidenav(navID).toggle();
    };

  }
}

export default NavbarDirective;
