export const backRequest = async () => {
    let url = "https://dog.ceo/api/breeds/image/random"
    let response = await fetch(url)
    return await response.json()
}

