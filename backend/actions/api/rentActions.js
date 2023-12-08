const Rent = require('../../db/models/rent')

class RentActions{
    getAllRent(req,res){
        Rent.find({})
        .then((doc) => {
            res.status(200).json(doc);
        })
        .catch((err) => {
            return res.status(500).json({message: err.message})
        });
        
     }
     getRent(req,res){
        const id = req.params.id;
        Rent.find({film: id})
        .then((doc) => {
            res.status(200).json(doc);
        })
        .catch((err) => {
            return res.status(500).json({message: err.message})
        });
     }
     updateRent(req,res){
        const id = req.params.id;
        Rent.updateOne({_id: id},{ $set: { faktyczny_zwrot: Date.now() } })
        .then((doc) => {
            res.status(200).json(doc)
        })
        .catch((err) => {
            return res.status(500).json({message: err.message})
        });
     }
     newRent(req,res){
   
        const {klient,film} = req.body;  
        const newRent = new Rent({klient: klient,film: film,data_wypozyczenia: Date.now(),planowany_zwrot: (Date.now()+2*24*60*60*1000)})
        newRent.save().then(()=>{
            console.log('Wypozyczenie została zapisane');
        });
        res.send('DODAJ')
     }


}

module.exports = new RentActions()