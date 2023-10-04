export const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const capitalizeSentence = (str: string) => {
    return str.split(" ").map(capitalize).join(" ");
};

export const getCardTitle = (brand: string, model: string) => {
    return capitalizeSentence(
        `${brand.toLocaleLowerCase()} ${model.toLocaleLowerCase()}`
    );
};

export const currencyConvert = (value: number, locale = "br") => {
    return locale === "ar"
        ? value.toLocaleString("es-AR", {
              style: "currency",
              currency: "ARS",
          })
        : value.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
          });
};

export const mileageConvert = (value: number) =>
    value.toLocaleString("pt-BR") + " km";

// TODO : VER FUNCION PARA VALORES UNICOS
    // function getUniqueValues(key: string): string[] | undefined {
    //     const uniqueValues = new Set<string>();
    
    //     // Recorrer los elementos de 'items' y agregar valores únicos a 'uniqueValues'
    //     for (const item of data.items) {
    //         if (item[key]) {
    //             uniqueValues.add(item[key]);
    //         }
    //     }
    
    //     // Convertir el conjunto en un array y devolverlo
    //     return Array.from(uniqueValues);
    // }
  