// import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../apis/auth.api";
import csaLogo from "../../assets/csaLogo.png";
import { FormErrorText } from "../../components/FormErrorText";
import { Auth } from "../../utils/Auth";

const AuthPage: React.FC = () => {
  // const scrollableImgs = document.getElementsByClassName("animatedScroll");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  // useEffect(() => {
  //   var windowHeight = window.innerHeight;
  //   const animateScroll = (event: any) => {
  //     for (var scrollableImg of scrollableImgs) {
  //       var scrollableImgTop = scrollableImg.getBoundingClientRect().top;
  //       if (scrollableImgTop < windowHeight) {
  //         (scrollableImg as HTMLElement).style.transform =
  //           "translateY(-" +
  //           (scrollableImg.clientHeight - scrollableImgTop) / 86 +
  //           "%)";
  //       }
  //     }
  //   };
  //   window.addEventListener("scroll", animateScroll);

  //   return () => {
  //     window.removeEventListener("scroll", animateScroll);
  //   };
  // }, []);

  return (
    <div className="font-home font-black">
      <div
        className="animatedScroll bg-[url(https://s1.pearlcdn.com/NAEU/contents/img/portal/main/main_world_bg.jpg)] bg-top bg-no-repeat bg-cover absolute z-10 w-full h-[100%] motion-safe:animate-fadeIn2s"
        onAnimationEnd={function () {
          document.getElementById("auth_container")?.classList.remove("hidden");
          document
            .getElementById("auth_container")
            ?.classList.add("motion-safe:animate-fadeIn2s");
        }}
      ></div>
      <div
        id="auth_container"
        className="absolute hidden left-[calc(50%-300px)] z-10 w-[600px] h-[850px] bg-gradient-to-b from-white via-white rounded-t-lg mt-2 px-10 pt-2 drop-shadow-xl"
      >
        <div className="flex items-center justify-center mt-5 my-4">
          <img src={csaLogo} alt="" className=" h-24" />
        </div>
        <div className=" text-center text-3xl mb-12">
          <h1>Welcome to AUTCSA</h1>
        </div>
        <form
          className="flex-col"
          onSubmit={handleSubmit(async function (data: any) {
            const res = await signIn(data["username"], data["password"]);
            var resData = res.data.data;
            if (resData["status"] === "SIGN_IN_SUCCESS") {
              window.localStorage.setItem("idToken", resData["idToken"]);
              window.localStorage.setItem(
                "accessToken",
                resData["accessToken"]
              );
              window.localStorage.setItem(
                "refreshToken",
                resData["refreshToken"]
              );
              Auth.setUserAttributes(
                data["username"],
                resData["userAttributes"]
              );
            }
            if (!res.data["success"]) {
              alert("Wrong Username or Password!");
            } else if (window.localStorage.getItem("accessToken")) {
              navigate("/home");
            }
          })}
        >
          <div>
            {/* <FormErrorText isError={!!errors.password}>
              Wrong Username or Password!
            </FormErrorText> */}
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              className="flex username_input border-gray-500 border rounded-md p-4 text-base w-full my-4 focus:drop-shadow-lg"
              placeholder="Email or Username"
              id="username_input"
              type="username"
              autoComplete="username"
              {...register("username", { required: true })}
            ></input>
            <FormErrorText isError={!!errors.username}>
              Please enter your username or email address
            </FormErrorText>
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              className="flex password_input border-gray-500 border rounded-md p-4 text-base w-full my-4 focus:drop-shadow-lg"
              placeholder="Password"
              id="password_input"
              type="password"
              autoComplete="current-password"
              {...register("password", { required: true })}
            ></input>
            <FormErrorText isError={!!errors.password}>
              Please enter your password
            </FormErrorText>
          </div>
          <button
            className=" bg-mainRed rounded-md p-4 text-base w-full my-4 text-center text-white disabled:opacity-50 hover:drop-shadow-lg"
            type="submit"
            disabled={isSubmitting}
          >
            SIGN IN
          </button>
          <div className="w-full flex justify-between">
            <div>
              <a
                href=""
                className=" hover:text-mainRed hover:underline-offset-4"
              >
                Forget Password?
              </a>
            </div>
            <div>
              <a
                href="http://localhost:3000/authentication/signup"
                className=" hover:text-mainRed hover:underline-offset-4"
              >
                Join Us!
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
