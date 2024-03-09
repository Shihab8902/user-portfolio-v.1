import { useEffect, useState } from "react";
import NewsCard from "../../components/News card/NewsCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './blog.css';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [itemCount, setItemCount] = useState(6);
    const [shouldButtonShow, setShouldButtonShow] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetch("news.json")
            .then(res => res.json())
            .then(res => setBlogs(res));
    }, []);


    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };


    //handle item collapse and expend
    const handleItems = () => {
        setItemCount(blogs?.length);
        setShouldButtonShow(false);
    }


    return (
        <div className="container mx-auto px-5 my-20 blog-container">
            <div>
                <h3 className="text-xl lg:text-3xl text-[#FFFFFFC9] font-merriweather">Read my news and articles</h3>
                <div className="w-3/12 bg-[#C58940] h-1 mt-3"></div>
            </div>


            {/* For desktop */}
            <div className="mt-10 hidden lg:block">
                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="grid lg:grid-cols-3 gap-6 pb-20">
                            {blogs?.slice(0, 6).map(blog => {
                                const { id } = blog;
                                return <NewsCard key={id} news={blog} />
                            })}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="grid lg:grid-cols-3 gap-6 pb-20">
                            {blogs?.slice(7, blogs.length).map(blog => {
                                const { id } = blog;
                                return <NewsCard key={id} news={blog} />
                            })}
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>

            {/* For mobile view */}
            <div className="lg:hidden">
                <div className="grid md:grid-cols-2 gap-6 pb-20">
                    {blogs?.slice(0, itemCount).map(blog => {
                        const { id } = blog;
                        return <NewsCard key={id} news={blog} />
                    })}
                </div>

                {/* Action button */}
                <div className=' flex justify-center'>
                    <button onClick={handleItems} className={`flex items-center gap-1 ${!shouldButtonShow && "hidden"} text-[#C58940]  font-semibold hover:text-white hover:bg-[#C58940] px-5 py-3 border border-[#C58940] font-merriweather`}>Show more <MdKeyboardDoubleArrowRight /></button>
                </div>
            </div>

        </div>
    );
}

export default Blog;
