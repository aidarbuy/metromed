class ToolbarController {
  constructor ($mdSidenav) {
    'ngInject';

    this.toggleSidenav = function (navID) {
      $mdSidenav(navID).toggle();
    };

    this.menuItems = [
    	{ name: "Home",
    		icon: "assets/icons/menu.svg" 
    	}, {
    		name: "About Us",
    		icon: "assets/icons/favorite.svg"
    	}, {
    		name: "Services",
    		icon: "assets/icons/more_vert.svg"
    	}, {
    		name: "Doctors",
    		icon: "assets/icons/menu.svg"
    	}, {
    		name: "Primary Care",
    		icon: "assets/icons/favorite.svg"
    	}, {
    		name: "Map",
    		icon: "assets/icons/more_vert.svg"
    	}, {
    		name: "Virtual Tour",
    		icon: "assets/icons/menu.svg"
			}
    ];
  }
}

export default ToolbarController;
