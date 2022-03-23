import API from "./api";

export {
    getAllMovies
}

function getAllMovies() {
    return API.get('/movies').then(res => res.data);
}