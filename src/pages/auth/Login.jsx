import Buttons from "@/components/form/Buttons";
import Forminputs from "@/components/form/Forminputs";
import useAuthStore from "@/store/authStore";
import { createAlert } from "@/utils/createAlert";
import { loginSchema } from "@/utils/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const Login = () => {
  // Zustand
  const actionLogin_ = useAuthStore((state) => state.actionLogin_);
  const navigate = useNavigate();
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { isSubmitting, errors } = formState;
  //   console.log(errors.password?.message);
  const hdlSubmit = async (value) => {
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const res = await actionLogin_(value);
    console.log(res);
    if (res.success) {
      roleRedirect(res.role);
      createAlert("success", "Login Success");
    } else {
      createAlert("info", res.error);
    }
  };

  const roleRedirect = (role) => {
    console.log(role);
    if (role === "ADMIN") {
      navigate("/admin");
    } else {
      navigate("/user");
    }
  };

  return (
    <div className="flex pt-[550px] justify-center ">
      {/* Card */}
      <div className="border p-8 w-[60vh] h-[450px] rounded-md ">
      <h1 className="capitalize text-2xl font-semibold mb-4">Login</h1>
        {/* Form */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="flex flex-col gap-4 ">
          <Forminputs
              register={register}
              name="email"
              type="text"
              placeholder="Input Your Email"
              errors={errors}
            />

            <Forminputs
              register={register}
              name="password"
              type="password"
              placeholder="Input Your Password"
              errors={errors}
            />
          </div>
            <br />
          <div className="flex justify-center">
            <Buttons text="Login" isSubmitting={isSubmitting} label="Login" />
          </div>
          <br /><br />
          <a className=" flex justify-center" href="register">Register?</a>
        </form>
      </div>
    </div>
  );
};
export default Login;
