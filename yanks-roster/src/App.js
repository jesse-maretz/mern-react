import './App.css';
import React, {Component} from 'react'

class App extends Component{
  constructor(){
    super()
    this.state = {
      roster: "",
      newPlayer: 
      {
        name: "",
        _id: ""
      }
  }
  }

  fetchRoster() {
    let url = "https://yanks-roster.herokuapp.com/players"
    fetch(url)
      .then(res => res.json())
      .then(roster=>{
        console.log(roster)
        this.setState({roster: roster})
      })
  }
  componentDidMount(){
    this.fetchRoster()
  }

handlePlayerPost(e){
  console.log(e.target.value)
  console.log(this)
  this.setState({newPlayer: {
    name: e.target.value
  }})
}
handlePlayerUpdate(e){
  console.log(e.target.value)
  console.log(this)
  this.setState({newPlayer: {
    name: e.target.value
  }})
}
handlePlayerRemove(e){
  console.log(e.target.value)
  console.log(this)
  this.setState({newPlayer: {
    _id: e.target.value
  }})
}

handlePost(e){
  console.log(this.state.newPlayer)
  e.preventDefault()
  let url = "https://yanks-roster.herokuapp.com/players"
  fetch(url, {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(this.state.newPlayer),
})
    .then(res => res.json())
    .then(player=>{
      this.setState({roster: [...this.state.roster, player]})
      console.log(this.state)
    })
}
handleUpdate(e){
  console.log(this.state.newPlayer)
  e.preventDefault()
  let url = "https://yanks-roster.herokuapp.com/players"
  fetch(url, {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(this.state.newPlayer),
})
    .then(res => res.json())
    .then(player=>{
      this.setState({roster: [...this.state.roster, player]})
      console.log(this.state)
    })
}
handleDelete(e){
  console.log(this.state.newPlayer)
  e.preventDefault()
  let url = "https://yanks-roster.herokuapp.com/players/" + this.state.newPlayer._id 
  fetch(url, {
  method: 'DELETE', 
  headers: {
    'Content-Type': 'application/json',
  },
})
    .then(res => res.json())
    .then(player=>{
      window.location.reload(false)
      console.log(this.state)
    })
}

  render(){
    return (
      <div className="App">
        {this.state.roster.length ? 
        this.state.roster.map((player, i)=>{
          return <div key={i}>{player.name}<br></br>{player._id}</div>
        })
      : ""
      
      }
        <div>

          <form onSubmit={(e)=>this.handlePost(e)} className="postForm">
            <h1>Add player</h1>
            <input type="text" placeholder="Add a player..." id="createPlayer" onChange={(e)=>this.handlePlayerPost(e)}/>
            <button type="submit">Submit</button>
          </form>

          <form onSubmit={(e)=>this.handleDelete(e)}>
            <h2>Delete player</h2>
            <input type="text" placeholder="Remove a player..." id="removePlayer" onChange={(e)=>this.handlePlayerRemove(e)}/>
            <button type="submit">Submit</button>
          </form>

          <form onSubmit={(e)=>this.handleUpdate(e)}>
            <h2>Update player</h2>
            <input type="text" placeholder="New info..." id="updatePlayer" onChange={(e)=>this.handlePlayerUpdate(e)}/>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
