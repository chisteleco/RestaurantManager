import express,{Request,Response} from 'express';

var router = express.Router();

// middleware that is specific to this router
// define the home page route
router.get('/', function(req:Request, res:Response) {
  //get user and password from request
  res.send('Login home page');
});
// define the about route
router.get('/about', function(req, res) {
  res.send('About login');
});

module.exports = router;