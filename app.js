// from data.js
var tableData = data;

// Start of JS 

// start with references 
var table_body = d3.select("table body");

function buildTable(data) {
  // loop and append through the dataset 
  data.forEach((dataRow) => {
    // Append to the table body
    var row = table_body.append("tr");

    // Loop through each field in the dataset
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("table data");
        cell.text(val);
      }
    );
  });
}

function handleClick()
 {

  // Get the datetime value from filter
  var date = d3.select("#datetime").property("value");
  let filtered_data = tableData;

  // check to see if data exists, then filter 
  if (date) {
    filtered_data = filtered_data.filter(row => row.datetime == date);
  }

  // Build datatable  using the filtered data
  buildTable(filteredData);
}

// Build the table when the page loads
buildTable(tableData);

