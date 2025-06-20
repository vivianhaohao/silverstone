import {Link} from "react-router-dom";



const agents=[
    {
        name:'Aether',
        img:'/homePageResource/aether.png',
        description:'Assist you in acquiring real-time market information.',
    },
    {
        name:'Kairo',
        img:'/homePageResource/kairo.png',
        description:'Executing strategies 24/7 while you rest.',
    },
    {
        name:'Aegis',
        img:'/homePageResource/wallet.png',
        description:'Secure your wallet and assets.',
    },
    {
        name:'Janus',
        img:'/homePageResource/safeguard.png',
        description:'Safeguard your on-chain assets.',
    },
    {
        name:'Argus',
        img:'/homePageResource/whale.png',
        description:'Real-time monitoring and alerting of large on-chain transactions and other anomalies.',
    }
]




export default function Agents() {
    return (
        <div className="w-full flex flex-col
        sm:flex-row sm:py-20 px-5
        lg:py-24

        ">
            <div className="
            px-5 py-3 mt-16
            lg:px-6 lg:py-4
            ">
                <div className="
                sm:sticky sm:top-24 pb-3


                ">
                    <p className="
                    text-xl pb-2
                    sm:text-xl
                    md:text-2xl
                    lg:text-4xl
                    xl:text-5xl
                    ">Try our agents.</p>

                </div>
            </div>

            <div className="
            sm:pl-20 sm:pt-12
            lg:pl-40 lg:w-[60%]
            ">
                {agents.map((agent,index)=>(
                    <div key={index} className="
                px-5 py-5
                ">
                    <div className="
                    flex  flex-col
                    ">
                        <div className="
                        w-[8vh] h-[8vh] mb-2
                        lg:w-[12vh] lg:h-[12vh]
                        ">

                            <img src={agent.img} alt="/"
                                 className="w-full h-full object-cover overflow-hidden
                                 rounded-full
                                 "
                            />
                        </div>
                        <div className="
                        border-[0.5px] border-[rgba(60,60,60,0.2)]
                        hover:border-[rgba(60,60,60,0.5)]
                        rounded-[25px]
                        px-3 py-3 lg:mt-5
                        ">
                            <span className="
                            pt-4

                        ">
                                <a href=""
                                className="no-underline text-[rgba(60,60,60,1)] decoration-[0.5px] text-[1rem]
                                hover:text-[rgba(1,1,1,1)]
                                sm:text-xl
                                lg:text-3xl lg:px-2 lg:py-2
                                "
                                >{agent.name}</a>
                        </span>
                            <br></br>
                            <p
                        className="text-[0.6rem]
                        sm:text-sm
                        lg:text-xl lg:px-2 lg:py-2"
                        >
                                {agent.description}</p>

                        </div>

                    </div>


                </div>
                ))}



                <div className="
                sm:pt-6
                lg:mt-12

                ">
                    <span className="
                    px-5 py-5


                    ">
                        <Link to="/agents" className="
                        underline underline-offset-2 decoration-[0.5px]
                        sm:text-xl
                        lg:text-3xl

                        ">
                            explore more...
                        </Link>
                        </span>
                </div>

            </div>
        </div>
    )
}