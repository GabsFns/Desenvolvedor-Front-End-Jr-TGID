type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <div
      className="pagination"
      style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '20px' }}
    >
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        ← Anterior
      </button>

      {[...Array(totalPages)].map((_, i) => {
        const page = i + 1;
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            style={{
              fontWeight: page === currentPage ? 'bold' : 'normal',
              textDecoration: page === currentPage ? 'underline' : 'none',
              backgroundColor: page === currentPage ? '#007bff' : 'transparent',
              color: page === currentPage ? 'white' : '#007bff',
              border: '1px solid #007bff',
              padding: '6px 10px',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            aria-current={page === currentPage ? 'page' : undefined}
            aria-label={`Página ${page}`}
          >
            {page}
          </button>
        );
      })}

      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Próximo →
      </button>
    </div>
  );
}