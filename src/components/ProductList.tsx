import type { Produto } from '../type/Produto';
import useProdutos from '../Hooks/usePaginacao';
import ProductCard from './ProductCard';
import Pagination from './Pagination';

type ProductListProps = {
  adicionarAoCarrinho: (produto: Produto) => void;
};

const itemsPerPage = 6;

export default function ProductList({ adicionarAoCarrinho }: ProductListProps) {
  const { produtos, currentPage, totalItens, loading, setCurrentPage } = useProdutos(itemsPerPage);
  const totalPages = Math.max(1, Math.ceil(totalItens / itemsPerPage));

  if (loading) return <p>Carregando produtos...</p>;
  if (!produtos.length) return <p>Nenhum produto encontrado.</p>;

  return (
    <div>
      <h2>Produtos</h2>
      <div className="container">
        {produtos.map((produto) => (
          <ProductCard
            key={produto.id}
            produto={produto}
            adicionarAoCarrinho={adicionarAoCarrinho}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}