import { Component } from 'react';
import './App.css';
import Traininginfo from './traininginfo';
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appName: 'Learning React',
      appVersion: '1.0.0',
      trainer: 'Nikhil Shah',
      students: '8',
      mode: 'Online',
      topics: ['MEAN', 'MERN', 'AZURE', 'AWS', 'Oracle', 'SQL', 'NoSQL'],
    };
  }
 
  greet = () => {
    alert('Hello ' + this.state.trainer + ', welcome to the class!');
  };
 
  totalStudents = () => {
    alert('Total number of students in the class: ' + this.state.students);
  };
 
  myNameIs = () => {
    alert('My name is ' + this.state.trainer);
  };
 
  render() {
    return (
      <div className="App">
        {/* <h1>Welcome to class-based components</h1>
        <h2>{this.state.appName}</h2>
        <h3>Version: {this.state.appVersion}</h3>
        <h4>Trainer: {this.state.trainer}</h4>
        <h5>Students: {this.state.students}</h5>
        <h6>Mode: {this.state.mode}</h6>
        <h6>Topics:</h6>
        <ul>
          {this.state.topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul> */}
 
        {/* Buttons to trigger methods */}
        <button onClick={this.greet}>Greet Trainer</button>
        <button onClick={this.totalStudents}>Show Total Students</button>
        <button onClick={this.myNameIs}>Reveal Trainer Name</button>
        <Traininginfo trainerName={this.state.trainer}
        modeOfTraining={this.state.mode}/>
      </div>
     
    );
  }
}
 
export default App;
 