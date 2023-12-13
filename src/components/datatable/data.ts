interface PropsType {
  id: number
  name: string
  img: string
  phoneNumber: string
  email: string
  state: boolean
  icon: string
}

export const contacts: PropsType[] = [
  {
    id: 0,
    name: 'Jose Joao',
    img: '/avatar.jpeg',
    phoneNumber: '935 555 500',
    email: 'anelka.jesus@gmail.com',
    state: true,
    icon: '/dots.svg',
  },
  {
    id: 1,
    name: 'Aguinaldo César',
    img: '/avatar.jpeg',
    phoneNumber: '935 555 500',
    email: 'anelka.jesus@gmail.com',
    state: false,
    icon: '/dots.svg',
  },
  {
    id: 2,
    name: 'Wilmy Danguya',
    img: '/avatar.jpeg',
    phoneNumber: '935 555 500',
    email: 'anelka.jesus@gmail.com',
    state: true,
    icon: '/dots.svg',
  },
  {
    id: 3,
    name: 'Edgar Barros',
    img: '/avatar.jpeg',
    phoneNumber: '935 555 500',
    email: 'anelka.jesus@gmail.com',
    state: true,
    icon: '/dots.svg',
  },
  {
    id: 4,
    name: 'Aristides Gongo',
    img: '/avatar.jpeg',
    phoneNumber: '935 555 500',
    email: 'anelka.jesus@gmail.com',
    state: true,
    icon: '/dots.svg',
  },
  {
    id: 5,
    name: 'Edmar Matias',
    img: '/avatar.jpeg',
    phoneNumber: '935 555 500',
    email: 'anelka.jesus@gmail.com',
    state: false,
    icon: '/dots.svg',
  },
]

interface PropsTypeTableHeader {
  id: number
  content: string
}

export const tableHeader: PropsTypeTableHeader[] = [
  {
    id: 0,
    content: 'Nome do Contato',
  },
  {
    id: 1,
    content: 'Contato',
  },
  {
    id: 2,
    content: 'Email',
  },
  {
    id: 3,
    content: 'Estado',
  },
  {
    id: 4,
    content: 'Ações',
  },
]
