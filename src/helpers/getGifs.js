export const getGifs = async (search = '') => {

  const apiKey = 'L6RWAkSc6BxofO78lvc6LgKk8J1HVFdb'
  const endpoint = `https://api.giphy.com/v1/gifs/search`;
  const params = `q=${encodeURIComponent(search)}&limit=${10}&api_key=${apiKey}`;
  const url = `${endpoint}?${params}`

  const res = await fetch(url);
  const {data} = await res.json();

  const gifs = data.map( img => {
    return {
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
    }     }
  )

  return gifs;

}