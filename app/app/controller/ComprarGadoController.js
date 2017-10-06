app.controller('ComprarGadoController', function($scope, GadoServiceAPI){

  GadoServiceAPI.consultarTodosGados()
      .then(function(res){
        document.querySelector(".loader").style.display = "none";
        $scope.gados = res.data;
      })
      .catch(function(res){

      });

});
