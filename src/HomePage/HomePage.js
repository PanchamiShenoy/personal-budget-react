import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import * as d3 from 'd3';
import { Pie } from 'react-chartjs-2';

function HomePage() {
  const [datasource, setChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor:[]
      },
    ],
  });
    
    function createD3Chart() {
    var data = datasource.datasets[0].data;
    var labels = datasource.labels;
    console.log("is this running")
    var width = 700;
    var height = 500;
    var svg = d3.select('#d3-chart')
    .append('svg')
    .attr('width', width)
    .attr('height', height);
    
    var colors = ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"];
    
    var pie = d3.pie();
    
    var arc = d3.arc()
    .innerRadius(Math.min(width, height) / 2 * 0.2)
    .outerRadius(Math.min(width, height) / 2 - 10);
    
    var g = svg.append('g')
    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
    
    var arcs = g.selectAll('arc')
    .data(pie(data))
    .enter()
    .append('g');
    
    arcs.append('path')
    .attr('d', arc)
    .attr('fill', function(d, i) {
    return colors[i];
    });
    
    arcs.append('text')
    .attr('transform', function(d) {
    var centroid = arc.centroid(d);
    return 'translate(' + centroid[0] + ',' + centroid[1] + ')';
    })
    .attr('text-anchor', 'middle')
    .text(function(d, i) {
    return labels[i];
    });
    }

  function getBudget() {
    axios.get('http://localhost:5000/budget')
      .then(function (res) {
        console.log(res.data);
        const newChartData = {
          labels: [],
          datasets: [
            {
              data: [],
              backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#5DD7D1',
                '#D65DB1',
              ]
            },
          ],
        };
        for (var i = 0; i < res.data.budget.length; i++) {
          newChartData.datasets[0].data[i] = res.data.budget[i].budget;
          newChartData.labels[i] = res.data.budget[i].title;
        }
        setChartData(newChartData);
        //createD3Chart();
      })
      .catch(function (error) {
        console.error('Error fetching data:', error);
      });
  }

  useEffect(() => {
    getBudget();
  }, []); 
  useEffect(() => {
   
    if (datasource.labels.length > 0) {
      createD3Chart();
    }
  }, [datasource]);
  
  
  return (
   <main>
<div className="container center">


<div className="page-area">


<div className="text-box">
<h1 >Stay on track</h1>
<p id ="tracking-details">
Do you know where you are spending your money? If you really stop to track it down,
you would get surprised! Proper budget management depends on real data... and this
app will help you with that!
</p>
</div>
<div className="text-box">
<h1 >Alerts</h1>
<p id = "alert-details">
What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
</p>
</div>


<div className="text-box">
<h1>Results</h1>
<p id = "result-detail">
People who stick to a financial plan, budgeting every expense, get out of debt faster!
Also, they to live happier lives... since they expend without guilt or fear...
because they know it is all good and accounted for.
</p>
</div>
<div className="text-box">
<h1>Free</h1>
<p id="cost-detail">
This app is free!!! And you are the only one holding your data!
</p>
</div>
<div className="text-box">
<h1 >Stay on track</h1>
<p id ="tracking-details">
Do you know where you are spending your money? If you really stop to track it down,
you would get surprised! Proper budget management depends on real data... and this
app will help you with that!
</p>
</div>
<div className="text-box">
<h1 >Alerts</h1>
<p id = "alert-details">
What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
</p>
</div>


<div className="text-box">
<h1>Results</h1>
<p id = "result-detail">
People who stick to a financial plan, budgeting every expense, get out of debt faster!
Also, they to live happier lives... since they expend without guilt or fear...
because they know it is all good and accounted for.
</p>
</div>
<div className="text-box">
<h1 >Free</h1>
<p id="cost-detail">
This app is free!!! And you are the only one holding your data!
</p>
</div>
<div className="text-box">
<h1 >Chart</h1>
<div id="d3-chart"></div>
</div>
<div className="text-box">
<h1 >Chart</h1>
<Pie data={datasource} />
</div>
</div>
</div>
</main>
  );
}

export default HomePage;
