import { useGetCommentatorProfileQuery } from "../../api/queries/feedApi";


const DisplayComments = (comment) => {
  const userEmail = comment?.comment?.userEmail;

  const { data: commentator, isLoading } =
    useGetCommentatorProfileQuery(userEmail);
  if (isLoading) <></>;
  return (
    <div className="mt-3 border-t-2 border-stale-500 h-auto">
      <div className="flex mt-2 min-h-16 items-center">
        <div className="h-14 w-[50px]">
          <img
            className="w-full h-full rounded-full"
            src="https://res.cloudinary.com/dfmdacf6w/image/upload/v1699554373/hero-club/avatar-_dlv3ja.jpg"
            alt=""
          />
        </div>
        <h2 className="text-xl text-black ml-3">{commentator?.name}</h2>
      </div>
      <p className="mt-2 text-md text-left">
        {comment?.comment?.comment}
      </p>
    </div>
  );
};

export default DisplayComments;
