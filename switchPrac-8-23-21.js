// function numToDay(num) {
//   switch (num) {
//     case 0:
//       console.log("Sunday");
//       break;
//     case 1:
//       console.log("Monday");
//       break;
//     case 2:
//       console.log("Tuesday");
//       break;
//     case 3:
//       console.log("Wednesday");
//       break;
//     case 4:
//       console.log("Thursday");
//       break;
//     default:
//       console.log("Invalid!");
//       break;
//   }
// }

// numToDay(7);

function switchTest(val) {
  switch (val) {
    case 0:
      console.log("number is 0");
      break;
    case "something":
      console.log("string is something");
      break;
    case "Something":
      console.log("something is case sensitive");
      break;
    // case True:
    //   console.log("Boolean worked");
    //   break;
    case 4.4:
      console.log("Float worked");
      break;
    default:
      console.log("Invalid!");
      break;
  }
}

switchTest(0);
switchTest("something");
switchTest("Something");
// switchTest(True);
switchTest(4.4);
