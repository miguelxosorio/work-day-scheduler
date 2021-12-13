// setting up date to show on the top of the page
const today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

console.log(today.toString());

// console logging the time in military time (for example 4pm is 1600 and then converts it to 16) so
// we could use it inside the createTask function below as solid integers as the <textarea> ids
console.log(moment().hour());

// variable for the container holding the timeblocks - called the class in the div
var containerEl = $(".container");

// time variables
var timeEl = 
[   
    "9:00 AM", 
    "10:00 AM", 
    "11:00 AM", 
    "12:00 PM",
    "1:00 PM", 
    "2:00 PM",
    "3:00 PM", 
    "4:00 PM", 
    "5:00 PM"
];


// setting up creating a task function();
var createTask = function() {
    
    var t = 0;
    var currentHour = moment().hour();
    containerEl.empty()
    
    for (let i = 9; i < 18; i++) {
        var status = "";// declaring an empty status variable first
        
        // status is set up as a variable and later called in the dynamic HTML ${status}
        // redeclaring the variable with updated values in the for loop
        // status value is the class
        if (i === currentHour) {
            status = "present";
        }

        if (i < currentHour) {
            status = "past";
        }

        if (i > currentHour) {
            status = "future";
        }
        
        // textarea id is relating to button data-id ${i} on click event
        // ${timeEl[t++]} calls the Time in the array to print in the div displaying the time with increments per hour onto the next divs
        // A data attribute is exactly that: a custom attribute that stores data.
        // They are always prefixed with "data-" followed by something descriptive
        // An element can have any number of data attributes you want.
        containerEl.append(`
        <div id="9a" class="row time-block">
        <div class="col-1 hour">${timeEl[t++]}</div> 
       
         <textarea id="ta${i}" class="col-10 description ${status}"></textarea>
       
        <button data-id="${i}" class="col-1 saveBtn d-flex justify-content-center align-items-center">
         <i class="fas fa-lock"> SAVE</i>
        </button>
        </div>
        `)
    };

    var saveBtnEl = $(".saveBtn");
    saveBtnEl.on("click", function() {
        var id = $(this).attr("data-id"); // Select 'this' with an attribute of data-id which is the button

        var event = $("#ta"+ id).val();
        // console.log(event);

        // set up local storage
        localStorage.setItem(id, (event)); // no need to JSON.stringify because the value is already a string
        console.log(id.toString());
        // console.log(JSON.stringify(event));
        console.log(localStorage.getItem(id));
    
    });
}; 

// function to load the tasks, $("#") targets the id of the specific text area and gets the value stored in the local storage
// therefore, tasks stored persists even after refreshing the webpage
var getTasks = function() {
   
    $("#ta9").val(localStorage.getItem(9));
    $("#ta10").val(localStorage.getItem(10));
    $("#ta11").val(localStorage.getItem(11));
    $("#ta12").val(localStorage.getItem(12));
    $("#ta13").val(localStorage.getItem(13));
    $("#ta14").val(localStorage.getItem(14));
    $("#ta15").val(localStorage.getItem(15));
    $("#ta16").val(localStorage.getItem(16));
    $("#ta17").val(localStorage.getItem(17));

}; 

createTask();
getTasks();
