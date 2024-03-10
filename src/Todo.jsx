// export default function Todo({task}){
//   return (
//     <li>Task: {task}</li>
//   )
// }



// conditional rendering option-01
// export default function Todo({task,isDone}){
// if(isDone === true){
//   return <li>Finished: {task}</li>
// }
// else{
//   return <li>Work on: {task}</li>
// }
// }



// conditional rendering option-02
// export default function Todo({task,isDone}){
//   if(isDone){
//     return <li>Finished(Alhamdulillah): {task}</li>
//   }
//   return <li>Finished: {task}</li>
// }



// conditional rendering option-03 (ternary operator)
// export default function Todo({task,isDone}){
//   return(
//     <li>{isDone ? 'Finished hoiche':'work chaliye jao'}:{task}</li>
//   )
// }




// conditional rendering option-04( (&&) just true value)

// export default function Todo({task,isDone}){
//   return (
//     <li>{task}{isDone && ':done'}</li>
//   )
// }


// conditional rendering option-05( (||) just false value)

// export default function Todo({task,isDone}){
//   return(
//     <li>{task}{isDone || ' : Do it'}</li>
//   )
// }



// conditional rendering option-06
// export default function Todo({task,isDone}){
//   let listItem;
//   if(isDone){
//     listItem = <li>Finished: {task}</li>
//   }
//   else{
//     listItem = <li>Work On: {task}</li>
//   }
//   return listItem;
// }