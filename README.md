# Challenge Front End Developer Karvi

Este proyecto es parte del Challenge Front End Developer propuesto por Karvi. El objetivo es crear una página de catálogo de autos con funcionalidades como filtros, vista de grilla y listado, ordenamiento por precio, marcado de favoritos y más.

## Diseño

El diseño de la página se encuentra disponible en Figma: [Enlace al Diseño](https://www.figma.com/file/gryFT9ZoTDpwURYEfc6Tig/Challenge-Frontend-Team?node-id=0%3A1&t=p78SsNOJIiXHnc5R-0)

## Datos de Prueba

Para obtener los datos de los autos, utilizamos los siguientes endpoints de Mocki.io:
- Endpoint Principal: [Enlace al Endpoint](https://mocki.io/v1/ddc770fd-1346-438e-a15f-cf8767577b9e)
- Endpoint de Prueba: [Enlace al Endpoint de Prueba](https://mocki.io/v1/80669021-108d-40c2-9bc9-887a5184b700)

## Requerimientos

El proyecto cumple con los siguientes requerimientos:

- Vista de cuadrícula y listado para los autos (en dispositivos móviles).
- Filtros disponibles por Marca, Modelo, Versión, Año y Ciudad.
- Opción de ordenar autos por Precio Mínimo o Precio Máximo.
- Pruebas unitarias para garantizar la funcionalidad.
- Galería de imágenes en las cards de autos.

## Funcionalidades Adicionales

El proyecto también incluye funcionalidades adicionales:

- Marcado de autos como favoritos.
- Página adicional para mostrar autos marcados como favoritos.
- Uso de TypeScript para el desarrollo.
- Uso de estrategias adecuadas de renderizado.
- Paginación de grilla con 12 elementos por página.

## Cómo Ejecutar el Proyecto

1. Clona este repositorio: `git clone [URL del repositorio]`
2. Instala las dependencias: `npm install`
3. Inicia el proyecto: `npm start`

# Documentación de pruebas
Código para ejecutar los test
```javascript
 npm run test
``` 
##Documentación de Funciones 

## capitalizeSentence

Esta prueba verifica la función `capitalizeSentence` que capitaliza la primera letra de una cadena de texto.

### Casos de prueba

1. Cuando se le proporciona una cadena vacía, la función debería devolver una cadena vacía.

    ```javascript
    test("given empty string should return empty string", () => {
      expect(capitalizeSentence("")).toBe("");
    });
    ```

2. Cuando se le proporciona una cadena en mayúsculas, la función debería devolver la cadena en formato Pascal Case.

    ```javascript
    test("given capitalize string should return pascal case string", () => {
      expect(capitalizeSentence("HONDA")).toBe("Honda");
    });
    ```

3. Cuando se le proporciona una cadena en minúsculas, la función debería devolver la cadena en formato Pascal Case.

    ```javascript
    test("given lower string should return pascal case string", () => {
      expect(capitalizeSentence("chevrolet")).toBe("Chevrolet");
    });
    ```

## getCardTitle

Esta prueba verifica la función `getCardTitle` que toma dos palabras y las convierte en minúsculas con la primera letra en mayúscula.

### Caso de prueba

Cuando se le proporcionan dos palabras en mayúsculas, la función debería devolver una cadena en formato "palabra palabra".

```javascript
test("Given two words and convert them in lower case and capitalize the first char of each one", () => {
  expect(getCardTitle("TOYOTA", "CAMRRY")).toBe("Toyota Camrry");
});
```
## capitalizeFirstLetterInWords

Esta función toma una oración y convierte la primera letra de cada palabra en mayúscula y el resto de las letras en minúscula, manteniendo las palabras que comienzan con números sin cambios.

```javascript
const resultado = capitalizeFirstLetterInWords('1.4 MPFI EFFECT 8V FLEX 4P MANUAL');
console.log(resultado); // Resultado: '1.4 Mpfi Effect 8v Flex 4p Manual'



## CardToggle

Esta prueba verifica el componente `CardToggle` que representa una tarjeta de detalles de un automóvil.

### Configuración

Antes de ejecutar la prueba, se configuran las propiedades del componente y se renderiza:

```javascript
beforeEach(() => {
  const props = {
    // Propiedades del automóvil
    id: 3216581099,
    city: CityEnum.Campinas,
    state: State.SP,
    year: "2016/2017",
    brand: "CHEVROLET",
    model: "PRISMA",
    version: "1.4 MPFI LT 8V FLEX 4P MANUAL",
    price: 58900,
    mileage: 143611,
    image:
      "https://d7mrzff3jg2ye.cloudfront.net/br_importer/spyne/ASST-br_importer-01HBT81GJVCMFAFTVFS9F7CN14.jpg",
    booking: false,
    certificate: false,
    financing: false,
  };

  render(
    <CardToggle
      isListFormat={false}
      carType={CarType.Used}
      promoted={false}
      {...props}
    />
  );
});
```

## Sitio 
- Sitio donde figura el build: [Enlace al challenge](https://karvi-challenge-maramayo.vercel.app/)

## Autor

Este proyecto fue desarrollado por Matias Aramayo.
