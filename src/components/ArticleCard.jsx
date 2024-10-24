import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { images, stables } from "./constants";
import { Link } from "react-router-dom";

const ArticleCard = ({ post, className }) => {
  const getPhotoUrl = (version, photoName) =>
    `${stables.CLOUDINARY_BASE_URL}v${version}/blog-app/${photoName}`; // Dinamik Cloudinary URL

  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}
    >
      <Link to={`/blog/${post.slug}`}>
        <img
          src={
            post.photo
              ? getPhotoUrl(post.photo.version, post.photo.filename) // Dinamik URL
              : images.samplePostImage
          }
          className="object-center h-auto md:h-52 lg:h-48 xl:h-60"
          alt="Post Image"
        />
      </Link>
      <div className="p-5">
        <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
          {post.title}
        </h2>
        <p className="text-dark-light mt-3 text-sm md:text-lg">
          {post.caption}
        </p>

        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <img
              src={
                post.user.avatar
                  ? getPhotoUrl(
                      post.user.avatar.version,
                      post.user.avatar.filename
                    ) // Dinamik URL
                  : images.userImage
              }
              alt="Post Profile"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full"
            />
            <div className="flex flex-col">
              <h4 className="font-bold italic text-dark-soft text-sm md:text-base">
                {post.user.name}
              </h4>
              <div className="flex items-center gap-x-2">
                <span
                  className={`${
                    post.user.verified ? "bg-[#36B37E]" : "bg-red-500"
                  } w-fit bg-opacity-20 p-1.5 rounded-full`}
                >
                  {post.user.verified ? (
                    <BsCheckLg className="w-1.5 h-1.5 text-[#36B37E]" />
                  ) : (
                    <AiOutlineClose className="w-1.5 h-1.5 text-red-500" />
                  )}
                </span>
                <span className="italic text-dark-light text-xs md:text-sm">
                  {post.user.verified ? "Verified" : "Unverified"} writer
                </span>
              </div>
            </div>
          </div>
          <span className="font-bold text-dark-light italic text-sm md:text-base mt-2 md:mt-0">
            {new Date(post.createdAt).getDate()}{" "}
            {new Date(post.createdAt).toLocaleString("default", {
              month: "long",
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
