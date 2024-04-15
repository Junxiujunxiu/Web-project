import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormErrorText } from "../../components/FormErrorText";
import csaLogo from "../../assets/csaLogo.png";
import { signUp } from "../../apis/auth.api";

const isPasswordConfirmed = () => {
  var password = (document.getElementById("password") as HTMLInputElement)
    .value;
  var confirmPassword = (
    document.getElementById("confirm_password") as HTMLInputElement
  ).value;
  return password === confirmPassword;
};

const RegistrationPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <div className="font-home font-black">
      <div className="animatedScroll bg-[url(https://s1.pearlcdn.com/NAEU/contents/img/portal/main/main_world_bg.jpg)] bg-top bg-no-repeat bg-cover absolute z-10 w-full h-[100%] "></div>
      <div className="absolute left-[calc(50%-500px)] z-10 w-[1000px] h-[850px] bg-gradient-to-b from-white via-white rounded-t-lg mt-2 px-10 pt-2 drop-shadow-xl">
        <div className="flex items-center justify-center mt-5 my-4">
          <img src={csaLogo} alt="" className=" h-24" />
        </div>
        <div className=" text-center text-3xl mb-12">
          <h1>Join AUTCSA</h1>
        </div>
        <form
          className="flex-col"
          onSubmit={handleSubmit(async function (data: any) {
            try {
              const res = await signUp(data);
              console.log(res);
              var resData = res.data;
              if (resData["success"]) {
                navigate("/authentication");
              } else {
                alert(resData["message"]);
              }
            } catch (err) {
              console.log(err);
            }
          })}
        >
          <div className="flex flex-wrap w-full justify-between">
            <div className="px-4 py-2 w-[47%]">
              <label htmlFor="email-address" className="">
                *Email address
              </label>
              <input
                className="flex email_input border-gray-500 border rounded-md p-4 text-base w-full mb-4 focus:drop-shadow-lg"
                placeholder="Email address"
                id="email"
                type="email"
                autoComplete="email"
                {...register("email", { required: true })}
              ></input>
              <FormErrorText isError={!!errors.email}>
                This field cannot be empty
              </FormErrorText>
            </div>
            <div className="px-4 py-2 w-[47%]">
              <label htmlFor="username" className="">
                *Username
              </label>
              <input
                className="flex username_input border-gray-500 border rounded-md p-4 text-base w-full mb-4 focus:drop-shadow-lg"
                placeholder="Username"
                id="username"
                type="username"
                autoComplete="username"
                {...register("username", { required: true })}
              ></input>
              <FormErrorText isError={!!errors.username}>
                This field cannot be empty
              </FormErrorText>
            </div>
            <div className="px-4 py-2 w-[47%]">
              <label htmlFor="password" className="">
                *New Password
              </label>
              <input
                className="flex password_input border-gray-500 border rounded-md p-4 text-base w-full mb-4 focus:drop-shadow-lg"
                placeholder="Password"
                id="password"
                type="password"
                autoComplete="new-password"
                {...register("password", { required: true })}
              ></input>
              <FormErrorText isError={!!errors.password}>
                This field cannot be empty
              </FormErrorText>
            </div>
            <div className="px-4 py-2 w-[47%]">
              <label htmlFor="password" className="">
                *Confirm Password
              </label>
              <input
                className="flex password_input border-gray-500 border rounded-md p-4 text-base w-full mb-4 focus:drop-shadow-lg"
                placeholder="Confirm Password"
                id="confirm_password"
                type="password"
                autoComplete="new-password"
                {...register("confirm_password", {
                  required: true,
                  validate: isPasswordConfirmed,
                })}
              ></input>
              <FormErrorText isError={!!errors.confirm_password}>
                Please confirm your password!
              </FormErrorText>
            </div>
            <div className="px-4 py-2 w-[47%]">
              <label htmlFor="full-name" className="">
                *Full Name
              </label>
              <input
                className="flex border-gray-500 border rounded-md p-4 text-base w-full mb-4 focus:drop-shadow-lg"
                placeholder="Full name"
                id="name"
                type="name"
                autoComplete="name"
                {...register("name", { required: true })}
              ></input>
              <FormErrorText isError={!!errors.name}>
                This field cannot be empty
              </FormErrorText>
            </div>
            <div className="px-4 py-2 w-[47%]">
              <label htmlFor="birthdate" className="">
                *Birthdate
              </label>
              <input
                className="flex border-gray-500 border rounded-md p-4 text-base w-full mb-4 focus:drop-shadow-lg"
                placeholder="Birthdate"
                id="birthdate"
                type="date"
                {...register("birthdate", { required: true })}
              ></input>
              <FormErrorText isError={!!errors.birthdate}>
                This field cannot be empty
              </FormErrorText>
            </div>
            <div className="px-4 py-2 w-[47%]">
              <label htmlFor="phone_number" className="">
                Phone Number
              </label>
              <input
                className="flex border-gray-500 border rounded-md p-4 text-base w-full mb-4 focus:drop-shadow-lg"
                placeholder="+64..."
                id="phone_number"
                type="phone_number"
                {...register("phone_number")}
              ></input>
              <FormErrorText isError={!!errors.phone_number}>
                Bad Input
              </FormErrorText>
            </div>
            <div className="px-4 py-2 w-[47%]">
              <label htmlFor="address" className="">
                Address
              </label>
              <input
                className="flex border-gray-500 border rounded-md p-4 text-base w-full mb-4 focus:drop-shadow-lg"
                placeholder="Address"
                id="address"
                type="address"
                {...register("address")}
              ></input>
              <FormErrorText isError={!!errors.address}>
                Bad Input
              </FormErrorText>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              className=" bg-mainRed rounded-md p-4 text-base w-[80%] my-4 text-center text-white disabled:opacity-50 hover:drop-shadow-lg"
              type="submit"
              disabled={isSubmitting}
            >
              REGISTER
            </button>
          </div>

          <div className="w-full flex justify-between">
            <div>
              <a
                href="http://localhost:3000/authentication"
                className=" hover:text-mainRed hover:underline-offset-4"
              >
                Back to Login
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
