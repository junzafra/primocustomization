/**
 * Created by samsan on 8/15/17.
 * This component will insert textsms and its icon into the action list
 */


angular.module('viewCustom')
    .controller('prmActionListAfterCtrl',['$element','$compile','$scope','$timeout','customService',function ($element,$compile,$scope,$timeout, customService) {
        var vm=this;
        var cisv=customService;
        vm.$onInit=function () {
            // insert custom-sms and custom-print tag when it is not in favorite section.
            if(!vm.parentCtrl.displaymode) {
                $timeout(function () {
                    // if holding location is existed, then insert sms text call icon
                    if (vm.parentCtrl.item.delivery) {
                        if(vm.parentCtrl.item.delivery.holding.length > 0) {
                            let textsmsExist = document.getElementById('textsms');
                            // if textsms doesn't exist, insert it.
                            if (!textsmsExist) {
                                let prmActionList = document.getElementsByTagName('prm-action-list')[0];
                                let ul = prmActionList.getElementsByTagName('ul')[0];
                                let li = ul.querySelector('#scrollActionList');
                                if (li) {
                                    let smsTag = document.createElement('custom-sms');
                                    smsTag.setAttribute('parent-ctrl', 'vm.parentCtrl');
                                    li.insertBefore(smsTag, li.childNodes[0]);
                                    $compile(li.children[0])($scope);
                                }
                            }
                        }

                    }


                }, 2000);
            }
        };


    }]);

angular.module('viewCustom')
    .component('prmActionListAfter',{
        bindings:{parentCtrl:'<'},
        controller: 'prmActionListAfterCtrl',
        controllerAs:'vm'
    });

