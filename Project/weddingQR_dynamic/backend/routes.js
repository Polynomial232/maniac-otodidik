const { 
    rootHandler,
    addUndanganHandler, 
    listUndanganHandler,
    undanganHandler,
    editUndanganHandler,
    deleteUndanganHandler,
    softDeleteUndaganHandler,
    qrViewHandler,
    readQr
} = require('./handlers/handler')

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: rootHandler
    },
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
        method: 'GET',
        path: '/undangan/{id}',
        handler: undanganHandler
    },
    {
        method: 'PUT',
        path: '/undangan/{id}',
        handler: editUndanganHandler
    },
    {
        method: 'DELETE',
        path: '/undangan/{id}',
        handler: deleteUndanganHandler
    },
    {
        method: 'DELETE',
        path: '/undangan/{id}/soft',
        handler: softDeleteUndaganHandler
    },
    {
        method: 'GET',
        path: '/undangan/{id}/qr',
        handler: qrViewHandler
    },
    {
        method: 'GET',
        path: '/read-qr/{qrCode}',
        handler: readQr
    }
]


module.exports = routes