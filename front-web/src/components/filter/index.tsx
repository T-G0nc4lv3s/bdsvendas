import './styles.css';
import Select from 'react-select';

const options = [
  { value: 'Araguari', label: 'Araguari' },
  { value: 'Ituiutaba', label: 'Ituiutaba' },
  { value: 'Uberaba', label: 'Uberaba' },
  { value: 'Uberlândia', label: 'Uberlândia' }
];

function Filter() {
  return (
    <div className="filter-container base-card">
      <Select
        options={options}
        defaultValue={options[0]}
        classNamePrefix="filter-store-select"
        isClearable={true}
      />
    </div>
  );
}

export default Filter;
