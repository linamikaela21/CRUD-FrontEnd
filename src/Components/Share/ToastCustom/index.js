import { Toast, ToastContainer } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { SHOW } from '../../../Redux/utils/constants';
import PropTypes from 'prop-types';

export const ToastCustom = ({ title, text }) => {
  const { show } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="fixed-top">
      <ToastContainer
        className="p-3"
        position="top-start"
        data-testid="test-id-toast-div"
      >
        <Toast
          onClose={() => dispatch({ type: SHOW, payload: false })}
          show={show ? true : false}
          delay={1000}
          autohide
          bg="light"
          data-testid="test-id-toast"
        >
          <Toast.Header closeButton={false}>
            <strong
              data-testid="test-id-toast-text"
              className="me-auto text-success"
            >
              {title}
            </strong>
          </Toast.Header>
          <Toast.Body>{text}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

ToastCustom.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
