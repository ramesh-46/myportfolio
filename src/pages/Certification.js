import React, { useState } from 'react';
import styles from './Certifications.module.css';

const certifications = [
  { id: 1, title: 'Developer Foundations', image: 'https://certificates.ccbp.in/intensive/developer-foundations?id=YKFBGCABQC', data: 'Completed in 2023', certId: 'WD2023001' },
  { id: 2, title: 'Introduction to Databases', image: '/placeholder.svg?height=300&width=400', data: 'Completed in 2022', certId: 'DS2022001' },
  { id: 3, title: 'Programming Foundations with Python', image: '/placeholder.svg?height=300&width=400', data: 'Completed in 2021', certId: 'ML2021001' },
  { id: 4, title: 'AI Data Scientist', image: '/placeholder.svg?height=300&width=400', data: 'Completed in 2023', certId: 'CC2023001' },
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleCertClick = (cert) => {
    setSelectedCert(cert);
  };

  const handleBackClick = () => {
    setSelectedCert(null);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Certifications</h1>
      {selectedCert ? (
        <div className={styles.certDetail}>
          <img src={selectedCert.image} alt={selectedCert.title} className={styles.certImage} />
          <div className={styles.certInfo}>
            <h2>{selectedCert.title}</h2>
            <p>{selectedCert.data}</p>
            <p>Certificate ID: {selectedCert.certId}</p>
            <button onClick={handleBackClick} className={styles.backButton}>Back to All Certifications</button>
          </div>
        </div>
      ) : (
        <div className={styles.certGrid}>
          {certifications.map((cert) => (
            <div key={cert.id} className={styles.card} onClick={() => handleCertClick(cert)}>
              <p className={styles.heading}>{cert.title}</p>
              <p>{cert.data}</p>
              <p>{cert.certId}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
