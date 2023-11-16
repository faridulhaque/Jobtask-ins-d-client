import { useState } from "react";
import { useRegisterUserMutation } from "../../api/queries/registerApi";

const SignUP = ({ setRegisterPage }) => {
  const [register, { isLoading: registering }] = useRegisterUserMutation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordHash, setPasswordHash] = useState("");

  const [err, setErr] = useState("");

  const handleRegister = async () => {
    if (!name || !password || !passwordHash || !email) {
      return setErr("All fields are required");
    } else if (password.length <= 7 || passwordHash.length <= 7) {
      return setErr("Password must be at least 7 characters");
    } else if (password !== passwordHash) {
      return setErr("Both passwords must be same");
    }

    const result = await register({ name, email, password });
    if (result?.data?.acknowledged) {
      setRegisterPage(false);
    }
  };

  return (
    <>
      <div className="w-11/12 mx-auto mb-5">
        <label className="block text-left  text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
          className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
          type="name"
          placeholder="Enter your name"
          required
          name="name"
          onBlur={(e) => setName(e.target.value)}
        />
      </div>

      <div className="w-11/12 mx-auto mb-5">
        <label className="block text-left text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
          type="email"
          placeholder="Enter your email"
          required
          name="email"
          onBlur={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="w-11/12 mx-auto mb-5">
        <label className="block text-left text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input
          className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
          type="password"
          placeholder="Enter your password"
          required
          name="password"
          onBlur={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="w-11/12 mx-auto mb-5">
        <label className="block text-left text-gray-700 text-sm font-bold mb-2">
          Reassign Password
        </label>
        <input
          className="block w-full my-2 px-2 py-3 rounded-lg bg-gray-100 placeholder-gray-500 text-gray-900 outline-gray-300"
          type="password"
          placeholder="Enter your password again"
          required
          name="passwordHash"
          onBlur={(e) => setPasswordHash(e.target.value)}
        />
      </div>

      {err && (
        <div className="w-11/12 mx-auto mb-5">
          <small className="text-red-500">{err}</small>
        </div>
      )}

      <button
        onClick={() => handleRegister()}
        type="button"
        className="w-11/12 mt-2 block mx-auto bg-gradient-to-r from-[#87CEEB] to-[#ADD8E6] hover:from-[#ADD8E6] hover:to-[#87CEEB] text-white font-bold py-2 px-4 rounded"
      >
        Register
      </button>

      <div className="divider">OR</div>

      <div className="w-11/12 mx-auto mb-5">
        <small className="text-black">
          Already have an account?{" "}
          <button
            className="text-blue-300"
            onClick={() => setRegisterPage(false)}
          >
            Sign in here
          </button>
        </small>
      </div>
    </>
  );
};

export default SignUP;
