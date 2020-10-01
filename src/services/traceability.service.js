const {traceabilityMapping} = require("./mappings");
class TraceabilityService{
    constructor({ TraceabilityRepository }){
        this.TraceabilityRepository = TraceabilityRepository;
    }

    async post(data){
        data.location = { type: "Point", coordinates: [data.latitude, data.longitude]};
        data.createdAt = new Date(data.createdAt);
        delete data.latitude;
        delete data.longitude;
        await this.TraceabilityRepository.post(data);
    }

    async getByOrderId(data){
        let regs =  await this.TraceabilityRepository.getByOrderId(data);
        regs = regs.map((reg)=> traceabilityMapping(reg))
        return regs;
        
    }

    
}
module.exports = TraceabilityService;
