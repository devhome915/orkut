import { useState } from 'react'
import './App.css'

import {Header} from './components/Header/Header'
import { ProfileCard } from './components/ProfileCard/ProfileCard'

function App() {
  const [count, setCount] = useState(0)

  const profileDate = {name:"Alex dos santos", city:"São Paulo", country:"Brasil", avatar:"https://picsum.photos/300/300?random=1"}

  return (
    <>
      <Header />

      <main className="container my-4">
        <div className="row g-3">

          {/* Coluna esquerda */}
          <div className="col-12 col-lg-3">
            <ProfileCard  
              name={profileDate.name} 
              city={profileDate.city}
              country={profileDate.country}
              avatar={profileDate.avatar}
            />
          </div>

          {/* Coluna central */}
          <div className="col-12 col-lg-6">
            <section className="bg-white rounded p-4 h-100">
              <h2 className="text-primary">
                Bem-vindo ao Orkut!
              </h2>

              <p>
                Essa é sua página inicial.
              </p>

              <hr />

              <h5>Sobre mim</h5>
              <p className="text-muted">
                Em breve você poderá editar seu perfil.
              </p>
            </section>
          </div>

          {/* Coluna direita */}
          <div className="col-12 col-lg-3">
            <aside className="bg-white rounded p-3">
              <h5 className="text-primary">
                Amigos
              </h5>

              <p className="text-muted small">
                Nenhum amigo adicionado.
              </p>

              <hr />

              <h5 className="text-primary">
                Comunidades
              </h5>

              <p className="text-muted small mb-0">
                Nenhuma comunidade.
              </p>
            </aside>
          </div>

        </div>
      </main>
    </>
  )
}

export default App
