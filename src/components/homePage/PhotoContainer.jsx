
import {AiFillHeart} from "react-icons/ai"
import CommentForm from "./CommentForm";
import DisplayComments from "./DisplayComment";
import { useGetUserProfileQuery } from "../../api/queries/registerApi";
import { useLikeControlMutation } from "../../api/queries/feedApi";


const PhotoContainer = ({ blog }) => {
  let userEmail = JSON.parse(localStorage.getItem("user") || null);

  const { data: bloggerData, isLoading: userLoading } = useGetUserProfileQuery(
    blog?.userEmail
  );

  const [likeUnlike, { isLoading }] = useLikeControlMutation();

  if (isLoading || userLoading) {
    return <></>;
  }

  const likeControl = (id) => {
    const data = { email: userEmail, id };
    likeUnlike(data);
  };

  const comments = blog?.comments?.length ? blog?.comments : [];

  const reversedComments = [...comments]?.reverse();

 

  return (
    <div className="lg:w-2/4 sm:w-4/5 shadow-md p-5 rounded-md bg-white mx-auto modal-box">
      <div className="flex">
        <div className="h-12 w-12">
          <img
            className="h-full w-full rounded-full"
            src="https://res.cloudinary.com/dfmdacf6w/image/upload/v1699554373/hero-club/avatar-_dlv3ja.jpg"
            alt=""
          />
        </div>

        <div className="ml-5">
          <p className="text-lg text-black capitalize bold">
            {bloggerData?.name}
          </p>
          
        </div>
      </div>

      {/* title wll be there */}
      <div className="mt-2 w-full h-[500px]">
        <img
          className="w-full h-full rounded-md"
          src={blog?.imagePath}
          alt="img"
        />
      </div>
      <h2 className="text-2xl my-4">{blog?.title}</h2>
      
      <div className="flex items-center mt-5">
        <AiFillHeart
          onClick={() => likeControl(blog?._id)}
          className={`${
            blog?.likes?.includes(userEmail)
              ? "text-red-400"
              : "text-slate-400"
          } cursor-pointer text-xl`}
        ></AiFillHeart>
        <span className="text-blue-500 text-lg ml-5">
          {blog?.likes?.length} Likes
        </span>
      </div>

      {/* form for making comment */}
      <CommentForm userEmail={userEmail} postId={blog?._id}></CommentForm>
      {reversedComments?.map((comment) => (
        <DisplayComments comment={comment}></DisplayComments>
      ))}
    </div>
  );
};

export default PhotoContainer;
