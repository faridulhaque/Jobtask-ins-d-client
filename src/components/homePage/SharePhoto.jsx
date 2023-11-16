import React, { useEffect, useState } from "react";
import { CiCamera } from "react-icons/ci";
import { useSaveBlogPostMutation } from "../../api/queries/feedApi";

const SharePhoto = () => {
  const [imgFile, setImgFile] = useState(null);
  const [loading, setLoading] = useState(false);

  let userEmail = JSON.parse(localStorage.getItem("user") || null);


  const [saveBlogPost] = useSaveBlogPostMutation();

  const uploadImage = async (file) => {
    setLoading(true);
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dfmdacf6w/image/upload",
      {
        method: "POST",
        body: file,
      }
    );
    const data = await response.json();


    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    const title = e.target.title.value;
    const file = new FormData();
    const likes = [];
    const comments = [];

    file.append("file", imgFile);
    file.append("upload_preset", "heroclub");
    const pictureInfo = await uploadImage(file);


    if (pictureInfo?.secure_url) {
      await saveBlogPost({
        imagePath: pictureInfo?.secure_url,
        title,
        likes,
        comments,
        userEmail,
      });
      setLoading(false);
      window.location.reload();
    }
  };


  


  return (
    <form onSubmit={handleSubmit} className="mx-auto">
      <div className="h-20"></div>
      <div className="modal-box mx-auto">
        <h2 className="text-center text-4xl">Share Photo</h2>
        <h3 className="text-center text-xl">
          Share your photo on Photo village
        </h3>
        <label
          className="text-center w-full flex items-center justify-center"
          htmlFor="file_select"
        >
          <CiCamera className="text-4xl mt-10 cursor-pointer" />
        </label>

        {imgFile && (
          <>
            <div className="w-11/12 mx-auto mb-5">
              <label className="block text-center text-sm font-bold mb-2 text-green-500">
                Photo Added
              </label>
              <label className="block text-left text-gray-700 text-sm font-bold mb-2">
                Title
              </label>
              <input
                className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
                type="text"
                placeholder="Enter a title"
                required
                name="title"
              />
            </div>
            <button
              type="submit"
              className="w-11/12 mt-2 block mx-auto bg-gradient-to-r from-[#87CEEB] to-[#ADD8E6] hover:from-[#ADD8E6] hover:to-[#87CEEB] text-white font-bold py-2 px-4 rounded"
            >
              Share
            </button>
          </>
        )}
      </div>
      <input
        onChange={(e) => setImgFile(e.target.files[0])}

        type="file"
        className="hidden"
        id="file_select"
      ></input>
    </form>
  );
};

export default SharePhoto;
