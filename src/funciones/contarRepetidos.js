export const contarPorID = (array)=> {
    let contador = {};

    // Contar ocurrencias de cada id
    array.forEach((objeto) => {
        let id = objeto.id;
        if (contador[id]) {
            contador[id]++;
        } else {
            contador[id] = 1;
        }
    });

    return contador;
}