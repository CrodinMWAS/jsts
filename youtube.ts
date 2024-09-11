const getSongs = async () => {
    const response = await fetch("https://eskuvo-anett.nemestamas.hu/api/youtube/")
    const data = await response.json()
    JSON.stringify(data)
    console.log(data)
    // generateUI(data)
}

getSongs()

const generateUI = (data:object) => {
    console.log(data)
}

type song = {
    id:number,
    title:string,
    approved?: boolean,
    link:string,
    date:Date,
    proponent?:string,
    imageurl:string
}