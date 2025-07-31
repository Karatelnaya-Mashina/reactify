const KEY_API = '5374a772-2b3c-485b-b3e2-432e1c94d40f';
const URL_API = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=`;

export async function getSearchedFilms(url, index) {
  try {
    // const response1 = await fetch(url, {
    //   method: 'GET',
    //   headers: {
    //     'X-API-KEY': KEY_API,
    //     'Content-Type': 'application/json',
    //   },
    // });

    const data = searchData;

    console.log('fetchSearch response data', data);

    return {
      filmData: data.films[index],
      filmsListData: data.films.slice(1, 20),
    };
  } catch (error) {
    console.error('Error >>>', error.message);
    throw new Error('Error >>>', error.message);
  }
}
