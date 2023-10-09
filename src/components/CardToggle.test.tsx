import { expect, test, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import CardToggle from "./CardToggle";
import { CarType, CityEnum, State } from "../interface/types";

test("CardToggle", () => {
  beforeEach(() => {
    const props = {
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

  test("deberia renderizar la marca junto al modelo", () => {
    const brandElement = screen.getByText("Chevrolet Prisma");
    expect(brandElement).not.toBeNull();
  });
  test("deberia renderizar el año de fabricación del auto", () => {
    const yearElement = screen.getByText("2016/2017");
    expect(yearElement).not.toBeNull();
  });
  test("deberia renderizar la version del elemento", () => {
    const versionElement = screen.getByText("1.4 MPFI LT 8V FLEX 4P MANUAL");
    expect(versionElement).not.toBeNull();
  });
  test("deberia renderizarse el precio del auto", () => {
    const priceElement = screen.getByText("R$ 58.900,00");
    expect(priceElement).not.toBeNull();
  });
  test("debería renderizarse el kilometraje del auto", () => {
    const mileageElement = screen.getByText("143.611 km");
    expect(mileageElement).not.toBeNull();
  });
});
