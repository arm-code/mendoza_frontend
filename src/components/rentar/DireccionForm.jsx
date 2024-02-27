import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const DireccionForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    navigate('/fechaform/')
  });

  return (
    <div>
      <h1>Rentar</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="calle">Calle</label>
        <input
          type="text"
          name="calle"
          id="calle"
          placeholder="ingrese la calle"
          {...register("calle", { required: true })}
        />
        <label htmlFor="numero">No:</label>
        <input
          type="text"
          name="numero"
          id="numero"
          placeholder="numero de calle"
          {...register("numero", { required: true })}
        />
        <label htmlFor="colonia">Colonia:</label>
        <input
          type="text"
          name="colonia"
          id="colonia"
          placeholder="colonia"
          {...register("colonia", { required: true })}
        />
        <button type="submit">Siguiente</button>
      </form>
    </div>
  );
};
