import axios from "axios";
const baseUrl = "https://pixabay.com/api/";
axios.defaults.baseURL = baseUrl;
const apiKey = "22657812-5b6312e522363c98c02137a18";


export async function fetchImages(search, page) {
    const queryParams = `?key=${apiKey}&q=${search}&image_type=photo&per_page=12&page=${page}&orientation=horizontal&safesearch=true`;
    const searchUrl = baseUrl + queryParams;
    return await fetch(searchUrl)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    return Promise.reject(
                        new Error('По вашему запросу ничего не найдено'),
                    );
                })
}