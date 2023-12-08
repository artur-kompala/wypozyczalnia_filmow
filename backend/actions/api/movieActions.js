const Movie = require('../../db/models/movie')
const mongoose = require('mongoose');

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
      const isObjectId = mongoose.Types.ObjectId.isValid(id);

        const condition = isObjectId ? { _id: id } : {
            $or: [
              { tytul: id },
              { gatunek: id }
            ]
          };

        
        Movie.find(condition)
        .then((doc) => {
            if (doc) {
            res.status(200).json(doc);
            } else {
            res.status(404).json({ message: 'Movie not found' });
            }
        })
        .catch((err) => {
            return res.status(500).json({ message: err.message });
        });
   }
   newMovie(req,res){
   
      const {tytul,gatunek,rezyser,czas_trwania,ocena,opis,aktorzy} = req.body;  
      const newMovie = new Movie({tytul: tytul,gatunek: gatunek,rezyser: rezyser,czas_trwania: czas_trwania,ocena: ocena,opis: opis,aktorzy: aktorzy,data_dodania: Date.now()})
      newMovie.save().then(()=>{
          console.log('Notatka została zapisana');
      });
      res.send('DODAJ FILM')
   }
   updateMovie(req,res){
      const id = req.params.id;
      const {tytul,gatunek,rezyser,czas_trwania,ocena,opis,aktorzy} = req.body;  
      Movie.updateOne({_id: id},{tytul: tytul,gatunek: gatunek,rezyser: rezyser,czas_trwania: czas_trwania,ocena: ocena,opis: opis,aktorzy: aktorzy,data_dodania: Date.now()})
      .then((doc) => {
          res.status(200).json(doc);
      })
      .catch((err) => {
          return res.status(500).json({message: err.message})
      });
   }
   deleteMovie(req, res) {
    const id = req.params.id;

    Movie.deleteOne({ _id: id })
        .then((result) => {
            if (result.deletedCount === 1) {
                res.status(200).json({ message: "Film został pomyślnie usunięty." });
            } else {
                res.status(404).json({ message: "Nie znaleziono filmu o podanym ID." });
            }
        })
        .catch((err) => {
            console.error("Błąd usuwania filmu:", err);
            res.status(500).json({ message: "Wystąpił błąd serwera podczas usuwania filmu." });
        });
}
   
   
}

module.exports = new MovieActions()