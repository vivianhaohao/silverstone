import { useState } from "react";


const agents = [
  {
    name: "Aether",
    image: "/agentPageResource/aether.png",
    desc: "Assist you in acquiring real-time market information.",
  },
  {
    name: "Kairo",
    image: "/agentPageResource/kairo.png",
    desc: "Executing strategies 24/7 while you rest.",
  },



];

export default function Agents() {
  const [open , setOpen] = useState(false);
  const displayAgents= open ? agents : agents.slice(0,4);
  return (
    <div className="flex flex-col
    sm:flex-row
    lg:py-24
    ">
      <div className=""
      ><div
      className="

      text-xl px-4 py-6
      sm:text-xl
      md:text-2xl
      lg:text-4xl lg:px-8 lg:py-4
      xl:text-5xl
      sm:pl-10 sm:sticky sm:top-24 sm:pb-20
      "

      >
        All agents
      </div>
        </div>

      <div className="flex flex-col px-6 space-y-6
      sm:pl-10 sm:w-[80%]
      lg:pl-60 lg:w-[75%] lg:pt-24
      ">
        {displayAgents.map((agent, index) => (
          <div
            key={index}
            className="flex flex-col px-6 py-2 rounded-3xl border-[0.5px] border-[rgba(60,60,60,0.1)] hover:border-[rgba(60,60,60,0.3)]"
          >
            <div className="w-[8vh] h-[8vh] mb-2
            lg:w-[12vh] lg:h-[12vh]
            ">
              <img src={agent.image} alt={agent.name} className="w-full h-full rounded-full" />
            </div>
            <div className="mt-5">
              <a
                href=""
                className="text-[1rem] no-underline text-[rgba(60,60,60,1)] hover:text-[rgba(1,1,1,1)]
                sm:text-xl
                lg:text-3xl lg:px-2 lg:py-2
                "
              >
                {agent.name}
              </a>
              <br />
              <span className="text-xs
              sm:text-sm
              lg:text-xl lg:px-2 lg:py-2

              ">{agent.desc}</span>
            </div>
          </div>
        ))}

        <button className="
        flex flex-row pt-5 text-sm text-[rgba(60,60,60,1)]
        hover:text-[rgba(1,1,1,1)] pl-5
        sm:text-[1rem] sm:pl-5
        md:text-xl md:pl-6
        lg:text-2xl lg:pt-10 lg:pl-8


        "
        onClick={() => setOpen(!open)}>
          {open ? "Close" : "More Agents"}

        </button>
      </div>
    </div>
  );
}
