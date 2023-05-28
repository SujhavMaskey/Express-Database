import { Router } from 'express';
const router = Router();

router.use('/', (req, res, next) => {
  console.log('username: ');
  res.send('id:its just a demo');
});
