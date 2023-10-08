import React from 'react'
import { FilterMobilePageProps } from '../interface/types'
import MobileModal from './MobileModal';
import ButtonFilterMobile from './ButtonFilterMobile';
import Search from '../icons/Search';
import FilterIcon from '../icons/FilterIcon';
import useModal from '../hooks/useModal';

const FilterMobilePage:React.FC<FilterMobilePageProps> = ({
    filterToggleHandler,
    selectedFilters,
    data,
    handleDeleteAll,
    handlerDeleteFilter
  }) => {
    
  const {isModalOpen,openModal,closeModal} = useModal()
  
  return (
    <section className='sticky top-0 bg-white py-4 z-50'>
        <div className="flex justify-evenly mt-6 ">
            <ButtonFilterMobile icon={<Search/>} text="Buscar" onClick={()=> { console.log("Hello")}} />
            <ButtonFilterMobile icon={<FilterIcon/>} text="Filtrar" onClick={openModal} />
        </div>
    

      {isModalOpen && (
       <MobileModal
       filterToggleHandler={filterToggleHandler}
       selectedFilters={selectedFilters}
       data={data}
       handleDeleteAll={handleDeleteAll}
       handlerDeleteFilter={handlerDeleteFilter}
       isModalOpen={isModalOpen}
      
       closeModal={closeModal}
     />
      )}
   
    </section>
  )
}

export default FilterMobilePage