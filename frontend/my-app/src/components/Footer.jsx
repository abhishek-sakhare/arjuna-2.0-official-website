import React, { useEffect, useRef, useState } from 'react';
import '../styles/footer.css';

const Footer = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    const currentRef = ref.current;

    if (currentRef) obs.observe(currentRef);
    return () => {
      if (currentRef) obs.unobserve(currentRef);
    };
  }, []);

  return (
    <footer className={`footer ${visible ? 'visible' : ''}`} ref={ref}>
      <div className="footer-content">
        <p>© 2025 Civil Innovation and Technology Cell, NIT Agartala</p>
        <div className="footer-extra">
          <p>Developed with ❤️ by Team ARJUNA 2.0</p>
          <p>Contact: citc@nitagartala.ac.in</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
