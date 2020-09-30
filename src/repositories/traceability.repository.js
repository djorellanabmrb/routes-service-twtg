class TraceabilityRepository {
    constructor({twtOdm}){
        this.twtOdm = twtOdm;
    }
    
    async getByOrderId(orderId){
        const RouteModel = this.twtOdm.db.RouteModel;
        return await RouteModel.find({orderId}).sort({createdAt: 1});
    }

    async post (traceability){
        const route = new this.twtOdm.db.RouteModel(traceability);
        await route.save();
    }

  
}
module.exports = TraceabilityRepository;