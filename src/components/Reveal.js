import { useState } from "react"

const Reveal = (props) => {
    const {revealQuestion} = props
    const [formData, setFormData] = useState(null)

    const handleClick = (props) => {
        // ^ stop from from refreshing page
        revealQuestion()
    
      }
    
    return(
    <div>
        <form className='' onClick={handleClick}>
            <input type='button' value='Click Here to Reveal the Question'/>
      </form>
    </div>
)}

export default Reveal