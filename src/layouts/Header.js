import { connect } from 'react-redux';
import clsx from 'clsx';
import { MESSAGE } from '../actions/alertAction';
import { useHistory } from 'react-router-dom';

const Header = ({alert,hiddenMessage}) => {
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
export default connect(mapStateToProps, mapDispatchToProps)(Header);