import React,{useState} from "react";
import Parcelas from "../icons/Parcelas";
import { isMobile , isDesktop } from "react-device-detect";
import { currencyConvert, getCardTitle, mileageConvert } from "../utils";
import Heart from "../icons/Heart";
import classNames from 'classnames';
import { Item } from "../interface/types";

const CardToggle: React.FC<Item> = (props: Item) =>{
  const [isListView, setIsListView] = useState(false);

  // Función para cambiar la vista entre lista y tarjeta
  const toggleView = () => {
    setIsListView(!isListView);
  };

  // Clases comunes para ambas vistas
  const commonClasses = 'relative bg-white outline-none select-none rounded-xl mb-5 p-2 shadow-shCardOne sm:mb-0 shadow-card-hover cursor-pointer';

  // Clases específicas para vista de tarjeta
  const cardClasses = classNames(
    commonClasses,
    'max-w-full md:w-[32%]',
    {
      'grid grid-cols-3 gap-4': !isListView,
      'md:hidden': isListView,
    }
  );

  // Clases específicas para vista de lista
  const listClasses = classNames(
    commonClasses,
    'grid grid-cols-1',
    {
      'md:grid-cols-3 gap-4': !isListView,
    }
  );

  return (
    <article role="article" className={isListView ? listClasses : cardClasses}>
      {isListView ? (
        <div className="grid grid-rows-1 md:grid-cols-3 h-full">
          <div className="row-span-1 md:col-span-1">
            <img
              src={props.image}
              alt={getCardTitle(props.brand, props.model)}
              className="w-full rounded-xl"
            />
          </div>
          <div className="flex flex-col justify-between max-h-[250px] h-full col-span-2 px-2 pt-4 pb-2">
            <div>
              <h2 className="text-base font-bold text-left text-gray-950">
                {getCardTitle(props.brand, props.model)}
              </h2>
              <h3 className="text-left text-descriptionCard line-clamp-2 font-semibold text-sm">
                {props.version}
              </h3>
            </div>
            <div>
              <div className="mb-2">
                <div className="pt-[10px] flex">
                  <p className="text-orangePrice text-2xl font-medium">
                    {currencyConvert(props.price)}
                  </p>
                </div>
              </div>
              <p className="mb-2 text-xs text-left text-gray-700 md:text-sm">
                {props.city}, {props.state}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-rows-3 md:grid-cols-1 h-full">
          <div className="absolute top-4 right-4 text-gold text-2xl cursor-pointer bg-white p-2 rounded-full">
            <Heart />
          </div>
          <div className="row-span-3 md:col-span-1">
            <img
              src={props.image}
              alt={getCardTitle(props.brand, props.model)}
              className="w-full rounded-xl"
            />
          </div>
          <div className="flex flex-col justify-between max-h-[250px] h-full col-span-1 px-2 pt-4 pb-2">
            <div>
              <div className="flex justify-start gap-2 mb-2">
                <span className="px-2 py-[2px] text-xs bg-gray-200 rounded-[64px]">
                  {props.year}
                </span>
                <span className="px-2 py-[2px] text-xs bg-gray-200 rounded-[64px]">
                  {mileageConvert(props.mileage)}
                </span>
              </div>
              <div>
                <h2 className="text-base font-bold text-left text-gray-950">
                  {getCardTitle(props.brand, props.model)}
                </h2>
                <h3 className="text-left text-descriptionCard line-clamp-2 font-semibold text-sm">
                  {props.version}
                </h3>
              </div>
            </div>
            {!isMobile && (
              <div>
                <a
                  className="flex items-center justify-center gap-1 bg-buttonCard px-5 py-3 rounded-full text-xs font-bold text-left text-white md:text-sm min-h-[22px] h-full"
                  href="!#"
                >
                  <Parcelas size={isMobile ? '16' : '20'} />
                  <span>Calcular Parcelas</span>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  );
};

export default CardToggle;
