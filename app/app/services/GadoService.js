app.factory("GadoServiceAPI", function($http){

  var _consultarTodosGados = function(){
    return $http.get('https://boi-cea.herokuapp.com/api/consultarTodosGados')
  };

  var _consultarGadoDestaque = function(){
    return $http.get('https://boi-cea.herokuapp.com/api/consultarGadoDestaque')
  };

  var _consultaGadoEspecifico = function(params){
    return $http.get('https://boi-cea.herokuapp.com/api/consultarGadoEspecifico')
  }

  var _cadastrarGado = function(gado){
    return $http.post('https://boi-cea.herokuapp.com/api/cadastrarGado', gado);
  }

  return {
    consultarGadoDestaque: _consultarGadoDestaque,
    consultarTodosGados: _consultarTodosGados,
    consultaGadoEspecifico: _consultaGadoEspecifico,
    cadastrarGado: _cadastrarGado
  }

});
