import { useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useTranslation } from 'react-i18next';

const QRCodeDisplay = () => {
  const [currentUrl, setCurrentUrl] = useState('');
  const [showQR, setShowQR] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    // Get the current URL when the component mounts
    setCurrentUrl(window.location.href);
  }, []);

  const toggleQRCode = () => {
    setShowQR(!showQR);
  };

  return (
    <div className="qr-code-container" style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1000 }}>
      <button 
        onClick={toggleQRCode}
        style={{
          background: '#4a90e2',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '5px 10px',
          cursor: 'pointer',
          fontSize: '14px'
        }}
      >
        {showQR ? t('hideQRCode') : t('showQRCode')}
      </button>
      
      {showQR && (
        <div style={{
          position: 'absolute',
          top: '40px',
          right: '0',
          background: 'white',
          padding: '15px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <QRCodeSVG value={currentUrl} size={150} />
          <p style={{ marginTop: '10px', fontSize: '12px', textAlign: 'center' }}>
            {t('scanToOpen')}
          </p>
        </div>
      )}
    </div>
  );
};

export default QRCodeDisplay;