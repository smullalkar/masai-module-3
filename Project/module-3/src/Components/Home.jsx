import React from 'react'
import { Component } from 'react'
import axios from 'axios'
import AllJobs from './AllJobs'
import { Link } from 'react-router-dom'


class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            jobTitle: '',
            location: '',
            fulltime: '',
            isFetched: false,
            data: []
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleClick = (event) => {
        axios
            .get('https://jobs.github.com/positions.json?', {
                params: {
                    description: this.state.jobTitle.toLowerCase(),
                    location: this.state.location.toLowerCase(),
                    full_time: this.state.fulltime
                }
            })
            .then(res =>
                this.setState({
                    data: res.data,
                    isFetched: true
                })
            )
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                this.props.fun(this.state.data)
            })
    }


    componentDidMount = ( ) => {
        axios
        .get('https://jobs.github.com/positions.json?', {
            params: {
                description: 'Python',
                location: 'New York',
                // full_time: this.state.fulltime
            }
        })
        .then(res =>
            this.setState({
                data: res.data,
                isFetched: false
            })
        )
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            this.props.fun(this.state.data)
        })
    }

    render() {
        if (!this.state.isFetched) {
            return (
                <>
                    <div className="container p-5 my-5">
                        <div className="row m-5">
                            <h1 className='col-7 font-weight-bolder'>Growth on your mind? <br /><p className='text-success ml-2' style={{ fontSize: '20px' }}>Welcome you are on the right place..</p></h1>
                            <div className="card text-white bg-success mb-3 col-4 offset-1" style={{maxWidth: '18rem'}}>
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold">New here?</h5>
                                    <p className="card-text"><Link to='/signup'><button type="button" className="btn btn-dark">
                                        Sign up
                                    </button></Link></p>
                                    <hr></hr>
                                    <h5 className="card-title font-weight-bold">Already a member?</h5>
                                    <p className="card-text"><Link to='/login'><button type="button" className="btn btn-dark">
                                        Login
                                    </button></Link></p>
                                </div>
                            </div>
                        </div>
                        <h2 className='text-muted'><cite>Explore 10000+ Jobs..</cite></h2>
                        <div className="form-row">
                            <div className="form-group col-md-4" >
                                <label>Job Description :</label>
                                <input
                                    name='jobTitle'
                                    value={this.state.jobTitle}
                                    onChange={this.handleChange}
                                    type="text"
                                    className="form-control rounded-0"
                                    placeholder='Job tiltle'
                                ></input>
                            </div>
                            <div className="form-group col-md-4 mx-5">
                                <label>Location :</label>
                                <input
                                    name='location'
                                    value={this.state.location}
                                    onChange={this.handleChange}
                                    type="text"
                                    className="form-control rounded-0"
                                    placeholder='Location'
                                ></input>
                            </div>
                            <div className="form-group col-md-2" style={{ marginTop: '32px' }}>
                                <button type='button' onClick={this.handleClick} className="btn btn-dark">Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <table className="table table-hover border mb-5">
                            <tbody>
                                <AllJobs jobs = {this.state.data} />
                            </tbody>
                        </table>
                    </div>
                </>
            )
        }
        else {
            return (
                <>
                    <div className="container p-5 my-5">
                        <div className="row m-5">
                            <h1 className='col-7 font-weight-bolder'>Growth on your mind? <br /><p className='text-success ml-2' style={{ fontSize: '20px' }}>Welcome you are on the right place..</p></h1>
                            <div className="card text-white bg-success mb-3 col-4 offset-1" style={{maxWidth: '18rem'}}>
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold">New here?</h5>
                                    <p className="card-text"><Link to='/signup'><button type="button" className="btn btn-dark">
                                        Sign up
                                    </button></Link></p>
                                    <hr></hr>
                                    <h5 className="card-title font-weight-bold">Already a member?</h5>
                                    <p className="card-text"><Link to='/login'><button type="button" className="btn btn-dark">
                                        Login
                                    </button></Link></p>
                                </div>
                            </div>
                        </div>
                        <h2 className='text-muted'><cite>Explore 10000+ Jobs..</cite></h2>
                        <div className="form-row">
                            <div className="form-group col-md-4" >
                                <label>Job Description :</label>
                                <input
                                    name='jobTitle'
                                    value={this.state.jobTitle}
                                    onChange={this.handleChange}
                                    type="text"
                                    className="form-control rounded-0"
                                    placeholder='Job tiltle'
                                ></input>
                            </div>
                            <div className="form-group col-md-4 mx-5">
                                <label>Location :</label>
                                <input
                                    name='location'
                                    value={this.state.location}
                                    onChange={this.handleChange}
                                    type="text"
                                    className="form-control rounded-0"
                                    placeholder='Location'
                                ></input>
                            </div>
                            <div className="form-group col-md-2" style={{ marginTop: '32px' }}>
                                <button type='button' onClick={this.handleClick} className="btn btn-dark">Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <AllJobs jobs = {this.state.data} />
                    </div>
                </>
            )
        }
    }
}

export default Home