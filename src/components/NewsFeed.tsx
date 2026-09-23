'use client';

import React from 'react';

export default function NewsFeed() {
  return (
    <div className="dashboard-card" id="news-section-div" style={{ marginTop: '18px' }}>
      <div className="section-header-row">
        <h2 className="card-headline">Latest Transit Ecosystem News</h2>
        <span className="action-link" onClick={() => alert('Auto News RSS Feed connected.')}>See All Feed</span>
      </div>
      <div className="web-news-row" id="news-cards-container">
        {/* Loaded dynamically via JS for now */}
      </div>
    </div>
  );
}
