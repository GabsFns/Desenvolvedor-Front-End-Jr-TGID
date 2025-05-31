import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

interface CartButtonProps {
  itemCount: number;
  onClick: () => void;
}

const CartButton: React.FC<CartButtonProps> = ({ itemCount, onClick }) => {
  return (
    <button className='BttCarrinho' onClick={onClick}>
       <FaShoppingCart /> Carrinho ({itemCount})
    </button>
  );
};

export default CartButton;
