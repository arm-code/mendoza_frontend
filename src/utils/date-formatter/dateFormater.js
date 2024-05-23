export const dateFormater = (fecha) => {


  const fechaObj = new Date(fecha.replace('-', '/'));

  // Obtener el nombre del día de la semana en español
  const opcionesDiaSemana = { weekday: 'long' };
  const diaSemana = fechaObj.toLocaleDateString('es-ES', opcionesDiaSemana);

  // Obtener el día y el mes en español
  const opcionesDiaMes = { day: 'numeric', month: 'long' };
  const diaMes = fechaObj.toLocaleDateString('es-ES', opcionesDiaMes);

  // Obtener el año
  const year = fechaObj.getFullYear();

  // Construir la fecha en el formato deseado
  const fechaFormateada = `${diaSemana} ${diaMes} del ${year}`;

  return fechaFormateada;
};
