const { nanoid } = require('nanoid')
const listUndangan = require('../listUndangan')
const { 
    findIndex, 
    findIndexByQr,
    writeJson, 
    isDataAdded,
    undefinedToNull
} = require('./functionHandler')
const { 
    generateQrImage, 
    deleteQrImage,
    getQrImagePath
} = require('./qrHandler')
const mapUrl = require('./gotoMapHandler')

const rootHandler = (request, h) => {
    const response = h.response({
        status: "hi"
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
    const deleteAt = undefined

    if(nama == undefined){
        const response = h.response({
            status: 'fail',
            message: 'Nama yang diundang harus diisi'
        }).code(400)
        return response
    }else if(kenalan == undefined){
        const response = h.response({
            status: 'fail',
            message: 'Kenalan dari yang diundang harus diisi'
        }).code(400)
        return response
    }
    
    let undangan = {
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
    undangan = undefinedToNull(undangan)

    listUndangan.push(undangan)
    writeJson(listUndangan)

    if(isDataAdded(listUndangan, id)) {
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
    const { content } = request.query
    const newListUndangan = content === 'all' ?
        listUndangan:listUndangan.filter((undangan) => undangan.deleteAt == null)

    const response = h.response({
        status: 'success',
        data: newListUndangan
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

    listUndangan[index] = {
        ...listUndangan[index],
        nama,
        kenalan,
        foto,
        ttd,
        tglDatang
    }
    listUndangan[index] = undefinedToNull(listUndangan[index])
    writeJson(listUndangan)

    message = listUndangan[index].deleteAt == null ?
        'Undangan berhasil diedit':'Undangan yang sudah dihapus berhasil diedit'
    const response = h.response({
        status: 'success',
        message: message
    }).code(200)
    return response
}

const softDeleteUndaganHandler = (request, h) => {
    const { id } = request.params
    const index = findIndex(listUndangan, id)
    const deleteAt = new Date().toISOString()

    if(index !== -1){
        listUndangan[index] = {
            ...listUndangan[index],
            deleteAt
        }
        writeJson(listUndangan)
        const response = h.response({
            status: 'success',
            message: 'Undangan berhasil dihapus secara soft'
        }).code(200)
        return response
    }

    const response = h.response({
        status: 'fail',
        message: 'Undangan gagal dihapus secara soft. Id tidak ditemukan'
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
    const index = findIndex(listUndangan, id)

    if(index !== -1) {
        const qrPath = getQrImagePath(listUndangan[index].qrCode)
        return h.file(qrPath)
    }

    const response = h.response({
        status: 'fail',
        message: 'QR tidak ditemukan.'
    }).code(404)
    return response
}

const readQr = (request, h) => {
    const { qrCode } = request.params
    const { type } = request.query

    if(type == 'scan'){
        const index = findIndexByQr(listUndangan, qrCode)

        const response = h.response({
            status: 'success',
            message: 'Scan Berhasil',
            detail: listUndangan[index]
        }).code(200)
        return response
    }
    return h.redirect(mapUrl)
}

module.exports = { 
    rootHandler,
    addUndanganHandler, 
    listUndanganHandler,
    undanganHandler,
    editUndanganHandler,
    deleteUndanganHandler,
    softDeleteUndaganHandler,
    qrViewHandler,
    readQr
}