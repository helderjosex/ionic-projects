angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('agendaApi', [function(){
    this.getContatos = function(){
      var contatos = [];
      //  VERIFICAR SE A LISTA EXITE
      if(typeof localStorage.contatos != 'undefined'){
        contatos = JSON.parse(localStorage.contatos);
      }
      return contatos;
    }

    this.addContato = function(contato){
      var contatos = [];
      //  VERIFICAR SE A LISTA EXITE
      if(typeof localStorage.contatos != 'undefined'){
        contatos = JSON.parse(localStorage.contatos);
      }
      contatos.push(contato);
      localStorage.setItem('contatos', JSON.stringify(contatos));
    }

    this.deleteContato = function(contato){      
      var contatos = [];
      //  VERIFICAR SE A LISTA EXITE
      if(typeof localStorage.contatos != 'undefined'){
        contatos = JSON.parse(localStorage.contatos);
      }
      contatos = contatos.filter(function(contatos){
          return contatos.nome !==contato.nome;
      });      
      localStorage.setItem('contatos', JSON.stringify(contatos));
    }
}]);
