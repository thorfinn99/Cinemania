import axios from "axios";
import { useState } from "react";
import Slider from "../components/Slider";

let currentId = "1096197"
const updateId = ({newId}) => {
    currentId = newId
}

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = '5b26c0a21b65471131aaa1fc37a259a6'

const movieDetailBaseUrl = "https://api.themoviedb.org/3/movie/"
const movieDetailBaseUrl1 = "?api_key=5b26c0a21b65471131aaa1fc37a259a6"
const movieDetailUrl = "https://api.themoviedb.org/3/movie/49046?api_key=5b26c0a21b65471131aaa1fc37a259a6"
const getMovieDetail = axios.get(`${movieDetailBaseUrl}${currentId}${movieDetailBaseUrl1}`);

const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=5b26c0a21b65471131aaa1fc37a259a6'

const getTrendingVideos = axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key)

const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)
const getMovieByGenreId2=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)
const getMovieByGenreId3=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId,
    getMovieDetail,
    updateId
}