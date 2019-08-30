import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return (
    <div>
      <Header course = {course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )

}

const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

const Content = () => {
  return (
    <div>
      <Part part1 exercise1/>
      <Part part2 exercise2/>
      <Part part3 exercise3/>
    </div>
  )
}