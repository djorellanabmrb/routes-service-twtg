const objectMapper = require('object-mapper');

module.exports = (entity) =>{
    const map = {
        'id':'id',
        'idRoute':'idRoute',
        'orderId':'orderId',
        'status': 'status',
        'company': 'company',
        'sucursal': 'sucursal',
        'alert': 'alert',
        'biker': 'biker',
        'location': 'location',
        'createdAt': 'createdAt'
    }
    return objectMapper(entity, map);
}