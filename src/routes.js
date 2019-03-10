const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');
const PostController = require('./controllers/PostController');

routes.get("/",(requ, res) =>{
    return res.send("Upload arquivos service app");
});

routes.post("/posts", multer(multerConfig).single('file'), PostController.criar);
routes.get("/posts", PostController.buscarTodos);
routes.delete("/posts/:id",PostController.deletar);

module.exports = routes;