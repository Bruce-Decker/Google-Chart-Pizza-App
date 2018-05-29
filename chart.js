 google.charts.load("current", {packages:["sankey"]});
 google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  google.charts.setOnLoadCallback(drawChart2);
  var meats = JSON.parse(localStorage.getItem("meats"));
  var non_meats = JSON.parse(localStorage.getItem("non-meats"));
   function drawChart() {
    
    var meats = JSON.parse(localStorage.getItem("meats"));
    var non_meats = JSON.parse(localStorage.getItem("non-meats"));
  
   


    var data = new google.visualization.DataTable();
    data.addColumn('string', 'From');
    data.addColumn('string', 'To');
    data.addColumn('number', 'Weight');

    for (i = 0; i < meats.length; i++) {
        data.addRows([
          [localStorage.getItem("crust"), meats[i], Math.random()],
          [localStorage.getItem("cheese"), non_meats[i], Math.random()],
          [localStorage.getItem("sauce"), non_meats[i], Math.random()]
        ]);
    }
    data.addRows([
       [localStorage.getItem("crust"), localStorage.getItem("cheese"), 5],
       [localStorage.getItem("crust"), localStorage.getItem("sauce"), 1]
     
    ]);

    // Set chart options
    var options = {
      width: 600,
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.Sankey(document.getElementById('sankey_multiple'));
    chart.draw(data, options);
 }

 
      

      function drawChart2() {
        var meats = JSON.parse(localStorage.getItem("meats"));
        var non_meats = JSON.parse(localStorage.getItem("non-meats"));

        var data = google.visualization.arrayToDataTable([
          ['Food', 'Ingredients'],
          ['Crust',     2],
          ['Cheese',      1],
          ['Sauce',  1],
          ['Meats', meats.length],
          ['Non-Meats',  non_meats.length]
        ]);

        var options = {
          title: 'My Daily Activities'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }


