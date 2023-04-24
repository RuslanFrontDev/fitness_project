import { Navigate } from "react-router-dom"

function PrivateRoute({children}) {
  if(!localStorage.getItem("token")){

   return <Navigate to='/user/register'/>
  }
   return children
}
export default PrivateRoute