import './ProfileCard.css'

interface ProfileCardProps {
  name: string
  city: string
  country: string
  avatar?: string
}

export function ProfileCard({
  name,
  city,
  country,
  avatar
}: ProfileCardProps) {

  return (
    <aside className="profile-card bg-white rounded p-3">

      <div className="profile-avatar d-flex align-items-center justify-content-center mb-3">

        {avatar ? (
          <img
            src={avatar}
            alt={`Foto de ${name}`}
            className="img-fluid rounded"
          />
        ) : (
          <span className="fs-1">👤</span>
        )}

      </div>

      <h5 className="profile-name mb-1">
        {name}
      </h5>

      <p className="text-muted small mb-3">
        {city}, {country}
      </p>

      <hr />

      <nav className="d-flex flex-column gap-2">
        <a href="#perfil">Meu perfil</a>
        <a href="#recados">Meus recados</a>
        <a href="#amigos">Meus amigos</a>
        <a href="#comunidades">Minhas comunidades</a>
      </nav>

    </aside>
  )
}
