import {useParams, useNavigate} from 'react-router-dom'

const UserPage = ()=>{
  const navigate = useNavigate()
  const {userId} = useParams();

  // if (isNaN(parseInt(userId))) (navigate('/users'))
  // else{
  return (<> User: {userId} </>)
  //}

  }


export default UserPage;