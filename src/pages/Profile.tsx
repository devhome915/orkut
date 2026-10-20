import { ProfileCard } from '../components/ProfileCard/ProfileCard'
import { currentUser } from '../data/users'

function Profile() {
  return (
    <div className="row g-3">
      <div className="col-12 col-lg-4">
        <ProfileCard user={currentUser} />
      </div>

      <div className="col-12 col-lg-8">
        <section className="bg-white rounded p-4">
          <h2>Meu perfil</h2>
          <p>Informações pessoais do usuário.</p>
        </section>
      </div>
    </div>
  )
}

export default Profile