import '../pages/Feedback.css';
import { useState } from 'react';

const Dropdown=()=> {
    const [concerns, setConcerns] = useState("Suggestions");
  
    const handleChange = (event) => {
      setConcerns(event.target.value)
    }
  
    return (
      <form>
        <label>Area of concerns: 
        <select value={concerns} onChange={handleChange}>
          <option value="Technical issues">Technical issues</option>
          <option value="Suggestions">Suggestions</option>
          <option value="Difficulty">Difficulty</option>
        </select>
        </label>
      </form>
    )
  }

export{Dropdown};