let today = new Date();
var date = today.toLocaleString("default", {
  month: "long",
  day: "2-digit",
  year: "numeric",
});

let id;

$(".update").on("click", function (evt){
     evt.preventDefault();
     console.log("Here");
    if(evt.target.type==="button"){
        id = evt.target.value; 
        // console.log(document.querySelector("#workout1").value); 
        // console.log($("#date_now"));     
            
        if(localStorage.getItem("bodyPart")){
          localStorage.removeItem("bodyPart")
        }
        if(localStorage.getItem("date")){
          localStorage.removeItem("date")
        }
        if(localStorage.getItem("workout")){
          localStorage.removeItem("workout")
        }
        if(localStorage.getItem("Reps_Interval")){
          localStorage.removeItem("date")
        }
        
        localStorage.setItem("bodyPart",$(evt.target).attr("bodyPart"))
        localStorage.setItem("date",$(evt.target).attr("date"))
        localStorage.setItem("workout",$(evt.target).attr("workout"))
        localStorage.setItem("Reps_Interval",$(evt.target).attr("Reps_Interval_now"))
        
           
    }
    else{
      
       console.log(document.querySelector("#workout_now").value);
        let date = evt.target.parentElement.date.value;
        let bodyPart = evt.target.parentElement.bodypartSelect.value;
        let workout = evt.target.parentElement.workout.value;
        let Reps_Interval = evt.target.parentElement.Reps_Interval.value;
        

        // Send PUT Request here
        fetch("/workouts", {
          method: "put",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            _id: id,
            date: date,
            bodyPart: bodyPart,
            workout: workout,  
            Reps_Interval: Reps_Interval, 
          }),
        })
          // .then((res) => {
          //   if (res.ok) return res.json();
          // })
          .then((response) => {
            //window.location.reload(true);
          });  
    }
    
});

$(".delete").on("click", function (evt) {
 
    evt.preventDefault();
    let id = evt.target.value;
  fetch("/workouts", {
    method: "delete",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
     _id:`${id}`,
    }),
  })
    // .then((res) => {
    //   if (res.ok) return res.json();
    // })
    .then((data) => {
      window.location.reload();
    });

    //document.querySelector("#user_input123").reset();
}
);


