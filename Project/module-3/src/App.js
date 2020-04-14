import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom'
import About from './Components/About'
import Jobs from './Components/Jobs'
import Home from './Components/Home'
import Signup from './Components/Signup'
import Login from './Components/Login'



class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
  }

  handleData = (lo) => {
    this.setState({
      data: lo
    })
  }
  render() {
    return (
      <div className="App container-fluid" style={{fontFamily: 'Aleo'}}>
        <nav className="navbar navbar-light bg-success rounded">
          <Link to='/' className="navbar-brand ml-5">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeUDLSjYPBf-kmn97SHfzFTOiD-nQE921MFm5ObLAuDQfoD0ZI&usqp=CAU" width="100" height="50" className="d-inline-block align-top ml-5 rounded-pill" alt=""></img>
          </Link>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link className="nav-link text-light" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to='/about'>About</Link>
            </li>
            <button className="navbar-toggler mx-3 border-0" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </ul>
        </nav>
        <div className='container'>
          <Switch>
            <Route path="/" exact render={() => <Home fun={this.handleData} />} />
            <Route path='/about' component={About}></Route>
            <Route path='/signup' component={Signup}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path="/:id/" exact strict render={(props)=><Jobs jobs={this.state.data} {...props}/>}/>
            <Route render={() => <h1>Error : Item not found</h1>} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
