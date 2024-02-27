import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const FechaForm = () => {
  const navigate = useNavigate();
  const {register, handleSubmit } = useForm();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    navigate("/productsform/");
  });
  return (
    <div>
      <h1>Renta</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="fecha">Para cuando quiere las mesas?</label>
        <input type="date" {...register('date')}/>
        <button type="submit">siguiente</button>
      </form>
    </div>
  );
};
