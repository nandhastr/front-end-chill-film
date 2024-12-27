/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Carousel from "./Carousel";

const TopRating = ({ title }) => {
    
    const film = [
    {
        title: "Suzume",
        url: "/img/ratting-film/film 1.png",
        year: 2021,
        duration: "2h 18m",
        genre: "Comedy, Drama, Sci-Fi",
        cast: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
        synopsis: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
        status: "Episode Baru",
        episodes: null,
    },
    {
        title: "Jurassic World",
        url: "/img/ratting-film/film 2.png",
        year: 2022,
        duration: "1h 30m",
        genre: "Sports, Action",
        cast: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
        synopsis: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
        status: "Episode Baru",
        episodes: null,
    },
    {
        title: "Sonic",
        url: "/img/ratting-film/film 3.png",
        year: 2022,
        duration: "1h 50m",
        genre: "Horror, Thriller, Action",
        cast: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
        synopsis: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
        status: "Episode Baru",
        episodes: null,
    },
    {
        title: "All of Use are Dead",
        url: "/img/ratting-film/film 4.png",
        year: 2023,
        duration: "1h 40m",
        genre: "Comedy, Drama",
        cast: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
        synopsis: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
        status: "Episode Baru",
        episodes: null,
    },
    {
        title: "Big hero 6",
        url: "/img/ratting-film/film 5.png",
        year: 2023,
        duration: "2h 10m",
        genre: "Drama, Thriller",
        cast: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
        synopsis: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
        status: "Episode Baru",
        episodes: null,
    },
    ];

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

export default TopRating;