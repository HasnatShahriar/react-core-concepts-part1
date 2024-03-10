import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Todo from './Todo';
import Writer from './Writer'
import Singer from './Singer'
import BookStore from './BookStore'


function App() {

  const writers = ['ahsan habib','babul akhter','jhankar mahbub','ahmudullah'];

  const books = [
    {id:1, name: 'Math', price:100},
    {id:2, name: 'Islam', price:600},
    {id:3, name: 'Biology', price:160},
    {id:4, name: 'PL', price:190},
]

  const singers =[
    {id:1, name:'ahmudullah', age:42},
    {id:2, name:'arif bin habib', age:38},
    {id:3, name:'jasim uddin Rahmani', age:45}
  ]
  return (
    <>
      <h1>Vite + React</h1>
      <BookStore books ={books}></BookStore>
    
      <Writer name='Kazi Nazrul Islam'></Writer>
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }
      {
        writers.map(writer =><Writer name={writer}></Writer>)
      }
      {/* <Todo task='HTML' isDone={true}></Todo>
      <Todo task='JS' isDone={true}></Todo>
      <Todo task='react' isDone={false}></Todo> */}
      {/* <Device name='laptop' price='39500'></Device>
      <Device name='Mobile' price='18500'></Device>
      <Device name='watch' price='12000'></Device>
      <Person></Person>
      <Student grade='7' score='98'></Student>
      <Student grade={12} score='89'></Student>
      <Student></Student>
      <Developer></Developer> */}

    </>
  )
}

function Device(props) {
  // console.log(props);
  return <h2>This Device: {props.name} & It's price: {props.price} tk</h2>
}

function Person() {
  const age = 29;
  const profession = 'student'
  const person = { name: 'sabit', age: 0.9 }
  return <h3 style={{
    border: '2px solid red',
    margin: '20px',
    padding: '20px',
    borderRadius: '20px'
  }}>I am a Muslim & I am {age} years old.I am {profession}.I have on son.His name is {person.name} & his age is {person.age}</h3>
}

const { grade, score } = { grade: 'eleven', score: '98' };
function Student({ grade = 0, score = 0 }) {
  console.log(grade, score);
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
    </div>
  )
}

function Developer() {
  const developerStyle = {
    border: '2px solid green',
    margin: '20px',
    padding: '20px',
    borderRadius: '20px'
  }
  return (
    <div style={developerStyle}>
      <h5>Web Developer</h5>
      <p>Coding</p>
    </div>
  )
}

export default App
