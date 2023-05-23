import { deleteContact } from 'API/API.Axios';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

export const ContactItem = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();

  return (
    <>
      <p>
        {name}: <span>{phone}</span>
      </p>

      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        delete
      </button>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
