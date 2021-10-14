import { useEffect, useState } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { api } from '../../services/api';
import { ProductsList } from './styles';

export function Home() {
  const [products, setProducts] = useState([]);

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

            <button type="button">
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
