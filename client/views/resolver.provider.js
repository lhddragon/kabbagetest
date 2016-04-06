'use strict';

angular.module('ng-gulp-hapi')
  .provider('appResolver', function AppResolverProvider() {

    this.$get = ['appResolverService', function() {
      return new AppResolverProvider();
    }];

    this.main = {
      businessType: function() {
        // debugger
        return [
          { text: 'Accounting', value: 'Accounting' },
          { text: 'Amusement', value: 'Amusement' },
          { text: 'Auto Repair', value: 'AutoRepair' },
          { text: 'Business Services', value: 'BusinessServices' },
          { text: 'Catering', value: 'Catering' },
          { text: 'Child Care', value: 'ChildCare' },
          { text: 'Computer Services', value: 'ComputerServices' },
          { text: 'Consumer Goods Retail Store', value: 'ConsumerGoodsRetailStore' },
          { text: 'Consumer Goods Online Store', value: 'ConsumerGoodsOnlineStore' },
          { text: 'Consumer Goods Online & Offline', value: 'ConsumerGoodsOnlineAndOffline' },
          { text: 'Construction', value: 'Construction' },
          { text: 'Dentists', value: 'Dentists' },
          { text: 'Dry Cleaning', value: 'DryCleaning' },
          { text: 'Equipment', value: 'Equipment' },
          { text: 'Food Service', value: 'FoodService' },
          { text: 'Grocery', value: 'Grocery' },
          { text: 'Health', value: 'Health' },
          { text: 'HomeRepair', value: 'HomeRepair' },
          { text: 'Hotels', value: 'Hotels' },
          { text: 'Insurance', value: 'Insurance' },
          { text: 'Janitorial', value: 'Janitorial' },
          { text: 'Landscape', value: 'Landscape' },
          { text: 'Optometrists', value: 'Optometrists' },
          { text: 'Physicians', value: 'Physicians' },
          { text: 'Restaurant', value: 'Restaurant' },
          { text: 'Salons', value: 'Salons' },
          { text: 'Taxis', value: 'Taxis' },
          { text: 'Trucking', value: 'Trucking' },
          { text: 'Veterinarians', value: 'Veterinarians' }
        ];
      }
    };

    this.navbar = {
      navItems: ['_', function() {

      }]
    };

  });
