export default function Benefits() {
    return (
        <div className="w-full  flex-col flex
         py-6 mt-11
         sm:flex-row sm:px-2 sm:py-20
         lg:py-24


        ">
            <div className=" px-3 py-2
            lg:px-5
            ">
                <div className="
                sm:sticky sm:top-24 sm:pb-12
                lg:px-5
                ">
                    <p className="
                font-thin text-[1rem]
                sm:text-xl
                md:text-2xl
                lg:text-4xl
                xl:text-5xl

                ">
                    What can AI agents do for you?
                </p>
                </div>

            </div>


            <div className=" px-5 py-2
            sm:w-[50%]
            lg:w-[50%] lg:px-10
            "
            >
                {[
                  'Real-time access to the latest market information.',
                  '24/7 execution of your trading strategies.',
                  'Personalized customization.',
                  'Secure your wallet and assets.',
                  'Cutting-edge models and a modular trading system.',
                ].map((text, index) => (
                  <div
                    key={index}
                    className={`flex items-center px-5 py-3 lg:py-6
                    
                     ${
                      index % 2 === 1 ? '' +
                          'border-b-[0.5px] border-l-[0.5px] border-[rgba(120,120,120)]' : ''
                    }`}
                  >
                    <div className="

                    ">
                      <span className="
                      text-xs
                      sm:text-sm
                      md:text-xl
                      lg:text-2xl
                      xl:text-3xl
                      ">{text}</span>
                    </div>
                  </div>
                ))}

            </div>
        </div>
    )
}