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

}

module.exports = new RentActions()