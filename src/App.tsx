import { useState } from "react";
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Modal from './components/Modal';
import CartButton from './components/CarButton';
import { useCarrinho } from './Hooks/useCarrinho';

import './assets/sass/productCard.scss';
import './assets/sass/productList.scss';

function App() {
  const [modalAberto, setModalAberto] = useState(false);

  const abrirModal = () => setModalAberto(true);
  const fecharModal = () => setModalAberto(false);

  const {
    carrinho,
    adicionarAoCarrinho,
    aumentarQuantidade,
    diminuirQuantidade,
    removerDoCarrinho,
    quantidadeTotal,
  } = useCarrinho();

  return (
    <div>
      <h1>Minha Loja Online</h1>

      <CartButton itemCount={quantidadeTotal} onClick={abrirModal} />

      <ProductList adicionarAoCarrinho={adicionarAoCarrinho} />

      <Modal isOpen={modalAberto} onClose={fecharModal}>
        <Cart
          carrinho={carrinho}
          aumentarQuantidade={aumentarQuantidade}
          diminuirQuantidade={diminuirQuantidade}
          removerDoCarrinho={removerDoCarrinho}
        />
      </Modal>
    </div>
  );
}

export default App;