import type { NextPage } from 'next'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/joke">
            <a>get a joke</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
