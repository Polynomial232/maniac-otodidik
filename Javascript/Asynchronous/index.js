const login = async (name) => {
    if(!name) return "Nama harus ada"
    return ~~[Math.random() * 12345678]
}

const getApi = async (token) => {
    if(!token) return "Token harus ada"
    return "xApikey"
}

const getPictures = async (xApikey) => {
    if(!xApikey) return "Apikey harus ada"
    return ["1.jpg", "2.jpg"]
}

const main = async () => {
    const token = await login("daffa")
    const apikey = await getApi(token)
    const pictures = await getPictures(apikey)
    
    console.log(pictures)
}

main()