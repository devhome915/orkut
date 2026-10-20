import type { User } from '../types/User'

export const currentUser: User = {
  id: 1,
  name: 'Alex dos Santos Silva',
  city: 'São Paulo',
  country: 'Brasil',
  avatar:"https://picsum.photos/300/300?random=1"
}

export const friends: User[] = [
  {
    id: '2',
    name: 'Mariana Souza',
    city: 'Rio de Janeiro',
    country: 'Brasil',
    avatar:"https://picsum.photos/300/300?random=2"
  },
  {
    id: '3',
    name: 'Pedro Oliveira',
    city: 'Campinas',
    country: 'Brasil',
    avatar:"https://picsum.photos/300/300?random=3"
  },
  {
    id: '4',
    name: 'Ana Paula',
    city: 'Santos',
    country: 'Brasil',
    avatar:"https://picsum.photos/300/300?random=4"
  },
  {
    id: '5',
    name: 'Lucas Ferreira',
    city: 'Curitiba',
    country: 'Brasil',
    avatar:"https://picsum.photos/300/300?random=5"
  },
  {
    id: '6',
    name: 'Juliana Costa',
    city: 'São Paulo',
    country: 'Brasil',
    avatar:"https://picsum.photos/300/300?random=6"
  },
  {
    id: '7',
    name: 'Roberto Lima',
    city: 'Belo Horizonte',
    country: 'Brasil',
    avatar:"https://picsum.photos/300/300?random=7"
  }
]

export const users: User[] = [
  currentUser,
  ...friends
]