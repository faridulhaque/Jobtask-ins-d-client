import React, { useState } from "react";
import SignUP from "../components/welcomePage/SignUP";
import SignIN from "../components/welcomePage/SignIN";

const WelcomePage = () => {
  const [registerPage, setRegisterPage] = useState(false);

  return (
    <div className="h-screen bg-[#ADD8E6] flex items-center justify-center">
      <div className="modal-box">
        <h3 className="font-bold text-xl text-center">
          {registerPage ? "Sign Up Now" : " Sign In Here"}
        </h3>

        <div>
          {registerPage ? (
            <SignUP setRegisterPage={setRegisterPage}> </SignUP>
          ) : (
            <SignIN setRegisterPage={setRegisterPage}></SignIN>
          )}
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
