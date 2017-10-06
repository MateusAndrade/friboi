app.controller("VenderGadoController", function($scope ,GadoServiceAPI ){

  $scope.cadastrarGado = function(gado){

    var _gadoPost = angular.copy(gado);

    if(_gadoPost.informacoes === undefined) _gadoPost === "";

    console.log(_gadoPost);

    GadoServiceAPI.cadastrarGado(_gadoPost)
      .then(function (res){
        console.log("Sucesso!")
      })
      .catch(function (err,res){

      });

  }

});
