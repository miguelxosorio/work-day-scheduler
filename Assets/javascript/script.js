// setting up date to show on the top of the page
const today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));
console.log(today.toString());

// console logging the time in military time
console.log(moment().hour());

// variable for the container holding the timeblocks - called the class in the div
var containerEl = $(".container")

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
    // ${timeEl[t++]} calls the Time in the array - timeEl
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
        containerEl.append(`
        <div id="9a" class="row time-block">
        <div class="col-1 hour">${timeEl[t++]}</div> 
       
         <textarea id="${i}" class="col-10 description ${status}"></textarea>
       
        <button data-id="${i}" class="col-1 saveBtn d-flex justify-content-center align-items-center">
         <i class="fas fa-lock"> SAVE</i>
        </button>
        </div>
        `)
    };

    var saveBtnEl = $(".saveBtn");
    saveBtnEl.on("click", function() {
        var id = $(this).attr("data-id"); // Select 'this' with an attribute of data-id which is the button

        var event = $("#"+ id).val();
        // console.log(event);
        localStorage.setItem(id, JSON.stringify(event));
        console.log(id);
        let x = $(".description")
        x.value = localStorage.getItem(id);
        console.log(x);
    });
}; 


createTask();