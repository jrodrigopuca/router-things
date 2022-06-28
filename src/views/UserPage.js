import {useParams} from 'react-router-dom'
const UserPage = ()=>{
  const {userId} = useParams();

  return (<> User: {userId} </>)}

export default UserPage;