// Fade-in animation for header and QR code
window.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('resume-header');
  const qr = document.getElementById('qr-section');
  header.style.opacity = 0;
  qr.style.opacity = 0;
  header.style.transition = 'opacity 1.2s cubic-bezier(.4,0,.2,1)';
  qr.style.transition = 'opacity 1.2s cubic-bezier(.4,0,.2,1) 0.5s';
  setTimeout(() => { header.style.opacity = 1; }, 100);
  setTimeout(() => { qr.style.opacity = 1; }, 400);
});

// QR code hover effect
const qrSection = document.getElementById('qr-section');
if (qrSection) {
  qrSection.addEventListener('mouseenter', function() {
    qrSection.style.transform = 'scale(1.08)';
    qrSection.style.boxShadow = '0 8px 24px rgba(44,62,80,0.18)';
    qrSection.style.transition = 'transform 0.3s, box-shadow 0.3s';
  });
  qrSection.addEventListener('mouseleave', function() {
    qrSection.style.transform = 'scale(1)';
    qrSection.style.boxShadow = 'none';
  });
} 