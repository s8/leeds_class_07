import * as d3 from "https://cdn.skypack.dev/d3@7";


d3.json("wealth_health.json").then(function(data) {
    console.log(data); // use this to check the data in the console
    const maxIncome = d3.max(data, (d)=>d.income);
    const maxLifeExpectancy = d3.max(data, (d)=> d.lifeExpectancy);

    console.log("maxIncome: ", maxIncome);
    console.log("maxLifeExpectancy ", maxLifeExpectancy);

    const sorted = data.slice().sort((a, b) => d3.descending(a.income, b.income))
    var scale = d3.scaleLinear().domain([0,maxIncome]).range([0,500]);

    d3.select("body").append("svg").attr("style","height: 1800px; width: 1000px;");


    


})