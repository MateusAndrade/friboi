app.controller('ComprarGadoController', function($scope, GadoServiceAPI){

  GadoServiceAPI.consultarTodosGados()
      .then(function(res){
        document.querySelector(".loader").style.display = "none";
        $scope.gados = res.data;
      })
      .catch(function(res){

      });

  $scope.filtroSexo = function(gado){
      if($scope.pesquisa.sexo == 'F' && gado.sexo == 'F'){
        return true;
      } else if($scope.pesquisa.sexo == 'F' && gado.sexo == 'M'){
        return false;
      }

      if($scope.pesquisa.sexo == 'M' && gado.sexo == 'M'){
        return true;
      } else if($scope.pesquisa.sexo == 'M' && gado.sexo == 'F'){
        return false;
      }
      if($scope.pesquisa.sexo == null) return true;
  }

  $scope.limparFiltro = function(){
    delete $scope.pesquisa;
  }

});
