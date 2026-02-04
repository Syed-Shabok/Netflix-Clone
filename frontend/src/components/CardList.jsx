import React from "react";
import cardImg from "../assets/cardImg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CardList = () => {
  const data = [
    {
      id: 1,
      title: "Card 1",
      description: "Description of Card 1",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is a short description for Card 2",
      imageUrl: "https://via.placeholder.com/150/92c952",
    },
    {
      id: 3,
      title: "Card 3",
      description: "Another sample description for Card 3",
      imageUrl: "https://via.placeholder.com/150/771796",
    },
    {
      id: 4,
      title: "Card 4",
      description: "Placeholder content for Card 4",
      imageUrl: "https://via.placeholder.com/150/24f355",
    },
    {
      id: 5,
      title: "Card 5",
      description: "Dummy text for Card 5",
      imageUrl: "https://via.placeholder.com/150/d32776",
    },
    {
      id: 6,
      title: "Card 6",
      description: "Sample description for Card 6",
      imageUrl: "https://via.placeholder.com/150/f66b97",
    },
    {
      id: 7,
      title: "Card 7",
      description: "Short and simple description for Card 7",
      imageUrl: "https://via.placeholder.com/150/56a8c2",
    },
    {
      id: 8,
      title: "Card 8",
      description: "Card 8 placeholder description",
      imageUrl: "https://via.placeholder.com/150/b0f7cc",
    },
    {
      id: 9,
      title: "Card 9",
      description: "Description text for Card 9",
      imageUrl: "https://via.placeholder.com/150/54176f",
    },
    {
      id: 10,
      title: "Card 10",
      description: "Another placeholder description",
      imageUrl: "https://via.placeholder.com/150/51aa97",
    },
    {
      id: 11,
      title: "Card 11",
      description: "Simple mock description for Card 11",
      imageUrl: "https://via.placeholder.com/150/810b14",
    },
    {
      id: 12,
      title: "Card 12",
      description: "Filler description for Card 12",
      imageUrl: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      id: 13,
      title: "Card 13",
      description: "Short placeholder content for Card 13",
      imageUrl: "https://via.placeholder.com/150/66b7d2",
    },
    {
      id: 14,
      title: "Card 14",
      description: "Mock data description for Card 14",
      imageUrl: "https://via.placeholder.com/150/197d29",
    },
    {
      id: 15,
      title: "Card 15",
      description: "Final placeholder description",
      imageUrl: "https://via.placeholder.com/150/61a65",
    },
  ];

  return (
    <div className="text-white md:px-4">
      <h2 className="pt-10 pb-5 text-lg font-medium">Upcoming</h2>

      <Swiper slidesPerView={"auto"} spaceBetween={10} className="mySwiper">
        {data.map((item, index) => (
          <SwiperSlide key={index} className="max-w-72">
            <img
              src={cardImg}
              alt="Image of movie poster"
              className="h-44 w-fit object-center object-cover"
            />
            <p className="text-center pt-2">{item.title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardList;
