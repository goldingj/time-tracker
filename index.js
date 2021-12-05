const currentWork = document.getElementById("work-now");
const previousWork = document.getElementById("work-last");
const currentPlay = document.getElementById("play-now");
const previousPlay = document.getElementById("play-last");
const currentStudy = document.getElementById("study-now");
const previousStudy = document.getElementById("study-last");
const currentExercise = document.getElementById("exercise-now");
const previousExercise = document.getElementById("exercise-last");
const currentSocial = document.getElementById("social-now");
const previousSocial = document.getElementById("social-last");
const currentSelf = document.getElementById("self-now");
const previousSelf = document.getElementById("self-last");
const dailyHours = document.getElementById("daily");
const weeklyHours = document.getElementById("weekly");
const monthlyHours = document.getElementById("monthly");


dailyHours.addEventListener("click", function(){
     currentWork.innerHTML = "6.4 hrs";
     previousWork.innerHTML = "Last Week - 7 hrs";
     currentPlay.innerHTML = "2 hrs";
     previousPlay.innerHTML = "Last Week - 3 hrs";
     currentStudy.innerHTML = "0.8 hrs";
     previousStudy.innerHTML = "Last Week - 1 hr";
     currentExercise.innerHTML = "0.8 hrs";
     previousExercise.innerHTML = " Last Week - 0.5 hrs";
     currentSocial.innerHTML = "1 hr";
     previousSocial.innerHTML = "Last Week - 2 hrs";
     currentSelf.innerHTML = "0.4 hrs";
     previousSelf.innerHTML = "Last Week - 0.5 hrs";
} );

weeklyHours.addEventListener ("click", function(){
    currentWork.innerHTML = "32 hrs";
     previousWork.innerHTML = "Last Week - 36 hrs";
     currentPlay.innerHTML = "10 hrs";
     previousPlay.innerHTML = "Last Week - 8 hrs";
     currentStudy.innerHTML = "4 hrs";
     previousStudy.innerHTML = "Last Week - 7 hr";
     currentExercise.innerHTML = "4 hrs";
     previousExercise.innerHTML = " Last Week - 5 hrs";
     currentSocial.innerHTML = "5 hrs";
     previousSocial.innerHTML = "Last Week - 10 hrs";
     currentSelf.innerHTML = "2 hrs";
     previousSelf.innerHTML = "Last Week - 2 hrs";
});

monthlyHours.addEventListener("click", function(){
    currentWork.innerHTML = "128 hrs";
     previousWork.innerHTML = "Last Month - 124 hrs";
     currentPlay.innerHTML = "40 hrs";
     previousPlay.innerHTML = "Last Month - 20 hrs";
     currentStudy.innerHTML = "16 hrs";
     previousStudy.innerHTML = "Last Month - 18 hrs";
     currentExercise.innerHTML = "16 hrs";
     previousExercise.innerHTML = " Last Month - 12 hrs";
     currentSocial.innerHTML = "20 hrs";
     previousSocial.innerHTML = "Last Month - 19 hrs";
     currentSelf.innerHTML = "8 hrs";
     previousSelf.innerHTML = "Last Month - 4 hrs";
});
