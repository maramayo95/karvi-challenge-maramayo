export interface APIRequest {
  availableFilters: AvailableFilters;
  items:            Item[];
  page:             number;
  pageSize:         number;
  totalCount:       number;
  totalPages:       number;
 }
 
 export interface AvailableFilters {
  armored:          Armored[];
  bodyType:         Armored[];
  brand:            Armored[];
  certificate:      Armored[];
  city:             CityElement[];
  color:            Armored[];
  financing:        Armored[];
  fuel:             Armored[];
  mileage:          Mileage[];
  minAndMaxMileage: unknown[];
  minAndMaxPrice:   MinAndMaxPrice[];
  model:            Armored[];
  optionals:        Armored[];
  plateEndings:     Armored[];
  price:            Mileage[];
  ratesMonth:       null;
  ratesValue:       null;
  state:            Armored[];
  transmission:     Armored[];
  version:          Armored[];
  year:             Year[];
 }
 
 export interface Armored {
  count:    number;
  id:       string;
  name:     string;
  slug?:    Slug;
  subAggs?: ArmoredSubAggs;
 }
 
 export enum Slug {
  SaoPaulo = "sao-paulo",
 }
 
 export interface ArmoredSubAggs {
  brand?: string;
  hexa?:  string;
 }
 
 export interface CityElement {
  count:   number;
  id:      string;
  name:    string;
  slug:    string;
  subAggs: CitySubAggs;
 }
 
 export interface CitySubAggs {
  state:     CityEnum;
  stateSlug: Slug;
 }
 
 export enum CityEnum {
  Campinas = "Campinas",
  Paulínia = "Paulínia",
  SantoAndré = "Santo André",
  Sumaré = "Sumaré",
  SãoJoséDOSCampos = "São José dos Campos",
  SãoPaulo = "São Paulo",
 }
 
 export interface Mileage {
  id:  number;
  max: number | null;
  min: number;
 }
 
 export interface MinAndMaxPrice {
  id:   string;
  max:  number;
  min:  number;
  name: string;
 }
 
 export interface Year {
  count: number;
  id:    number;
  name:  number;
 }
 
 export interface Item {
  booking:     boolean;
  brand:       string;
  carType:     CarType;
  certificate: boolean;
  city:        CityEnum;
  financing:   boolean;
  id:          number;
  image:       string;
  mileage:     number;
  model:       string;
  price:       number;
  promoted:    boolean;
  rates:       Rates;
  state:       State;
  version:     string;
  year:        string;
 }
 
 export enum CarType {
  Used = "used",
 }
 
 export interface Rates {
  month12: Month;
  month24: Month;
  month36: Month;
  month48: Month;
  month60: Month;
 }
 
 export interface Month {
  months: number;
  value:  number;
 }
 
 export enum State {
  SP = "SP",
 }