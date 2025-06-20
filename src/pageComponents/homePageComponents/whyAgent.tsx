import {Link} from 'react-router-dom'





export default function WhyAgent() {
    return (
        <div className={`w-full px-6 py-10  flex flex-col
        sm:flex-row  sm:px-2
        sm:py-20
        md:px-3
        lg:px-4 lg:mt-11 lg:mb-11 
        xl:px-5 xl:mt-12 xl:mb-12
        

        `}>
            <div className=" px-2 py-2
            sm:mb-0
            ">
                <div className="
                sm:pt-2 sm:sticky sm:top-24 sm:pb-12
                lg:pt-3 lg:top-24 lg:pb-8
                ">
                    <p className="text-xl
                    sm:text-2xl
                    md:text-3xl
                    lg:text-4xl
                    xl:text-5xl
                    ">Why agent?</p>
                </div>

            </div>

            <div className="pl-3 py-2 w-[85%]
            sm:w-[70%] sm:pl-8  sm:py-8
            lg:w-[65%] lg:pl-12
            xl:w-[70%] xl:p-14
            ">
                <p className="text-xs font-extralight
                sm:text-xl
                lg:text-2xl lg:pl-10
                xl:text-3xl xl:pl-20
                ">Every AI agent is designed to serve your trading and your life.</p>

                <p className="text-[0.5rem] pb-3 py-4
                sm:text-sm sm:pb-8
                lg:text-xl lg:pl-10
                xl:text-2xl xl:pl-20
                ">AI agents are built on cutting-edge AI technologies
                    to provide you with personalized support.
                    They are designed to work together to make
                    your trading and daily life more convenient.</p>

                <Link to="/agents" className="inline-block py-2 px-4  bg-[rgba(60,60,60,0.7)]
                text-[rgba(255,255,240,0.8)]
                hover:bg-[rgba(60,60,60,0.3)] hover:text-[rgba(60,60,60,0.9)]
                rounded-[25px] text-xs cursor-pointer
                sm:text-sm
                md:text-xl
                lg:text-xl lg:ml-10
                xl:text-2xl xl:ml-20
                ">Try agents.</Link>

            </div>
        </div>
    )
}