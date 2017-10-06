app.controller('ComprarGadoController', function($scope, GadoServiceAPI){

  GadoServiceAPI.consultarTodosGados()
      .then(function(res){
        console.log(res);
      })
      .catch(function(res){

      });

});
