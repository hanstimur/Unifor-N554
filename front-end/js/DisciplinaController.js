app.controller('DisciplinaController', function($scope) {

	//$scope.disciplina = {};
	$scope.listaDisciplinas = [];

	$scope.gravar = function() {
		$scope.listaDisciplinas.push($scope.disciplina);
		$scope.disciplina = {};
	}
	$scope.delete = function(disciplina) {
		var index = $scope.listaDisciplinas.indexOf(disciplina);
		$scope.listaDisciplinas.splice(index,1);

	}


});
	
