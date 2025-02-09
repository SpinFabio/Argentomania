import React from "react";

interface CitationsProps {
  text: string;
  author: string;
}

const Citations: React.FC<CitationsProps> = ({ text, author }) => {
  return (
    <div className="mt-32 md:pt-20 m-10">
      <div className="border-l-4 border-stone-300 font-thin rounded-2xl p-6 md:p-10 inline-block shadow-xl shadow-stone-200/10">
        <h4 className="italic text-[20px]">{`"${text}"`}</h4>
        <h5 className="font-bold pt-5 md:pt-10 text-right">{author}</h5>
      </div>
    </div>
  );
};

export default Citations;
