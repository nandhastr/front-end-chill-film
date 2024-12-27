/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Carousel from "./Carousel";

const FilmSeries = ({title}) => {
    const film = [
        {
            id:1,
            title: "Lorem ipsum 1",
            url: "/img/Series-film/film 1.png",
            status: "Episode baru",
            year: "2020",
            rating: "8.8",
            duration: "30 mins",
            genre: "Comedy, Drama, Sports",
            cast: "Lorem ipsum dolor sit amet consectetur",
            synopsis: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt tempore, tenetur enim ratione explicabo amet..",
            episodes: [
                {
                    title: "Lorem ipsum dolor ",
                    url: "/img/Series-film/film 3.png",
                    duration: "30 min",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
                },
                {
                    title: "Lorem ipsum dolor ",
                    url: "/img/Series-film/film 2.png",
                    duration: "32 min",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
                },
                {
                    title: "Lorem ipsum dolor ",
                    url: "/img/Series-film/film 1.png",
                    duration: "28 min",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
                },
            ],
        },
        {
            title: "Lorem ipsum dolor ",
            url: "/img/Series-film/film 2.png",
            status: "Episode baru",
            year: "2016",
            rating: "8.7",
            duration: "50 mins",
            genre: "Drama, Fantasy, Horror",
            cast: "Winona Ryder, David Harbour, Millie Bobby Brown",
            synopsis: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
            episodes: [
                {
                    title: "Lorem ipsum dolor ",
                    url: "/img/Series-film/film 2.png",
                    duration: "47 min",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
                },
                {
                    title: "Lorem ipsum dolor ",
                    url: "/img/Series-film/film 4.png",
                    duration: "50 min",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
                },
                {
                    title: "Lorem ipsum dolor ",
                    url: "/img/Series-film/film 1.png",
                    duration: "52 min",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
                },
            ],
        },
        {
            title: "Lorem ipsum dolor ",
            url: "/img/Series-film/film 3.png",
            status: "Episode baru",
            year: "2008",
            rating: "9.5",
            duration: "47 mins",
            genre: "Crime, Drama, Thriller",
            cast: "Bryan Cranston, Aaron Paul, Anna Gunn",
            synopsis: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
            episodes: [
                {
                    title: "Lorem ipsum dolor ",
                    url: "/img/Series-film/film 3.png",
                    duration: "58 min",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsume Pinkman.",
                },
                {
                    title: "Lorem ipsum dolor",
                    url: "/img/Series-film/film 2.png",
                    duration: "47 min",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
                },
                {
                    title: "Lorem ipsum dolor",
                    url: "/img/Series-film/film 4.png",
                    duration: "48 min",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
                },
            ],
        },
    ];


        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 4,
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

export default FilmSeries;
