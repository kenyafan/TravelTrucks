import styles from '../Features/Features.module.css';
import { Icon } from '../../image/Icon';

const Features = ({ features }) => {
  const availableFeatures = [
    { key: 'automatic', id: 'icon-diagram', label: 'Automatic' },
    { key: 'AC', id: 'icon-wind', label: 'AC' },
    { key: 'petrol', id: 'icon-Petrol', label: 'Petrol' },
    { key: 'kitchen', id: 'icon-cup-hot', label: 'Kitchen' },
    { key: 'radio', id: 'icon-Radio', label: 'Radio' },
    { key: 'bathroom', id: 'icon-shower', label: 'Bathroom' },
    { key: 'refrigerator', id: 'icon-Refrigerator', label: 'Refrigerator' },
    { key: 'microwave', id: 'icon-microwave', label: 'Microwave' },
    { key: 'gas', id: 'icon-gas-stove', label: 'Gas' },
    { key: 'water', id: 'icon-water', label: 'Water' },
  ];
  return (
    <div className={styles.featuresContainerWrapper}>
      <div className={styles.featuresIconsWrapper}>
        {availableFeatures
          .filter(({ key }) => features[key])
          .map(({ id, label }) => (
            <div key={id} className={styles.featureIconContainer}>
              <Icon
                id={id}
                width="20"
                height="20"
                className={styles.featureIcon}
              />
              <span>{label}</span>
            </div>
          ))}
      </div>

      <div className={styles.featuresContainer}>
        <h3 className={styles.featuresTitle}>Vehicle details</h3>
        <div className={styles.featuresWrapper}>
          <ul className={styles.featuresList}>
            <li className={styles.featuresItem}>
              Form<p>{features.form}</p>
            </li>
            <li className={styles.featuresItem}>
              Length
              <p>{features.length}</p>
            </li>
            <li className={styles.featuresItem}>
              Width
              <p>{features.width}</p>
            </li>
            <li className={styles.featuresItem}>
              Height
              <p>{features.height}</p>
            </li>
            <li className={styles.featuresItem}>
              Tank
              <p>{features.tank}</p>
            </li>
            <li className={styles.featuresItem}>
              Consumption
              <p>{features.consumption}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
