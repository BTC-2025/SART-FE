
'use client';
import React, { useEffect, useState } from 'react';
import './ProfileTab.css'; 

export default function ProfileTab() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div dangerouslySetInnerHTML={{ __html: `      <!-- 5. PROFILE TAB (Premium Redesign) -->
      <section class="tab-screen" id="tab-profile">
        <div class="profile-container">
          
          <div class="profile-card">
            <div class="profile-avatar-container">
              <div class="profile-avatar">
                AC
              </div>
              <div class="profile-avatar-badge"></div>
            </div>
            <div class="profile-info-details">
              <h2>Alex Carter</h2>
              <p>alex.carter@sart.com • +91 98765 43210</p>
              <span class="profile-tier">SART TEAL ELITE</span>
            </div>
          </div>
          
          <div class="profile-stats-row">
            <div class="profile-stat-box">
              <div class="num">142</div>
              <div class="lbl">Total Trips</div>
            </div>
            <div class="profile-stat-box">
              <div class="num">₹15,000.00</div>
              <div class="lbl">Wallet Balance</div>
            </div>
            <div class="profile-stat-box">
              <div class="num">85%</div>
              <div class="lbl">Beta Trust</div>
            </div>
          </div>
          
          <div class="profile-sections-list">
            <div class="profile-section-item" onclick="openProfileSubpage('documents', 'Documents & Verification')">
              <div class="profile-section-left">
                <div class="profile-section-icon"><i class="fa-solid fa-folder-open"></i></div>
                <div class="profile-section-text">
                  <h4>Documents & DigiLocker</h4>
                  <p>Manage driving licenses, vehicle permit credentials & verified ID cards.</p>
                </div>
              </div>
              <i class="fa-solid fa-chevron-right" style="font-size:12px; color:var(--text-secondary);"></i>
            </div>
            
            <div class="profile-section-item" onclick="openProfileSubpage('payment', 'Payment Settings')">
              <div class="profile-section-left">
                <div class="profile-section-icon"><i class="fa-solid fa-credit-card"></i></div>
                <div class="profile-section-text">
                  <h4>Linked Payments & Wallets</h4>
                  <p>Configure bank accounts, credit cards, auto-recharge settings and UPI IDs.</p>
                </div>
              </div>
              <i class="fa-solid fa-chevron-right" style="font-size:12px; color:var(--text-secondary);"></i>
            </div>
            
            <div class="profile-section-item" onclick="openProfileSubpage('safety', 'Safety & Ride Settings')">
              <div class="profile-section-left">
                <div class="profile-section-icon"><i class="fa-solid fa-shield-halved"></i></div>
                <div class="profile-section-text">
                  <h4>Safety & Ride Preferences</h4>
                  <p>Configure kids & women protection, professional chauffeur mode, speed alerts.</p>
                </div>
              </div>
              <i class="fa-solid fa-chevron-right" style="font-size:12px; color:var(--text-secondary);"></i>
            </div>
            
            <div class="profile-section-item" onclick="openProfileSubpage('language', 'Language & Country')">
              <div class="profile-section-left">
                <div class="profile-section-icon"><i class="fa-solid fa-globe"></i></div>
                <div class="profile-section-text">
                  <h4>Localization Settings</h4>
                  <p>Set standard language (English), local currency (INR) and home country (India).</p>
                </div>
              </div>
              <i class="fa-solid fa-chevron-right" style="font-size:12px; color:var(--text-secondary);"></i>
            </div>
            
            <div class="profile-section-item" onclick="openProfileSubpage('help', 'Help & Support')">
              <div class="profile-section-left">
                <div class="profile-section-icon"><i class="fa-solid fa-circle-question"></i></div>
                <div class="profile-section-text">
                  <h4>Customer Help Desk</h4>
                  <p>Read FAQs, initiate safety contacts, or open support ticket entries.</p>
                </div>
              </div>
              <i class="fa-solid fa-chevron-right" style="font-size:12px; color:var(--text-secondary);"></i>
            </div>
            
            <div class="profile-section-item" onclick="openProfileSubpage('about', 'About SART')">
              <div class="profile-section-left">
                <div class="profile-section-icon"><i class="fa-solid fa-info"></i></div>
                <div class="profile-section-text">
                  <h4>About Universal SART</h4>
                  <p>Version 2.4.0-Beta. Standard legal privacy policy, terms of service agreements.</p>
                </div>
              </div>
              <i class="fa-solid fa-chevron-right" style="font-size:12px; color:var(--text-secondary);"></i>
            </div>
            
            <div class="profile-section-item" onclick="openModal('modal-bit-feed')">
              <div class="profile-section-left">
                <div class="profile-section-icon" style="background: rgba(21,127,138,0.15);"><i class="fa-solid fa-compass"></i></div>
                <div class="profile-section-text">
                  <h4>BIT Tool Active Feed</h4>
                  <p>Access the live activity dashboard tracking vehicle events across city sectors.</p>
                </div>
              </div>
              <i class="fa-solid fa-chevron-right" style="font-size:12px; color:var(--text-secondary);"></i>
            </div>
          </div>
          
        </div>
      </section>
      
      <!-- 5. DYNAMIC PROFILE SUB-PAGE VIEW PANEL -->
      <section class="tab-screen" id="tab-profile-subpage">
        <div class="dashboard-card" style="max-width: 800px; margin: 20px auto;">
          <div class="subpage-header">
            <button class="back-btn" onclick="backToProfile()"><i class="fa-solid fa-chevron-left"></i> Back to Profile</button>
            <h2 id="subpage-title-txt" style="font-size: 20px; font-weight: 800;">Settings Section</h2>
          </div>
          <hr style="border:0; border-top: 1px solid var(--dark-border); margin: 20px 0;">
          <div id="subpage-content-container">
            <!-- Loaded dynamically via js -->
          </div>
        </div>
      </section>
      
    </main>
    ` }} />
  );
}
