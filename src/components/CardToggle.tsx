import Parcelas from "../icons/Parcelas";
import { currencyConvert, getCardTitle, mileageConvert } from "../utils/index";
import Heart from "../icons/Heart";
import classnames from "classnames"; // Importa classnames
import { isMobile } from "react-device-detect";
import { ItemWithFormat } from "../interface/types";

const Card = (props: ItemWithFormat) => {
  const isListFormat = props.isListFormat;

  const articleClasses = classnames(
    "relative",
    "max-h-[600px]",
    "max-w-full",
    "md:w-[32%]",
    "p-2",
    "mb-5",
    "bg-white",
    "outline-none",
    "select-none",
   
    "sm:mb-0",
    "cursor-pointer",
    
    {
      "flex": isListFormat, 
      "border-b-[1px]": isListFormat,
      "w-full": !isListFormat,
      "md:col-span-1": !isListFormat,
      "shadow-shCardOne": !isListFormat,
      "shadow-card-hover": !isListFormat,
      "rounded-xl": !isListFormat

    }
  );

  const cardContent = classnames({
    "flex items-center": isListFormat, 
    "h-full col-span-1 px-2 pt-4 pb-2": !isListFormat, 
  });

  const imgDivClass = classnames("relative",{
      "w-[40%]":isListFormat
  })

  const textContentDivClass = classnames("flex flex-col justify-between max-h-[250px]   px-2 pt-4 pb-2", {
    "w-[60%]": isListFormat
  })

  const likeContentClass = classnames("absolute p-2 bg-white rounded-full", {
    "top-1 right-1": isListFormat,
    "top-4 right-4": !isListFormat,

  })

  const parcelasClass = classnames({
    "hidden": isListFormat,
    "block": !isListFormat
  })

  const flexClassPrice = classnames("flex",{
    "pt-[10px]": !isListFormat
  })
 
  return (
    <article role="article" className={articleClasses}>
      <div className={cardContent}>
        <div className={imgDivClass}>
          <div className={likeContentClass}>
            <Heart />
          </div>
          <img
            src={props.image}
            alt={getCardTitle(props.brand, props.model)}
            className={classnames(
              "w-full rounded-xl object-cover aspect-square md:aspect-auto"
            )}
          />
        </div>

       {/* TODO: El mt-4 tiene que figurar solo en card-list */}
        <div className={textContentDivClass}>
          <div className="mt-4">
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
              <h3 className="text-left text-descriptionCard line-clamp-2 font-light text-sm">
                {props.version}
              </h3>
            </div>
          </div>
          <div>
            <div className={isListFormat ? "mb-0" : "mb-4"}>
              <div className={flexClassPrice}>
                <p className="text-orangePrice text-lg md:text-2xl font-medium">
                  {currencyConvert(props.price)}
                </p>
              </div>
            </div>
            <p className="mb-2 text-xs text-left text-gray-700 md:text-sm">
              {props.city}, {props.state}
            </p>
              <div className={parcelasClass}>
                <a
                  className="flex items-center justify-center gap-1 bg-buttonCard px-5 py-3 rounded-full text-xs font-bold text-left text-white md:text-sm min-h-[22px] h-full"
                  href="!#"
                >
                  <Parcelas size={isMobile ? "16" : "20"} />
                  <span>Calcular Parcelas</span>
                </a>
              </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
