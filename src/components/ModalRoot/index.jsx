import { useDispatch, useSelector } from 'react-redux';
import './styles.css';
import { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import { setNotified } from '../../redux/userSlice';

const ModalRoot = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser?.notified && currentUser?.dropshipperInfo.status) {
      setOpen(true);
    }
  }, [currentUser]);

  const handleCloseGreetings = async () => {
    await axios.put(`users/dropshipper-notified/${currentUser._id}`);
    dispatch(setNotified());
    setOpen(false);
  };

  return <>{open && <GreetingsDropshipper handleCloseGreetings={handleCloseGreetings} />}</>;
};

export default ModalRoot;

const GreetingsDropshipper = ({ handleCloseGreetings }) => {
  return (
    <>
      <div className="modal__backdrop"></div>
      <section className="modal-popup">
        <div onClick={handleCloseGreetings} className="modal__close-button icon-close"></div>
        <h2>hello</h2>
      </section>
    </>
  );
};
