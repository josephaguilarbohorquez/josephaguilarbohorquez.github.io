import Image from "next/image";

const links = {
  cv: "/files/Joseph_Aguilar-Bohorquez_CV.pdf",
  slides: "/files/Joseph_Aguilar-Bohorquez_Latest_Presentation_Slides.pdf",
  email: "mailto:aguil213@umn.edu",
  scholar: "https://scholar.google.com/citations?user=U1QyNXwAAAAJ&hl=en",
  orcid: "https://orcid.org/0000-0003-2487-4813",
  umn: "https://apec.umn.edu/people/joseph-aguilar-bohorquez",

  // Job Market Paper
  nber: "https://www.nber.org/papers/w32555",
  harvard: "https://indigenousgov.hks.harvard.edu/publication/wp-26-001-american-indian-casino-operations-and-firm-long-run-employment-and-sales",

  // Working papers
  upjohn: "https://doi.org/10.17848/wp26-440",
  iza: "https://iza.org/publications/dp/18942/eliciting-information-about-teacher-applicants-using-open-ended-questions",
  fourDayWeek: "https://doi.org/10.22004/AG.ECON.404607",
  mangrove: "https://doi.org/10.2139/ssrn.3255966",

  // Peer-reviewed publications
  heritage: "https://doi.org/10.1016/j.landusepol.2020.105042",
  experimentalDesign: "https://doi.org/10.1016/j.cesjef.2017.04.003",
  kuznetsCurve: "https://izlik.org/JA95YT78RG",

  // Extension and applied policy
  olivia: "https://conservancy.umn.edu/items/0b95f9fb-604e-4855-b258-6fb300f86ec7",
  businessDynamism: "https://extension.umn.edu/about/our-stories/news/community-news-and-insights/set-realistic-new-business-goals-starting-with-your-own-countys-history",
  snapEd: "https://apha.confex.com/apha/2026/meetingapp.cgi/Paper/595079",
};

function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  introduction,
}: {
  eyebrow: string;
  title: string;
  introduction: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <div>
        <h2>{title}</h2>
        <p>{introduction}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a className="wordmark" href="#top" aria-label="Back to top">
            Joseph Aguilar-Bohorquez
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#research">Research</a>
            <a href="#extension">Extension &amp; Policy</a>
            <a href="#teaching">Teaching</a>
            <a href="#presentations">Presentations</a>
            <a className="nav-cv" href={links.cv} target="_blank" rel="noreferrer">
              CV
            </a>
          </nav>
          <details className="mobile-nav">
            <summary>Menu</summary>
            <nav aria-label="Mobile navigation">
              <a href="#research">Research</a>
              <a href="#extension">Extension &amp; Policy</a>
              <a href="#teaching">Teaching</a>
              <a href="#presentations">Presentations</a>
              <a href={links.cv} target="_blank" rel="noreferrer">
                CV
              </a>
            </nav>
          </details>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="market-label">2026–27 Job Market Candidate</p>
              <h1>Joseph Aguilar-Bohorquez</h1>
              <p className="hero-role">
                Ph.D. Candidate in Applied Economics
                <span>University of Minnesota</span>
              </p>
              <p className="hero-intro">
                I am a Ph.D. candidate in Applied Economics at the University
                of Minnesota, expecting to graduate in May 2027. My research
                focuses on rural and community development, regional and urban
                economics, labor economics, and the economics of education,
                with an emphasis on applied microeconometrics and policy evaluation.
              </p>
              <p className="hero-intro secondary">
                I use causal inference methods and administrative, firm-level,
                and text data to study how place-based policies and public
                investments affect firms, workers, and schools. I am seeking
                academic and applied-research positions beginning in 2027.
              </p>
              <div className="primary-actions" aria-label="Primary links">
                <a className="button button-primary" href={links.cv} target="_blank">
                  Download CV
                </a>
                <ExternalLink className="button button-secondary" href={links.nber}>
                  Job Market Paper
                </ExternalLink>
                <a className="text-link" href={links.email}>
                  aguil213@umn.edu
                </a>
              </div>
              <div className="profile-links" aria-label="Professional profiles">
                <ExternalLink href={links.scholar}>Google Scholar</ExternalLink>
                <ExternalLink href={links.orcid}>ORCID</ExternalLink>
                <ExternalLink href={links.umn}>UMN Profile</ExternalLink>
              </div>
            </div>

            <div className="portrait-wrap">
              <div className="portrait-accent" aria-hidden="true" />
              <Image
                className="portrait"
                src="/images/joseph-aguilar-bohorquez.webp"
                alt="Joseph Aguilar-Bohorquez"
                width={880}
                height={1100}
                priority
                unoptimized
              />
              <p className="portrait-caption">
                Department of Applied Economics
                <span>University of Minnesota</span>
              </p>
            </div>
          </div>
        </section>

        <section className="section research-section" id="research">
          <div className="container">
            <SectionHeading
              eyebrow="Research"
              title="Rural Development and Applied Policy Analysis"
              introduction="My applied microeconomic research examines place-based development, labor markets, and education policy using causal inference and rich administrative and firm-level data."
            />

            <article className="featured-paper">
              <div className="featured-meta">
                <p className="paper-label">Job Market Paper</p>
                <p>
                  Harvard Kennedy School WP 26-001 (2026)
                  <br />
                  NBER Working Paper No. 32555 (2024)
                </p>
              </div>
            
              <div className="featured-content">
                <h3>
                  <ExternalLink href={links.harvard}>
                    American Indian Casino Operations and Firm Long-Run
                    Employment and Sales
                  </ExternalLink>
                </h3>
            
                <p className="authors">
                  Joseph Aguilar-Bohorquez, Randall Akee, and Elton Mykerezi
                </p>
            
                <p className="paper-summary">
                  This paper examines the long-run effects of American Indian
                  casino operations on employment and sales at adjacent firms.
                  Using longitudinal firm data and a staggered-adoption research
                  design, it studies how place-based economic activity shapes
                  local business outcomes over time.
                </p>
            
                <p className="paper-note">
                  Revise and Resubmit, <em>Journal of Policy Analysis and Management</em>
                  (2026).
                </p>
            
                <div className="paper-actions">
                  <ExternalLink
                    className="button button-light"
                    href={links.harvard}
                  >
                    Harvard Kennedy School WP
                  </ExternalLink>
            
                  <ExternalLink
                    className="button button-outline-light"
                    href={links.nber}
                  >
                    NBER Working Paper
                  </ExternalLink>
            
                  <a
                    className="button button-outline-light"
                    href={links.slides}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Latest Presentation Slides
                  </a>
                </div>
              </div>
            </article>

            
            <div className="research-group">
              <div className="group-title">
                <p className="eyebrow">Current work</p>
                <h3>Working Papers</h3>
              </div>
            
              <div className="paper-list">
                <article className="paper-row">
                  <div className="paper-number">01</div>
                  <div>
                    <h4>
                      <ExternalLink href={links.upjohn}>
                        Eliciting Information about Teacher Applicants Using
                        Open-Ended Questions
                      </ExternalLink>
                    </h4>
            
                    <p className="authors">
                      Joseph Aguilar-Bohorquez, Dan Goldhaber, Cyrus Grout,
                      Elton Mykerezi, Prayash Pathak, and Aaron Sojourner
                    </p>
            
                    <p className="paper-description">
                      This paper examines the information contained in
                      teachers&apos; responses to open-ended job application
                      questions, using computational text analysis to study
                      what these responses reveal about applicants.
                    </p>
            
                    <p className="paper-status">
                      <ExternalLink href={links.upjohn}>
                        Upjohn Institute Working Paper 26-440
                      </ExternalLink>
                      {" · "}
                      <ExternalLink href={links.iza}>
                        IZA Discussion Paper 18942
                      </ExternalLink>
                    </p>
                  </div>
                </article>
            
                <article className="paper-row">
                  <div className="paper-number">02</div>
                  <div>
                    <h4>
                      <ExternalLink href={links.fourDayWeek}>
                        Would Longer Weekends Keep Teachers in Rural Schools?
                        Evidence from Minnesota&apos;s Four-Day School Week Program
                      </ExternalLink>
                    </h4>
            
                    <p className="authors">
                      Joseph Aguilar-Bohorquez, Elton Mykerezi,
                      and Janna E. Johnson
                    </p>
            
                    <p className="paper-description">
                      This paper examines how the adoption of four-day school
                      weeks relates to teacher retention in rural Minnesota,
                      exploring whether changes in school schedules may help
                      address staffing challenges.
                    </p>
            
                    <p className="paper-status">
                      2026 AAEA Annual Meeting paper ·{" "}
                      <ExternalLink href={links.fourDayWeek}>
                        AgEcon Search
                      </ExternalLink>
                    </p>
                  </div>
                </article>
            
                <article className="paper-row">
                  <div className="paper-number">03</div>
                  <div>
                    <h4>
                      <ExternalLink href={links.mangrove}>
                        Type-Consistent Willingness to Pay in Contingent
                        Valuation Methods: An Application to the Mangrove
                        Forest in the Gulf of Guayaquil
                      </ExternalLink>
                    </h4>
            
                    <p className="authors">
                      J. G. Castillo, Joseph Aguilar-Bohorquez,
                      and I. Valverde-Bajaña
                    </p>
            
                    <p className="paper-description">
                      This paper examines willingness-to-pay measurement in
                      contingent valuation, applying the approach to the
                      economic valuation of mangrove conservation in the
                      Gulf of Guayaquil, Ecuador.
                    </p>
            
                    <p className="paper-status">
                      <ExternalLink href={links.mangrove}>
                        SSRN Working Paper
                      </ExternalLink>
                      {" · "}Circulated under an earlier title
                    </p>
                  </div>
                </article>
              </div>
            </div>
            
            <div className="research-group">
              <div className="group-title">
                <p className="eyebrow">In development</p>
                <h3>Work in Progress</h3>
              </div>
            
              <div className="paper-list">
                <article className="paper-row">
                  <div className="paper-number">01</div>
                  <div>
                    <h4>
                      Entrepreneurship and Career Trajectories
                      Using Professional Profiles
                    </h4>
            
                    <p className="authors">
                      Joseph Aguilar-Bohorquez, Elton Mykerezi,
                      and Neil Linscheid
                    </p>
            
                    <p className="paper-description">
                      Using large-scale longitudinal professional-profile
                      data from Revelio Labs, this project examines employment
                      backgrounds and career trajectories preceding
                      entrepreneurial entry. Initial data preparation and
                      exploratory analyses have been completed, with ongoing
                      work to expand the analysis across geographic areas.
                    </p>
            
                    <p className="paper-status">
                      Working title · Ongoing research
                    </p>
                  </div>
                </article>
            
                <article className="paper-row">
                  <div className="paper-number">02</div>
                  <div>
                    <h4>
                      Unpacking the Impact of Increased School Funding on
                      Teacher Retention: Insights from Minnesota&apos;s
                      Public-School Districts via Referendum Data
                    </h4>
            
                    <p className="authors">
                      Joseph Aguilar-Bohorquez and Elton Mykerezi
                    </p>
            
                    <p className="paper-description">
                      This project studies whether increases in school funding
                      affect teacher retention, using close school-funding
                      referendum elections in Minnesota to identify the
                      effects of additional resources on teacher mobility
                      and retention.
                    </p>
            
                    <p className="paper-status">
                      Work in progress
                    </p>
                  </div>
                </article>
              </div>
            </div>


            <div className="research-group publications">
              <div className="group-title">
                <p className="eyebrow">Published work</p>
                <h3>Peer-Reviewed Publications</h3>
              </div>
              <div className="publication-list">
                <article>
                  <p className="publication-year">2020</p>
                  <div>
                    <h4>
                      <ExternalLink href={links.heritage}>
                        The Price Premium of Heritage in the Housing Market:
                        Evidence from Auckland, New Zealand
                      </ExternalLink>
                    </h4>
                    <p>
                      David Bade, Jose Gabriel Castillo, Mario Andres Fernandez,
                      and Joseph Aguilar-Bohorquez. <em>Land Use Policy</em> 99:
                      105042.
                    </p>
                  </div>
                </article>
                <article>
                  <p className="publication-year">2018</p>
                  <div>
                    <h4>
                      <ExternalLink href={links.experimentalDesign}>
                        Experimental Design with Network Effects for Companies to
                        Enter in a Monopoly Market: Case Study with Undergraduate
                        Students in an Entrepreneurial Roleplay Setting
                      </ExternalLink>
                    </h4>
                    <p>
                      Gonzalo Villa-Cox, Everardo Quezada, Joseph
                      Aguilar-Bohorquez, Ivanna Valverde-Bajaña, and Paul
                      Vera-Gilces. <em>Cuadernos de Economía</em> 41(115):
                      130–139.
                    </p>
                  </div>
                </article>
                <article>
                  <p className="publication-year">2016</p>
                  <div>
                    <h4>
                      <ExternalLink href={links.kuznetsCurve}>
                        Relationship between Economic Growth and Environmental
                        Degradation: Is There Evidence of an Environmental Kuznets
                        Curve for Brazil?
                      </ExternalLink>
                    </h4>
                    <p>
                      Manuel A. Zambrano-Monserrate, Ivanna Valverde-Bajaña,
                      Joseph Aguilar-Bohorquez, and María J. Mendoza-Jiménez.{" "}
                      <em>International Journal of Energy Economics and Policy</em>{" "}
                      6(2): 208–216.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section policy-section" id="extension">
          <div className="container">
            <SectionHeading
              eyebrow="Extension & policy"
              title="Research designed for practical decisions"
              introduction="Through University of Minnesota Extension and external partnerships, I translate empirical evidence into clear, stakeholder-oriented policy analysis."
            />
        
            <div className="policy-grid">
              <article className="policy-project">
                <div className="project-topline">
                  <span>2025–2026</span>
                  <span>Community development</span>
                </div>
        
                <h3>Olivia Armory Wellness &amp; Community Hub</h3>
        
                <p className="project-partner">
                  City of Olivia · University of Minnesota Extension
                  Southwest Regional Sustainable Development Partnership
                </p>
        
                <p className="project-authors">
                  Joseph Aguilar-Bohorquez, Beth Labenz,
                  Elton Mykerezi, and Tobias Spanier
                </p>
        
                <p className="project-description">
                  Led the economic analysis and preparation of an assessment
                  of the municipal wellness hub&apos;s operating costs,
                  revenues, and financial sustainability. Worked directly
                  with city and project administrators, visited Olivia,
                  and presented findings and recommendations to the
                  Olivia City Council on September 21, 2026.
                </p>
        
                <p className="project-source">
                  <ExternalLink href={links.olivia}>
                    Published Report · University of Minnesota Digital Conservancy
                  </ExternalLink>
                </p>
              </article>
        
              <article className="policy-project">
                <div className="project-topline">
                  <span>2025–2026</span>
                  <span>Regional development</span>
                </div>
        
                <h3>Business Dynamism and Economic Structure in Minnesota</h3>
        
                <p className="project-partner">
                  University of Minnesota Extension
                </p>
        
                <p className="project-authors">
                  Joseph Aguilar-Bohorquez and Neil Linscheid
                </p>
        
                <p className="project-description">
                  Analyzed county-level establishment formation, business
                  churn, and employment patterns using YourEconomy Time
                  Series data and geospatial visualization. The project
                  informed an Extension publication on using historical
                  county-level business formation to set realistic
                  local economic development goals.
                </p>
        
                <p className="project-source">
                  <ExternalLink href={links.businessDynamism}>
                    Aguilar-Bohorquez &amp; Linscheid (2026).
                    The Data Hotdish · UMN Extension
                  </ExternalLink>
                </p>
              </article>
        
              <article className="policy-project">
                <div className="project-topline">
                  <span>2025–2026</span>
                  <span>Program evaluation</span>
                </div>
        
                <h3>Cost-Benefit Analysis of Minnesota SNAP-Ed Direct Education</h3>
        
                <p className="project-partner">
                  University of Minnesota Extension ·
                  Department of Family, Health and Wellbeing
                </p>
        
                <p className="project-authors">
                  Joseph Aguilar-Bohorquez, Hyunjun Kim,
                  Karah Mechlowitz, Elton Mykerezi,
                  and Janice Rasmussen
                </p>
        
                <p className="project-description">
                  Analyzed pre–post participant outcomes and program costs,
                  and developed an economic evaluation framework linking
                  observed improvements in nutrition and physical activity
                  to longer-term health and economic outcomes under
                  explicit modeling assumptions.
                </p>
        
                <p className="project-source">
                  <ExternalLink href={links.snapEd}>
                    APHA 2026 · Conference Abstract
                  </ExternalLink>
                </p>
              </article>
        
              <article className="policy-project">
                <div className="project-topline">
                  <span>2026–present</span>
                  <span>Entrepreneurship</span>
                </div>
        
                <h3>
                  Entrepreneurship and Career Trajectories
                  Using Professional Profiles
                </h3>
        
                <p className="project-partner">
                  University of Minnesota Extension
                </p>
        
                <p className="project-authors">
                  Joseph Aguilar-Bohorquez,
                  Elton Mykerezi, and Neil Linscheid
                </p>
        
                <p className="project-description">
                  Using longitudinal professional-profile data from
                  Revelio Labs to investigate the employment backgrounds
                  and career trajectories of entrepreneurs. Initial data
                  preparation and exploratory analysis have been
                  completed, with ongoing work to extend the analysis
                  across geographic areas.
                </p>
        
                <p className="project-source">
                  Ongoing project · Working title
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section teaching-section" id="teaching">
          <div className="container">
            <SectionHeading
              eyebrow="Teaching"
              title="Econometrics and applied policy analysis"
              introduction="My teaching experience spans graduate policy evaluation, undergraduate econometrics, and hands-on statistical software instruction."
            />
            <div className="teaching-list">
              <article>
                <div className="teaching-date">2021–22</div>
                <div>
                  <h3>PA 8302: Applied Policy Analysis</h3>
                  <p className="teaching-role">
                    Graduate Teaching Assistant · Humphrey School of Public
                    Affairs, University of Minnesota
                  </p>
                  <p>
                    Supported graduate instruction in econometric
                    policy-evaluation methods and their implementation in Stata
                    and R.
                  </p>
                </div>
              </article>
              <article>
                <div className="teaching-date">2018–19</div>
                <div>
                  <h3>Econometrics I and II</h3>
              
                  <p className="teaching-role">
                    Teaching Technician (Teaching Assistant) · ESPOL
                  </p>
              
                  <p>
                    Performed teaching assistant responsibilities across two
                    undergraduate econometrics courses, including leading
                    weekly Stata laboratory and practice sessions, supervising
                    student paper-replication projects, and supporting
                    assessments and course delivery.
                  </p>
                </div>
              </article>
              <article>
                <div className="teaching-date">2019</div>
                <div>
                  <h3>Stata Statistical Software: The Basics</h3>
                  <p className="teaching-role">Instructor · ESPOL</p>
                  <p>
                    Designed and delivered introductory instruction in data
                    management, analysis, and applied workflows in Stata.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section presentations-section" id="presentations">
          <div className="container">
            <SectionHeading
              eyebrow="Academic presentations"
              title="Selected Conference Presentations"
              introduction="Selected presentations of my research at academic conferences and professional meetings."
            />
        
            <div className="presentation-list">
              <article className="presentation-item">
                <div className="presentation-year">2026</div>
                <div>
                  <h3>
                    20th North American Meeting of the Urban Economics
                    Association
                  </h3>
                  <p className="presentation-details">
                    Federal Reserve Bank of Chicago · Chicago, IL ·
                    September 2026
                  </p>
                  <p className="presentation-paper">
                    American Indian Casino Operations and Firm Long-Run
                    Employment and Sales
                  </p>
                </div>
              </article>
        
              <article className="presentation-item">
                <div className="presentation-year">2026</div>
                <div>
                  <h3>
                    Agricultural &amp; Applied Economics Association
                    Annual Meeting
                  </h3>
                  <p className="presentation-details">
                    Kansas City, MO · July 2026
                  </p>
                  <p className="presentation-paper">
                    American Indian Casino Operations and Firm Long-Run
                    Employment and Sales · Selected presentation
                  </p>
                  <p className="presentation-paper">
                    Would Longer Weekends Keep Teachers in Rural Schools?
                    Evidence from Minnesota&apos;s Four-Day School Week
                    Program · Lightning presentation
                  </p>
                </div>
              </article>
        
              <article className="presentation-item">
                <div className="presentation-year">2026</div>
                <div>
                  <h3>
                    Counterfactual Methods for Policy Impact Evaluation
                    (COMPIE)
                  </h3>
                  <p className="presentation-details">
                    Paris, France · June 2026
                  </p>
                  <p className="presentation-paper">
                    American Indian Casino Operations and Firm Long-Run
                    Employment and Sales
                  </p>
                </div>
              </article>
        
              <article className="presentation-item">
                <div className="presentation-year">2018</div>
                <div>
                  <h3>
                    VI International Congress of Economy
                  </h3>
                  <p className="presentation-details">
                    Universidad San Francisco de Quito ·
                    Quito, Ecuador · July 2018
                  </p>
                  <p className="presentation-paper">
                    The Price Premium of Heritage in the Housing Market:
                    Evidence from Auckland, New Zealand
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section honors-section" id="honors">
          <div className="container">
            <SectionHeading
              eyebrow="Recognition"
              title="Honors & Awards"
              introduction="Selected fellowships, scholarships, and academic distinctions."
            />
        
            <div className="honors-list">
              <article className="honor-item">
                <div className="honor-year">2021–2022</div>
                <div>
                  <h3>Willard W. Cochrane Fellowship</h3>
                  <p>University of Minnesota</p>
                </div>
              </article>
        
              <article className="honor-item">
                <div className="honor-year">2019–2021</div>
                <div>
                  <h3>Fulbright Scholarship</h3>
                  <p>
                    M.S. in Applied Economics · University of Minnesota
                    · National competition in Ecuador
                  </p>
                </div>
              </article>
        
              <article className="honor-item">
                <div className="honor-year">2016</div>
                <div>
                  <h3>DAAD Study Visit Scholarship</h3>
                  <p>German Academic Exchange Service</p>
                </div>
              </article>
        
              <article className="honor-item">
                <div className="honor-year">2016</div>
                <div>
                  <h3>Best Economics Student Award</h3>
                  <p>
                    College of Social Sciences and Humanities · ESPOL
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
        
        <section className="closing-section">
          <div className="container closing-grid">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Research, teaching, and applied policy analysis</h2>
            </div>
            <div className="closing-copy">
              <p>
                I welcome conversations about academic and applied-research
                opportunities beginning in 2027.
              </p>
              <a className="closing-email" href={links.email}>
                aguil213@umn.edu
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© 2026 Joseph Aguilar-Bohorquez · University of Minnesota</p>
          <nav aria-label="Footer navigation">
            <a href={links.cv} target="_blank">CV</a>
            <ExternalLink href={links.scholar}>Google Scholar</ExternalLink>
            <ExternalLink href={links.orcid}>ORCID</ExternalLink>
            <ExternalLink href={links.umn}>UMN Profile</ExternalLink>
          </nav>
        </div>
      </footer>
    </>
  );
}
