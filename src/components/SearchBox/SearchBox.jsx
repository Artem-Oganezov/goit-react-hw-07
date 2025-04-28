import { useDispatch, useSelector } from 'react-redux';
import s from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);

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
