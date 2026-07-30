import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProvider } from '../api';
import ExpandableBio from '../components/ExpandableBio';
import styles from './ProfilePage.module.css';
import PROFESSIONS from '../professions';
import locationIcon from '../assets/Group 73.png';
import educationIcon from '../assets/Misc..png';
import languageIcon from '../assets/Group 74.png';
import clinicianPhoto from '../assets/Clinician 4.png';

function ProfilePage() {
  const { id } = useParams();
  const [provider, setProvider] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetchProvider(id)
      .then(setProvider)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className={styles.page}>
        <p className={styles.status}>Loading…</p>
      </div>
    );
  }

  if (error || !provider) {
    return (
      <div className={styles.page}>
        <p className={styles.status}>We couldn't find that provider.</p>
        <Link to="/" className={styles.backLink}>Back to all providers</Link>
      </div>
    );
  }

  const { name, title, avatarUrl, bio, location, education, languages } = provider;

  return (
    <div className={styles.page}>
      <nav className={styles.breadcrumb}>
        <Link to="/" className={styles.breadcrumbLink}>Mental Wellness</Link>
        <span className={styles.separator}>›</span>
        <span className={styles.breadcrumbCurrent}>{name}, {title}</span>
      </nav>

      <article className={styles.layout}>
        <ProviderPhoto url={avatarUrl} name={name} />

        <div className={styles.card}>
          <div className={styles.cardSection}>
            <h1 className={styles.name}>{name}, {title}</h1>
            <p className={styles.subtitle}>{PROFESSIONS[id]}</p>
            <ExpandableBio text={bio} />
          </div>

          <div className={styles.cardSection}>
            <dl className={styles.detailList}>
              <DetailRow icon={locationIcon} label="Location" value={location} />
              <DetailRow icon={educationIcon} label="Education" value={education} />
              <DetailRow icon={languageIcon} label="Language" value={languages.join(', ')} />
            </dl>
            <button type="button" className={styles.bookButton}>Book with us</button>
          </div>
        </div>
      </article>
    </div>
  );
}

function DetailRow({ icon, label, value }) {
  return (
    <div className={styles.detailRow}>
      <img src={icon} alt="" className={styles.detailIcon} />
      <div>
        <dt className={styles.detailLabel}>{label}</dt>
        <dd className={styles.detailValue}>{value}</dd>
      </div>
    </div>
  );
}

function ProviderPhoto({ url, name }) {
  return <img src={url || clinicianPhoto} alt="" className={styles.photo} />;
}

export default ProfilePage;