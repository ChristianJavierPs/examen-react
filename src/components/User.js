import propTypes from 'prop-types';
import { Link } from 'react-router-dom';


export const User = ({user, index, deleteFn}) =>{

    if(!user){
        return null;
    }
    const handleClick = (evt) =>{
        deleteFn(user.id);
     };

return(
    <tr key={user.id}>
        <td>{index}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
        <td>
            <Link className="button btn-info" to={`/users/edit/${user.id}`}>Editar</Link>
        </td>
        <td>
            <button className="button btn-danger" onClick={handleClick}>Eliminar</button>
        </td>
    </tr>
)
} 

User.propTypes = {
    user: propTypes.object.isRequired,
    index: propTypes.number
}
        
User.defaultProps = {
    user:{},
    index:1,
    deleteFn: () =>{}
}

export default User