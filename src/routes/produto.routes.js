const express = require("express"),
  router = express.Router();
  ProdutoController = require("../controller/produto.js");

router.get("/", async (req, res) => {
  try {
    const oProduto = await new ProdutoController().listar();
    return res.json(oProduto).status(200);
  } catch (error) {
    return res.json(error).status(404);
  }
});

router.get("/:id", async (req, res) => {
  const oId = req.params.id;
  try {
    const oProduto = await new ProdutoController().listarProduto(oId);
    return res.json(oProduto).status(200);
  } catch (error) {
    return res.json(error).status(404);
  }
});
router.post("/adicionar", async (req, res) => {
  const sProduto = req.body;
  try {
    const oProduto = await new ProdutoController().adicionar(sProduto);
    return res.json(oProduto).status(201);
  } catch (error) {
    return res.json(error).status(500);
  }

});
router.put("/atualizar", async(req, res) => {
  const sProduto = req.body;
  try {
    const oProduto = await new ProdutoController().atualizar(sProduto);
    return res.json(oProduto).status(200);
  } catch (error) {
    return res.json(error).status(404);
  }

});
router.delete("/:id", async (req, res) =>{
  const oId = req.params.id;
  try {
    const oProduto = await new ProdutoController().remover(oId);
    return res.json(oProduto).status(200);
  } catch (error) {
    return res.json(error).status(404);
  }

});

module.exports = router;
