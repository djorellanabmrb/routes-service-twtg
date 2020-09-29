const {traceabilityMapping} = require("./mappings");
class TraceabilityService{
    constructor({ TraceabilityRepository }){
        this.TraceabilityRepository = TraceabilityRepository;
    }

    async post(data){
        data.location = { type: "Point", coordinates: [data.latitude, data.longitude]};
        delete data.latitude;
        delete data.longitude;
        await this.TraceabilityRepository.post(data);
    }
}
module.exports = TraceabilityService;
