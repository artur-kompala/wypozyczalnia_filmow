const Movie = require('../../db/models/movie')

class MovieActions{

   getAllMovies(req,res){
      res.send('WSZYSTKIE FILMY');
   }
   getMovie(req,res){
      res.send("JEDEN FILM");
   }
   newMovie(req,res){
      const newMovie = new Movie({tytul: 'test',gatunek: 'test',rezyser: 'test',czas_trwania: 12,ocena:1,opis:"test",aktorzy:[],data_dodania: Date.now()})
      newMovie.save().then(()=>{
          console.log('Notatka została zapisana');
      });
      res.send('DODAJ FILM')
   }
   updateMovie(req,res){
      res.send('UPDATE FILM');
   }
   deleteMovie(req,res){
      res.send('DELETEFILM');
   }
   
   
}

module.exports = new MovieActions()