class LoremIpsumDirective {
  constructor () {
    'ngInject';

    let directive = {
      restrict: 'E',
      templateUrl: 'app/components/lorem-ipsum/ipsum.html',
      scope: {
          creationDate: '='
      },
      controller: IpsumController,
      controllerAs: 'ipsum',
      bindToController: true
    };

    return directive;
  }
}

class IpsumController {
  constructor () {
    'ngInject';

  }
}

export default LoremIpsumDirective;