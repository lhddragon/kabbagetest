'use strict';

angular.module('ng-gulp-hapi')
	.controller('PrequalifyCtrl', function($scope, $http, $state, businessType, dataService, ModalService) {
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
			dataService.prequalify(formData).then(function(result) {
				if (result.data.Qualified) {
					ModalService.showModal({
						templateUrl: '/components/modal/modalSuccess.html',
						controller: function() {
							this.applicant = $scope.firstName + ' ' + $scope.lastName;
							this.qualifiedAmount = result.data.QualifyAmount;
							this.redirectURL = result.data.RedirectUrl;
						},
						controllerAs: "modalSuccess"
					}).then(function(modal) {
						modal.element.modal();
						modal.close.then(function(result) {
						});
					});
				} else {
					ModalService.showModal({
						templateUrl: '/components/modal/modalFail.html'
					}).then(function(modal) {
						modal.element.modal();
						modal.close.then(function(result) {
						});
					});
				}
			});
		};
	});