import React from "react";
import '../pages/Feedback.css';
import { Dropdown } from "../components/FeedbackDropDown";
class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Please write an essay about your favorite DOM element.'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('An essay was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div id="feed">
            <p>Feedback</p>
          </div>
          <br></br><br></br>
          <div id="dropD">
          <Dropdown />
          </div>
          <br></br>
          <label>
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <div id="submit">
          <input type="submit" value="Submit" />
          </div>
        </form>
      );
    }
  }
  export default EssayForm;