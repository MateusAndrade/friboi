app.controller('ComprarGadoController', function($scope, GadoServiceAPI){

  (function main(){
    GadoServiceAPI.consultaTodosGados()
        .then(function(res){
          console.log(res);
        })
        .catch(function(res){

        });
  })();

});
