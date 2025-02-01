import { useState } from 'react';
import styles from '../Filters/Filters.module.css';
import { Icon } from '../../image/Icon';

const Filters = ({ onApplyFilters }) => {
  const [filters, setFilters] = useState({
    location: '',
    form: '',
    AC: false,
    automatic: false,
    petrol: false,
    kitchen: false,
    radio: false,
    bathroom: false,
    refrigerator: false,
    microwave: false,
    gas: false,
    water: false,
  });

  const handleFeatureToggle = (featureKey) => {
    setFilters((prev) => ({ ...prev, [featureKey]: !prev[featureKey] }));
  };

  const handleSearch = () => {
    const activeFilters = Object.fromEntries(
      Object.entries(filters).filter(([_, value]) =>
        typeof value === 'boolean' ? value : value !== '',
      ),
    );
    onApplyFilters(activeFilters); // передаємо активні фільтри
  };

  return (
    <div className={styles.filters}>
      <label className={styles.labelLocation}>Location:</label>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          type="text"
          value={filters.location}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, location: e.target.value }))
          }
          placeholder="City"
        />
        <Icon id="icon-Map" width="20" height="20" className={styles.icon} />
      </div>

      <p className={styles.filterTitle}>Filters</p>

      <label className={styles.label}>Vehicle equipment</label>
      <span className={styles.filterLine}></span>
      <div className={styles.checkboxGroup}>
        {[
          { key: 'automatic', id: 'icon-diagram', label: 'Automatic' },
          { key: 'AC', id: 'icon-wind', label: 'AC' },
          { key: 'petrol', id: 'icon-Petrol', label: 'Petrol' },
          { key: 'kitchen', id: 'icon-cup-hot', label: 'Kitchen' },
          { key: 'radio', id: 'icon-Radio', label: 'Radio' },
          { key: 'bathroom', id: 'icon-shower', label: 'Bathroom' },
          {
            key: 'refrigerator',
            id: 'icon-Refrigerator',
            label: 'Refrigerator',
          },
          { key: 'microwave', id: 'icon-microwave', label: 'Microwave' },
          { key: 'gas', id: 'icon-gas-stove', label: 'Gas' },
          { key: 'water', id: 'icon-water', label: 'Water' },
        ].map(({ key, id, label }) => (
          <div
            key={id}
            className={`${styles.featureItem} ${filters[key] ? styles.activeFeature : ''}`}
            onClick={() => handleFeatureToggle(key)}
          >
            <Icon
              id={id}
              width="32"
              height="32"
              className={styles.featureIcon}
            />
            <span className={styles.featureText}>{label}</span>
          </div>
        ))}
      </div>

      <label className={styles.label}>Vehicle Type</label>
      <span className={styles.filterLine}></span>
      <div className={styles.vehicleGroup}>
        {[
          { id: 'icon-bi_grid-1x2', label: 'Van', value: 'panelTruck' },
          {
            id: 'icon-bi_2x2_grid',
            label: 'Fully Integrated',
            value: 'fullyIntegrated',
          },
          { id: 'icon-grid-3x3-gap', label: 'Alcove', value: 'alcove' },
        ].map(({ id, label, value }) => (
          <div
            key={id}
            className={`${styles.vehicleItem} ${filters.form === value ? styles.activeVehicle : ''}`}
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                form: prev.form === value ? '' : value,
              }))
            }
          >
            <Icon
              id={id}
              width="32"
              height="32"
              className={styles.vehicleIcon}
            />
            <span className={styles.vehicleText}>{label}</span>
          </div>
        ))}
      </div>
      <button className={styles.button} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Filters;
