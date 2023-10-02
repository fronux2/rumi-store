import Button from './components/button'
import Link from 'next/link'
const links = [{
  label: 'Home',
  route: '/'
}, {
  label: 'Inicio',
  route: '/inicio'
}]
export default function Home () {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
          Holaa
          <Button>
        <Link href={links[1].route}>
          {links[1].label}
        </Link>
      </Button>

      <Button>
        Danger
      </Button>
    </main>
  )
}
