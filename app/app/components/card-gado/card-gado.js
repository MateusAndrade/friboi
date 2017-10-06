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
      console.log("Comprar Gado");
      swal('Compra realizada', 'Cabeça de gado comprada com sucesso!', 'success');
      delete this;
    }

  }
});
