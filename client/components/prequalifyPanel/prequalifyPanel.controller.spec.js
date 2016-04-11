'use strict';

describe('PrequalifyCtrl', function() {

  beforeEach(module('ng-gulp-hapi'));
  var $controller;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('$scope.showErrorMessage', function() {
    

    var $scope, controller;

    beforeEach(function() {
      $scope = {};
      controller = $controller('PrequalifyCtrl', { $scope: $scope });
    });

    it('show error message if form is not valid after click submit button', function() {
      
      $scope.submit(false);
      expect($scope.showErrorMessage).toEqual(false);
    });
  });
});