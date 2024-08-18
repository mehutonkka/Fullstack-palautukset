const FilterForm = ({newFilter, handleFilterInput}) => {
    return(
      <div>
          find countries <input value={newFilter} onChange={handleFilterInput} />
      </div>
    )
  }

export default FilterForm