
'use client';
import React, { useEffect, useState } from 'react';
import './WalletTab.css'; 

export default function WalletTab() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div dangerouslySetInnerHTML={{ __html: `      <!-- 4. SUPER WALLET TAB -->
      <section class="tab-screen" id="tab-wallet">
        <div class="wallet-page-layout">
          
          <div class="wallet-dashboard-col">
            <div class="dashboard-card wallet-card-wide">
              <div class="wallet-page-header">
                <h2>Super Wallet Dashboard</h2>
                <span class="gold-tier-badge">GOLD ELITE MEMBER</span>
              </div>
              
              <div class="wallet-page-metrics">
                <div class="wallet-metric-box">
                  <span class="lbl">Available Balance</span>
                  <h1 class="val" id="wallet-pg-balance">₹15,000.00</h1>
                  <span class="subtext">Secure escrow holding</span>
                </div>
                <div class="wallet-metric-box">
                  <span class="lbl">Loyalty Points</span>
                  <h1 class="val" style="color:var(--secondary);" id="wallet-pg-points">2,450 pts</h1>
                  <span class="subtext">Claim details under profile</span>
                </div>
                <div class="wallet-metric-box">
                  <span class="lbl">Accumulated Cashback</span>
                  <h1 class="val" style="color:var(--success);" id="wallet-pg-cashback">₹350.00</h1>
                  <button class="claim-btn" onclick="claimCashbackMoney()">Claim to Balance</button>
                </div>
              </div>
            </div>

            <!-- Wallet Forms row -->
            <div class="wallet-forms-row">
              <div class="dashboard-card" style="flex: 1;">
                <h3><i class="fa-solid fa-plus" style="color:var(--success);"></i> Load Funds</h3>
                <p style="font-size:11px; color:var(--text-secondary); margin-bottom:12px;">Add instant digital currency to your wallet balance.</p>
                
                <div class="form-group">
                  <label>Amount to Deposit (INR)</label>
                  <input type="number" class="input-field" id="wallet-pg-deposit-amount" value="5000">
                </div>
                <div class="form-group">
                  <label>Payment Source Card</label>
                  <select class="input-field select-field" id="wallet-pg-deposit-source">
                    <option value="Visa (last 4: 4242)">Visa •••• 4242</option>
                    <option value="Mastercard (last 4: 8839)">Mastercard •••• 8839</option>
                  </select>
                </div>
                <button class="action-btn" onclick="executeWalletPageDeposit()">Process Deposit</button>
              </div>

              <div class="dashboard-card" style="flex: 1;">
                <h3><i class="fa-solid fa-paper-plane" style="color:var(--primary);"></i> Send Money (UPI)</h3>
                <p style="font-size:11px; color:var(--text-secondary); margin-bottom:12px;">Transfer funds immediately to any UPI ID or account number.</p>
                
                <div class="form-group">
                  <label>Recipient Address</label>
                  <input type="text" class="input-field" id="wallet-pg-transfer-recipient" placeholder="upi-id@bank or account no" value="rajesh.kumar@upi">
                </div>
                <div class="form-group">
                  <label>Amount to Send (INR)</label>
                  <input type="number" class="input-field" id="wallet-pg-transfer-amount" value="1000">
                </div>
                <button class="action-btn" onclick="executeWalletPageTransfer()">Transfer Funds</button>
              </div>
            </div>
          </div>

          <div class="wallet-history-col">
            <div class="dashboard-card" style="height: 100%; display: flex; flex-direction: column;">
              <h3>Recent Transaction Registry</h3>
              <p style="font-size:11px; color:var(--text-secondary); margin-bottom:14px;">Audit log of recent wallet charges and top-ups.</p>
              <div class="transactions-full-list" id="wallet-pg-transactions-list" style="flex:1; overflow-y:auto; display:flex; flex-direction:column; gap:10px;">
                <!-- Dynamically loaded -->
              </div>
            </div>
          </div>

        </div>
      </section>
      ` }} />
  );
}
