import { Link, useParams } from 'react-router-dom'

import { ProfileCard } from '../components/ProfileCard/ProfileCard'
import { users } from '../data/users'

function Profile() {
  const { id } = useParams<{ id: string }>()

  const user = users.find((item) => item.id === id)

  if (!user) {
    return (
      <section className="bg-white rounded p-4 text-center">
        <h2>Usuário não encontrado</h2>

        <p>
          Não foi possível localizar o perfil solicitado.
        </p>

        <Link to="/" className="btn orkut-btn">
          Voltar ao início
        </Link>
      </section>
    )
  }

  return (
    <div className="row g-3">

      <div className="col-12 col-lg-4">
        <ProfileCard user={user} />
      </div>

      <div className="col-12 col-lg-8">
        <section className="bg-white rounded p-4">

          <h2>{user.name}</h2>

          <p>
            {user.city}, {user.country}
          </p>

          <hr />

          <h5>Sobre mim</h5>

          <p>
            {user.bio ?? 'Este usuário ainda não escreveu uma descrição.'}
          </p>

          <Link to="/amigos" className="btn orkut-btn">
            Ver amigos
          </Link>

        </section>
      </div>

    </div>
  )
}

export default Profile