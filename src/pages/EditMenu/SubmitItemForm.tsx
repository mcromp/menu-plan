import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { Filter, FilterId } from '../../shared/types';

const SubmitItemForm: React.FC<SubmitItemFormProps> = ({
  selectedFilter,
  handleSelect
}) => {
  const filterList = useSelector<RootState, Filter[]>(state => state.filterList);

  const options = (filterList.map((filter: Filter) => {
    if (filter.id !== "FAVORITES") return <option className="" key={filter.id} value={filter.id}>{filter.name}</option>
    return null
  }
  ));
  return (
    <form className="submit-item__form">
      <label>
        <select className="submit-item__select" value={selectedFilter} onChange={(e) => handleSelect(e)}>
          <option value="" disabled>Select filter category</option>
          {options}
        </select>
      </label>
    </form>
  )
}

type SubmitItemFormProps = {
  selectedFilter: (FilterId | ""),
  handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export default SubmitItemForm;