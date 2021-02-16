
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Group', 'Percentage'],
          ['Ecosystem', 18],
          ['Team & Advisors', 21],
          ['Treasury',  18],
          ['Seed Investors', 6],
          ['Private Sale', 33],
          ['Public Sale',  4]
        ]);

        var options = {
          title: '',
          legend: 'none',
          pieHole: 0.9,
          backgroundColor: {
            fill: 'transparent',
            opacity: 100,
         },
         chartArea: {
            
            height: '100%',
            width: '100%'
         },
          slices: {
            0: { color: '#78AF9F' },
            1: { color: '#DDA032' },
            2: { color: '#659CC8' },
            5: { color: '#D46E2D' },
            4: { color: '#61EFCE' },
            3: { color: '#FFD152' },
          },
          pieSliceBorderColor: 'transparent',
          pieSliceText: 'none'
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }