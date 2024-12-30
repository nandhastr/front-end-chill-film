/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const RILIS = import.meta.env.VITE_RILIS;
const IMG_URL = import.meta.env.VITE_IMG_URL;

const FilmRilis = ({ title }) => {
    const [film, setFilm] = useState([]);

    const filmRilis = async () => {
        try {
            const response = await fetch(`${BASE_URL}${RILIS}?api_key=${API_KEY}`);
            const data = await response.json();
            // console.log(data);
            const formattedFilm = data.results.map((film) => ({
                slug:"rilis",
                title: film.original_title,
                url: `${IMG_URL}${film.poster_path}`,
                year: new Date(film.release_date).getFullYear(),
                duration: null,
                genre: film.genre_ids,
                cast: "N/A",
                synopsis: film.overview,
                status: film.release_date,
                episodes: null,
            }));
            setFilm(formattedFilm);
            
        } catch (error) {
            console.error("Error fetching rilis movies:", error);
        }
    }
    useEffect(() => {
        filmRilis();
    }, []);
   
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <button className="next-arrow">→</button>,
        prevArrow: <button className="prev-arrow">←</button>,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 1,
                    arrows: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.04,
                    slidesToScroll: 1,
                    arrows: true,
                },
            },
        ],
    };

    return (
        <div>
            <Carousel title={title} items={film} settings={settings} />
        </div>
    );
};

export default FilmRilis;
