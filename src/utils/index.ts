export const capitalize = (str: string) => {
    return str.toLocaleLowerCase().charAt(0).toUpperCase() + str.slice(1);
};

export const capitalizeSentence = (str: string) => {
    return str.toLocaleLowerCase().split(" ").map(capitalize).join(" ");
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


  