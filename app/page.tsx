import Image from "next/image";

const links = {
  cv: "/files/Joseph_Aguilar-Bohorquez_CV.pdf",
  slides: "/files/Joseph_Aguilar-Bohorquez_Latest_Presentation_Slides.pdf",
  email: "mailto:aguil213@umn.edu",
  scholar: "https://scholar.google.com/citations?user=U1QyNXwAAAAJ&hl=en",
  orcid: "https://orcid.org/0000-0003-2487-4813",
  umn: "https://apec.umn.edu/people/joseph-aguilar-bohorquez",
  nber: "https://www.nber.org/papers/w32555",
  fourDayWeek: "https://doi.org/10.22004/AG.ECON.404607",
  mangrove: "https://doi.org/10.2139/ssrn.3255966",
  heritage: "https://doi.org/10.1016/j.landusepol.2020.105042",
  experimentalDesign: "https://doi.org/10.1016/j.cesjef.2017.04.003",
  kuznetsCurve: "https://izlik.org/JA95YT78RG",
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
            <a className="nav-cv" href={links.cv} target="_blank">
              CV
            </a>
          </nav>
          <details className="mobile-nav">
            <summary>Menu</summary>
            <nav aria-label="Mobile navigation">
              <a href="#research">Research</a>
              <a href="#extension">Extension &amp; Policy</a>
              <a href="#teaching">Teaching</a>
              <a href={links.cv} target="_blank">
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
                lies at the intersection of regional and urban economics,
                public policy and program evaluation, labor economics, and the
                economics of education.
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
                <p>NBER Working Paper No. 32555</p>
              </div>
              <div className="featured-content">
                <h3>
                  American Indian Casino Operations and Firm Long-Run
                  Employment and Sales
                </h3>
                <p className="authors">with Randall Akee and Elton Mykerezi</p>
                <p className="paper-summary">
                  This paper examines the long-run effects of American Indian
                  casino operations on employment and sales at adjacent firms.
                  Using longitudinal firm data and a staggered-adoption research
                  design, it studies how place-based economic activity shapes
                  local business outcomes over time.
                </p>
                <p className="paper-note">
                  NBER Working Paper No. 32555, 2024; circulated under an
                  earlier title.
                </p>
                <div className="paper-actions">
                  <ExternalLink className="button button-light" href={links.nber}>
                    View Paper
                  </ExternalLink>
                  <a
                    className="button button-outline-light"
                    href={links.slides}
                    target="_blank"
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
                      Eliciting Information about Teacher Applicants Using
                      Open-Ended Questions
                    </h4>
                    <p className="authors">
                      with Dan Goldhaber, Cyrus Grout, Elton Mykerezi, Prayash
                      Pathak, and Aaron Sojourner
                    </p>
                  </div>
                </article>
                <article className="paper-row">
                  <div className="paper-number">02</div>
                  <div>
                    <h4>
                      Would Longer Weekends Keep Teachers in Rural Schools?
                      Evidence from Minnesota&apos;s Four-Day School Week Program
                    </h4>
                    <p className="authors">
                      with Elton Mykerezi and Janna E. Johnson
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
                      Type-Consistent Willingness to Pay in Contingent Valuation
                      Methods: An Application to the Mangrove Forest in the Gulf
                      of Guayaquil
                    </h4>
                    <p className="authors">
                      with J. G. Castillo and I. Valverde-Bajaña
                    </p>
                    <p className="paper-status">
                      <ExternalLink href={links.mangrove}>
                        SSRN working paper
                      </ExternalLink>{" "}
                      · circulated under an earlier title
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
                      Unpacking the Impact of Increased School Funding on
                      Teacher Retention: Insights from Minnesota&apos;s
                      Public-School Districts via Referendum Data
                    </h4>
                    <p className="authors">with Elton Mykerezi</p>
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
                  <span>2025–present</span>
                  <span>Minnesota</span>
                </div>
                <h3>Business Dynamism and Economic Structure in Minnesota</h3>
                <p className="project-partner">University of Minnesota Extension</p>
                <p>
                  Analyzed county-level YourEconomy Time Series data and
                  prepared a spatial policy brief comparing business and job
                  creation, business entry and exit, and employment and
                  establishment-size structures across Minnesota counties.
                </p>
              </article>
              <article className="policy-project">
                <div className="project-topline">
                  <span>2026–present</span>
                  <span>Public health</span>
                </div>
                <h3>Cost-Benefit Analysis of Minnesota SNAP-Ed Direct Education</h3>
                <p className="project-partner">
                  University of Minnesota Extension · Family, Health and Wellbeing
                </p>
                <p>
                  Conducted a cost-benefit analysis combining project-provided
                  program cost totals with an expected-value model linking
                  observed adult and youth behavioral improvements to BMI and
                  annual medical expenditures under explicit assumptions.
                </p>
              </article>
              <article className="policy-project">
                <div className="project-topline">
                  <span>2025–present</span>
                  <span>Community development</span>
                </div>
                <h3>Olivia Armory Wellness &amp; Community Hub</h3>
                <p className="project-partner">
                  City of Olivia · UMN Extension Southwest Regional Sustainable
                  Development Partnership
                </p>
                <p>
                  Synthesized comparable cases and public-finance evidence,
                  providing practical guidance on willingness-to-pay surveys,
                  public provision with user fees, and economic-impact tracking.
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
                  <p className="teaching-role">Teaching Assistant · ESPOL</p>
                  <p>
                    Led weekly Stata laboratory and practice sessions for one
                    section each of Econometrics I and Econometrics II;
                    supervised student paper-replication projects for a second
                    Econometrics II section; and supported assessment and course
                    delivery across all three sections.
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
