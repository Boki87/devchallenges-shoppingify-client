import {useSelector} from 'react-redux'
import ProtectedRoutes from './components/ProtectedRoutes'
import Auth from './components/auth/Auth'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const user = useSelector(state => state.user)

  return (
    <>
      {user.name ? <ProtectedRoutes /> : <Auth />}    
      <ToastContainer                
          autoClose={2000}
      />
    </>
  );
}

export default App;
