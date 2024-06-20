import './styles.css';

const NotFound = ({ type }) => {
  let errorTypeText;
  switch (type) {
    case 'categories':
      errorTypeText = 'категорії';
      break;
    case 'products':
      errorTypeText = 'товари';
      break;
  }

  return (
    <div className="content__error-info">
      <h2>Нічого не знайдено 😕</h2>
      <p>Невдалося знайти {errorTypeText}. Спробуйте пізніше</p>
    </div>
  );
};

export default NotFound;
