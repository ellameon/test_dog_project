export const backRequest = async () => {
    const url = "https://dog.ceo/api/breeds/image/random"
    const response = await fetch(url)
    return await response.json()
}

