app.controller("MainController", function($scope, GadoServiceAPI){

  GadoServiceAPI.consultaTodosGados({ codigo: 0 })
    .then(function(res){
      $scope.gados = res.data;
    })
    .catch(function(err,res){
      console.log(err,res);
    });

});
