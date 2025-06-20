import {useState, useEffect} from "react";
import {Link} from 'react-router-dom'


export default function Guide() {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        const handleScroll= () =>{
            setScroll(window.scrollY>10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (// scroll's before and after
        <div className={`fixed top-0 left-0 h-12 z-50 transition-all 
        ${scroll ? "bg-[rgba(251,250,248)]" : "bg-transparent"}
         sm:h-14 md:h-16 lg:h-18 xl:h-20 2xl:h-22
         w-full flex justify-between items-center `}>

            <div className="flex items-center h-11
            sm: h-13 md:px-1,h-14 lg:h-16,px-3 xl:h-18 2xl:h-20
             ">
                <Link to="/">
                    <img src="/layoutResource/logo.png" alt="failed"
                     className="h-8 sm:h-9 md:h-10 lg:h-12 xl:h-14
                     2xl:h-16 w-auto object-contain" />
                </Link>

            </div>

            <div className="flex items-center gap-3 pr-2 h-10
            md:h-12 lg:h-14 xl:h-16 2xl:h-18
             ">
                <span className="iconfont icon-language text-xl
                 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl
                 cursor-pointer"></span>

                <span className="iconfont icon-sun text-xl
                 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl
                 text-amber-50 cursor-pointer px-1.5 py-0.5
                 bg-[rgba(60,60,60,1)] hover:text-[rgba(60,60,60,1)] hover:bg-[rgba(60,60,60,0.6)]
                 rounded-xl
                 "></span>

                <span className="iconfont icon-guide text-xl
                 md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl
                 cursor-pointer"></span>
            </div>

        </div>
    )
}