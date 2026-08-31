const dashboardUrl = 'https://bnsmnztxkqmphvbikaxh.supabase.co/functions/v1/god-mode-dashboard';

export default async function Home() {
  return (
    <main>
      <section className="hero">
        <div className="eyebrow">POLK COUNTY • LAKE WALES FIRST MARKET</div>
        <h1>REAL ESTATE GOD MODE</h1>
        <p>Acquisition intelligence for land and residential opportunities.</p>
        <div className="grid">
          <article><strong>36,698</strong><span>Parcels Ingested</span></article>
          <article><strong>18,599</strong><span>Land Parcels</span></article>
          <article><strong>16,698</strong><span>Residential Parcels</span></article>
          <article><strong>1,791</strong><span>High-Scoring Candidates</span></article>
        </div>
        <div className="status">
          <h2>System Status</h2>
          <p>County ingestion, classification, scoring, lead generation, buyer matching, and daily refresh are active.</p>
          <p>Seller outreach remains gated pending enrichment and underwriting.</p>
          <a href={dashboardUrl}>Open live aggregate data source</a>
        </div>
      </section>
    </main>
  );
}
