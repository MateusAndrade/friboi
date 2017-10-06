app.controller("VenderGadoController", function($scope ,GadoServiceAPI ){

  $scope.gado = {};
  $scope.gado.descricao = "TOURO BANDIDO";
  $scope.gado.sexo = "M";
  $scope.gado.idade  = 2.5;
  $scope.gado.peso  = 200.05;
  $scope.gado.preco  = 50000.05;
  $scope.gado.urlFoto = "http://www.abc.net.au/news/image/6179300-3x2-340x227.jpg";

  $scope.cadastrarGado = function(gado){

    //copio o objeto do escopo da view para outro para nao atualizar
    var _gadoPost = angular.copy(gado);

    //caso as informacoes adicionais estejam em branco envio ""
    if(_gadoPost.informacoes === undefined) _gadoPost === "";

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
