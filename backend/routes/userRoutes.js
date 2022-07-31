const router = require('express').Router();
const User = require('../models/Users');

// create 
router.post('/', async (req, res) => {

  const { name, login, senha } = req.body;

  if(!name){
    return res.status(422).json({ error: 'O nome é obrigatorio'})
  }

  if(!login){
    return res.status(422).json({ error: 'O login é obrigatorio'})
  }

  if(!senha){
    return res.status(422).json({ error: 'A senha é obrigatorio'})
  }

  const user = {
    name,
    login,
    senha
  }; 

  try {

    const query = { login : user.login }  
    const userDuplicado = await User.find(query)

    if (userDuplicado.length > 0) {
      return res.status(400).json({ error: "Usuario ja existe" })
    }

    await User.create(user);
    res.status(201).json({ message: "usuario cadastrado com sucesso" });

  } catch (error) {
    res.status(500).json({ erro: error });
  }
});

router.get("/", async (req, res) => {

  try {

    const user = await User.find();
    res.json(user);

  } catch (error) {
    res.status(500).json({ erro: error });
  }

});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findOne({ _id: id });

    if (!user) {
      res.status(422).json({ message: 'Usuário não encontrado!' });
      return;
    }

    res.status(200).json(user);

  } catch (error) {

    res.status(500).json({ erro: error });

  }
});

router.patch("/:id", async (req, res) => {
  
  const id = req.params.id;
  const { name, login, senha } = req.body;

  const users = {
    name,
    login,
    senha,
  };

  try {
    const updatedUser = await User.updateOne({ _id: id }, users);

    if (updatedUser.matchedCount === 0) {
      res.status(422).json({ message: "Usuário não encontrado!" });
      return;
    }

    res.json(users);

  } catch (error) {
    res.status(500).json({ erro: error });
  }
});

router.delete("/:id", async (req, res) => {
  
  const id = req.params.id;
  const user = await User.findOne({ _id: id });

  if (!user) {
    res.status(422).json({ message: "Usuário não encontrado!" });
    return;
  }

  try {

    await User.deleteOne({ _id : id });
    res.status(200).json({ message: "Usuário removido com sucesso!" });

  } catch (error) {
    res.status(500).json({ erro: error });
  }
});

module.exports = router;
