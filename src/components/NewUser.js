import React, { Component } from 'react';
// import { useHistory } from 'react-router-dom';
import UserService from '../services/UserService';
import { UserForm } from './UserForm';
import { MESSAGE } from '../actions/alertAction';
import { connect } from 'react-redux';

class NewUser extends Component {
    constructor(){
        super()
    }
 // history = useHistory();

 handleSubmit = (user) =>{

    UserService.createUser(user)
    .then(response =>{
        this.props.message({status:'SUCCESS',message:'Se ha registrado con exito!!',show:true});
        this.props.history.replace('/users');
        
    })
    .catch(error => {
        console.log(error)
        this.props.message({status:'ERROR',message:'Ha ocurrido un error, no se ha podido registrar!!',show:true});
        this.props.history.replace('/users');
    });
};
 goBack = () =>{
    //this.props.history.goBack();
    this.props.history.push('/users');
}
render(){
    return(
            <UserForm 
            onSubmit= { this.handleSubmit }
            onCancel = {this.goBack}
            title = "Create new user"
            btnValue = "Crear"
            />
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

const mapStateToProps = state =>({

})


export default connect(null, mapDispatchProps)(NewUser);