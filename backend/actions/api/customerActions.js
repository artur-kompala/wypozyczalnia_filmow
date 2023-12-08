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
        
     }
     newCustomer(req,res){
     }


}

module.exports = new CustomerActions()