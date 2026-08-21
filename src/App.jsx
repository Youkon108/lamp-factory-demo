function App() {
  const products = [
    {
      name: "Modern Pendant Light",
      code: "BG-PD-001",
      category: "Pendant Lighting",
    },
    {
      name: "Premium Ceiling Light",
      code: "BG-CL-002",
      category: "Ceiling Lighting",
    },
    {
      name: "Architectural Wall Light",
      code: "BG-WL-003",
      category: "Wall Lighting",
    },
    {
      name: "Commercial LED Light",
      code: "BG-LED-004",
      category: "Commercial Lighting",
    },
  ];

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.logo}>
          <div style={styles.logoMark}>B</div>
          <div>
            <div style={styles.logoName}>BAGGIO</div>
            <div style={styles.logoSub}>INTERNATIONAL LIGHTING</div>
          </div>
        </div>

        <nav style={styles.nav}>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#oem">OEM & ODM</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#quote" style={styles.quoteButton}>
          Request a Quote
        </a>
      </header>

      <main>
        <section id="home" style={styles.hero}>
          <div style={styles.heroContent}>
            <p style={styles.eyebrow}>PREMIUM LIGHTING SOLUTIONS</p>

            <h1 style={styles.heroTitle}>
              Lighting Solutions
              <br />
              <span>for Global Business</span>
            </h1>

            <p style={styles.heroText}>
              BAGGIO International Lighting provides professional lighting
              solutions for wholesalers, distributors, retailers and
              international business partners.
            </p>

            <div style={styles.heroButtons}>
              <a href="#products" style={styles.primaryButton}>
                Explore Products
              </a>

              <a href="#quote" style={styles.secondaryButton}>
                Request a Quote
              </a>
            </div>
          </div>

          <div style={styles.heroVisual}>
            <div style={styles.glow}></div>
            <div style={styles.lamp}>
              <div style={styles.lampTop}></div>
              <div style={styles.lampBody}></div>
              <div style={styles.lampLight}></div>
            </div>
          </div>
        </section>

        <section style={styles.trust}>
          <div>
            <strong>OEM & ODM</strong>
            <span>Custom Solutions</span>
          </div>

          <div>
            <strong>GLOBAL EXPORT</strong>
            <span>Worldwide Business</span>
          </div>

          <div>
            <strong>QUALITY CONTROL</strong>
            <span>Reliable Standards</span>
          </div>

          <div>
            <strong>INNOVATIVE DESIGN</strong>
            <span>Modern Lighting</span>
          </div>
        </section>

        <section id="products" style={styles.section}>
          <p style={styles.eyebrow}>OUR PRODUCTS</p>

          <h2 style={styles.sectionTitle}>Professional Lighting Collection</h2>

          <p style={styles.sectionText}>
            Explore our range of modern lighting products designed for
            international B2B customers.
          </p>

          <div style={styles.productGrid}>
            {products.map((product) => (
              <div style={styles.productCard} key={product.code}>
                <div style={styles.productImage}>
                  <div style={styles.productLight}></div>
                </div>

                <p style={styles.category}>{product.category}</p>

                <h3>{product.name}</h3>

                <p style={styles.code}>Product Code: {product.code}</p>

                <button style={styles.cardButton}>View Details</button>
              </div>
            ))}
          </div>
        </section>

        <section id="oem" style={styles.darkSection}>
          <div>
            <p style={styles.eyebrow}>OEM & ODM SERVICES</p>

            <h2 style={styles.darkTitle}>
              Your Design.
              <br />
              Our Manufacturing.
            </h2>
          </div>

          <div style={styles.darkText}>
            <p>
              We support customized product development, materials, finishes,
              branding and packaging for international customers.
            </p>

            <div style={styles.process}>
              <span>Inquiry</span>
              <span>→</span>
              <span>Design</span>
              <span>→</span>
              <span>Sample</span>
              <span>→</span>
              <span>Production</span>
              <span>→</span>
              <span>Shipment</span>
            </div>
          </div>
        </section>

        <section id="about" style={styles.about}>
          <div>
            <p style={styles.eyebrow}>ABOUT BAGGIO</p>

            <h2 style={styles.sectionTitle}>
              Built for International Lighting Business
            </h2>
          </div>

          <p style={styles.aboutText}>
            BAGGIO International Lighting focuses on premium lighting
            solutions, professional manufacturing, quality management and
            long-term B2B partnerships. Our goal is to connect modern
            lighting design with global business needs.
          </p>
        </section>

        <section id="quote" style={styles.quoteSection}>
          <p style={styles.eyebrow}>B2B INQUIRY</p>

          <h2 style={styles.sectionTitle}>Request a Quote</h2>

          <p style={styles.sectionText}>
            Tell us about your product requirements and our team will prepare
            a professional quotation.
          </p>

          <div style={styles.form}>
            <input placeholder="Company Name" />
            <input placeholder="Contact Person" />
            <input placeholder="Business Email" />
            <input placeholder="Country" />
            <input placeholder="Product / Product Code" />
            <input placeholder="Quantity" />
            <textarea placeholder="Customization Requirements"></textarea>

            <button style={styles.primaryButton}>Submit RFQ</button>
          </div>
        </section>
      </main>

      <footer id="contact" style={styles.footer}>
        <div>
          <div style={styles.footerLogo}>BAGGIO</div>
          <p>INTERNATIONAL LIGHTING</p>
        </div>

        <div>
          <strong>Global Lighting Solutions</strong>
          <p>OEM & ODM • B2B • Global Export</p>
        </div>

        <div>
          <strong>Contact</strong>
          <p>Email: sales@baggio-lighting.com</p>
          <p>WhatsApp: +86 XXX XXXX XXXX</p>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  page: {
    margin: 0,
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "#171717",
    background: "#ffffff",
  },

  header: {
    height: "76px",
    padding: "0 6%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #eeeeee",
    position: "sticky",
    top: 0,
    background: "rgba(255,255,255,0.96)",
    zIndex: 10,
  },

  logo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  logoMark: {
    width: "42px",
    height: "42px",
    background: "#111111",
    color: "#d6ad55",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "25px",
    fontWeight: "800",
    borderRadius: "8px",
  },

  logoName: {
    fontSize: "22px",
    fontWeight: "800",
    letterSpacing: "4px",
  },

  logoSub: {
    fontSize: "8px",
    letterSpacing: "2px",
    color: "#777",
  },

  nav: {
    display: "flex",
    gap: "28px",
  },

  navLink: {},

  quoteButton: {
    background: "#111",
    color: "#fff",
    padding: "13px 20px",
    textDecoration: "none",
    fontSize: "13px",
    fontWeight: "600",
  },

  hero: {
    minHeight: "620px",
    padding: "70px 8%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#f7f5f1",
  },

  heroContent: {
    maxWidth: "620px",
  },

  eyebrow: {
    color: "#a37b2c",
    fontSize: "12px",
    fontWeight: "700",
    letterSpacing: "3px",
  },

  heroTitle: {
    fontSize: "58px",
    lineHeight: "1.05",
    margin: "20px 0",
    fontWeight: "800",
  },

  heroText: {
    fontSize: "17px",
    lineHeight: "1.8",
    color: "#666",
    maxWidth: "570px",
  },

  heroButtons: {
    display: "flex",
    gap: "14px",
    marginTop: "32px",
  },

  primaryButton: {
    background: "#111",
    color: "#fff",
    padding: "15px 25px",
    border: "none",
    textDecoration: "none",
    cursor: "pointer",
    fontWeight: "700",
  },

  secondaryButton: {
    border: "1px solid #222",
    color: "#222",
    padding: "15px 25px",
    textDecoration: "none",
    fontWeight: "700",
  },

  heroVisual: {
    width: "400px",
    height: "400px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  glow: {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "#ead39b",
    borderRadius: "50%",
    filter: "blur(70px)",
    opacity: 0.45,
  },

  lamp: {
    position: "relative",
    width: "230px",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  lampTop: {
    width: "8px",
    height: "70px",
    background: "#222",
  },

  lampBody: {
    width: "210px",
    height: "120px",
    background: "#151515",
    borderRadius: "50% 50% 15% 15%",
  },

  lampLight: {
    width: "130px",
    height: "100px",
    background: "#ffe5a5",
    borderRadius: "50%",
    filter: "blur(20px)",
    marginTop: "-5px",
  },

  trust: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    padding: "35px 8%",
    borderBottom: "1px solid #eee",
    textAlign: "center",
  },

  section: {
    padding: "90px 8%",
    textAlign: "center",
  },

  sectionTitle: {
    fontSize: "42px",
    margin: "15px auto",
    maxWidth: "800px",
  },

  sectionText: {
    color: "#777",
    maxWidth: "650px",
    margin: "0 auto 50px",
    lineHeight: "1.7",
  },

  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "22px",
    textAlign: "left",
  },

  productCard: {
    border: "1px solid #e7e7e7",
    padding: "15px",
    background: "#fff",
  },

  productImage: {
    height: "250px",
    background: "#f2f1ef",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  productLight: {
    width: "130px",
    height: "130px",
    background: "linear-gradient(145deg, #222, #777)",
    borderRadius: "50%",
    boxShadow: "0 25px 40px rgba(0,0,0,0.2)",
  },

  category: {
    color: "#a37b2c",
    fontSize: "11px",
    marginTop: "20px",
    fontWeight: "700",
  },

  code: {
    color: "#888",
    fontSize: "12px",
  },

  cardButton: {
    background: "#111",
    color: "#fff",
    border: "none",
    padding: "11px 18px",
    cursor: "pointer",
  },

  darkSection: {
    background: "#111",
    color: "#fff",
    padding: "100px 8%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "80px",
  },

  darkTitle: {
    fontSize: "50px",
    lineHeight: "1.1",
  },

  darkText: {
    color: "#ccc",
    lineHeight: "1.8",
    fontSize: "17px",
  },

  process: {
    marginTop: "40px",
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    color: "#d6ad55",
  },

  about: {
    padding: "100px 8%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "80px",
  },

  aboutText: {
    color: "#666",
    lineHeight: "2",
    fontSize: "17px",
  },

  quoteSection: {
    padding: "90px 8%",
    textAlign: "center",
    background: "#f7f5f1",
  },

  form: {
    maxWidth: "800px",
    margin: "40px auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "15px",
    textAlign: "left",
  },

  input: {
    padding: "15px",
  },

  footer: {
    background: "#111",
    color: "#fff",
    padding: "60px 8%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "40px",
  },

  footerLogo: {
    fontSize: "28px",
    fontWeight: "800",
    letterSpacing: "5px",
  },
};

export default App;