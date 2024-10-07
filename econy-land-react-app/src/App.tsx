import { Navigate, Outlet } from 'react-router-dom'
import './App.css'
import { useAppSelector } from './hooks'


function App() {
const isLoggedIn = useAppSelector(state => state.login.isLoggedIn)

  return <div>
    {!isLoggedIn && <Navigate to="/login"/>}
    <Outlet/>
    </div>
}

export default App
