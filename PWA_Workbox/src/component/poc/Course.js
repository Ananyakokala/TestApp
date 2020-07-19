import React, {Component} from 'react';
import "../../index.css"

 
class Course extends Component {
  constructor (props) {
    super(props);

      this.state = {
        topics:[
          {topic:'Vedics Maths'},
          {topic:"History"},
          {topic:'Science'},
          {topic:'Lorem Ipsum 1'},
          {topic:'Lorem Ipsum 2'}
        ]
      }
    }
  render() {
    return (
      <div>
          <div class="whiteDiv">
          {this.state.topics.map(listitem => (
            <button style={{background:"#ACF2F3",padding:8,margin:8,borderRadius:10,outline:0,borderWidth:0}}>{listitem.topic}</button>
          ))}
          </div>
      </div>
    );
  }
}

export default Course;