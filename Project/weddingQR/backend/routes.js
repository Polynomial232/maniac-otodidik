const { 
    addUndanganHandler, 
    listUndanganHandler, 
    deleteUndanganHandler,
    qrViewHandler
} = require('./handler')

const routes = [
    {
        method: 'POST',
        path: '/undangan',
        handler: addUndanganHandler
    },
    {
        method: 'GET',
        path: '/undangan',
        handler: listUndanganHandler
    },
    {
        method: 'DELETE',
        path: '/undangan/{id}',
        handler: deleteUndanganHandler
    },
    {
        method: 'GET',
        path: '/undangan/{id}/qr',
        handler: qrViewHandler
    },
]


module.exports = routes