import type { ItemCarrinho } from '../type/itemCarrinho';
import { FaTrash } from 'react-icons/fa';

type CartProps = {
  carrinho: ItemCarrinho[];
  aumentarQuantidade: (index: number) => void;
  diminuirQuantidade: (index: number) => void;
  removerDoCarrinho: (index: number) => void;
};

export default function Cart({
  carrinho,
  aumentarQuantidade,
  diminuirQuantidade,
  removerDoCarrinho
}: CartProps) {
  const total = carrinho.reduce((acc, item) => acc + item.produto.preco * item.quantidade, 0);

  return (
    <div className='ContainerContentModal'>
      <h2>Carrinho</h2>
      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <ul>
          {carrinho.map((item, index) => (
            <li key={index}>
              {item.produto.nome} - R$ {item.produto.preco.toFixed(2)} × {item.quantidade}
              <div className='sectionBtt'>
                <button onClick={() => diminuirQuantidade(index)}>-</button>
                <button onClick={() => aumentarQuantidade(index)}>+</button>
                <button onClick={() => removerDoCarrinho(index)}><FaTrash /></button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: R$ {total.toFixed(2)}</h3>
    </div>
  );
}