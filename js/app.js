//General Array Function
function MakeArray(n) {
  this.length = n;
  for (var i = 1; i <= n; i++) {
    this[i] = 0;
  }
}


//Initialize Days of Week Array
days = new MakeArray(7);
days[0] = "Saturday"
days[1] = "Sunday"
days[2] = "Monday"
days[3] = "Tuesday"
days[4] = "Wednesday"
days[5] = "Thursday"
days[6] = "Friday"

//Initialize Months Array
months = new MakeArray(12);
months[1] = "January"
months[2] = "February"
months[3] = "March"
months[4] = "April"
months[5] = "May"
months[6] = "June"
months[7] = "July"
months[8] = "August"
months[9] = "September"
months[10] = "October"
months[11] = "November"
months[12] = "December"


//Day of Week Function
function compute(form) {

  var val1 = Number(val1);
  var val2 = Number(val2);
  var val3 = Number(val3);


  var val1 = parseInt(form.day.value, 10)

  if ((val1 < 0) || (val1 > 31)) {
    alert("Invalid Day, can't be greater than 31 😑😑")
  }
  var val2 = parseInt(form.month.value, 10)
  if ((val2 < 0) || (val2 > 12)) {
    alert("Invalid month, can't be greater than 12 😑😑")
  }
  var val2x = parseInt(form.month.value, 10)
  var val3 = parseInt(form.year.value, 10)
  if (val3 < 1000) {
    alert("You ought to be dead dude! 👎👻")
  }
  if (val2 == 1) {
    val2x = 13;
    val3 = val3 - 1
  }
  if (val2 == 2) {
    val2x = 14;
    val3 = val3 - 1
  }
  var val4 = parseInt(((val2x + 1) * 3) / 5, 10)
  var val5 = parseInt(val3 / 4, 10)
  var val6 = parseInt(val3 / 100, 10)
  var val7 = parseInt(val3 / 400, 10)
  var val8 = val1 + (val2x * 2) + val4 + val3 + val5 - val6 + val7 + 2
  var val9 = parseInt(val8 / 7, 10)
  var val0 = val8 - (val9 * 7)
  form.result1.value = months[val2] + " " + form.day.value + ", " + form.year.value
  form.result2.value = "Hurray!! You were born on " + days[val0]
}

         // end script -->

var titles = {
  "view_page" : "Daily Counters",
  "create_new": "Create New Counter",
  "editing" : "Edit Existing Counter"
}

function switch_pages( target_page )
{
  var state = document.getElementById("state");
  var current_page = document.getElementById( state.getAttribute("value") );
  state.setAttribute("value",target_page);
  var new_page = document.getElementById( target_page );
  new_page.style.display="block";
  current_page.style.display="none";

  document.title = titles[target_page]
}


function flipflop( e )
{
  switch( e.id )
  {
    case "new_counter_btn":
      switch_pages( "create_new" );
      break;
    case "counter_display":
    case "cancel_editing":
      switch_pages("view_page");
      break;
  }

}

function edit( name, val, amnt )
{
  switch_pages("editing");
}