import { actionRegister } from "@/api/auth";
import Buttons from "@/components/form/Buttons";
import Forminputs from "@/components/form/Forminputs";
import { createAlert } from "@/utils/createAlert";
import { registerSchema } from "@/utils/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const { isSubmitting, errors } = formState;
  //   console.log(errors.password?.message);
  const hdlSubmit = async (value) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    try {
      const res = await actionRegister(value);
      createAlert("success", "Register Success");
      reset();
    } catch (error) {
      createAlert("info", error.response?.data?.message);
    }
  };
  return (
    <div className="flex pt-[450px] justify-center ">
      {/* Card */}
      <div className="border p-8 w-[60vh] h-[650px] rounded-md ">
      <h1 className="capitalize text-2xl font-semibold mb-4">Register</h1>
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
              name="firstname"
              type="text"
              placeholder="Input Your Firstname"
              errors={errors}
            />
            <Forminputs
              register={register}
              name="lastname"
              type="text"
              placeholder="Input Your Lastname"
              errors={errors}
            />
            <Forminputs
              register={register}
              name="password"
              type="password"
              placeholder="Input Your Password"
              errors={errors}
            />
            <Forminputs
              register={register}
              name="confirmPassword"
              type="password"
              placeholder="Input Your Password"
              errors={errors}
            />
          </div>
            <br />
          <div className="flex justify-center">
            <Buttons text="Register" isSubmitting={isSubmitting} label="Register" />
          </div>
          <br />
        </form>
      </div>
    </div>
  );
};
export default Register;
