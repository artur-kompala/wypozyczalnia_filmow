const Movie = require('../../db/models/movie')


module.exports = {
   newMovie(req,res){
      const newMovie = new Movie({tytul: 'test',gatunek: 'test',rezyser: 'test',czas_trwania: 12,ocena:1,opis:"test",aktorzy:[],data_dodania: Date.now()})
      newMovie.save().then(()=>{
          console.log('Notatka została zapisana');
      });
      res.send('DZIAŁA')
   }
 
}