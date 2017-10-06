app.factory("GadoServiceAPI", function($http){

  var _consultarTodosGados = function(){
    return $http.get('https://boi-cea.herokuapp.com/api/consultarTodosGados')
  };

  var _consultarGadoDestaque = function(){
    return $http.get('https://boi-cea.herokuapp.com/api/consultarTodosGados')
  };

  var _consultaGadoEspecifico = function(params){
    return $http.get('https://boi-cea.herokuapp.com/api/consultarGadoEspecifico')
  }

  var _cadastrarGado = function(gado){
    return $http.post('http://localhost:5000/api/cadastrarGado', gado);
  }

  return {
    consultarGadoDestaque: _consultarGadoDestaque
    consultaTodosGados: _consultaTodosGados,
    consultaGadoEspecifico: _consultaGadoEspecifico,
    cadastrarGado: _cadastrarGado
  }

});
