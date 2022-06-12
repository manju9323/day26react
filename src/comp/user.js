import { useParams } from "react-router-dom";
//import usersList from "../sample.json";
/*const [users]=usersList.filter((u)=>u.id === Number(id));
  return (
    <div>{users.name}</div>
  )*/
function Users() {
  const params=useParams()
return(
  <div>{params.id}</div>)
}

export default Users
