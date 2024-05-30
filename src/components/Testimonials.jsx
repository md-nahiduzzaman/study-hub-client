import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  console.log(reviews);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/reviews`);
    setReviews(data);
  };

  return (
    <div>
      <div className="container mx-auto px-2">
        <div>
          <h2 className="mb-12 leading-none text-center sm:text-5xl pb-3 text-3xl font-bold md:text-4xl">
            Testimonials
          </h2>
        </div>
        <div>
          <div>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {reviews.map((review) => (
                <>
                  <SwiperSlide key={review._id}>
                    <div className="flex flex-col items-center mx-16">
                      <Rating
                        style={{ maxWidth: 150 }}
                        value={review.rating}
                        readOnly
                      />
                      <p className="font-medium md:text-2xl md:font-bold md:w-[70%] text-center mt-4">
                        {review.details}
                      </p>
                      <p className="md:text-xl mt-4">{review.name}</p>
                    </div>
                  </SwiperSlide>
                </>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
