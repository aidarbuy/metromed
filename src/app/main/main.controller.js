class MainController {
	constructor () {
		'ngInject';

      this.isOpen = false;

      this.demo = {
        isOpen: false,
        count: 0,
        selectedAlignment: 'md-right'
      };
	}
}

export default MainController;