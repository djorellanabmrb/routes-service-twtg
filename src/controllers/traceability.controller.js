const { Result } = require("express-validator");

class TraceabilityController{
    constructor({ TraceabilityService }){
        this.TraceabilityService = TraceabilityService;
    }

    async post(req, res, next){
        try {
            await this.TraceabilityService.post(req.body);
            return res.status(200).json('ok');
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: error.message});
        }
    }

    async getByOrderId(req,res,next){
        try{
            let data = await this.TraceabilityService.getByOrderId(req.params.id);
            return res.status(200).json(data);
            
        }catch(error){
            console.log(error)
            return res.status(500).json({message: error.message})
            
        }
        
   }
}

module.exports = TraceabilityController;