import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="py-3 bg-white border-b shadow sticky top-0">
      <div className="w-11/12 md:w-10/12 mx-auto flex justify-between items-center">

        {/* brand */}
        <Link href="/">
          <a className="text-teal-600 text-xl uppercase font-bold">
            <FontAwesomeIcon icon={['fas', 'atom']} />
            <span className="ml-1">Covid 19</span>
          </a>
        </Link>

        {/* nav menu */}
        <div className="flex items-center">

          <a href="https://github.com/zahniar88" className="px-3 py-2 hover:bg-gray-100 rounded">
            <FontAwesomeIcon icon={['fab', 'github']} size="lg" className="text-gray-900" />
            <span className="hidden ml-1 md:inline">Github</span>
          </a>

          <a href="https://github.com/zahniar88" className="px-3 py-2 hover:bg-gray-100 rounded">
            <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" className="text-blue-400" />
            <span className="hidden ml-1 md:inline">Twitter</span>
          </a>

        </div>

      </div>
    </nav>
  )
}

export default Navbar