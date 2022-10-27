import './Filter.css';

const Filter = ({ value, filterChanger }) => {
  return (
    <div className="Filter_box">
      <p className="Filter_title">Find contacts by name</p>
      <input
        className="Filter_input"
        type="text"
        value={value}
        onChange={filterChanger}
      />
    </div>
  );
};

export default Filter;
