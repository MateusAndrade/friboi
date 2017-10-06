app.controller("MainController", function($scope, GadoServiceAPI){

  GadoServiceAPI.consultarGadoDestaque()
    .then(function(res){
      document.querySelector(".loader").style.display = "none";
      $scope.gados = res.data;
    })
    .catch(function(err,res){
      $scope.errorMsg =
      console.log(err,res);
    });

});
