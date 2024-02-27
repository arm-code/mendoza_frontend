import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export function UsuarioForm() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    navigate('/direccionform/')
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="clientname">Nombre del cliente:</label>
        <input
          type="text"
          name="clientname"
          id="clientname"
          placeholder="nombre del cliente"
          {...register("clientname", { required: true })}
        />
        <label htmlFor="lastnameclient">Apellidos:</label>
        <input
          type="text"
          name="lastnameclient"
          id="lastnameclient"
          placeholder="apellidos"
          {...register("lastnameclient", { required: true })}
        />
        <label htmlFor="telephoneclient">Telefono:</label>
        <input
          type="tel"
          name="telclient"
          id="telclient"
          placeholder="Telefono"
          pattern="[0-9]{10}"
          {...register("telclient", { required: true })}
        />
        <button type="submit">Siguiente</button>
      </form>
    </div>
  );
}

export default UsuarioForm;
