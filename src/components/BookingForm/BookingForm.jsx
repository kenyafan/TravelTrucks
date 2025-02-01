import { useState } from 'react';
import { toast } from 'react-hot-toast';
import styles from '../BookingForm/BookingForm.module.css';

const BookingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', email: '', bookingDate: '', comment: '' });
  };

  return (
    <div className={styles.bookingWrapper}>
      <div className={styles.bookingHeader}>
        <h2 className={styles.title}>Book your campervan now</h2>
        <p className={styles.description}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <form className={styles.bookingForm} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Name*"
        />

        <input
          className={styles.input}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Email*"
        />

        <input
          className={styles.input}
          type="date"
          name="bookingDate"
          value={formData.bookingDate}
          onChange={handleChange}
          required
          placeholder="Booking date*"
        />

        <textarea
          className={styles.textarea}
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          placeholder="Comment"
        />

        <button className={styles.button} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
