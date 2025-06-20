export default function Agenthead(){
    return (
        <div className="
        flex flex-col w-full h-[35vh] relative
        sm:h-[40vh] md:h-[50vh] lg:h-[100vh] xl:h-[100vh]

        ">
            <img src="/agentPageResource/back.png" alt=""
                 className="w-full h-full object-cover absolute
            top-0 z-0 left-0
            "
            />

            <div className="
            relative  w-full h-full
            flex items-center justify-center
            ">
                <p className="text-xs
                pl-5 pr-14
                sm:text-xl sm:pl-6 sm:pr-28
                md:text-xl md:pr-28
                lg:text-xl lg:pl-10 lg:pr-60
                xl:text-2xl xl:pr-72

                ">
                   <span className="font-light text-2xl
                   sm:text-4xl
                   md:text-5xl
                   lg:text-7xl
                   xl:text-8xl
                   ">AI agents </span><br></br>
                    <br></br>
                     support every stage of trading
                    and daily tasks, driving a modular and scalable
                    intelligent trading ecosystem.
                </p>

            </div>
        </div>
        
    )
}