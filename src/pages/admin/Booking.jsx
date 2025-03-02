import Forminputs from "@/components/form/Forminputs";
import TextAreainput from "@/components/form/TextAreainput";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";

function Booking() {
  const { register, handleSubmit } = useForm();

  const allstyleSubmit = (data) => {
    console.log(data);
  };

  return (
    <section>
      <h1 className="captialize text-2xl font-semibold">Create Booking</h1>
      <div className="border p-8 rounded-md">
        <form onSubmit={handleSubmit(allstyleSubmit)}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
          <Forminputs 
          register={register} 
          name='title'
          type="text" 
          placeholder="Title..."
          />
         <Forminputs
          register={register} 
          name='date'
          type="date" 
          placeholder="Title..."
          />
          <TextAreainput 
          register={register} 
          name='description'
          type="text" 
          placeholder="Input Your ..."
          />
              <button>Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Booking;
