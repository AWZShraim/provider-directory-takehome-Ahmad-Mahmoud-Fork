import { useEffect, useState } from 'react';
import { fetchProviders } from '../api';
import ProviderCard from '../components/ProviderCard';
import styles from './DirectoryPage.module.css';
import locationPin from '../assets/Vector.png';

function DirectoryPage() {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchProviders()
      .then(setProviders)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <h1 className={styles.title}>Browse our providers</h1>
          <p className={styles.subtitle}>Mental Wellness</p>
          <span className={styles.location}>
            <img src={locationPin} alt="" className={styles.locationIcon} /> ON
          </span>
        </div>
      </header>

      <div className={styles.content}>
        {loading && <p className={styles.status}>Loading providers…</p>}

        {error && (
          <p className={styles.status}>
            We couldn't load providers right now. Please try again later.
          </p>
        )}

        {!loading && !error && providers.length === 0 && (
          <p className={styles.status}>No providers are available in this area.</p>
        )}

        {!loading && !error && providers.length > 0 && (
          <>
            <p className={styles.count}>
              <strong>{providers.length}</strong> providers
            </p>
            {providers.map((p) => (
              <ProviderCard key={p.id} provider={p} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default DirectoryPage;