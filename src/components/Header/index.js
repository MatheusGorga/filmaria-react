import { Link } from 'react-router-dom'
import './header.css'
import { Head} from './style'
function Header () {
  return (
    <Head>
        <Link className="logo" to="/" > 🎬 Filmaria </Link>
        <Link className="favoritos" to="/favoritos" > ⭐ Favoritos </Link>
    </Head>
  );
}

export default Header;
