const Header = (props) => {
    return <h2>{props.name}</h2>
  }
  
  const TotalRender = (props) => {
    const parts = props.parts
    const exercises = parts.map(exercises => exercises.exercises)
    console.log(exercises)
  
    const initialValue = 0
    const Total = exercises.reduce( (s, p) =>
      s + p, initialValue,
    )
    console.log(Total)
    
    return(
      <>
        <p><b>total of {Total} exercises</b></p>
      </>
    )
  }
  
  
  const Part = (props) => {
    return (
      <p>
        {props.part} {props.exercises}
      </p>
    )
  }
  
  const Content = (props) => {
    const parts = props.parts
    console.log(parts)
    return (
      <div>
        {parts.map((part, index) => (
          <div key={index}><Part part={part.name} exercises={part.exercises}/></div>
        ))}
        
        
      </div>
    )
  }
  
  const Course = (props) => {
    const course = props.course
    console.log(course)
    
    return(
      <>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <TotalRender parts={course.parts} />
        
      </>
    )
  }

export default Course