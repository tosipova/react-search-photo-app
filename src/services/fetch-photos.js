const API_KEY = 'aoY1Nj_WIbaZG1De7H_D_Q_HOJvrsAqnBHufRc4Dv68';
const BASE_API_URL = 'https://api.unsplash.com/'

export default function fetchPhotos(query, currentPage = 1) {
    const API_URL = `${BASE_API_URL}search/photos/`
    const ORIENTATION = 'squarish';
    const PER_PAGE = 1;
    const preFixUrl = `${API_URL}?client_id=${API_KEY}&query=${query}&orientation=${ORIENTATION}`;
    const fullApiUrl = `${preFixUrl}&per_page=${PER_PAGE}&page=${currentPage}`;

    return fetch(fullApiUrl)
        .then(response => response.json())
        .then(({ results: photos, total_pages: totalPages }) => {
            console.log(photos, totalPages);

            return {
                photos,
                totalPages
            };
        });
}

export function fetchPhoto(id) {
    const fullApiUrl = `${BASE_API_URL}photos/${id}?client_id=${API_KEY}`;

    return fetch(fullApiUrl)
        .then(response => response.json())
        .then(photo => {
            return photo;
        });
}