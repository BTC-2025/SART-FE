import React, { useState } from 'react';
import { useSartStore } from '../../store/useSartStore';

export default function SupportTab() {
  const { activeTab } = useSartStore();
  
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  if (activeTab !== 'support') return null;

  return (
    <section className="tab-screen active" style={{ padding: '32px', maxWidth: '1000px', margin: '0 auto' }}>
      
      {/* Header Section */}
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 900, color: '#090d16', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
          Contact Us
        </h1>
        <p style={{ color: '#4b5563', fontSize: '16px' }}>
          Get in touch with SART Merchant Relations or file a platform bug report.
        </p>
      </div>

      {/* Info Cards Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        
        {/* Email Support Card */}
        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '24px', display: 'flex', alignItems: 'flex-start', gap: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
          <div style={{ background: '#eff6ff', color: '#3b82f6', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>
            <i className="fa-regular fa-envelope"></i>
          </div>
          <div>
            <h4 style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: 700, color: '#090d16' }}>EMAIL SUPPORT</h4>
            <p style={{ margin: '0 0 2px 0', fontSize: '14px', color: '#4b5563' }}>merchant.support@sart.com</p>
            <p style={{ margin: 0, fontSize: '12px', color: '#9ca3af' }}>24/7 Ticketing System</p>
          </div>
        </div>

        {/* Hotline Support Card */}
        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '24px', display: 'flex', alignItems: 'flex-start', gap: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
          <div style={{ background: '#ecfdf5', color: '#10b981', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>
            <i className="fa-solid fa-phone"></i>
          </div>
          <div>
            <h4 style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: 700, color: '#090d16' }}>HOTLINE SUPPORT</h4>
            <p style={{ margin: '0 0 2px 0', fontSize: '14px', color: '#4b5563' }}>+91 1800 555 9898</p>
            <p style={{ margin: 0, fontSize: '12px', color: '#9ca3af' }}>Mon - Sat, 9 AM - 6 PM</p>
          </div>
        </div>

        {/* Headquarters Card */}
        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '24px', display: 'flex', alignItems: 'flex-start', gap: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
          <div style={{ background: '#faf5ff', color: '#a855f7', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div>
            <h4 style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: 700, color: '#090d16' }}>HEADQUARTERS</h4>
            <p style={{ margin: '0 0 2px 0', fontSize: '14px', color: '#4b5563' }}>Beta Tower, Sector 62</p>
            <p style={{ margin: 0, fontSize: '12px', color: '#9ca3af' }}>Noida, UP - 201301</p>
          </div>
        </div>

      </div>

      {/* Ticket Form */}
      <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#090d16', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <i className="fa-regular fa-comment-dots" style={{ color: '#f59e0b' }}></i> CREATE SUPPORT TICKET
        </h3>
        
        <div style={{ height: '1px', background: '#e2e8f0', margin: '0 -32px 24px -32px' }}></div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#4b5563', marginBottom: '8px', textTransform: 'uppercase' }}>Subject</label>
          <input 
            type="text" 
            placeholder="e.g. Services page loading delays or staff role updates"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={{ width: '100%', padding: '16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '15px', outline: 'none', transition: 'all 0.2s', background: '#f8fafc', color: '#0f172a' }}
          />
        </div>

        <div style={{ marginBottom: '32px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#4b5563', marginBottom: '8px', textTransform: 'uppercase' }}>Message / Issue Details</label>
          <textarea 
            placeholder="Please describe your query or problem in detail..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            style={{ width: '100%', padding: '16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '15px', outline: 'none', transition: 'all 0.2s', background: '#f8fafc', resize: 'vertical', color: '#0f172a' }}
          ></textarea>
        </div>

        <button 
          onClick={() => {
            if (!subject || !message) {
              alert('Please fill in both Subject and Message before submitting.');
              return;
            }
            alert('Ticket Submitted Successfully! Our team will get back to you shortly.');
            setSubject('');
            setMessage('');
          }}
          style={{ background: '#090d16', color: '#ffffff', border: 'none', padding: '16px 32px', borderRadius: '8px', fontSize: '16px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', transition: 'all 0.3s' }}
          onMouseOver={(e) => e.currentTarget.style.background = '#1e293b'}
          onMouseOut={(e) => e.currentTarget.style.background = '#090d16'}
        >
          <i className="fa-solid fa-paper-plane"></i> Submit Support Ticket
        </button>

      </div>

    </section>
  );
}
