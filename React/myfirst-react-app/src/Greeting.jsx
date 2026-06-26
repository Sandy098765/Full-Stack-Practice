import React from 'react'

export default function Greeting(props) {
  return (
    <div>
      <h2>Hello, {props.fn}! , Your age is {props.age}? </h2> 
        <h2>I am in my {props.year} of my Engineering</h2>
      <h2>My favcolor is {props.favcolor}</h2>
    </div>
  )
}
