app.controller("MainController", function($scope, GadoServiceAPI){

  GadoServiceAPI.consultaTodosGados()
    .then(function(res){
      document.querySelector(".loader").style.display = "none";
      $scope.gados = res.data;
    })
    .catch(function(err,res){
      $scope.errorMsg = 
      console.log(err,res);
    });

});
