//create grid
function makeGrid() {
  let x = input_width.value    //select size input - width
  let y = input_height.value  //select size input - height
  //create grid with <tr> & <td> by loops
  for (var rows = 0; rows < x; rows++) {
    $("#pixel_canvas").append("<tr id = row" + rows + ">" + "</tr>");
    for (var columns = 0; columns < y; columns++) {
      $("#row"+rows).append("<td class = cell></td>");
    }
  }
}

//clear grid
function clearGrid(){
    $("tr").remove();
    $("td").remove();
};

// When size is submitted by user, call makeGrid()
$("#submit_button").click(function() {
    clearGrid();
    makeGrid();
    // when user click on any cell, fill the selected color to the cell
    $(".cell").click(function() {
        $(this).css("background-color",colorPicker.value); //select color
    });
});
