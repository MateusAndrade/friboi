app.controller('ComprarGadoController', function($scope, GadoServiceAPI){

  GadoServiceAPI.consultaTodosGados()
      .then(function(res){
        console.log(res);
      })
      .catch(function(res){

      });

});
