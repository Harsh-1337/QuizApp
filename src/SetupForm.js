import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const {quiz,handleChange,handleSubmit,error} = useGlobalContext();
  return <main>
    <section className="quiz quiz-small">
      <form className="setup-form">
        <h2>Setup Quiz</h2>
        <div className="form-control">
        <label htmlFor="amount">number of questions</label>
        <input type="number"
        name="amount"
        value={quiz.amount}
        onChange={handleChange}
        className="form-input"
        min={1}
        max={30}
        id="amount" />
       </div>  
       <div className="form-control">
         <label htmlFor="category">category</label>
         <select name="category"
          className="form-input"
          id="category"
          value={quiz.category}
          onChange={handleChange}>
          <option value="sports">sports</option> 
          <option value="history">history</option> 
          <option value="politics">politics</option> 
          <option value="geography">geography</option> 
          <option value="mythology">mythology</option> 
          <option value="animals">animals</option> 
          <option value="generalknowledge">general knowledge</option> 
         </select>
       </div>
       <div className="form-control">
         <label htmlFor="difficulty">difficulty</label>
         <select name="difficulty"
          className="form-input"
          id="difficulty"
          value={quiz.difficulty}
          onChange={handleChange}>
          <option value="easy">easy</option> 
          <option value="medium">medium</option> 
          <option value="hard">hard</option> 
         </select>
       </div>
       {error&& <p className="error">can't generate questions 
       for the given input please try different options</p>}
       <button type="submit"
        onClick={handleSubmit}
        className="submit-btn">
        Start
        </button>
      </form>
    </section>
  </main>
  return <h2>setup form</h2>
}

export default SetupForm
