import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../CamperDetails/CamperDetails.module.css';
import { fetchCamperById } from '../../utils/api';
import Loader from '../../components/Loader/Loader';
import { Icon } from '../../image/Icon';
import BookingForm from '../../components/BookingForm/BookingForm';
import Reviews from '../../components/Reviews/Reviews';
import Features from '../../components/Features/Features';
import { toast } from 'react-hot-toast';

const CamperDetails = () => {
  const { id } = useParams();
  const [camper, setCamper] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showFirst, setShowFirst] = useState(true);

  const handleBookingSubmit = (formData) => {
    console.log('Booking submitted:', formData);
    toast.success('Booking successfully submitted!');
  };

  useEffect(() => {
    const getCamper = async () => {
      try {
        const data = await fetchCamperById(id);
        setCamper(data);
      } catch (error) {
        console.error('Failed to fetch camper details', error);
      } finally {
        setLoading(false);
      }
    };
    getCamper();
  }, [id]);

  if (loading) return <Loader />;
  return (
    <div className={styles.container}>
      <div className={styles.detailsContainer}>
        <h3 className={styles.cardTitle}>{camper.name}</h3>
        <div className={styles.cardRatingWrapper}>
          <div className={styles.cardRating}>
            <Icon
              id="icon-Rating"
              width="16"
              height="16"
              className={styles.iconRating}
            />
            <span className={styles.rating}>
              {camper.rating} (
              {Array.isArray(camper.reviews)
                ? camper.reviews.length
                : camper.reviews}{' '}
              Reviews)
            </span>
          </div>
          <div className={styles.cardLocationWrapper}>
            <Icon
              id="icon-Map"
              width="16"
              height="16"
              className={styles.iconMap}
            />
            <p className={styles.cardLocation}>{camper.location}</p>
          </div>
        </div>
        <span className={styles.cardPrice}>€{camper.price}</span>
        <div className={styles.galleryContainer}>
          {camper.gallery.map((image, index) => (
            <img
              key={index}
              src={image.original}
              alt={`${camper.name} image ${index + 1}`}
              className={styles.galleryImage}
            />
          ))}
        </div>

        <p className={styles.cardDescription}>{camper.description}</p>
      </div>

      <div className={styles.containerButtonGroup}>
        <div className={styles.buttonGroup}>
          <button
            onClick={() => setShowFirst(true)}
            className={styles.buttonFeatures}
          >
            Features
          </button>
          <button
            onClick={() => setShowFirst(false)}
            className={styles.buttonReviews}
          >
            Reviews
          </button>
        </div>
        <div className={styles.componentWrapper}>
          {showFirst ? (
            <Features features={camper} />
          ) : (
            <Reviews reviews={camper.reviews} />
          )}
          <BookingForm onSubmit={handleBookingSubmit} />
        </div>
      </div>
    </div>
  );
};

export default CamperDetails;
