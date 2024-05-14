import { useSelector } from 'react-redux';
import './styles.css';
import { useMask } from '@react-input/mask';
import { useState } from 'react';
import axios from '../../utils/axios';

const DropshipApplication = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [name, setName] = useState(currentUser?.name || '');
  const [lastname, setLastname] = useState(currentUser?.surname || '');
  const [middlename, setMiddlename] = useState(currentUser?.middlename || '');
  const [phone, setPhone] = useState(currentUser?.phoneNumber || '');
  const [email, setEmail] = useState(currentUser?.email || '');

  const [country, setCountry] = useState('');
  const [mailIndex, setMailIndex] = useState('');
  const [region, setRegion] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [drfo, setDrfo] = useState('');
  const [mfo, setMfo] = useState('');
  const [iban, setIban] = useState('UA');
  const [bankName, setBankName] = useState('');

  const inputRef = useMask({
    mask: '38__________',
    replacement: { _: /\d/ },
  });

  const handleSendRequest = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/users/dropshipper-request/${currentUser._id}`, {
        name,
        lastname,
        middlename,
        email,
        phone,
        country,
        mailIndex,
        region,
        district,
        city,
        address,
        drfo,
        mfo,
        iban,
        bankName,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div>
        <h1 className="title">Оформити заявку на дропшипінг</h1>
        <div>
          <div className="form-wrapper">
            <div className="leftSide forms">
              <form className="form-list">
                <div className="form-list__multi-item">
                  <div className="form-list__item">
                    <label htmlFor="Firstname">Ім`я</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      name="Firstname"
                    />
                  </div>
                  <div className="form-list__item">
                    <label htmlFor="Lastname">Прізвище</label>
                    <input
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      type="text"
                      name="Lastname"
                    />
                  </div>
                </div>
                <div className="form-list__item">
                  <label htmlFor="Middlename">По батькові</label>
                  <input
                    value={middlename}
                    onChange={(e) => setMiddlename(e.target.value)}
                    type="text"
                    name="Middlename"
                  />
                </div>
                <div className="form-list__item">
                  <label htmlFor="Email">Ел. пошта</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    name="Email"
                  />
                </div>
                <div className="form-list__item">
                  <label htmlFor="Phone">Номер телефону</label>
                  <input
                    ref={inputRef}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="38"
                    type="tel"
                    name="Phone"
                  />
                </div>
                <div className="form-list__multi-item">
                  <div className="form-list__item">
                    <label htmlFor="Country">Країна</label>
                    <input
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      type="text"
                      name="Country"
                    />
                  </div>
                  <div className="form-list__item">
                    <label htmlFor="MailIndex">Індекс</label>
                    <input
                      value={mailIndex}
                      onChange={(e) => setMailIndex(e.target.value)}
                      type="text"
                      name="MailIndex"
                    />
                  </div>
                </div>
                <div className="form-list__multi-item">
                  <div className="form-list__item">
                    <label htmlFor="Region">Область</label>
                    <input
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                      type="text"
                      name="Region"
                    />
                  </div>
                  <div className="form-list__item">
                    <label htmlFor="District">Район</label>
                    <input
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      type="text"
                      name="District"
                    />
                  </div>
                </div>
                <div className="form-list__item">
                  <label htmlFor="City">Місто</label>
                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    type="text"
                    name="City"
                  />
                </div>
                <div className="form-list__item">
                  <label htmlFor="Address">Адрес</label>
                  <input
                    placeholder="напр. вул.Шевченка, буд.3, кв.10"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    name="Address"
                  />
                </div>
              </form>
            </div>
            <div className="registration-block forms">
              <form className="form-list">
                <div className="form-list__multi-item">
                  <div className="form-list__item">
                    <label htmlFor="DRFO">ДРФО/ІПН (РНОКПП)</label>
                    <input
                      value={drfo}
                      onChange={(e) => setDrfo(e.target.value)}
                      type="text"
                      name="DRFO"
                      maxLength={10}
                    />
                  </div>
                  <div className="form-list__item">
                    <label htmlFor="MFO">МФО</label>
                    <input
                      value={mfo}
                      onChange={(e) => setMfo(e.target.value)}
                      type="text"
                      name="MFO"
                      maxLength={6}
                    />
                  </div>
                </div>
                <div className="form-list__item">
                  <label htmlFor="IBAN">IBAN</label>
                  <input
                    value={iban}
                    onChange={(e) => setIban(e.target.value)}
                    type="text"
                    name="IBAN"
                  />
                </div>
                <div className="form-list__item">
                  <label htmlFor="BankName">Назва банку</label>
                  <input
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    type="text"
                    name="BankName"
                  />
                </div>
              </form>
            </div>
          </div>
          <button onClick={handleSendRequest} className="addproduct">
            Оформити заявку
          </button>
        </div>
      </div>
    </section>
  );
};

export default DropshipApplication;
