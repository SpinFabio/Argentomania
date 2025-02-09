import React from "react";

interface SocialProps {
  source: string;
  text: string;
  redirect: string;
}

const Social: React.FC<SocialProps> = ({ source, text, redirect }) => {
  const handleRedirect = () => {
    window.location.href = redirect;
  };

  return (
    <div className="flex flex-row m-4" onClick={handleRedirect}>
      <img className="size-8 mr-5" src={source} />
      <p className="">{text}</p>
    </div>
  );
};

export default Social;
