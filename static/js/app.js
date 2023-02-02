d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function(data) {
  console.log(data);

// Get the first sample of data
var firstSample = data.samples[0];

// Slice the first 10 objects in the sample_values and otu_ids arrays
var sampleValues = firstSample.sample_values.slice(0, 10);
var otuIds = firstSample.otu_ids.slice(0, 10);
var otuLabels = firstSample.otu_labels.slice(0, 10);

// Create the trace for the horizontal bar chart
var trace = {
x: sampleValues.reverse(),
y: otuIds.map(id => `OTU ID ${id}`).reverse(),
text: otuLabels.reverse(),
type: "bar",
orientation: "h"
};

// Plot the horizontal bar chart
Plotly.newPlot("bar", [trace]);
});

