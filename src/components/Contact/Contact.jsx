import { MdPhoneInTalk } from 'react-icons/md';
import s from './Contact.module.css';
import { FaRegUser } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.item}>
      <p>
        <FaRegUser />
        {name}
      </p>
      <p>
        <MdPhoneInTalk />
        {number}
      </p>
      <button className={s.button} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
