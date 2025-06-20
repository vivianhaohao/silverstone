export default function Subscribe() {
    return (
        <div className="
        flex flex-col justify-center items-center w-full
        mt-16
        lg:mt-60

        ">
            <div className="
        flex flex-col w-[90%] items-center justify-center bg-[rgba(60,60,60,0.1)]
        h-[20vh] mt-11 rounded-[30px]
        sm:h-[17vh]
        lg:h-[35vh]
        ">
            <div className="
            flex flex-col justify-center items-center">
                <p className="
                text-xs py-3
                sm:text-xl
                lg:text-2xl
                ">Subscribe to our product updates and news.</p>
            </div>

            <div>
                <input
                    type="email"
                    placeholder="Your email"
                    className="flex-grow px-1 py-1.5 text-gray-700 focus:outline-none bg-transparent
                    text-sm
                    sm:px-3 sm:text-xl md:text-2xl sm:py-2
                    lg:text-2xl lg:mt-3

                    "
                  />
                  <button
                    className="px-2 py-1.5 bg-gray-800 text-white text-[0.6rem] rounded-full hover:bg-gray-700 transition
                    sm:text-sm
                    lg:text-2xl lg:mt-3
                    "
                  >
                    Subscribe
                  </button>


            </div>

        </div>
        </div>

    )
}