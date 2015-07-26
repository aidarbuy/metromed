class TabsmenuDirective {
  constructor () {
    'ngInject';

    let directive = {
      restrict: 'E',
      templateUrl: 'app/components/tabsmenu/tabsmenu.html',
      scope: {
          creationDate: '='
      },
      controller: TabsmenuController,
      controllerAs: 'tabsmenu',
      bindToController: true
    };

    return directive;
  }
}

class TabsmenuController {
  constructor () {
    'ngInject';

  }
}

export default TabsmenuDirective;