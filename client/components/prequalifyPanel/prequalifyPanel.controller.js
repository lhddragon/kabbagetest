'use strict';

angular.module('ng-gulp-hapi')
    .controller('PrequalifyCtrl', function($scope, $http, $state, businessType, dataService) {
        $scope.validChecked = false;
        $scope.bussinessTypes = businessType;
        $scope.firstName = 'Test';
        $scope.lastName = 'Test';
        $scope.emailAddress = 'test@etailercredit.com';
        $scope.businessName = 'TestCorp';
        $scope.phoneNumber = '8005551234';
        $scope.yearStarted = 2003;
        $scope.estimatedFICO = 699;
        $scope.estimatedAnnualRevenue = 99000;
        $scope.grossPercentageFromCards = 89;
        $scope.typeOfBusiness = 'Accounting';

        $scope.submit = function() {
        	$scope.validChecked = true;
        	// debugger
        	var formData = {
        		firstName: $scope.firstName,
        		lastName: $scope.lastName,
        		emailAddress: $scope.emailAddress,
        		businessName: $scope.businessName,
        		phoneNumber: $scope.phoneNumber,
        		yearStarted: $scope.yearStarted,
        		estimatedFICO: $scope.estimatedFICO,
        		estimatedAnnualRevenue: $scope.estimatedAnnualRevenue,
        		grossPercentageFromCards: $scope.grossPercentageFromCards,
        		typeOfBusiness: $scope.typeOfBusiness
        	};
        	dataService.prequalify(formData).then(function(){
        		console.log('success');
        	});
        };
    });
