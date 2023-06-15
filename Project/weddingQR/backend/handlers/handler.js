const { nanoid } = require('nanoid')
const listUndangan = require('../listUndangan')
const { 
    findIndex, 
    writeJson, 
    isSuccess 
} = require('./functionHandler')
const { 
    generateQrImage, 
    deleteQrImage,
    getQrImagePath
} = require('./qrHandler')


const rootHandler = (request, h) => {
    const response = h.response({
        status: "success"
    }).code(200)
    return response
}

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
    const deleteAt = ''

    if(nama == null){
        const response = h.response({
            status: 'fail',
            message: 'Nama yang diundang harus diisi'
        }).code(400)
        return response
    }else if(kenalan == null){
        const response = h.response({
            status: 'fail',
            message: 'Kenalan dari yang diundang harus diisi'
        }).code(400)
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
        updatedAt,
        deleteAt
    }

    listUndangan.push(newUndangan)
    writeJson(listUndangan)

    if(isSuccess(listUndangan, id)) {
        generateQrImage(qrCode)
        const response = h.response({
            status: 'success',
            message: 'Undangan berhasil ditambahkan',
            data: {
                undanganId: id
            }
        }).code(201)
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
    }).code(200)
    return response
}

const undanganHandler = (request, h) => {
    const { id } = request.params
    const index = findIndex(listUndangan, id)

    if(index == -1){
        const response = h.response({
            status: 'fail',
            message: 'Id tidak ditemukan'
        }).code(404)
        return response
    }

    const response = h.response(listUndangan[index]).code(200)
    return response
}

const editUndanganHandler = (request, h) => {
    const { id } = request.params
    const {
        nama,
        kenalan,
        foto,
        ttd,
        tglDatang,
    } = request.payload
    const index = findIndex(listUndangan, id)
    if(index == -1){
        const response = h.response({
            status: 'fail',
            message: 'Undangan gagal diedit. Id tidak ditemukan'
        }).code(404)
        return response
    }

    const response = h.response({
        status: 'success',
        message: 'Undangan berhasil diedit'
    }).code(404)
    return response
}

const deleteUndanganHandler = (request, h) => {
    const { id } = request.params
    const index = findIndex(listUndangan, id)

    if(index !== -1) {
        deleteQrImage(listUndangan[index].qrCode)
        listUndangan.splice(index, 1)
        writeJson(listUndangan)
        const response = h.response({
            status: 'success',
            message: 'Undangan berhasil dihapus'
        }).code(200)
        return response
    }

    const response = h.response({
        status: 'fail',
        message: 'Undangan gagal dihapus. Id tidak ditemukan'
    }).code(404)
    return response
}

const qrViewHandler = (request, h) => {
    const { id } = request.params

    const index = listUndangan.findIndex(
        (undangan) => undangan.id === id
    )

    if(index !== -1) {
        const qrPath = getQrImagePath(listUndangan[index].qrCode)
        return qrPath;
    }

    const response = h.response({
        status: 'fail',
        message: 'Undangan gagal dihapus. Id tidak ditemukan'
    }).code(404)
    return response
}

module.exports = { 
    rootHandler,
    addUndanganHandler, 
    listUndanganHandler,
    undanganHandler,
    editUndanganHandler,
    deleteUndanganHandler,
    qrViewHandler
}