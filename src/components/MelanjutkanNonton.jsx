/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Carousel from "./Carousel";

const MelanjutkanNonton = ({title}) => {
   const film = [
       {
           title: "Don't Look Up",
           url: "/img/continue-film/film 1.png",
           slug: "next",   
           rating: 4.5,
           year: 2021,
           duration: "2h 18m",
           genre: "Comedy, Drama, Sci-Fi",
           cast: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ",
           synopsis: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum .",
           episodes: null,
       },
       {
           title: "Blue Lock",
           url: "/img/continue-film/film 2.png",
           slug: "next",   
           rating: 4.2,
           year: 2022,
           duration: "24 episodes (Season 1)",
           genre: "Sports, Drama, Shounen",
           cast: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ",
           synopsis: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ",
           episodes: [
               {
                   title: "Episode 1: Dream",
                   image: "/img/episodes/blue-lock-ep1.png",
                   slug: "next",   
                   duration: "24m",
                   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ",
               },
               {
                   title: "Episode 2: Monster",
                   image: "/img/episodes/blue-lock-ep2.png",
                   slug: "next",   
                   duration: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ",
                   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum .",
               },
           ],
       },
       {
           title: "All of Us Are Dead",
           url: "/img/continue-film/film 3.png",
           slug: "next",   
           rating: 4.6,
           year: 2022,
           duration: "12 episodes (Season 1)",
           genre: "Horror, Thriller, Drama",
           cast: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ",
           synopsis: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ",
           episodes: [
               {
                   title: "Episode 1: Outbreak",
                   image: "/img/episodes/all-us-ep1.png",
                   slug: "next",   
                   duration: "60m",
                   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum .",
               },
               {
                   title: "Episode 2: Survival",
                   image: "/img/episodes/all-us-ep2.png",
                   slug: "next",   
                   duration: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ",
                   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum .",
               },
           ],
       },
       {
           title: "A Man Called Otto",
           url: "/img/continue-film/film 4.png",
           slug: "next",   
           rating: 4.3,
           year: 2022,
           duration: "2h 6m",
           genre: "Drama, Comedy",
           cast: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ",
           synopsis: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum .",
           episodes: null,
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
                    slidesToShow: 1.5,
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

export default MelanjutkanNonton;
