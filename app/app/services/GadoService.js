app.factory("GadoServiceAPI", function($http){

  var _consultaTodosGados = function(params){
    return $http.get('https://boi-cea.herokuapp.com/api/consultarTodosGados')
  };

  return {
    consultaTodosGados: _consultaTodosGados
  }

});
