import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUsers extends Component {
    
    state = {
        users: [],
        username: ""
    };

    getUsers = async () => {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({users: res.data});
    }

    async componentDidMount() {
        this.getUsers();
        console.log(this.state.users);
    }

    usernameOnChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    usernameOnSubmit = async e => {
        e.preventDefault();
        const res = await axios.post("http://localhost:4000/api/users", {
            username: this.state.username
        })

        this.setState({username: ""});
        this.getUsers();

        console.log(res)
    }

    deleteUser = async id => {
        await axios.delete("http://localhost:4000/api/users/" + id)
        
        this.getUsers();
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Create New User</h3>
                        <form onSubmit={this.usernameOnSubmit}>
                            <div className="form-froup">
                                <input 
                                type="text" 
                                className="form-control"
                                value={this.state.username}
                                onChange={this.usernameOnChange}/>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map(user => (
                                <li className="list-group-item list-group-item-action"
                                    key={user._id}
                                    onDoubleClick={() => this.deleteUser(user._id)}
                                    >
                                    {user.username}
                                </li>)
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
