import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.svg';

export function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span> 3 items</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}