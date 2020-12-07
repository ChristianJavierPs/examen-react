import { useState, useEffect } from 'react';
import { User } from './User';
import UserService from '../services/UserService';
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { MESSAGE } from '../actions/alertAction';
import { connect } from 'react-redux';

class Users extends Component {

    constructor(){
        super()
        this.state = {
            users: []
        }
    
    }

    componentDidMount(){
        UserService.getUsers()
        .then(response =>{
            this.setState({
                users: response.data
            })
        })
    }
	 handleDelete = (id) => {
		UserService.deleteUser(id)
			.then(() => {
                let filterUsers = this.state.users.filter(u => u.id !== id);
                this.setState({
                    users: filterUsers
                });
                this.props.message({status:'SUCCESS',message:'Se ha eliminado con exito!!',show:true});
			}).catch(error => {
                console.log(error)
                this.props.message({status:'ERROR',message:'Ha ocurrido un error, no se ha podido eliminar!!',show:true});
            });
	};
    render(){
        return(
            <div className="container-table-user">
            <div className="container-create-user">            
            <h2>Lista de usuarios</h2>
            <Link className="button btn-info" to="/users/new">
                Crear usuario
            </Link>
            </div>
        <table class="table-user">
            <thead>
                <tr>
                    <th>#</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.users.map((user, index) =>(
                    <User 
                        key={`User-list-${user.id}`}
                        user={user}
                        index={index + 1}
                        deleteFn={this.handleDelete}
                        />
                    ))
                }
            </tbody>
        </table>   
        </div>
        )
    }
}

const mapDispatchProps = dispatch => ({
    message(alert){
        dispatch({
            type: MESSAGE,
            payload: alert
        });
}
})

export default connect(null, mapDispatchProps)(Users);
