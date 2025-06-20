


export default function Head(){

    return (
         <div className="w-full h-[35vh]
          sm:h-[40vh] md:h-[50vh] lg:h-[100vh]
         xl:h-[100vh] 2xl:h-[100vh]
         relative ">
            <img src="/homePageResource/back.png"
                className="w-full h-full object-cover absolute  left-0
                bottom-0  z-0
                "    alt="/"/>

            <div className="relative
            w-full h-full flex  items-center">
                <div className=" w-[85%] text-left pl-3
                sm:w-[70%] md:w-[70%] lg:w-[60%] lg:pl-5
                ">
                    <div className="pl-3 text-sm
                    sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-6xl"
                    >
                        <span className={`font-medium text-2xl
                        sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-10xl
                        
                        
                        
                        `}>AI Agent.</span><br></br>
                        <span className="
                        text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl

                        ">Tailored to Serve You</span>
                    </div>

                    <div className="text-[0.6rem] pt-2.5 pl-3
                    sm:text-xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl
                    ">
                        When it's time for your next transaction,
                        trust your AI Agent to gather intelligence
                        and act with precision.
                    </div>


                </div>
            </div>

        </div>
    )
}