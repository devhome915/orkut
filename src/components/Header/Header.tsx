import { NavLink } from 'react-router-dom'

import './Header.css'

export function Header(){
    
    const links = [
      { path: '/', title: 'Início' },
      { path: '/perfil', title: 'Perfil' },
      { path: '/recados', title: 'Recados' },
      { path: '/amigos', title: 'Amigos' },
      { path: '/comunidades', title: 'Comunidades' }
    ]

    return(
        <header className="orkut-header">
          <nav className="navbar navbar-expand-lg">
            <div className="container flex-column flex-lg-row gap-2">

              <NavLink
                to="/"
                className="navbar-brand orkut-logo"
              >
                orkut
              </NavLink>

              <div className="navbar-nav flex-row flex-wrap justify-content-center gap-3 ms-lg-auto">

                {links.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? 'active' : ''}`
                    }
                  >
                    {link.title}
                  </NavLink>
                ))}

              </div>

            </div>
          </nav>
        </header>
    )
}

