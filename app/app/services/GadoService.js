app.factory("GadoServiceAPI", function($http){

  var _consultaTodosGados = function(){
    return $http.get('https://boi-cea.herokuapp.com/api/consultarTodosGados')
  };

  var _consultaGadoEspecifico = function(params){
    return $http.get('https://boi-cea.herokuapp.com/api/consultarGadoEspecifico')
  }

  return {
    consultaTodosGados: _consultaTodosGados,
    consultaGadoEspecifico: _consultaGadoEspecifico
  }

});
