import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import axiosInstance from "@/utils/axiosConfig";
import { FcGoogle } from "react-icons/fc";

export default function GoogleLoginButton() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      saveUserToBackend(session.user);
    }
  }, [session]);

  const saveUserToBackend = async (user) => {
    try {
      await axiosInstance.post("/google-login", {
        name: user.name,
        email: user.email,
        image: user.image,
      });
    } catch (error) {
      console.error("Error saving user to backend:", error);
    }
  };

  return (
    <div className="flex justify-center items-center pt-5">
      {session ? (
        <div className="text-center">
          <p className="text-lg font-semibold mb-4">Welcome, {session.user.name}</p>
          <button
            onClick={() => signOut()}
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-300"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="flex items-center bg-white border border-gray-300 shadow-md py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-300"
        >
          <FcGoogle className="text-2xl mr-2" />
          <span className="text-gray-700 font-medium">Login with Google</span>
        </button>
      )}
    </div>
  );
}




// import { signIn, signOut, useSession } from "next-auth/react";
// import { useEffect } from "react";
// import axios from "axios";
// import axiosInstance from "@/utils/axiosConfig";

// export default function GoogleLoginButton() {
//   const { data: session } = useSession();

//   useEffect(() => {
//     if (session?.user) {
//       saveUserToBackend(session.user);
//     }
//   }, [session]);

//   const saveUserToBackend = async (user) => {
//     try {
//       await axiosInstance.post("/google-login", {
//         name: user.name,
//         email: user.email,
//         image: user.image,
//       });
//     } catch (error) {
//       console.error("Error saving user to backend:", error);
//     }
//   };

//   return (
//     <div>
//       {session ? (
//         <div>
//           <p>Welcome, {session.user.name}</p>
          
//           <button onClick={() => signOut()}>Logout</button>
//         </div>
//       ) : (
//         <button onClick={() => signIn("google")}>Login with Google</button>
//       )}
//     </div>
//   );
// }
