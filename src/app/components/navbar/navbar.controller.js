class NavbarController {
  constructor ($mdSidenav) {
    'ngInject';

    this.testMsg = "Hi from NavbarController!";

    this.toggleSidenav = function (navID) {
      $mdSidenav(navID).toggle();
    };
  }
}

export default NavbarController;
