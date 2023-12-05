const Movie = require('../../db/models/movie')

class MovieActions{

   getAllMovies(req,res){
      Movie.find({})
      .then((doc) => {
          res.status(200).json(doc);
      })
      .catch((err) => {
          return res.status(500).json({message: err.message})
      });
      
   }
   getMovie(req,res){
      const id = req.params.id;
      Movie.find({_id: id})
      .then((doc) => {
          res.status(200).json(doc);
      })
      .catch((err) => {
          return res.status(500).json({message: err.message})
      });
   }
   newMovie(req,res){
      const newMovie = new Movie({tytul: 'test',gatunek: 'test',rezyser: 'test',czas_trwania: 12,ocena:1,opis:"test",aktorzy:[],data_dodania: Date.now()})
      newMovie.save().then(()=>{
          console.log('Notatka została zapisana');
      });
      res.send('DODAJ FILM')
   }
   updateMovie(req,res){
      const id = req.params.id;
      Movie.find({_id: id})
      .then((doc) => {
          res.status(200).json(doc);
      })
      .catch((err) => {
          return res.status(500).json({message: err.message})
      });
   }
   deleteMovie(req,res){
      res.send('DELETEFILM');
   }
   
   
}

module.exports = new MovieActions()