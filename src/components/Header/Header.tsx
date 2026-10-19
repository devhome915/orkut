import './Header.css'

export function Header(){
    
    const linkNav = [
        {
            link:'#inicio',
            title:'Início'
        },
        {
            link:'#perfil',
            title:'Perfil'
        },
        {
            link:'#recados',
            title:'Recados'
        },
        {
            link:'#amigos',
            title:'Amigos'
        },
        {
            link:'#comunidades',
            title:'Comunidades'
        },
    ]

    return(
        <header className="orkut-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">

          {/* Logo */}
          <a className="navbar-brand orkut-logo" href="#inicio">
            orkut
          </a>

          {/* Menu de navegação */}
          <div className="navbar-nav ms-auto">

            <a className="nav-link" href="#inicio">
              Início
            </a>

            <a className="nav-link" href="#perfil">
              Perfil
            </a>

            <a className="nav-link" href="#recados">
              Recados
            </a>

            <a className="nav-link" href="#amigos">
              Amigos
            </a>

            <a className="nav-link" href="#comunidades">
              Comunidades
            </a>

          </div>

        </div>
      </nav>
    </header>
    )
}

