"use client";

import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      src={
        "https://media.licdn.com/dms/image/v2/D4D35AQEGvzAJgi3sMQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1716029890163?e=1726419600&v=beta&t=h_FvLeHh3kRdg0XvvOZKsnSzblYo1G9YaqnfCs21i0s"
      }
      className="rounded-full"
      width={"30"}
      height={"30"}
      alt="Your Picture"
    />
  );
};

export default Avatar;
