import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from '../components/Container'

const Footer = () => {
  return (
    <footer className="py-5">
      <Container>
        <div className="flex items-center space-y-2 flex-wrap">
          <div className="w-full md:w-6/12 text-center md:text-left">

            Powered by <a href="https://github.com/mathdroid/covid-19-api" className="text-blue-500 hover:underline">COVID-19 API MathDroid</a>

          </div>
          <div className="w-full md:w-6/12 text-center md:text-right">

            Made with <FontAwesomeIcon icon={['fas', 'heart']} className="text-red-500" /> by Zahniar Adirahman

          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer