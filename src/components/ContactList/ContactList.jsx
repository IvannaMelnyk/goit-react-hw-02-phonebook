import PropTypes from 'prop-types';
import s from './ContactList.module.css';
const ContactList = ({ contacts, onRemove }) => (
  <ul className={s.list}>
    {contacts.map(({ id, name, number }) => (
      <li className={s.listItem} key={id}>
        <span className={s.listItemText}>{name}:</span>
        <span className={s.listItemText}>{number}</span>
        <button className={s.button} type="button" onClick={() => onRemove(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onRemove: PropTypes.func.isRequired,
};

export default ContactList;
