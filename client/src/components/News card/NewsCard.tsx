import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io"


type newsPropType = {
    news: {
        image: string,
        publishedAt: string,
        title: string,
        detailsOn: string
    }
}

const NewsCard = ({ news }: newsPropType) => {

    const { image, publishedAt, title, detailsOn } = news;


    return <div className="flex flex-col mt-12 lg:mt-0 font-roboto lg:h-[400px]">
        <div className="flex-grow">
            <img src={image} alt="" />
            <span className="flex items-center gap-1 w-full justify-end"><IoMdTime /> {publishedAt}</span>
            <h3 className="mt-3  text-xl font-semibold">
                {
                    title.length > 60 ? title.slice(0, 60) + "..." : title
                }
            </h3>
        </div>

        <div className="flex h-full items-end ">
            <Link className="flex items-center gap-2 text-[#C58940] text-lg " to={detailsOn} target="_blank">Read more <IoIosArrowRoundForward className="text-2xl" /> </Link>
        </div>
    </div>

}

export default NewsCard