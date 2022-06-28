import {useNavigate, Link} from 'react-router-dom'

export const Welcome = () => (
  <p>Bienvenido</p>
)

const Dashboard = ()=>{
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/')
  }
  
  return(<> 
  <button onClick={handleClick}>
    Salir
  </button>

  <Link to="welcome">Decir Bienvenido</Link>
</>)}

export default Dashboard;