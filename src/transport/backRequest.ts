export const BackRequest = async () => {
    let url = "https://dog.ceo/api/breeds/image/random"
    let response = await fetch(url)
    let dogFromServer = await response.json()
    return dogFromServer
}

