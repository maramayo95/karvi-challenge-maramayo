// Interfaz para tipar las Cards

export interface Cars {
  cars: Car[];
  totalPageCount: number;
  totalCarsCount: number;
  page: number;
  pageSize: number;
}

export interface Car {
  id: number;
  city: string;
  state: string;
  year: string;
  brand: string;
  model: string;
  version: string;
  price: number;
  mileage: number;
  image: string;
  certificate: boolean;
  promoted: boolean;
  booking: boolean;
  financing: boolean;
  carType: string;
  rates: Rates;
}

export interface Rates {
  month12: Month12;
  month24: Month24;
  month36: Month36;
  month48: Month48;
  month60: Month60;
}

export interface Month12 {
  months: number;
  value: number;
}

export interface Month24 {
  months: number;
  value: number;
}

export interface Month36 {
  months: number;
  value: number;
}

export interface Month48 {
  months: number;
  value: number;
}

export interface Month60 {
  months: number;
  value: number;
}

  
  export interface Filters {
    availableFilters: AvailableFilters;
}

export interface AvailableFilters {
    state?:            Armored[];
    city?:             City[];
    brand?:            Armored[];
    model?:            Armored[];
    version?:          Armored[];
    year?:             Year[];
    price?:            Mileage[];
    minAndMaxPrice?:   MinAndMaxPrice[];
    minAndMaxMileage?: unknown[];
    mileage?:          Mileage[];
    optionals?:        Armored[];
    transmission?:     Armored[];
    armored?:          Armored[];
    fuel?:             Armored[];
    color?:            Armored[];
    plateEndings?:     Armored[];
    bodyType?:         Armored[];
    ratesMonth?:       null;
    ratesValue?:       null;
    certificate?:      Armored[];
    financing?:        Armored[];
}

export interface Armored {
    id:       string;
    name:     string;
    count:    number;
    subAggs?: ArmoredSubAggs;
    slug?:    Slug;
}

export enum Slug {
    SaoPaulo = "sao-paulo",
}

export interface ArmoredSubAggs {
    hexa?:  string;
    brand?: string;
}

export interface City {
    id:      string;
    name:    string;
    slug:    string;
    count:   number;
    subAggs: CitySubAggs;
}

export interface CitySubAggs {
    state:     State;
    stateSlug: Slug;
}

export enum State {
    SãoPaulo = "São Paulo",
}

export interface Mileage {
    id:  number;
    min: number;
    max: number | null;
}

export interface MinAndMaxPrice {
    id:   string;
    name: string;
    min:  number;
    max:  number;
}

export interface Year {
    id:    number;
    name:  number;
    count: number;
}


export interface Item {
  id: string;
  name: string;
  count: number;
  subAggs?: {
    state?: string;
    stateSlug?: string;
  };
  slug?: string;
}

export interface CategoryAccordionProps {
  category: string;
  data: Item[];
}

 