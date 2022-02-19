import './styles.css';

export const Search = ( { searchValue, handleChange } ) => {
    return(
        <input className='search-input' type="search"
         onChange={handleChange} value={searchValue}
         placeholder='Pesquisar' />
    );
}