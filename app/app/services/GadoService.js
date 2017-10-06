app.factory("GadoServiceAPI", function($http){

  var _consultaTodosGados = function(){
    return $http.get('https://boi-cea.herokuapp.com/api/consultarTodosGados')
  };

  var _consultaGadoEspecifico = function(params){
    return $http.get('https://boi-cea.herokuapp.com/api/consultarGadoEspecifico')
  }

  var _cadastrarGado = function(gado){
    return $http.post('https://boi-cea.herokuapp.com/api/cadastrarGado', gado);
  }

  return {
    consultaTodosGados: _consultaTodosGados,
    consultaGadoEspecifico: _consultaGadoEspecifico,
    cadastrarGado: _cadastrarGado
  }

});
