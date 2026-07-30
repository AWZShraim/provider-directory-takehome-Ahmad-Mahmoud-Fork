import { Link } from 'react-router-dom';
import styles from './ProviderCard.module.css';
import PROFESSIONS from '../professions';
import clinicianPhoto from '../assets/Clinician 7.png';

const AVAILABILITY_LABELS = {
  tomorrow: 'Available tomorrow',
  'next-week': 'Available in the next week',
};

function ProviderCard({ provider }) {
  const { id, name, title, avatarUrl, bio, availabilty } = provider;

  return (
    <Link to={`/providers/${id}`} className={styles.card}>
      <div className={styles.header}>
        <Avatar url={avatarUrl} name={name} />
        <div>
          <h2 className={styles.name}>{name}, {title}</h2>
          <p className={styles.subtitle}>{PROFESSIONS[id]}</p>
        </div>
      </div>
      <p className={styles.bio}>{bio}</p>
      <span className={styles.badge}>
        {AVAILABILITY_LABELS[availabilty] ?? 'Availability on request'}
      </span>
    </Link>
  );
}

function Avatar({ url, name }) {
  return <img src={url || clinicianPhoto} alt="" className={styles.avatar} />;
}

export default ProviderCard;