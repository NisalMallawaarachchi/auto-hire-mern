import React from "react";

const Title = ({ title, subtitle, align }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center ${
        align === "left" && "md:items-start md:text-left"
      } ${align === "right" && "items-end text-right"} mb-12`}
    >
      <h1 className="font-semibold text-4xl md:text-[40px]">{title}</h1>
      <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w156">
        {subtitle}
      </p>
    </div>
  );
};

export default Title;
