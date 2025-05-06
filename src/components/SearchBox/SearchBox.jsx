import s from './SearchBox.module.css';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={s.search}>
      <p>Find contacts by name</p>
      <input
        className={s.input}
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
        type="text"
      />
    </div>
  );
};

export default SearchBox;
