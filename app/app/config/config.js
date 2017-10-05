app.config(['$routeProvider','$locationProvider', function( $routeProvider, $locationProvider ){
        $locationProvider.hashPrefix('!');
        $routeProvider
          .when('/comprar',{
              templateUrl : 'app/views/comprar.html',
              controller : 'ComprarGadoController'
          })
          .when('/vender',{
              templateUrl : 'app/views/vender.html',
              controller : 'VenderGadoController'
          })
          .otherwise({
              templateUrl : 'app/views/home.html',
              redirectTo : '/',
              controller : 'MainController'
          });
}]);
