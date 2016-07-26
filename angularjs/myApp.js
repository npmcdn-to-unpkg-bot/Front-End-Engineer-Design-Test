var app = angular.module('MyApp', [])
    app.controller('MyController', function($scope, $http) {
      //Welcome Newcreation!!
        $scope.idea1 = ""
        $scope.idea2 = ""
        $scope.firstName = "John";
        $scope.lastName = "Doe";
        $scope.email = "andy952737@hotmail.com";

        $scope.x1 = "JOHN";
        $scope.x2 = angular.isNumber($scope.x1);

        $http.get("http://www.w3schools.com/angular/customers_mysql.php")
            .then(function (response) {
                $scope.names = response.data.records;
            });

        // 以下只是範例：
        // var todoList = this;
        // todoList.todos = [
        //     { text: 'learn angular', done: true },
        //     { text: 'build an angular app', done: false }
        // ];

        // todoList.addTodo = function() {
        //     todoList.todos.push({ text: todoList.todoText, done: false });
        //     todoList.todoTexti = '';
        // };

        // todoList.remaining = function() {
        //     var count = 0;
        //     angular.forEach(todoList.todos, function(todo) {
        //         count += todo.done ? 0 : 1;
        //     });
        //     return count;
        // };

        // todoList.archive = function() {
        //     var oldTodos = todoList.todos;
        //     todoList.todos = [];
        //     angular.forEach(oldTodos, function(todo) {
        //         if (!todo.done) todoList.todos.push(todo);
        //     });
        // };

    });