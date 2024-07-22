import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      tasks : [
        {desc : "Shower", id : Math.random(), status : false},
        {desc : "Work", id : Math.random(), status : false},
        {desc : "Sleep", id : Math.random(), status : false}
      ],
      textLive : ""
    }
  }

  addTask=()=> this.state.textLive == "" ? alert("Empty Filed") : this.setState({tasks : [...this.state.tasks,{desc : this.state.textLive,id : Math.random(),status : false}],textLive : ""})
  deleteTask=(a)=> this.setState({tasks : this.state.tasks.filter((el,i,t)=>el.id != a) })
  statusTask=(a)=> this.setState({tasks : this.state.tasks.map((el,i,t)=> el.id == a ? {...el,status : !el.status} : el)})
  render(){
    return(
      <div>
        <h1>TODOLIST</h1>
        {
          this.state.tasks.map((el,i,t)=>
          <div>
            <h2 className={el.status && 'mchatba'}>{el.desc}</h2>
            <button onClick={()=> this.statusTask(el.id)}>{el.status ? "Not Done" : "Done"}</button>
            <button onClick={()=>this.deleteTask(el.id)}>Delete</button>
          </div>)
        }
        <br/>
        <br/>
        <input value={this.state.textLive} type='text' onChange={(e)=> this.setState({textLive : e.target.value})}/>
        <button onClick={this.addTask}>Add Task</button>
      </div>
    )
  }
}

export default App;
