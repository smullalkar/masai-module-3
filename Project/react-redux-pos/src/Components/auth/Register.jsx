import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import styles from './login.module.css'
import Button from '@material-ui/core/Button';
import { v4 as uuidv4 } from 'uuid';
import { connect } from "react-redux";
import { postData } from '../../Redux/Actions'

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            pass: '',
            uname: '',
            mob: '',
            description: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        const { postData, response, isLoading } = this.props
        return (
            <div className={styles.div}>
                {isLoading && <div>LOADING...</div>}
                <form>
                    <div className={styles.margin}>
                        <TextField 
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        label="Name" 
                        style={{width: '300px'}}/>
                    </div>
                    <div className={styles.margin}>
                        <TextField 
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        label="E-mail" 
                        style={{width: '300px'}}/>
                    </div>
                    <div className={styles.margin}>
                        <TextField 
                        name='pass'
                        value={this.state.pass}
                        onChange={this.handleChange}
                        label="Password" 
                        type="password" 
                        style={{width: '300px'}}/>
                    </div>
                    <div className={styles.margin}>
                        <TextField 
                         name='uname'
                         value={this.state.uname}
                         onChange={this.handleChange}
                        label="Username" 
                        style={{width: '300px'}}/>
                    </div>
                    <div className={styles.margin}>
                        <TextField 
                        name='mob'
                        value={this.state.mob}
                        onChange={this.handleChange}
                        label="Mobile" 
                        style={{width: '300px'}}/>
                    </div>
                    <div className={styles.margin}>
                        <TextField 
                         name='description'
                         value={this.state.description}
                         onChange={this.handleChange}
                        label="Description" 
                        style={{width: '300px'}}/>
                    </div>
                    <div className={styles.margin}>
                        <Button 
                        onClick={(e) => {
                            console.log(response)
                            e.preventDefault()
                            postData(this.state)
                        }}
                        variant="contained" 
                        style={{backgroundColor:'#8bc34a'}}>
                            Register
                        </Button>
                    </div>
                    {
                        response && response === 200 ? <div>REGISTERATION SUCCESSFUL. PLEASE LOGIN</div> : <div></div>
                    }
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        isLoading: state.auth.isLoading,
        response: state.auth.response,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        postData: a => dispatch(postData(a))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);