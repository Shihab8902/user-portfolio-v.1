import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import NewsCard from '../../../components/News card/NewsCard';
import { HiMiniArrowUpRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import '../home.css';



const News = () => {
    //Get news data
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch("news.json")
            .then(res => res.json())
            .then(res => setNews(res?.slice(0, 6)));
    }, []);


    return <div className="my-20 container mx-auto px-5">
        {/* Section title */}
        <div>
            <h3 className=" text-xl lg:text-3xl text-[#FFFFFFC9] font-merriweather">Read my news and articles</h3>
            <div className="w-3/12 bg-[#C58940] h-1 mt-3"></div>
        </div>

        {/* News slides */}
        <div className='hidden lg:block'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className=" mt-12"
            >
                {
                    news?.map(n => {

                        const { id } = n;
                        return <SwiperSlide className='pb-20 ' key={id}><NewsCard news={n} /></SwiperSlide>
                    })
                }

                <SwiperSlide>
                    <Link to="/blog">
                        <div className='w-full align-middle h-[245px] flex justify-center items-center bg-[#312f2f] '>
                            <p className='text-lg flex items-center font-merriweather font-medium'>Show more <HiMiniArrowUpRight /></p>
                        </div>
                    </Link>
                </SwiperSlide>

            </Swiper>
        </div>

        {/* News slide for mobile devices */}
        <div className='lg:hidden '>
            {
                news?.slice(0, 4).map(n => {
                    const { id } = n;
                    return <NewsCard key={id} news={n} />
                })
            }

            {/* Action button */}
            <div className='mt-16 flex justify-center'>
                <Link to="/blog"><button className='flex items-center gap-1  text-[#C58940]  font-semibold hover:text-white hover:bg-[#C58940] px-5 py-3 border border-[#C58940] font-merriweather'>Show more <HiMiniArrowUpRight /></button></Link>
            </div>
        </div>

    </div>
}

export default News