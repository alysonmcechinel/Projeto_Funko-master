//"https://http2.mlstatic.com/D_NQ_NP_2X_825979-MLA48532306897_122021-V.webp"
const router = require('express').Router();
const User = require('../models/Users');

// rotas
router.post("/:user", async (req, res) => {

  const userParams = req.params.user;
  const { 
          funkos: {
            descricao, valor, url, sale
          }
        } = req.body;

  const funko = {
    descricao: descricao,
    valor: valor,
    url: url,
    sale: sale
  };

  try {

    await User.findOneAndUpdate({ login: userParams}, {$push: { funkos: funko }});

    res.status(201).json({ message: "funko inserido com sucesso" });

  } catch (error) {
    res.status(500).json({ erro: error });
  }
});

router.get("/:sale", async (req, res) => {

  const userParams = req.params.sale;
  
  try {
    var user;

    if(userParams === 'true')
      user = await User.find({ 'funkos.sale': true }, { 'funkos.$': 1 })
    else
      user = await User.find({ 'funkos.sale': false }, { 'funkos.$': 1 })
    
    res.status(200).json(user);

  } catch (error) {
    res.status(500).json({ erro: error });
  }
});

router.get("/:id", async (req, res) => {
  const userParams = req.params.user;

  try {
    const user = await User.findOne({ user: userParams });

    if (!user) {
      res.status(422).json({ message: "Usuário não encontrado!" });
      return;
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ erro: error });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await User.updateOne(
      {},
      {
        $pull: {
          funkos: {
            _id: id,
          },
        },
      }
    );

    res.json({ message: "Funko removido com sucesso!" });
  } catch (error) {
    res.status(500).json({ erro: error });
  }
});

module.exports = router;
