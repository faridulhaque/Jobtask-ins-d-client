import React from "react";
import SharePhoto from "../components/homePage/SharePhoto";
import { useGetAllBlogsQuery } from "../api/queries/feedApi";
import PhotoContainer from "../components/homePage/PhotoContainer";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("user");
    navigate("/wc");
  };

  const { data: blogs, isLoading } = useGetAllBlogsQuery();

  return (
    <div className="min-h-screen bg-[#ADD8E6]">
      <p
        onClick={handleSignOut}
        className="text-black text-xl absolute top-10 cursor-pointer right-10"
      >
        Log out
      </p>

      <SharePhoto></SharePhoto>

      {isLoading ? (
        <p className="text-2xl text-red-500">
          Your data is loading. If you don't see any data please refresh the
          page
        </p>
      ) : (
        blogs?.map((blog) => (
          <PhotoContainer key={blog?._id} blog={blog}></PhotoContainer>
        ))
      )}
    </div>
  );
};

export default HomePage;
