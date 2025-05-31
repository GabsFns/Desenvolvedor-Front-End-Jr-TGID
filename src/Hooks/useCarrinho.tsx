import { useState } from "react";
import type { Produto } from "../type/Produto";
import type { ItemCarrinho } from "../type/itemCarrinho";

export function useCarrinho() {
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);

  const adicionarAoCarrinho = (produto: Produto) => {
    setCarrinho(prev => {
      const index = prev.findIndex(item => item.produto.id === produto.id);
      if (index !== -1) {
        const novoCarrinho = [...prev];
        novoCarrinho[index].quantidade += 1;
        return novoCarrinho;
      }
      return [...prev, { produto, quantidade: 1 }];
    });
  };

  const aumentarQuantidade = (index: number) => {
    setCarrinho(prev => {
      const novoCarrinho = [...prev];
      novoCarrinho[index].quantidade += 1;
      return novoCarrinho;
    });
  };

  const diminuirQuantidade = (index: number) => {
    setCarrinho(prev => {
      const novoCarrinho = [...prev];
      if (novoCarrinho[index].quantidade > 1) {
        novoCarrinho[index].quantidade -= 1;
      } else {
        novoCarrinho.splice(index, 1);
      }
      return novoCarrinho;
    });
  };

  const removerDoCarrinho = (index: number) => {
    setCarrinho(prev => {
      const novoCarrinho = [...prev];
      novoCarrinho.splice(index, 1);
      return novoCarrinho;
    });
  };

  const quantidadeTotal = carrinho.reduce((acc, item) => acc + item.quantidade, 0);

  return {
    carrinho,
    adicionarAoCarrinho,
    aumentarQuantidade,
    diminuirQuantidade,
    removerDoCarrinho,
    quantidadeTotal,
  };
}