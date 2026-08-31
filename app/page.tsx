export default function Home() {
  const modules = [
    ['Lead Factory', 'Find and rank motivated seller opportunities'],
    ['Property Intelligence', 'Research ownership, parcel, tax, GIS and market signals'],
    ['Deal Analyzer', 'Estimate value, MAO, risk, spread and ROI'],
    ['Seller Pipeline', 'Track outreach, responses and follow-up'],
    ['Buyer Pipeline', 'Build and rank the disposition network'],
    ['Automation Monitor', 'Watch jobs, integrations and failures'],
  ]

  return (
    <main style={{fontFamily:'system-ui',maxWidth:1200,margin:'0 auto',padding:'48px 24px'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:20}}>
        <div>
          <p style={{letterSpacing:2,fontWeight:700}}>REAL ESTATE GOD MODE</p>
          <h1 style={{fontSize:48,margin:'8px 0'}}>Find the money. Build the machine.</h1>
          <p style={{fontSize:20,maxWidth:760}}>AI-operated acquisition command center. Initial market: Polk County, Florida.</p>
        </div>
        <div style={{padding:16,border:'1px solid #ddd',borderRadius:14}}>STATUS<br/><strong>BUILDING</strong></div>
      </div>
      <section style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:16,marginTop:40}}>
        {modules.map(([title,desc]) => <article key={title} style={{border:'1px solid #ddd',borderRadius:16,padding:22}}><h2>{title}</h2><p>{desc}</p><small>READY FOR INTEGRATION</small></article>)}
      </section>
      <section style={{marginTop:40,padding:24,borderRadius:16,border:'2px solid #111'}}>
        <h2>CEO Command Console</h2>
        <p>Next command: investigate the highest-value Polk County opportunities and feed verified leads into the acquisition pipeline.</p>
      </section>
    </main>
  )
}
