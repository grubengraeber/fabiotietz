import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleMenuClick = (path: string) => {
    setIsOpen(false);
    router.push(path);
    document.getElementById(path.substring(1))?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };

  return (
    <>
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      {isOpen && (
        <div className="menu-overlay">
          <button className="close" onClick={() => setIsOpen(false)}>✕</button>
          <div className="menu-item" onClick={() => handleMenuClick('#about')}>About</div>

          <div className="menu-list">Work</div>
          <div className="menu-list-item" onClick={() => handleMenuClick('#austrian-armed-forces')}>Austrian Armed Forces</div>
          <div className="menu-list-item" onClick={() => handleMenuClick('#smatrics')}>SMATRICS</div>
          <div className="menu-sub-list">Side Jobs</div>
          <div className="menu-sub-list-item" onClick={() => handleMenuClick('#therme-wien')}>Chef / Service Staff / Barkeeper</div>
          <div className="menu-sub-list-item" onClick={() => handleMenuClick('#sfc')}>Child Care / Youth Worker</div>
          <div className="menu-sub-list-item" onClick={() => handleMenuClick('#sellinnx')}>Promoter / Sample Distributor</div>
          <div className="menu-sub-list-item" onClick={() => handleMenuClick('#thurs')}>Security / Bouncer</div>
          <div className="menu-sub-list-item" onClick={() => handleMenuClick('#fitinn')}>Front Desk / Receptionist</div>
          
          <div className="menu-list">Education</div>
          <div className="menu-sub-list">HLW 10</div>
          <div className="menu-sub-list-item" onClick={() => handleMenuClick('#cooking')}>Cooking</div>
          <div className="menu-sub-list-item" onClick={() => handleMenuClick('#service')}>Service</div>
          <div className="menu-sub-list-item" onClick={() => handleMenuClick('#economics')}>Economics</div>
          <div className="menu-sub-list-item" onClick={() => handleMenuClick('#media-informatics')}>Media Informatics</div>
          <div className="menu-sub-list">Codecool Vienna</div>
          <div className="menu-sub-list-item" onClick={() => handleMenuClick('#basics')}>Basics</div>
          <div className="menu-sub-list-item" onClick={() => handleMenuClick('#web')}>Web Development</div>
          <div className="menu-sub-list-item" onClick={() => handleMenuClick('#oop')}>Object Oriented Programming</div>
          <div className="menu-sub-list-item" onClick={() => handleMenuClick('#advanced')}>Advanced</div>

          <div className="menu-item" onClick={() => handleMenuClick('#technology')}>Technology</div>
          <div className="menu-item" onClick={() => handleMenuClick('#other-skills')}>Other Skills</div>
          {/* Weitere Menüpunkte hier hinzufügen */}
        </div>
      )}
      <style jsx>{`
        .hamburger {
          display: none;
          position: fixed;
          top: 200;
          left: 0;
          z-index: 1001; /* Sorgt dafür, dass das Hamburger-Icon über dem Overlay liegt */
        }
        .menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .close {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 30px;
          background: none;
          border: none;
          color: white;
        }
        .menu-item {
          margin: 10px 0;
          cursor: pointer;
        }
          .menu-list {
          font-size: 20px;
          font-weight: bold;
          margin: 20px 0 10px;
        }
        .menu-list-item, .menu-sub-list-item {
          margin-left: 20px;
          cursor: pointer;
        }
        .menu-sub-list {
          font-size: 18px;
          margin-left: 10px;
          color: #ccc;
        }
        @media (max-width: 768px) {
          .hamburger {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default MobileMenu;