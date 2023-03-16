const mProduto = require("../produto");

module.exports = class ProdutoDao {
  constructor(){

  };

  listarTodos(){
    try {
      const oProdutos = mProduto.findAll();
      return oProdutos;
    } catch (error) {
      return error;
    }
  };
  adicionar(produto){
    try {
      const oProduto = mProduto.create({
        nome: produto.nome,
        descricao: produto.descricao,
        quantidade: produto.quantidade,
        valor: produto.valor
      });
      return oProduto;
    } catch (error) {
      return error;
    }
  };
  listarProduto(id) {
    try {
      const oProduto = mProduto.findByPk(id);
      return oProduto;
    } catch (error) {
      return error;
    }
  };
  remover(id){
    try {
      const oProduto = mProduto.destroy(
        {where: {
          id: id
        }}
      );
      return oProduto;
    } catch (error) {
      return error;
    }
  };
  atualizar(produto){
    mProduto.update({
      nome: produto.nome,
      descricao: produto.descricao,
      quantidade: produto.quantidade,
      valor: produto.valor
    },
    {
      where:{
        id: produto.id
      }
    })
    .then((sucess) => {
      return sucess;
    })
    .catch((error) => {
      return error;
    })
  }
}
