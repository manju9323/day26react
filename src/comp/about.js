import React from 'react'

function About({history}) {
  return (
    <>
    <div>About</div>
    <button onClick={()=>history.goBack()}>go back</button>

    <button onClick={()=>history.goForward()}>go forward</button>
    <button onClick={()=>history.push("/home")}>push</button>

    <button onClick={()=>history.replace("/main")}>replace</button>
    </>
  )
}

export default About