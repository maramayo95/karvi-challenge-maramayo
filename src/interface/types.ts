export enum CityEnum {
  Campinas = "Campinas",
  Paulínia = "Paulínia",
  SantoAndré = "Santo André",
  Sumaré = "Sumaré",
  SãoJoséDOSCampos = "São José dos Campos",
  SãoPaulo = "São Paulo",
}

export interface Item {
  booking: boolean;
  brand: string;
  carType: CarType;
  certificate: boolean;
  city: CityEnum;
  financing: boolean;
  id: number;
  image: string;
  mileage: number;
  model: string;
  price: number;
  promoted: boolean;
  rates: Rates;
  state: State;
  version: string;
  year: string;
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
  value: number;
}

export enum State {
  SP = "SP",
}

export type FilterSelection = {
  city: string[];
  brand: string[];
  version: string[];
  model: string[];
  year: string[];
};

export type FilterOption = {
  id: string;
  name: string;
  count: number;
};

export type FilterKey = keyof FilterSelection;

export type AvailableFilters = {
  city: FilterOption[];
  brand: FilterOption[];
  version: FilterOption[];
  year: FilterOption[];
  model: FilterOption[];
};

export type FetchData = {
  availableFilters: AvailableFilters;
  items: Item[];
};

export type AccordionFilter = {
  type: "brand" | "model" | "version" | "year" | "city";
  title: string;
};




export type FilterAcordionProps = {
  accordionFilters: AccordionFilter[];
  onFilterToggle: (
    selectedOptions: string[],
    filter: "city" | "brand" | "version" | "model" | "year"
  ) => unknown;
  onDeleteAll?: () => unknown;
  selectedFilters: FilterSelection;
  onDeleteFilter?: (filterKey: FilterKey, filterId: string) => void;
  availableFilters?: AvailableFilters;
};


export type MobileModalProps = {
  accordionFilters: AccordionFilter[];
  onFilterToggle: (
    selectedOptions: string[],
    filter: "city" | "brand" | "version" | "model" | "year"
  ) => unknown;
  onDeleteAll: () => unknown;
  selectedFilters: FilterSelection;
  onDeleteFilter: (filterKey: FilterKey, filterId: string) => void;
  availableFilters?: AvailableFilters;
  isModalOpen?: boolean;
  onCloseModal?: () => void;
  isFiltersEmpty: boolean;
};

export type FilterMobilePageProps = {
  accordionFilters: AccordionFilter[];
  onFilterToggle: (
    selectedOptions: string[],
    filter: "city" | "brand" | "version" | "model" | "year"
  ) => unknown;
  onDeleteAll: () => unknown;
  selectedFilters: FilterSelection;
  onDeleteFilter: (filterKey: FilterKey, filterId: string) => void;
  availableFilters?: AvailableFilters;
  isFiltersEmpty: boolean;
};

export interface ItemWithFormat extends Item {
  isListFormat: boolean;
}
