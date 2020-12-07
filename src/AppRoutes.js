import { BrowserRouter as Router,
         Switch,
         Route,
         Redirect
        }  from 'react-router-dom'

import  Users  from './components/Users';
import EditUser  from './components/EditUser';
import  NewUser  from './components/NewUser';

        const AppRoutes = () => {
            return (
                    
                    <Router>
                        <Switch>
                        <Route path="/users" exact component={ Users } />
                        <Route path="/users/edit/:userId" component={ EditUser } />
                        <Route path="/users/new" component={ NewUser } />            
                        </Switch>
                        <Redirect from='/' to='/users'/>
                    </Router>
                    
            )
        }

export default AppRoutes;