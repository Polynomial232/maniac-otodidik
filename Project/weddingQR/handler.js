const { nanoid } = require('nanoid')
const listUndangan = require('./listUndangan')
const { 
    generateQrImage, 
    deleteQrImage,
    getQrImagePath
 } = require('./qrHandler')

const addUndanganHandler = (request, h) => {
    const {
        nama,
        kenalan,
        foto,
        ttd,
        tglDatang,
    } = request.payload

    const id = nanoid(16)
    const qrCode = nanoid(32)
    const insertedAt = new Date().toISOString()
    const updatedAt = insertedAt

    if(nama == null){
        const response = h.response({
            status: 'fail',
            message: 'Nama yang diundang harus diisi'
        })
        response.code(400)
        return response
    }else if(kenalan == null){
        const response = h.response({
            status: 'fail',
            message: 'Kenalan dari yang diundang harus diisi'
        })
        response.code(400)
        return response
    }
    
    const newUndangan = {
        id,
        qrCode,
        nama,
        kenalan,
        foto,
        ttd,
        tglDatang,
        insertedAt,
        updatedAt
    }

    listUndangan.push(newUndangan)

    const isSuccess = listUndangan.filter((undangan) => {
        undangan.id == id.length > 0
    })

    if(isSuccess) {
        generateQrImage(qrCode)
        const response = h.response({
            status: 'success',
            message: 'Undangan berhasil ditambahkan',
            data: {
                undanganId: id
            }
        })
        response.code(201)
        return response
    }
}

const listUndanganHandler = (request, h) => {
    listUndangan.map((undangan) => {
        for(const key in undangan){
            undangan[key] = undangan[key] == undefined ? null:undangan[key]
        }
    })

    const response = h.response({
        status: 'success',
        data: listUndangan
    })
    response.code(200)
    return response
}

const deleteUndanganHandler = (request, h) => {
    const { id } = request.params

    const index = listUndangan.findIndex(
        (undangan) => undangan.id === id
    )

    if(index !== -1) {
        deleteQrImage(listUndangan[index].qrCode)
        listUndangan.splice(index, 1)
        const response = h.response({
            status: 'success',
            message: 'Undangan berhasil dihapus'
        })
        response.code(200)
        return response
    }

    const response = h.response({
        status: 'fail',
        message: 'Undangan gagal dihapus. Id tidak ditemukan'
    })
    response.code(404)
    return response
}

const qrViewHandler = (request, h) => {
    const { id } = request.params

    const index = listUndangan.findIndex(
        (undangan) => undangan.id === id
    )

    if(index !== -1) {
        const qrPath = getQrImagePath(listUndangan[index].qrCode)
        console.log(qrPath)
        // return h.file(qrPath);
        return qrPath;
    }

    const response = h.response({
        status: 'fail',
        message: 'Undangan gagal dihapus. Id tidak ditemukan'
    })
    response.code(404)
    return response
}

module.exports = { 
    addUndanganHandler, 
    listUndanganHandler,
    deleteUndanganHandler,
    qrViewHandler
}