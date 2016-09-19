angular.module('app.controllers', [])

.controller('agendaCtrl', ['$scope', '$ionicModal', '$ionicLoading', 'agendaApi', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $ionicModal, $ionicLoading, agendaApi) {
  var contatos = [];
  $scope.permitirExcluir = false;
  $scope.favorito = false;

  function obterContatos(){
    contatos = agendaApi.getContatos();
    $scope.contatos = contatos;

    return contatos;
  }

  $scope.exibirAguarde = function () {
    $ionicLoading.show({
      template: '<p class="item-icon-center" ><ion-spinner icon="lines" class="spinner-calm"></ion-spinner></p> Aguarde...'
    });
    setTimeout(fecharAguarde,6000);
  }

  function fecharAguarde() {
    $ionicLoading.hide();
  }

  $scope.salvarContato = function(contato){
    agendaApi.addContato(contato);
    obterContatos();
    $scope.closeModal();
  }

  $scope.excluirContato = function(contato){
    agendaApi.deleteContato(contato);
    obterContatos();
  }

  $scope.filtrarContatosFavoritos = function(){
    if ($scope.favorito == false) {
        $scope.favorito = true;
    } else {
       $scope.favorito = false;
    }
    contatos = obterContatos();
    if($scope.favorito == true){
      contatos = contatos.filter(function(contatos){
          return contatos.favorito == true;
      });
      $scope.contatos = contatos;
    }
  }

  obterContatos();

  $scope.habilitarExclusao = function () {
     $scope.permitirExcluir = !$scope.permitirExcluir;
  }

  $scope.abrirTelaContato = function() {
    $scope.contato = {nome: '', telefone: '', favorito: false}
    $ionicModal.fromTemplateUrl('contato.html', {
        scope: $scope,
        animation: 'slide-in-up',
        focusFirstInput: true
    }).then(function(modal) {
        $scope.modal = modal;
        $scope.modal.show();
    });
  };

  $scope.cancelarContato = function(){
    $scope.closeModal();
  }

  // MODAL NOVO CONTATO
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
  // FIM MODAL NOVO CONTATO
}])

.controller('sobreCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
