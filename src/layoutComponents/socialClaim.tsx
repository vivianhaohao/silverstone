export default function SocialClaim() {
  const icons = [
    "icon-x",
    "icon-github",
    "icon-youtube",
    "icon-linkedin",
    "icon-email",
    "icon-discard",
    "icon-telegram",
  ];

  return (
    <div className="flex flex-col mt-28 px-3 sm:px-5
    w-full md:flex-row md:justify-between md:items-center">
      <div className="flex gap-3 sm:gap-4">
        {icons.map((icon, index) => (
          <span
            key={index}
            className={`iconfont ${icon} text-xl md:text-xl lg:text-2xl xl:text-3xl
            hover:text-[rgba(60,60,60,0.8)] hover:cursor-pointer
            `}
          ></span>
        ))}
      </div>
      <div className="text-xs py-3 sm:text-sm md:text-xl lg:text-2xl xl:text-3xl">
        &copy; <span className="year">2024-2025</span> &ensp;&ensp;SilverStone Capital. All rights reserved.
      </div>
    </div>
  );
}
