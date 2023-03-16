const ProdutoDao = require("../model/DAO/produto");

module.exports = class ProdutoController{
  constructor(){

  }
  listar(){
    const oProduto = new ProdutoDao().listarTodos();
    return oProduto;
  };
  listarProduto(id){
    const oProduto = new ProdutoDao().listarProduto(id);
    return oProduto;
  };
  adicionar(produto){
    const oProduto = new ProdutoDao().adicionar(produto);
    return oProduto;
  };
  atualizar(produto){
    const oProduto = new ProdutoDao().atualizar(produto);
    return oProduto;
  }
  remover(id){
    const oProduto = new ProdutoDao().remover(id);
    return oProduto;
  }
}
