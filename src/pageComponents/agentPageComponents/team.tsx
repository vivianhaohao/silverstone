
export default function Team(){
    return (
        <div className="flex flex-col
        mt-40  w-full
        lg:mt-60

        ">
            <div className="w-full flex flex-col
            items-center
            ">
                <a href="">
                    <p className="
                    text-[1rem] text-[rgba(60,60,60,1)]
                    hover:text-[rgba(1,1,1,1)]
                    sm:text-2xl
                    md:text-3xl
                    lg:text-5xl lg:py-14
                    xl:text-6xl
                    ">Got a great idea? Let’s build it together.</p>
                </a>

            </div>
            <div className="flex flex-col pt-5
            w-full items-center
            ">
                <img src="/agentPageResource/team.png" alt=""
                className="w-[100%] "/>

            </div>

        </div>
    )
}