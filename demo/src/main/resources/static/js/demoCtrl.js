var app = angular.module('auccApp', []);
app.controller('rfidCtrl', ['$scope', '$http', function ($scope, $http) {



    $scope.rb_seleted = {};
    $scope.rb_seleted.value = "99";

    $scope.a = '';
    $scope.b = '';

    $scope.valResult = '';
    $scope.txtResult = '';

    $scope.err = 0;
    $scope.txtErrMsg = '';

    $scope.onChecked = function () {
        
        $scope.err = 0;
        $scope.txtErrMsg = '';

        // $scope.txtResult = '';
        console.log($scope.rb_seleted.value);

        // if ( $scope.b == 0 ){
        //     if ($scope.rb_seleted.value == '/') {
        //         $scope.err = 1;
        //         $scope.txtErrMsg = 'Error: divide by zero'
        //     }
        // }
        if ( $scope.a == '' || $scope.b == '')  {
            $scope.err = 1;
            $scope.txtErrMsg = 'Please input value';
        }
        else {
            switch ($scope.rb_seleted.value) {
                case '+':
                    $scope.valResult = $scope.a + $scope.b;
                    $scope.txtResult = $scope.a + '  ' + $scope.rb_seleted.value + ' ' + $scope.b + ' is ' + $scope.valResult;
                    break;
                case '-':
                    $scope.valResult = $scope.a - $scope.b;
                    $scope.txtResult = $scope.a + '  ' + $scope.rb_seleted.value + ' ' + $scope.b + ' is ' + $scope.valResult;
                    break;
                case '*':
                    $scope.valResult = $scope.a * $scope.b;
                    $scope.txtResult = $scope.a + '  ' + $scope.rb_seleted.value + ' ' + $scope.b + ' is ' + $scope.valResult;
                    break;
                case '/':
                    if ($scope.b == '0') {
                        $scope.err = 1;
                        $scope.txtErrMsg = 'Error: divide by zero'
                    }
                    else {

                        $scope.valResult = $scope.a / $scope.b;
                        $scope.txtResult = $scope.a + '  ' + $scope.rb_seleted.value + ' ' + $scope.b + ' is ' + $scope.valResult;
                    }
                    break;
            }

            
        }
        
        
    }
    
    $scope.onChecked();

    // $scope.onItemChange = function(){
    //     console.log(" Value is : ", $scope.rb_seleted );
    //  }


    // $scope.test = "mar";

    // $scope.v_deposit = '';

    // $scope.c_hide = function (val) {

    //     $scope.v_deposit = val
    // }

    // $scope.deposit = function (val) {
    //     var url = "https://jsonplaceholder.typicode.com/todos/1";
    //     $http.get(url).then(function (response) {
    //         console.log(response.data);
    //     });
    // }
    // $scope.withdraw = function (val) {
    //     // console.log("all");
    //     var url = "http://localhost:8080/hello";
    //     // var url = "http://localhost:8080/all";
    //     $http.get(url).then(function (response) {

    //         console.log("hello");

    //         console.log(response.data);
    //     }).catch(function(error){
    //         console.log(error);


    //      });
    // }

    // $scope.all_test = function() {
    //     console.log("all");
    //     var url = "http://localhost:8080/all";
    //     $http.get(url).then(function (response) {
    //         console.log(response.data);
    //         $scope.test = response.data;
    //     }).catch(function(error){
    //         console.log(error);
    //      });
    // }
    // // $scope.getRFIDNo = function () {
    // //         var url = "/rest/getRFIDNo";
    // //         $http.get(url).then(function (response) {
    // //             $scope.rfidNo = response.data;
    // //             console.log($scope.rfidNo);
    // //         });
    // //     };

    // // $scope.getRFIDNo();

}]);