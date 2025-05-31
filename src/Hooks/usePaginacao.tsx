import { useEffect, useState } from 'react';
import api from '../service/api';
import type { Produto } from '../type/Produto';

export default function useProdutos(itemsPerPage: number) {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItens, setTotalItens] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAllProdutos = async () => {
      setLoading(true);
      try {
        const res = await api.get<Produto[]>(`/produtos`);
        setTotalItens(res.data.length);

        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        setProdutos(res.data.slice(start, end));
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
        setProdutos([]);
        setTotalItens(0);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProdutos();
  }, [currentPage, itemsPerPage]);

  return {
    produtos,
    currentPage,
    totalItens,
    loading,
    setCurrentPage,
  };
}