import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import EventCards from './EventCards'
import { upcomingEvents } from '../../event'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CategorySlider = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={false}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            navigation={false}
            modules={[Autoplay]}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1440: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
            }}
        >
            {upcomingEvents.map(event => (
                <SwiperSlide key={event.id}>
                    <EventCards event={event} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default CategorySlider