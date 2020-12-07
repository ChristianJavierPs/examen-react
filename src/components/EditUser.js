import React, { Component } from 'react';
import UserService from "../services/UserService";
import { UserForm } from "./UserForm";
import { connect } from 'react-redux';
import { MESSAGE } from '../actions/alertAction';

class  EditUser extends Component {
    
    constructor(props){
        super(props)
        console.log('userId > ', props.match.params);
        const  { userId }   = props.match.params;

        this.state={
            user: null,
            loading: false,
            userId : userId
        }
    }
    componentDidMount(){
        (async () => {
            try{
                const { data } = await UserService.getUserById(this.state.userId);
                this.setState({
                    user:data,
                    loading:true
                })
                console.log("Usuario > ",data);
                }
                catch ( err){
                console.log('Error > ', err);
                }
            }
        )()
    }
     handleSubmit = (user) =>{
        console.log("Usuario Id: ", this.state.userId);
        UserService.updateUser({...user, id: this.state.userId})
        .then(response =>{
            this.props.message({status:'SUCCESS',message:'Se ha actualizado con exito!!',show:true});
            this.props.history.replace('/users');
        })
        .catch(error => {
            console.log(error)
            this.props.message({status:'ERROR',message:'Ha ocurrido un error, no se ha podido actualizar!!',show:true});
            this.props.history.replace('/users');
        });
    };

     goBack  = () =>{
        this.props.history.push('/users');
    }
    render(){
    return(
                this.state.loading ? (<UserForm 
                    onSubmit= { this.handleSubmit }
                    onCancel = { this.goBack }
                    user = {this.state.user}
                    title = "Editar usuario"
                    btnValue = "Editar"
                    />):<div>Cargando...</div>
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

export default connect(null, mapDispatchProps)(EditUser);