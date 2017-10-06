/*
  Componente voltado para criar Cards para cada Cabeça de Gado
*/
app.component("cardGado", {
  templateUrl: './app/components/card-gado/card-gado.html',
  bindings: {
    data: "="
  },
  controller: function(){
    this.consultarDetalhes = function(){
      location.assign("#!/detalhes");
    }

    this.comprarGado = function(){

    }
  }
});
