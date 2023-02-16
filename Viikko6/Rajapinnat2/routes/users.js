var express = require('express');
var router = express.Router();
//HTTP GET ESIMERKKI 
/* GET users listing. */ 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/toka',function(request,response)
  {
    response.send('Olen toka reitti');
    console.log('Toka');
  }
); //callback funktion loppu

//GET-metodi yhdellä parametrilla
//Tulostaa nimin joka annetaan
router.get('/kolmas/:name',function(request,response)
  {
    //Lähettää tekstin consolille
    response.send('Heippa '+request.params.name);
    console.log(request.params.name);
  }
); 
//GET-metodi kahdella parametrilla
router.get('/neljas/:fname/:lname',function(request,response)
  {
    //Lähettää tekstin consolille
    response.send('Heippa '+request.params.fname+' '+request.params.lname);
    console.log(request.params.fname+' '+request.params.lname);
  }
);
//HTPP POST ESIMERKKI
router.post('/',function(request,response)
  {
    response.send(request.body.fname+' '+request.body.lname);
    console.log(request.body.fname+' '+request.body.lname);
  }
);
//HTPP PUT ESIMERKKI ...vastaa update komentoa
router.put('/:id',function(request,response)
  {
    response.send('Henkilölle '+request.params.id+' muutetaan nimeksi '
    +request.body.fname+' '+request.body.lname);
    console.log(request.body.fname+' '+request.body.lname);
  }
);

module.exports = router;
