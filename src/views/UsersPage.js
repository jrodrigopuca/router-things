import {Link} from 'react-router-dom'

const randomUser = Math.floor(Math.random() * 100) 
const UsersPage = ()=>(<>
  Usuario para visitar <Link to={`/user/${randomUser}`}>{randomUser}</Link>
</>)

export default UsersPage;