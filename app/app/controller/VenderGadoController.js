app.controller("VenderGadoController", function($scope ,GadoServiceAPI ){

  $scope.cadastrarGado = function(gado){

    //copio o objeto do escopo da view para outro para nao atualizar
    var _gadoPost = angular.copy(gado);

    //caso as informacoes adicionais estejam em branco envio ""
    if(_gadoPost.informacoes === undefined) _gadoPost.informacoes == "";

    //chamo o service para cadastrar gado enviando os valores da view
    GadoServiceAPI.cadastrarGado(_gadoPost)
      .then(function (res){
        $scope.alerta = res;
        delete $scope.gado;
      })
      .catch(function (err,res){
        $scope.alerta = err;
      });

  }
});
