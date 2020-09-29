class TraceabilityController{
    constructor({ TraceabilityService }){
        this.TraceabilityService = TraceabilityService;
    }

    async post(req, res, next){
        try {
            await this.TraceabilityService.getByName(req.body);
            return res.status(200).json(result);
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: error.message});
        }
    }
}

module.exports = TraceabilityController;