import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ul className={s.list}>
        {filteredContacts.map(item => (
          <Contact key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
