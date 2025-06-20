export default function Agentvideo(){
    return (
        <div className="w-full">
            <video src="/homePageResource/agent.mp4"
            className="w-full h-full object-cover overflow-hidden"
                   autoPlay
                   playsInline
                   muted
                   preload="auto"

            >

            </video>

        </div>
    )
}