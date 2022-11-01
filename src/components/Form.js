import { useState } from "react"


const Form = (props) => {
    const {getQuestion} = props

    const [formData, setFormData] = useState(null)

    const handleSubmit = (event) => {
        // ^ stop from from refreshing page
        event.preventDefault()
        getQuestion()
    
      }
    
    return(
    <div>
        <form onSubmit={handleSubmit}>
            <input className='quest-btn' type='submit' value='Get Question'/>
      </form>
    </div>
)}

export default Form