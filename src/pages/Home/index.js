import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdShoppingCart } from 'react-icons/md';
import { api } from '../../services/api';
import { ProductsList } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch({
      type: 'ADD_TO_CART',
      product
    });
  };

  useEffect(async () => {
    const { data } = await api('products');
    setProducts(data);
  }, []);

  return (
    <ProductsList>
      {products.length > 0 ? (
        products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.price}</span>

            <button type="button" onClick={() => handleAddToCart(product)}>
              <div>
                <MdShoppingCart size={16} />
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </ProductsList>
  );
}

// export default connect()(Home);
