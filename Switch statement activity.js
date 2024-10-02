let day = prompt("Tuesday, Friday, Sunday");

switch (day) {
  case "Monday":
    console.log("Task for Monday: Plan the week ahead.");
    break;
  case "Tuesday":
    console.log("Task for Tuesday: Finish code activity.");
    break;
  case "Wednesday":
    console.log("Task for Wednesday: Finish more performance task.");
    break;
  case "Thursday":
    console.log("Task for Thursday: Prepare presentation.");
    break;
  case "Friday":
    console.log("Task for Friday: Review and update code.");
    break;
  case "Saturday":
    console.log("Task for Saturday: Relax and recharge.");
    break;
  case "Sunday":
    console.log("Task for Sunday: Go to church.");
    break;
  default:
    console.log("Finish code activity.");
    console.log("Review and update code.");
    console.log("Go to church.");
  
}
