const Customer = require('../../db/models/customer')

class CustomerActions{
    getAllCustomer(req,res){
        Customer.find({})
        .then((doc) => {
            res.status(200).json(doc);
        })
        .catch((err) => {
            return res.status(500).json({message: err.message})
        });
        
     }
     getCustomer(req,res){
        const id = req.params.id;
        Customer.find({_id: id})
        .then((doc) => {
            res.status(200).json(doc);
        })
        .catch((err) => {
            return res.status(500).json({message: err.message})
        });
     }
     updateCustomer(req,res){
        const id = req.params.id;
        const {imie,nazwisko,adres,telefon} = req.body;  
      Customer.updateOne({_id: id},{imie: imie,nazwisko: nazwisko,adres: adres,telefon: telefon,data_rejestracji: Date.now()})
      .then((doc) => {
          res.status(200).json(doc);
      })
      .catch((err) => {
          return res.status(500).json({message: err.message})
      });
     }
     newCustomer(req,res){
      const {imie,nazwisko,adres,telefon} = req.body;  
      const customer = new Customer({imie: imie,nazwisko: nazwisko,adres: adres,telefon: telefon,data_rejestracji: Date.now()})
      customer.save().then(()=>{
          console.log('Klient została zapisana');
      });
      res.send('DODAJ FILM')
     }
     deleteMovie(req, res) {
        const id = req.params.id;
    
        Customer.deleteOne({ _id: id })
            .then((result) => {
                if (result.deletedCount === 1) {
                    res.status(200).json({ message: "Klient został pomyślnie usunięty." });
                } else {
                    res.status(404).json({ message: "Nie znaleziono klient o podanym ID." });
                }
            })
            .catch((err) => {
                console.error("Błąd usuwania filmu:", err);
                res.status(500).json({ message: "Wystąpił błąd serwera podczas usuwania filmu." });
            });
    }


}

module.exports = new CustomerActions()