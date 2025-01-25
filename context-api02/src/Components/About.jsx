import { useContext } from "react"
import { counterContext } from "../Context/Context"


const About = () => {
    const counter = useContext(counterContext)
  return (
    <div>

   {counter}
    </div>
  )
}

export default About