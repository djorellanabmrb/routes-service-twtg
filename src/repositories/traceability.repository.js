class TraceabilityRepository {
    constructor({twtOdm}){
        this.twtOdm = twtOdm;
    }
    
    async post (traceability){
        const route = new this.twtOdm.db.RouteModel(traceability);
        await route.save();
    }
}
module.exports = TraceabilityRepository;