import './styles.css';
import Select from 'react-select';
import { useState, useEffect } from 'react';
import { FilterData, StoreDTO } from '../../types';
import { requestBackend } from '../../utils/requests';
import { useForm, Controller } from 'react-hook-form';

type Props = {
  onFilterChange: (filter: FilterData) => void;
};

function Filter({ onFilterChange }: Props) {
  const [stores, setStores] = useState<StoreDTO[]>([]);
  const { setValue, getValues, control } = useForm<FilterData>();

  useEffect(() => {
    requestBackend
      .get<StoreDTO[]>('/stores')
      .then((response) => {
        setStores(response.data);
      })
      .catch(() => {
        console.log('Error fetching store');
      });
  }, []);

  const handleChangeStore = (value: StoreDTO) => {
    setValue('store', value);

    const obj: FilterData = {
      store: getValues('store')
    };
    onFilterChange(obj);
  };

  return (
    <div className="filter-container base-card">
      <Controller
        name="store"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={stores}
            classNamePrefix="filter-store-select"
            getOptionLabel={(store: StoreDTO) => store.name}
            getOptionValue={(store: StoreDTO) => store.id}
            isClearable={true}
            onChange={(value) => handleChangeStore(value as StoreDTO)}
          />
        )}
      />
    </div>
  );
}

export default Filter;
