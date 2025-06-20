import {Link} from "react-router-dom";

export default function Links() {
    const links1 = [
          { to: "/agents", label: "Agents" },
          { to: "", label: "AI ecosystem(test)" },
          { to: "/research", label: "Research" },
          { to: "/safety", label: "Safety" },
          { to: "", label: "Policies" },
          { to: "", label: "Terms" },
          { to: "", label: "Privacy" },
          { to: "", label: "Data" },
        ];

    const links2 = [
          { to: "/team", label: "Team" },
          { to: "/company", label: "Company" },
          { to: "/pricing", label: "Pricing" },
          { to: "/api", label: "API" },
          { to: "/development", label: "Development" },
          { to: "", label: "" }, // 空标签可省略
          { to: "/help", label: "Help" },
          { to: "/contact", label: "Contact" },
        ];

    return (
        <div className="
        mt-20 w-full
        ">
            <div className="
            flex px-6 py-3
            text-xs
            sm:px-20 sm:text-xl
            lg:px-40
            ">
                <div className="flex flex-col flex-1 leading-5 text-[rgba(60,60,60,0.8)]
                sm:leading-10
                lg:leading-[50px] lg:text-xl
                ">
                  {links1.map(({ to, label }, i) =>
                    label ? (
                      <Link
                        key={i}
                        to={to}
                        className="hover:text-[rgba(1,1,1,1)]"
                      >
                        {label}
                      </Link>
                    ) : null
                  )}
                </div>

                <div className="flex flex-col leading-5
                sm:leading-10
                lg:leading-[50px] lg:text-xl
                ">
                  {links2.map(({ to, label }, i) =>
                    label ? (
                      <Link
                        key={i}
                        to={to}
                        className="hover:text-[rgba(1,1,1,1)]"
                      >
                        {label}
                      </Link>
                    ) : null
                  )}
                </div>


            </div>
        </div>
    )
}