const router = require('express').Router();
const apiRoutes = require('../routes/api');
const htmlRoutes = require('../routes/html');
console.log('hello');
router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;
