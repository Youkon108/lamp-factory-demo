import { useEffect, useMemo, useState } from 'react'

const categoryFamilies = [
  ['Pendant Lights', 'PD', ['Halo', 'Arc', 'Luma', 'Orbit', 'Linea', 'Nova', 'Aster', 'Forma', 'Vela', 'Miro', 'Cove', 'Eclipse', 'Sora', 'Noma']],
  ['Chandeliers', 'CH', ['Aurelia', 'Cascade', 'Atria', 'Opus', 'Celeste', 'Mosaic', 'Lustre', 'Seren', 'Vesper', 'Crown', 'Solis', 'Rondo', 'Elara', 'Pearl']],
  ['Ceiling Lights', 'CL', ['Lumen', 'Surface', 'Plana', 'Dome', 'Flush', 'Circa', 'Slate', 'Mira', 'Cloud', 'Edge', 'Pico', 'Tondo', 'Vitra', 'Axis']],
  ['Wall Lights', 'WL', ['Line', 'Sconce', 'Ridge', 'Beacon', 'Calder', 'Evoke', 'Frame', 'Niche', 'Pillar', 'Wisp', 'Porto', 'Ledge', 'Lino', 'Arcade']],
  ['Table Lamps', 'TL', ['Noma', 'Tact', 'Milo', 'Sera', 'Eon', 'Faro', 'Lido', 'Pera', 'Rae', 'Kite', 'Onda', 'Moss', 'Coda', 'Vero']],
  ['Floor Lamps', 'FL', ['Solis', 'Arco', 'Mast', 'Tallis', 'Nora', 'Vigo', 'Pivot', 'Frame', 'Canto', 'Largo', 'Iris', 'Stem', 'Vela', 'Dawn']],
  ['Track Lights', 'TR', ['Beam', 'Axis', 'Rail', 'Focus', 'Vector', 'Point', 'Kite', 'Zoom', 'Pivot', 'Line', 'Core', 'Flux', 'Aim', 'Studio']],
  ['Downlights', 'DL', ['Grid', 'Recess', 'Trim', 'Halo', 'Micro', 'Deep', 'Square', 'Round', 'Edge', 'Pure', 'Soft', 'Sharp', 'Zero', 'Pro']],
  ['Spotlights', 'SP', ['Focus', 'Accent', 'Narrow', 'Wide', 'Gallery', 'Beam', 'Pin', 'Optic', 'Scene', 'Track', 'Aim', 'Zoom', 'Vista', 'Point']],
  ['Linear Lights', 'LI', ['Studio', 'Profile', 'Link', 'Vector', 'Contour', 'Ridge', 'Trace', 'Line', 'Channel', 'Blade', 'Modular', 'Stream', 'Lumen', 'Edge']],
  ['Commercial Lighting', 'CO', ['Office', 'Panel', 'Work', 'Retail', 'Bay', 'Grid', 'Core', 'Pro', 'Vega', 'Matrix', 'Bright', 'Zone', 'Lattice', 'Direct']],
  ['Outdoor Lighting', 'EX', ['Vela', 'Path', 'Bollard', 'Garden', 'Wall', 'Step', 'Flood', 'Beacon', 'Terra', 'Post', 'Marina', 'Cove', 'Lume', 'Port']],
  ['Industrial Lighting', 'IN', ['Highbay', 'Lowbay', 'Factory', 'Linear', 'Canopy', 'Vapor', 'Worklight', 'Rugged', 'Bulkhead', 'Flood', 'Arena', 'Dock', 'Forge', 'Titan']],
  ['Smart Lighting', 'SM', ['Connect', 'Scene', 'Tune', 'Bridge', 'Sense', 'Link', 'Voice', 'Mesh', 'Control', 'Sync', 'Smart', 'Dali', 'Pulse', 'Flow']],
  ['Decorative Lighting', 'DE', ['Cloud', 'Petal', 'Pebble', 'Globe', 'Drape', 'Bloom', 'Candle', 'Ripple', 'Drop', 'Nest', 'Muse', 'Flora', 'Luna', 'Poise']],
]

const variants = [
  ['S', 'Small', 8, 800, 3000, 20], ['M', 'Medium', 18, 1800, 3500, 40], ['L', 'Large', 32, 3200, 4000, 60], ['X', 'Extended', 48, 4800, 3000, 80], ['P', 'Premium', 65, 6200, 2700, 100], ['C', 'Compact', 12, 1100, 4000, 30], ['D', 'Dual', 24, 2400, 3500, 45], ['T', 'Triple', 36, 3600, 3000, 70], ['R', 'Round', 15, 1500, 3000, 35], ['Q', 'Pro', 55, 5400, 4000, 90], ['E', 'Eco', 10, 950, 3000, 25], ['V', 'Vertical', 22, 2100, 3500, 50], ['U', 'Ultra', 42, 4100, 2700, 75], ['N', 'Narrow', 14, 1350, 4000, 35],
]

const finishes = ['Matte black', 'Warm white', 'Brushed brass', 'Anthracite', 'Natural aluminium', 'Satin nickel']
const materials = ['Aluminium + acrylic', 'Die-cast aluminium', 'Steel + opal diffuser', 'Glass + aluminium', 'Aluminium + PC', 'Steel + linen']
const applications = ['Hospitality / Residential', 'Office / Retail', 'Hotel / Restaurant', 'Gallery / Museum', 'Exterior / Landscape', 'Warehouse / Commercial']
const categories = categoryFamilies.map(([category]) => category)

const products = categoryFamilies.flatMap(([category, code, names], familyIndex) => names.map((name, nameIndex) => {
  const variant = variants[(familyIndex * 3 + nameIndex) % variants.length]
  const [suffix, size, wattage, lumens, cct, moq] = variant
  const sequence = familyIndex * names.length + nameIndex + 1
  const price = Number((18 + familyIndex * 3.4 + nameIndex * 1.7 + wattage / 15).toFixed(2))
  return {
    id: `${code}-${String(sequence).padStart(3, '0')}`,
    name: `${name} ${size} ${category.replace(' Lights', '')}`,
    sku: `BG-${code}-${String(sequence).padStart(3, '0')}`,
    category, image: `${code.toLowerCase()}-${suffix.toLowerCase()}`,
    description: `A refined ${category.toLowerCase()} designed for dependable specification and repeatable international production.`,
    detailedDescription: `The ${name} range balances considered proportions, efficient LED performance and robust finish quality. It is developed for professional projects where consistent light, reliable lead times and flexible branding matter.`,
    wattage, cct, lumens, cri: wattage > 40 ? 90 : 80, voltage: '220–240V / 50–60Hz', material: materials[(familyIndex + nameIndex) % materials.length], finish: finishes[(familyIndex + nameIndex) % finishes.length], ip: ['Outdoor Lighting', 'Industrial Lighting'].includes(category) ? 'IP65' : 'IP20', dimensions: `${120 + nameIndex * 12} x ${180 + familyIndex * 18} mm`, moq: `${moq} pcs`, certifications: 'CE, RoHS, EMC', application: applications[(familyIndex + nameIndex) % applications.length], price, bulk: [Number((price * 1.12).toFixed(2)), price, Number((price * 0.88).toFixed(2))],
  }
}))

const dictionary = {
  EN: { nav: ['Products', 'Capabilities', 'About us'], heroEyebrow: 'BAGGIO / LIGHTING MANUFACTURING', heroTitle: 'Light, made for the way business moves.', heroText: 'A dependable manufacturing partner for distinctive luminaires, considered engineering and scalable production across Europe.', explore: 'Explore collection', custom: 'Request custom quote', collection: 'The complete collection', collectionText: '210 specification-ready luminaires, organized for fast sourcing and built to flex with your brief.', search: 'Search by product, SKU or application', all: 'All categories', price: 'Max demo price', sort: 'Sort by', relevance: 'Relevance', low: 'Price: low to high', high: 'Price: high to low', newest: 'Newest first', showing: 'Showing', of: 'of', view: 'View details', quote: 'Request quote', bulk: 'Request bulk quote', advantages: 'A factory built around your brief.', advantagesText: 'From first sketch to global shipment, our team makes every handoff clear, measured and dependable.', chat: 'Chat with Sales', close: 'Close', next: 'Continue', back: 'Back', submit: 'Submit custom request', sent: 'Thank you. Your custom product request has been received.', sentSub: 'Our sales team will review your requirements and contact you shortly.' },
  FR: { nav: ['Produits', 'Capacités', 'À propos'], heroEyebrow: 'BAGGIO / FABRICATION LUMINAIRE', heroTitle: 'La lumière, pensée pour vos projets.', heroText: 'Un partenaire industriel fiable pour des luminaires distinctifs, une ingénierie précise et une production évolutive en Europe.', explore: 'Voir la collection', custom: 'Demander un devis sur mesure', collection: 'La collection complète', collectionText: '210 luminaires prêts à spécifier, organisés pour un sourcing rapide et flexibles selon votre projet.', search: 'Rechercher par produit, SKU ou application', all: 'Toutes les catégories', price: 'Prix maximum', sort: 'Trier par', relevance: 'Pertinence', low: 'Prix croissant', high: 'Prix décroissant', newest: 'Nouveautés', showing: 'Affichage', of: 'sur', view: 'Voir les détails', quote: 'Demander un devis', bulk: 'Devis en volume', advantages: 'Une usine à l’écoute de votre projet.', advantagesText: 'Du premier croquis à l’expédition mondiale, chaque étape est claire et maîtrisée.', chat: 'Parler aux ventes', close: 'Fermer', next: 'Continuer', back: 'Retour', submit: 'Envoyer la demande', sent: 'Merci. Votre demande de produit sur mesure a été reçue.', sentSub: 'Notre équipe commerciale étudiera votre projet et vous contactera rapidement.' },
  IT: { nav: ['Prodotti', 'Competenze', 'Chi siamo'], heroEyebrow: 'BAGGIO / PRODUZIONE ILLUMINAZIONE', heroTitle: 'Luce, progettata per il tuo business.', heroText: 'Un partner produttivo affidabile per apparecchi distintivi, ingegneria accurata e produzione scalabile in Europa.', explore: 'Esplora la collezione', custom: 'Richiedi un preventivo su misura', collection: 'La collezione completa', collectionText: '210 apparecchi pronti per la specifica, organizzati per una ricerca rapida e flessibili per il tuo progetto.', search: 'Cerca per prodotto, SKU o applicazione', all: 'Tutte le categorie', price: 'Prezzo massimo', sort: 'Ordina per', relevance: 'Rilevanza', low: 'Prezzo crescente', high: 'Prezzo decrescente', newest: 'Più recenti', showing: 'Visualizzati', of: 'di', view: 'Vedi dettagli', quote: 'Richiedi preventivo', bulk: 'Preventivo quantità', advantages: 'Una fabbrica costruita intorno al tuo brief.', advantagesText: 'Dal primo schizzo alla spedizione globale, ogni passaggio è chiaro e affidabile.', chat: 'Chat con le vendite', close: 'Chiudi', next: 'Continua', back: 'Indietro', submit: 'Invia richiesta', sent: 'Grazie. La tua richiesta di prodotto su misura è stata ricevuta.', sentSub: 'Il nostro team commerciale esaminerà i requisiti e ti contatterà a breve.' },
  ES: { nav: ['Productos', 'Capacidades', 'Sobre nosotros'], heroEyebrow: 'BAGGIO / FABRICACIÓN DE ILUMINACIÓN', heroTitle: 'Luz, creada para tu negocio.', heroText: 'Un socio de fabricación fiable para luminarias distintivas, ingeniería precisa y producción escalable en Europa.', explore: 'Explorar colección', custom: 'Solicitar presupuesto personalizado', collection: 'La colección completa', collectionText: '210 luminarias listas para especificar, organizadas para una búsqueda rápida y flexibles para tu proyecto.', search: 'Buscar por producto, SKU o aplicación', all: 'Todas las categorías', price: 'Precio máximo', sort: 'Ordenar por', relevance: 'Relevancia', low: 'Precio ascendente', high: 'Precio descendente', newest: 'Más recientes', showing: 'Mostrando', of: 'de', view: 'Ver detalles', quote: 'Solicitar presupuesto', bulk: 'Presupuesto por volumen', advantages: 'Una fábrica pensada para tu proyecto.', advantagesText: 'Del primer boceto al envío global, cada paso es claro y fiable.', chat: 'Chat con ventas', close: 'Cerrar', next: 'Continuar', back: 'Atrás', submit: 'Enviar solicitud', sent: 'Gracias. Hemos recibido tu solicitud de producto personalizado.', sentSub: 'Nuestro equipo comercial revisará los requisitos y te contactará pronto.' },
}

const advantages = ['Factory direct', 'Competitive pricing', 'OEM / ODM', 'Custom manufacturing', 'Quality control', 'Fast sampling', 'Flexible MOQ', 'Global shipping']

function App() {
  const [language, setLanguage] = useState('EN'); const [query, setQuery] = useState(''); const [category, setCategory] = useState('All categories'); const [priceCap, setPriceCap] = useState(200); const [sort, setSort] = useState('relevance'); const [page, setPage] = useState(1); const [selected, setSelected] = useState(null); const [quoteOpen, setQuoteOpen] = useState(false); const [sent, setSent] = useState(false); const [step, setStep] = useState(1); const [chatOpen, setChatOpen] = useState(false)
  const t = dictionary[language]; const pageSize = 16
  const filtered = useMemo(() => { const result = products.filter((product) => (category === 'All categories' || product.category === category) && product.price <= priceCap && `${product.name} ${product.sku} ${product.application} ${product.description}`.toLowerCase().includes(query.toLowerCase())); if (sort === 'low') result.sort((a, b) => a.price - b.price); if (sort === 'high') result.sort((a, b) => b.price - a.price); if (sort === 'newest') result.reverse(); return result }, [category, priceCap, query, sort])
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize)); const visible = filtered.slice((page - 1) * pageSize, page * pageSize)
  const updateFilter = (setter, value) => { setter(value); setPage(1) }; const openQuote = (product = null) => { setSelected(product); setQuoteOpen(true); setSent(false); setStep(1) }; const closeQuote = () => { setQuoteOpen(false); setSent(false) }

  return <div className="site-shell"><header className="header"><a className="brand" href="#home"><span className="brand-mark">B</span><span><strong>BAGGIO</strong><small>INTERNATIONAL LIGHTING</small></span></a><nav>{t.nav.map((item, index) => <a key={item} href={['#products', '#capabilities', '#about'][index]}>{item}</a>)}</nav><div className="header-actions"><div className="language-switcher">{Object.keys(dictionary).map((lang) => <button className={language === lang ? 'active' : ''} key={lang} onClick={() => setLanguage(lang)}>{lang}</button>)}</div><button className="button dark header-quote" onClick={() => openQuote()}>{t.quote} <span>↗</span></button></div></header>
    <main><section id="home" className="hero"><div className="hero-copy"><p className="kicker">{t.heroEyebrow}</p><h1>{t.heroTitle}</h1><p className="hero-lead">{t.heroText}</p><div className="hero-buttons"><a className="button dark" href="#products">{t.explore} <span>↘</span></a><button className="button outline" onClick={() => openQuote()}>{t.custom}</button></div><div className="hero-proof"><span>●</span><p><strong>Trusted production partner</strong><br />for European lighting businesses</p></div></div><div className="hero-art"><div className="art-label">01 / 04</div><div className="sun"></div><div className="pendant"><i></i><b></b><em></em></div><div className="art-caption"><strong>Design-led production</strong><span>Made for hospitality, retail and residential spaces.</span></div></div></section>
      <section className="metrics"><div><strong>210</strong><span>catalog products</span></div><div><strong>15</strong><span>lighting categories</span></div><div><strong>42</strong><span>export markets</span></div><div><strong>ISO</strong><span>quality process</span></div></section>
      <section id="products" className="catalog section-wrap"><div className="section-heading"><div><p className="kicker">02 / COLLECTION</p><h2>{t.collection}</h2><p>{t.collectionText}</p></div><button className="button outline" onClick={() => openQuote()}>{t.custom} <span>↗</span></button></div><div className="catalog-toolbar"><div className="search"><span>⌕</span><input value={query} onChange={(event) => updateFilter(setQuery, event.target.value)} placeholder={t.search} /></div><div className="filter-control"><label>{t.price}: ${priceCap}</label><input type="range" min="20" max="200" value={priceCap} onChange={(event) => updateFilter(setPriceCap, Number(event.target.value))} /></div><label className="sort-control">{t.sort}<select value={sort} onChange={(event) => updateFilter(setSort, event.target.value)}><option value="relevance">{t.relevance}</option><option value="low">{t.low}</option><option value="high">{t.high}</option><option value="newest">{t.newest}</option></select></label></div><div className="category-list"><button className={category === 'All categories' ? 'selected' : ''} onClick={() => updateFilter(setCategory, 'All categories')}>{t.all}</button>{categories.map((item) => <button className={category === item ? 'selected' : ''} key={item} onClick={() => updateFilter(setCategory, item)}>{item}</button>)}</div><div className="catalog-count">{t.showing} {filtered.length ? (page - 1) * pageSize + 1 : 0}–{Math.min(page * pageSize, filtered.length)} {t.of} {filtered.length}</div><div className="product-grid">{visible.map((product) => <ProductCard key={product.sku} product={product} t={t} onView={() => setSelected(product)} onQuote={() => openQuote(product)} />)}</div>{filtered.length === 0 && <div className="empty">No products match these filters. Try a wider price range or another search.</div>}<div className="pagination"><button disabled={page === 1} onClick={() => setPage(page - 1)}>←</button>{Array.from({ length: pageCount }, (_, index) => index + 1).slice(Math.max(0, page - 3), page + 2).map((number) => <button className={page === number ? 'active' : ''} key={number} onClick={() => setPage(number)}>{number}</button>)}<button disabled={page === pageCount} onClick={() => setPage(page + 1)}>→</button></div></section>
      <section id="capabilities" className="capabilities"><div className="section-wrap capabilities-inner"><div><p className="kicker light">03 / THE FACTORY</p><h2>{t.advantages}</h2><p>{t.advantagesText}</p><button className="button cream" onClick={() => openQuote()}>{t.custom} <span>↗</span></button></div><div className="advantage-grid">{advantages.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}</div></div></section><section id="about" className="about section-wrap"><div><p className="kicker">04 / WORK WITH US</p><h2>From first idea<br /><i>to final light.</i></h2></div><div className="about-copy"><p>We combine thoughtful design, responsive engineering and disciplined production to help lighting brands move with confidence.</p><div className="process"><span>Brief</span><b>→</b><span>Sample</span><b>→</b><span>Approve</span><b>→</b><span>Produce</span></div></div></section></main>
    <footer><div className="brand footer-brand"><span className="brand-mark">B</span><span><strong>BAGGIO</strong><small>INTERNATIONAL LIGHTING</small></span></div><p>Made for the next generation of spaces.<br />sales@baggio-lighting.com · WhatsApp +86 XXX XXXX XXXX</p><small>© 2026 BAGGIO International Lighting</small></footer><button className="chat-fab" onClick={() => setChatOpen(true)}><span>✦</span>{t.chat}</button>{selected && !quoteOpen && <ProductDialog product={selected} t={t} onClose={() => setSelected(null)} onQuote={() => openQuote(selected)} />}{quoteOpen && <QuoteDialog product={selected} t={t} language={language} step={step} setStep={setStep} sent={sent} onSubmit={() => setSent(true)} onClose={closeQuote} />}{chatOpen && <ChatDialog t={t} onClose={() => setChatOpen(false)} />}</div>
}
function ProductCard({ product, t, onView, onQuote }) {
  return (
    <article className="product-card">
      <div
        className="product-visual"
        style={{ backgroundImage: `url(${product.image})` }}
      >
        <div className="product-badge">{product.category}</div>
      </div>

      <div className="product-info">
        <p className="sku">{product.sku}</p>
        <h3>{product.name}</h3>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-specs">
          <span>{product.wattage}W</span>
          <span>{product.voltage}</span>
          <span>{product.material}</span>
        </div>

        <div className="product-actions">
          <button
            className="button outline"
            onClick={() => onView(product)}
          >
            {t.explore}
          </button>

          <button
            className="button"
            onClick={() => onQuote(product)}
          >
            {t.quote}
          </button>
        </div>
      </div>
    </article>
  );
}


function ProductDialog({ product, t, onClose, onQuote }) {
  if (!product) return null;

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div
        className="dialog"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <div
          className="dialog-visual"
          style={{ backgroundImage: `url(${product.image})` }}
        />

        <div className="dialog-copy">
          <p className="sku">{product.sku}</p>
          <h2>{product.name}</h2>

          <p className="dialog-intro">
            {product.detailedDescription || product.description}
          </p>

          <dl className="spec-list">
            <div>
              <dt>Wattage / output</dt>
              <dd>{product.wattage}W</dd>
            </div>

            <div>
              <dt>Voltage</dt>
              <dd>{product.voltage}</dd>
            </div>

            <div>
              <dt>Material</dt>
              <dd>{product.material}</dd>
            </div>

            <div>
              <dt>Finish</dt>
              <dd>{product.finish}</dd>
            </div>
          </dl>

          <div className="dialog-actions">
            <button className="button" onClick={() => onQuote(product)}>
              {t.quote}
            </button>

            <button className="button outline" onClick={onClose}>
              {t.close || "Close"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


function QuoteDialog({
  product,
  t,
  language,
  step,
  setStep,
  sent,
  onSubmit,
  onClose
}) {
  const [form, setForm] = useState({
    customerName: "",
    customerEmail: "",
    company: "",
    quantity: "",
    message: ""
  });

  if (!product) return null;

  const submitForm = (event) => {
    event.preventDefault();

    onSubmit({
      ...form,
      productId: product.id,
      productName: product.name
    });
  };

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div
        className="quote-dialog"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        {sent ? (
          <div className="success-message">
            <h2>Thank you</h2>
            <p>
              Your quotation request has been received.
              Our sales team will contact you shortly.
            </p>

            <button className="button" onClick={onClose}>
              {t.close || "Close"}
            </button>
          </div>
        ) : (
          <>
            <p className="kicker">REQUEST A QUOTE</p>

            <h2>{product.name}</h2>

            <p className="dialog-intro">
              Share the details and our team will turn your
              brief into a clear next step.
            </p>

            <div className="stepper">
              <span className={step >= 1 ? "active" : ""}>1</span>
              <span className={step >= 2 ? "active" : ""}>2</span>
              <span className={step >= 3 ? "active" : ""}>3</span>
            </div>

            <form onSubmit={submitForm}>
              {step === 1 && (
                <div className="form-grid">
                  <label>
                    Name
                    <input
                      required
                      value={form.customerName}
                      onChange={(event) =>
                        setForm({
                          ...form,
                          customerName: event.target.value
                        })
                      }
                      placeholder="Your name"
                    />
                  </label>

                  <label>
                    Email
                    <input
                      required
                      type="email"
                      value={form.customerEmail}
                      onChange={(event) =>
                        setForm({
                          ...form,
                          customerEmail: event.target.value
                        })
                      }
                      placeholder="you@example.com"
                    />
                  </label>

                  <label>
                    Company
                    <input
                      value={form.company}
                      onChange={(event) =>
                        setForm({
                          ...form,
                          company: event.target.value
                        })
                      }
                      placeholder="Company name"
                    />
                  </label>

                  <button
                    type="button"
                    className="button"
                    onClick={() => setStep(2)}
                  >
                    Next
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="form-grid">
                  <label>
                    Quantity
                    <input
                      required
                      type="number"
                      min="1"
                      value={form.quantity}
                      onChange={(event) =>
                        setForm({
                          ...form,
                          quantity: event.target.value
                        })
                      }
                      placeholder="MOQ / quantity"
                    />
                  </label>

                  <label>
                    Requirements
                    <textarea
                      value={form.message}
                      onChange={(event) =>
                        setForm({
                          ...form,
                          message: event.target.value
                        })
                      }
                      placeholder="Tell us your requirements"
                    />
                  </label>

                  <div className="dialog-actions">
                    <button
                      type="button"
                      className="button outline"
                      onClick={() => setStep(1)}
                    >
                      Back
                    </button>

                    <button
                      type="submit"
                      className="button"
                    >
                      Submit Request
                    </button>
                  </div>
                </div>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}


function ChatDialog({ t, onClose }) {
  const [conversationId, setConversationId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [body, setBody] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [started, setStarted] = useState(false);

  const API_URL =
    import.meta.env.VITE_API_URL || "http://localhost:9090";

  const startConversation = async () => {
    if (!customerName || !customerEmail) return;

    try {
      const response = await fetch(
        `${API_URL}/api/chat/conversations?customerName=${encodeURIComponent(
          customerName
        )}&customerEmail=${encodeURIComponent(customerEmail)}`
      );

      if (!response.ok) {
        throw new Error("Could not create conversation");
      }

      const data = await response.json();

      setConversationId(data.id);
      setStarted(true);
    } catch (error) {
      console.error(error);

      // Fallback: create conversation with POST
      try {
        const response = await fetch(
          `${API_URL}/api/chat/conversations?customerName=${encodeURIComponent(
            customerName
          )}&customerEmail=${encodeURIComponent(customerEmail)}`,
          {
            method: "POST"
          }
        );

        if (!response.ok) {
          throw new Error("Could not create conversation");
        }

        const data = await response.json();

        setConversationId(data.id);
        setStarted(true);
      } catch (err) {
        console.error(err);
        alert("Unable to start chat. Please try again.");
      }
    }
  };

  const loadMessages = async (id) => {
    try {
      const response = await fetch(
        `${API_URL}/api/chat/conversations/${id}/messages`
      );

      if (!response.ok) return;

      const data = await response.json();
      setMessages(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!conversationId) return;

    loadMessages(conversationId);

    const timer = setInterval(() => {
      loadMessages(conversationId);
    }, 3000);

    return () => clearInterval(timer);
  }, [conversationId]);

  const sendMessage = async () => {
    if (!conversationId || !body.trim()) return;

    try {
      const url =
        `${API_URL}/api/chat/conversations/${conversationId}` +
        `/messages?senderType=BUYER` +
        `&senderName=${encodeURIComponent(customerName)}` +
        `&body=${encodeURIComponent(body)}`;

      const response = await fetch(url, {
        method: "POST"
      });

      if (!response.ok) {
        throw new Error("Message failed");
      }

      const message = await response.json();

      setMessages((current) => [...current, message]);
      setBody("");
    } catch (error) {
      console.error(error);
      alert("Message could not be sent.");
    }
  };

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div
        className="chat-panel"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="chat-top">
          <strong>{t.chat || "Chat with Sales"}</strong>

          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>

        {!started ? (
          <div className="chat-start">
            <p>
              Hello, how can we help with your lighting project?
            </p>

            <input
              placeholder="Your name"
              value={customerName}
              onChange={(event) =>
                setCustomerName(event.target.value)
              }
            />

            <input
              type="email"
              placeholder="Your email"
              value={customerEmail}
              onChange={(event) =>
                setCustomerEmail(event.target.value)
              }
            />

            <button
              className="button"
              onClick={startConversation}
            >
              Start Chat
            </button>
          </div>
        ) : (
          <>
            <div className="chat-body">
              {messages.length === 0 && (
                <div className="sales-message">
                  Hello, how can we help with your lighting project?
                </div>
              )}

              {messages.map((message) => (
                <div
                  key={message.id}
                  className={
                    message.senderType === "BUYER"
                      ? "buyer-message"
                      : "sales-message"
                  }
                >
                  <small>{message.senderName}</small>
                  <div>{message.body}</div>
                </div>
              ))}
            </div>

            <div className="chat-input">
              <input
                value={body}
                onChange={(event) =>
                  setBody(event.target.value)
                }
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    sendMessage();
                  }
                }}
                placeholder="Type your message..."
              />

              <button
                className="button"
                onClick={sendMessage}
              >
                Send
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default App
