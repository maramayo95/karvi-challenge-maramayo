import { expect, test } from "vitest";
import { capitalizeSentence, getCardTitle, mileageConvert, currencyConvert, capitalizeFirstLetterInWords } from ".";


test("capitalizeSentence", () => {
  test("given empty string should return empty string", () => {
    expect(capitalizeSentence("")).toBe("");
  });
  test("given capitalize string should return pascal case string", () => {
    expect(capitalizeSentence("HONDA")).toBe("Honda");
  });
  test("given lower string should return pascal case  string", () => {
    expect(capitalizeSentence("chevrolet")).toBe("Chevrolet");
  });
});


test("getCardTitle", () => {
  test("Given two words and convert them in lower case and capitalize the first char of each one", () => {
    expect(getCardTitle("TOYOTA", "CAMRRY")).toBe("Toyota Camrry");
  });
});


test("millageConvert", ()=> {
  test("Give a number value in miles and convert it in km"), ()=> {
    expect(mileageConvert(1000)).toBe("1.000 km")
  }
})

test("currencyConvert", () => {
  test("Given a number value and convert it into a brazilian currency money", ()=> {
    expect(currencyConvert(1000, "br")).toBe("R$ 1.000,00")
  })
  test("Given a number value and convert it into a argentinian currency money", ()=> {
    expect(currencyConvert(2500.5, "ar")).toBe("$ 2.500,50")
  })
})

test("capitalizeFirstLetterInWords", () => {
  test("Given a capitalized sentence and convert each first caracter in capital sentence and the another into lowercase", () => {
    expect(capitalizeFirstLetterInWords('1.4 MPFI EFFECT 8V FLEX 4P MANUAL')).toBe("1.4 Mpfi Effect 8v Flex 4p Manual");
  });
});