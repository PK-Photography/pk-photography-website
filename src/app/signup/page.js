"use client";

import { useState
} from "react";
import { useRouter
} from "next/navigation";
import { toast
} from "react-hot-toast";
import { signIn
} from "next-auth/react";
import GoogleLoginButton from "@/components/GoogleLoginButton";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData
  ] = useState({ fullName: "", mobileNo: ""
  });
  const [mobileError, setMobileError
  ] = useState("");
  const [loading, setLoading
  ] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData,
      [e.target.name
      ]: e.target.value
    });
  };

  const validateMobile = (number) => {
    const digits = number.replace(/\D/g,
    "");
    return digits.startsWith("91") ? digits.length === 12 : digits.length === 10;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMobileError("");

    if (!formData.fullName.trim()) {
      toast.error("Please enter your full name.");
      return;
    }

    if (!validateMobile(formData.mobileNo)) {
      setMobileError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);
    try {
      // TODO: replace this with your real signup API call
      const res = await signIn("credentials",
      {
        fullName: formData.fullName,
        mobileNo: formData.mobileNo,
        redirect: false,
      });

      if (res?.ok) {
        toast.success("Sign-up successful!");
        router.push("/");
      } else {
        toast.error("Sign-up failed.");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-center text-gray-900">
          Create Your Account
        </h2>
        <p className="text-sm text-gray-600 text-center mb-4 mt-4">
          Sign up to access your personalized dashboard, downloads, and booking history.
        </p>

        <form onSubmit={handleSubmit
  } className="space-y-4">
          { /* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName
  }
              onChange={handleChange
  }
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              required
            />
          </div>

          { /* Mobile Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <PhoneInput
              country={
    "in"
  }
              value={formData.mobileNo
  }
              onChange={(phone) => setFormData({ ...formData, mobileNo: phone
    })
  }
              inputStyle={
    {
                width: "100%",
                padding: "10px 10px 10px 50px",
                borderRadius: "0.375rem",
                border: "1px solid #d1d5db",
                fontSize: "14px",
                fontFamily: "inherit",
                boxSizing: "border-box",
    }
  }
              containerStyle={
    {
                position: "relative",
                width: "100%",
                fontFamily: "inherit",
    }
  }
              inputProps={
    { name: "mobileNo", required: true
    }
  }
            />
            {mobileError && <p className="text-sm text-red-600 mt-1">{mobileError
    }</p>
  }
          </div>

          { /* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
            disabled={loading
  }
          >
            {loading ? "Please wait...": "Sign Up"
  }
          </button>
        </form>

        <div className="my-4 text-center text-sm text-gray-500">or continue with</div>

        <GoogleLoginButton text="Sign up with Google" />

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{
    " "
  }
          <a href="/login" className="text-indigo-600 font-medium">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}