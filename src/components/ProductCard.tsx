

import type {Produto} from "../type/Produto"


    type ProdutoCardPrpos = {
        produto: Produto,
        adicionarAoCarrinho: (produto: Produto) => void,
    }
    
export default function ProductCard({ produto, adicionarAoCarrinho } : ProdutoCardPrpos){
    
    
    return (
        <>
        <section className='cardContainer'>
            <div>
            <img src={produto.foto} alt={produto.nome} width="150" />
                <h3>{produto.nome}</h3>
                <p>{produto.descricao}</p>
                <p>R$ {produto.preco.toFixed(2)}</p>
            <button onClick={() => adicionarAoCarrinho(produto)}>Adicionar ao Carrinho</button>
            </div>
      </section>

        </>
    )
}