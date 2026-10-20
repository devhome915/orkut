import { Navigate } from 'react-router-dom'
import { currentUser } from '../data/users'

function ProfileRedirect() {
  return (
    <Navigate
      to={`/perfil/${currentUser.id}`}
      replace
    />
  )
}

export default ProfileRedirect