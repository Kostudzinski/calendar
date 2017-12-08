angular.module('calendar', []).controller("calendarController", function($scope){

    function addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    function getDaysInMonth(month, year) {
        var date = new Date(year, month, 1);
        var days = [];
        while (date.getMonth() === month) {
           days.push(new Date(date));
           date.setDate(date.getDate() + 1);
        }
        return days;
   }

   $scope.dayHasEvent = function(day){
       return $scope.events.some(function(event){
            return event.date.getDate() === day.getDate();
       });
   }

   $scope.getEventForDay = function(day){
        return $scope.events.find(function(event){
            return event.date.getDate() === day.getDate();
        });
   }

   $scope.today = function(day){
       return day <= new Date(2017, 5, 10);
   }
   

    $scope.events = [
        {
            date: new Date(2017, 5, 2),
            data: '02.06.2017',
            name: "LOREM IPSUM DOLOR SIT",
            src: 'img/heart.png'
        },
        {
            date: new Date(2017, 5, 11),
            data: '11.06.2017',
            name: "LOREM IPSUM DOLOR SIT",
            src: 'img/glass2.png'
        },
        {
            date: new Date(2017, 5, 15),
            data: '15.06.2017',
            name: "LOREM IPSUM DOLOR SIT",
            src: 'img/hammer3.png'
        },        
        {
            date: new Date(2017, 5, 22),
            data: '22.06.2017',
            name: "LOREM IPSUM DOLOR SIT",
            src: 'img/hat4.png'
        },        
        {
            date: new Date(2017, 5, 30),
            data: '30.06.2017',
            name: "LOREM IPSUM DOLOR SIT",
            src: 'img/champ5.png'
        },
    ]
    $scope.days = getDaysInMonth(5, 2017);
    
    
});