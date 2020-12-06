import { connect } from 'react-redux';
import clsx from 'clsx';
import { MESSAGE } from '../actions/alertAction';
import { useHistory } from 'react-router-dom';

const Header = ({alert,hiddenMessage}) => {
   
    const history = useHistory();
    if(alert.show){
        window.setTimeout(() =>{ 
            hiddenMessage();
        },3000);     
    }

    return(
<>
<header>

</header>
<div
className={clsx('modal', {
    'show':alert.show,
    'hidden':!alert.show
    },
    {
    'status-success': alert.status == 'SUCCESS',
    'status-error': alert.status == 'ERROR'
    })
    }>
        {alert.message}
</div>

</>
    );
}



    const mapStateToProps = state => { 
        return { alert: state.alert }; 
    };


    const mapDispatchToProps = dispatch => ({
        hiddenMessage(){
                alert.status = '';
                alert.message = '';
                alert.show = false;
                console.log(alert);
                dispatch({
                type:MESSAGE,
                payload:alert
                })
           
    }
})
    
/*     const mapDispatchToProps = dispatch => ({
        hiddenMessage(history){
            setTimeout(() =>{
                alert.status = '';
                alert.message = '';
                alert.show = false;
                console.log(alert);
                dispatch({
                type:MESSAGE,
                payload:alert
                })
            },3000);  
    }
}) */



export default connect(mapStateToProps, mapDispatchToProps)(Header);

/* import React, { Component } from 'react';
import {useSelector} from 'react-redux';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { MESSAGE } from '../actions/alertAction';
import { store } from '../store/store';
import { useState, useEffect } from 'react';
import { useParams,useHistory  } from 'react-router-dom';


class Header extends Component {

    constructor(props){
        super(props)
        let  {alert, hiddenMessage} = props;
       
        if(alert.show){
            console.log("this.props >", props);
           hiddenMessage();
           // history.push("/users");
        }
    }


   render(){
    return(
        <>
        <header>
        </header>
        <div
        className={clsx('modal', {
            'show':alert.show,
            'hidden':!alert.show})}>
            {alert.message}</div>
        </>);
   }
}



    const mapStateToProps = state => { 
        return { alert: state.alert }; 
    };
    
    
    const mapDispatchToProps = dispatch => ({
        hiddenMessage(){
            setTimeout(() =>{
                alert.status = '';
                alert.message = '';
                alert.show = false;
                console.log(alert);
                dispatch({
                type:MESSAGE,
                payload:alert
                })
                
            },3000);  
    }
})



export default connect(mapStateToProps, mapDispatchToProps)(Header);  */