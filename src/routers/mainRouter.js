import Express from 'express';
const mainRouter = Express.Router();

mainRouter.get('/', async (req, res, next) => {
  return res.render('index', {})
});

mainRouter.get('/concursos', async (req, res, next) => {
  return res.render('concursos', {})
});

mainRouter.get('/avaliacao', async (req, res, next) => {
  return res.render('avaliacao', {})
});

mainRouter.get('/noticias', async (req, res, next) => {
  return res.render('noticias', {})
});

mainRouter.get('/quemsomos', async (req, res, next) => {
  return res.render('quemsomos', {})
});

export {
  mainRouter
};
