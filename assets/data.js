/* ===========================================================================
   SITE CONTENT — edit this file to update the website.
   To add a publication after a new paper: copy one { ... } block, paste it at
   the TOP of the matching list, and fill in the fields. That's it — both the
   homepage and the publications page update automatically.
   =========================================================================== */

const PROFILE = {
  name: "Dr. Prasanta Kumar Nayak",
  role: "CATA Postdoctoral Fellow",
  affiliation: "Institute of Astrophysics, Pontificia Universidad Católica de Chile (IA-PUC), Santiago, Chile",
  email: "nayakphy@gmail.com",
  links: {
    scholar: "https://scholar.google.com/citations?user=BsoMTtQAAAAJ&hl=en",
    ads:     "https://ui.adsabs.harvard.edu/user/libraries/2F7sY913T8-czs6cTHjbrA",
    orcid:   "https://orcid.org/0000-0002-4638-1035",
    github:  "https://github.com/nayakphy",
  },
  metrics: {
    total: 32, q1: 28, q2: 4, last3: 27, firstAuthor: 10,
  },
};

/* ---- research highlights shown on the homepage ------------------------- */
const HIGHLIGHTS = [
  {
    tag: "Multi-messenger · Solar System",
    title: "Chasing an Interstellar Visitor: Comet 3I/ATLAS",
    figure: "comet",
    text: "As part of the VLT and SOAR observing teams, I helped characterize 3I/ATLAS — only the third known interstellar object to pass through our Solar System. Our spectra caught the dramatic rise of nickel and CN emission and mapped the coma at high resolution with ESPRESSO through perihelion.",
    refs: [
      { label: "ApJL 2025 (SOAR)", url: "https://doi.org/10.3847/2041-8213/adfa0b" },
      { label: "ApJL 2025 (VLT)", url: "https://doi.org/10.3847/2041-8213/ae1cbc" },
      { label: "A&A 2026 (ESPRESSO)", url: "https://doi.org/10.48550/arXiv.2607.15355" },
    ],
  },
  {
    tag: "Compact objects · Gravitational waves",
    title: "White Dwarfs Hiding in Plain Sight",
    figure: "binary",
    text: "Combining Gaia DR3 astrometry with GALEX ultraviolet photometry, I built a volume-limited method to unmask white-dwarf companions buried in the glare of main-sequence stars within 100 pc. These unresolved WD–MS binaries are the seeds of double-white-dwarf LISA sources and Type Ia supernovae.",
    refs: [
      { label: "A&A 2026", url: "https://doi.org/10.1051/0004-6361/202452939" },
      { label: "MNRAS 2024", url: "https://doi.org/10.1093/mnras/stad3580" },
    ],
  },
  {
    tag: "Star & planet formation",
    title: "Watching Young Stars Feed: T Tauri Accretion in the UV",
    figure: "ttauri",
    text: "With simultaneous far-UV and near-UV imaging from AstroSat/UVIT, I trace how young T Tauri stars pull material from their circumstellar disks. The ultraviolet excess is a direct fingerprint of accretion shocks, letting us measure mass-accretion rates at the dawn of planetary systems.",
    refs: [
      { label: "ApJ 2024", url: "https://doi.org/10.3847/1538-4357/ad5a89" },
      { label: "JApA 2023", url: "https://doi.org/10.1007/s12036-023-09972-6" },
    ],
  },
  {
    tag: "Galaxy evolution · Star clusters",
    title: "Fossil Clusters of the Magellanic Clouds",
    figure: "cluster",
    text: "My doctoral work parametrized and age-dated more than a thousand star clusters across the Large and Small Magellanic Clouds, revealing synchronized bursts of cluster formation that carry the imprint of past encounters between the Clouds — a fossil record of how these dwarf galaxies were assembled.",
    refs: [
      { label: "MNRAS 2016", url: "https://doi.org/10.1093/mnras/stw2043" },
      { label: "A&A 2018", url: "https://doi.org/10.1051/0004-6361/201732227" },
      { label: "MNRAS 2024", url: "https://doi.org/10.1093/mnras/stae096" },
    ],
  },
];

/* ---- research interests ------------------------------------------------ */
const INTERESTS = [
  {
    icon: "✦",
    title: "Stellar Evolution & Compact Objects",
    text: "Single and binary stellar evolution; T Tauri stars; WD/NS/BH companions to main-sequence stars; blue stragglers and their evolved remnants; progenitors of double-WD systems and Type Ia supernovae.",
  },
  {
    icon: "❋",
    title: "Star Clusters",
    text: "Open, globular and nuclear clusters; binaries and exotic populations; multiple stellar populations; dynamical evolution, tidal disruption and dissolution timescales.",
  },
  {
    icon: "◍",
    title: "Cosmology & Galaxy Evolution",
    text: "Formation and evolution of dwarf galaxies in a ΛCDM framework; environmental effects on star formation in clusters (Fornax) and interacting systems (Magellanic Clouds); clusters as probes of hierarchical assembly.",
  },
];

const FACILITIES = ["HST", "Gaia", "GALEX", "AstroSat / UVIT", "VLT", "GEMINI", "SOAR", "HCT", "DOT", "Magellan"];

const TIMELINE = [
  { yr: "2022 – present", title: "CATA Postdoctoral Fellow", org: "Institute of Astrophysics, PUC (IA-PUC), Santiago, Chile" },
  { yr: "2019 – 2022", title: "Postdoctoral Fellow", org: "Tata Institute of Fundamental Research (TIFR), Mumbai, India" },
  { yr: "2014 – 2019", title: "Ph.D., Physics", org: "Pondicherry University & Indian Institute of Astrophysics (IIA), Bengaluru" },
  { yr: "2011 – 2013", title: "M.Sc., Physics", org: "Indian Institute of Technology (IIT) Kharagpur" },
  { yr: "2008 – 2011", title: "B.Sc., Physics", org: "Scottish Church College, University of Calcutta" },
];

/* ---- PUBLICATIONS ------------------------------------------------------ */
/* fields: year, title, authors (use <b>Nayak</b> to bold your name),
   journal, ref (vol/page), doi (full URL), q ("Q1"/"Q2"), if (impact factor) */

const PUBS = {
  first: [
    { year: 2026, title: "UVIT/AstroSat Observation of TW Hya", authors: "<b>Nayak, P. K.</b>, et al.", journal: "JApA", ref: "47, 36", doi: "https://doi.org/10.1007/s12036-026-10154-3", q: "Q2", if: "1.5" },
    { year: 2026, title: "Revealing Unresolved White Dwarf–Main Sequence Binaries using Gaia DR3 and GALEX I. A Volume-limited Study of 100 pc", authors: "<b>Nayak, P. K.</b>", journal: "A&A", ref: "709, A114", doi: "https://doi.org/10.1051/0004-6361/202452939", q: "Q1", if: "5.8" },
    { year: 2026, title: "UVIT Magellanic Bridge Analysis (UMBRA)-I: Far-UV–Gaia study of seven star clusters", authors: "Choudhury S., <b>Nayak* P. K.</b>, Dhanush S. R., Sahu S., de Grijs R.", journal: "MNRAS", ref: "548, 1", doi: "https://doi.org/10.1093/mnras/stag594", q: "Q1", if: "5.3" },
    { year: 2025, title: "Beyond the Main Sequence: Binary Evolution Pathways to Blue Stragglers in the Gaia Era I. Galactic Open and Globular Clusters", authors: "Carrasco-Varela, <b>*†Nayak</b>, Puzia", journal: "A&A", ref: "699, 142", doi: "https://doi.org/10.1051/0004-6361/202452195", q: "Q1", if: "5.8" },
    { year: 2024, title: "Simultaneous Far-UV and Near-UV Observations of T Tauri Stars with UVIT/AstroSat: Probing the Accretion Process in Young Stars", authors: "<b>Nayak, P. K.</b>, Narang M., Manoj P., Gorti U., Subramaniam A., George S., Mondal S.", journal: "ApJ", ref: "972, 19", doi: "https://doi.org/10.3847/1538-4357/ad5a89", q: "Q1", if: "5.9" },
    { year: 2024, title: "Hunting Down White Dwarf–Main Sequence Binaries Using Multiwavelength Observations", authors: "<b>Nayak, P. K.</b>, Ganguly S., Chatterjee S.", journal: "MNRAS", ref: "527, 6100", doi: "https://doi.org/10.1093/mnras/stad3580", q: "Q1", if: "5.3" },
    { year: 2023, title: "Identifying the Population of T-Tauri Stars in Taurus: UV–Optical Synergy", authors: "<b>Nayak, P. K.</b>, et al.", journal: "JApA", ref: "44, 83", doi: "https://doi.org/10.1007/s12036-023-09972-6", q: "Q2", if: "1.5" },
    { year: 2021, title: "UVIT-HST-Gaia-VISTA Study of Kron 3 in the Small Magellanic Cloud: A Cluster with an Extended Red Clump in Ultraviolet", authors: "<b>Nayak, P. K.</b>, et al.", journal: "MNRAS", ref: "503, 5291", doi: "https://doi.org/10.1093/mnras/stab385", q: "Q1", if: "5.3" },
    { year: 2018, title: "Star Clusters in the Magellanic Clouds II. Age-dating, Classification, and Spatio-temporal Distribution of SMC Clusters", authors: "<b>Nayak, P. K.</b>, et al.", journal: "A&A", ref: "616, A187", doi: "https://doi.org/10.1051/0004-6361/201732227", q: "Q1", if: "5.8" },
    { year: 2016, title: "Star Clusters in the Magellanic Clouds I. Parametrization and Classification of 1072 Clusters in the LMC", authors: "<b>Nayak, P. K.</b>, et al.", journal: "MNRAS", ref: "463, 1446", doi: "https://doi.org/10.1093/mnras/stw2043", q: "Q1", if: "5.3" },
  ],

  contrib: [
    { year: 2025, title: "Open Cluster Study Using Gaia I: Membership and Cluster Properties", authors: "Ganguly, <b>†Nayak</b>, Chatterjee", journal: "ApJ", ref: "993, 112", doi: "https://doi.org/10.3847/1538-4357/adff55", q: "Q1", if: "5.9" },
    { year: 2023, title: "White Dwarfs Revealed in Gaia's Candidate Compact Object Binaries", authors: "Ganguly, <b>†Nayak</b>, Chatterjee", journal: "ApJ", ref: "954, 4", doi: "https://doi.org/10.3847/1538-4357/ace42f", q: "Q1", if: "5.9" },
    { year: 2023, title: "UV Spectral Characterization of Low-mass Stars with AstroSat UVIT for Exoplanet Applications: The Case Study of HIP 23309", authors: "Ranjan, <b>Nayak</b>, Pineda, Narang", journal: "AJ", ref: "166, 70", doi: "https://doi.org/10.3847/1538-3881/ace32d", q: "Q1", if: "6.3" },
  ],

  coauthor: [
    { year: 2026, title: "Very Large Telescope observations of interstellar comet 3I/ATLAS III: High-resolution monitoring of CN and forbidden oxygen emission across the perihelion passage with ESPRESSO", authors: "Luco B., Puzia T. H., Rahatgaonkar R., Carvajal J. P., <b>Nayak, P. K.</b>, et al.", journal: "A&A", ref: "accepted, 07/2026", doi: "https://doi.org/10.48550/arXiv.2607.15355", q: "Q1", if: "5.8" },
    { year: 2026, title: "Tidal pre-conditioning and ram-pressure stripping in NGC 1427A: Deep VLT/MUSE spectroscopy and FUV-to-radio observations trace a Fornax Cluster dwarf in transformation", authors: "Carvajal J. P., Puzia T. H., Blaña M., <b>Nayak, P. K.</b>, et al.", journal: "A&A", ref: "accepted, 05/2026", doi: "https://doi.org/10.48550/arXiv.2605.00988", q: "Q1", if: "5.8" },
    { year: 2026, title: "Sloan Digital Sky Survey-V: Pioneering Panoptic Spectroscopy", authors: "Kollmeier J. A., et al. incl. <b>Nayak</b>", journal: "AJ", ref: "171, 52", doi: "https://doi.org/10.3847/1538-3881/ae0576", q: "Q1", if: "6.3" },
    { year: 2026, title: "The Next Generation Fornax Survey (NGFS) VIII. A Support Vector Machine Approach for Disentangling Globular Clusters from Other Sources", authors: "Ordenes-Briceño Y., et al. incl. <b>Nayak</b>", journal: "A&A", ref: "706, A368", doi: "https://doi.org/10.1051/0004-6361/202556455", q: "Q1", if: "5.8" },
    { year: 2025, title: "VLT Observations of Interstellar Comet 3I/ATLAS II. From Quiescence to Glow: Dramatic Rise of Ni I Emission and Incipient CN Outgassing at Large Heliocentric Distances", authors: "Rahatgaonkar, Carvajal, Puzia, et al. incl. <b>Nayak</b>", journal: "ApJL", ref: "995, L34", doi: "https://doi.org/10.3847/2041-8213/ae1cbc", q: "Q1", if: "7.4" },
    { year: 2025, title: "Spectral Characteristics of Interstellar Object 3I/ATLAS from SOAR Observations", authors: "Puzia, Rahatgaonkar, Carvajal, <b>Nayak</b>, Luco", journal: "ApJL", ref: "990, L27", doi: "https://doi.org/10.3847/2041-8213/adfa0b", q: "Q1", if: "7.4" },
    { year: 2025, title: "Relighting the Fire in HCG 15: Magnetised Fossil Plasma Revealed by SKA Pathfinders & Precursors", authors: "Riseley, Vernstrom, Lovisari, et al. incl. <b>Nayak</b>", journal: "A&A", ref: "697, 45", doi: "https://doi.org/10.1051/0004-6361/202553890", q: "Q1", if: "5.8" },
    { year: 2025, title: "Stars and Stellar Populations in Milky Way and Nearby Galaxies", authors: "Sivarani, Subramanian, et al. incl. <b>Nayak</b>", journal: "JApA", ref: "46, 15", doi: "https://doi.org/10.1007/s12036-024-10030-y", q: "Q2", if: "1.5" },
    { year: 2024, title: "UVIT Study of the Magellanic Clouds (USMAC) II. A Far-UV Catalog of the SMC: Morphology and Kinematics of Young Stellar Population", authors: "Hota, Subramaniam, <b>Nayak</b>, Subramanian", journal: "AJ", ref: "168, 255", doi: "https://doi.org/10.3847/1538-3881/ad7de2", q: "Q1", if: "6.3" },
    { year: 2024, title: "Demography of Stellar Radio Population within 500 pc: A VLASS–Gaia DR3 Study", authors: "De, Narang, Puravankara, et al. incl. <b>Nayak</b>", journal: "AJ", ref: "168, 288", doi: "https://doi.org/10.3847/1538-3881/ad84e7", q: "Q1", if: "6.3" },
    { year: 2024, title: "uGMRT Survey of EXoplanets Around M-dwarfs (GS-EXAM): Radio Observations of GJ 1151", authors: "Narang, et al. incl. <b>Nayak</b>", journal: "AJ", ref: "168, 265", doi: "https://doi.org/10.3847/1538-3881/ad84e4", q: "Q1", if: "6.3" },
    { year: 2024, title: "Host-star Properties of Hot, Warm, and Cold Jupiters in the Solar Neighborhood from Gaia DR3: Clues to Formation Pathways", authors: "Banerjee, et al. incl. <b>Nayak</b>", journal: "AJ", ref: "168, 7", doi: "https://doi.org/10.3847/1538-3881/ad429f", q: "Q1", if: "6.3" },
    { year: 2024, title: "A uGMRT Search for Radio Emission from Planets around Evolved Stars", authors: "Narang, et al. incl. <b>Nayak</b>", journal: "MNRAS", ref: "529, 1161", doi: "https://doi.org/10.1093/mnras/stae536", q: "Q1", if: "5.3" },
    { year: 2024, title: "A Chemodynamical Analysis of Bright Metal-poor Stars from the HESP-GOMPA Survey", authors: "Bandyopadhyay, et al. incl. <b>Nayak</b>", journal: "MNRAS", ref: "529, 2191", doi: "https://doi.org/10.1093/mnras/stae613", q: "Q1", if: "5.3" },
    { year: 2024, title: "Spatiotemporal Map of Star Clusters in the Magellanic Clouds Using Gaia: Synchronized Peaks and Radial Shrinkage of Cluster Formation", authors: "Dhanush, Subramaniam, <b>Nayak</b>, Subramanian", journal: "MNRAS", ref: "528, 2274", doi: "https://doi.org/10.1093/mnras/stae096", q: "Q1", if: "5.3" },
    { year: 2023, title: "uGMRT Observations of the Hot-Saturn WASP-69b: RLEES II", authors: "Narang, et al. incl. <b>Nayak</b>", journal: "MNRAS", ref: "522, 1662", doi: "https://doi.org/10.1093/mnras/stad1027", q: "Q1", if: "5.3" },
    { year: 2023, title: "Optical Spectroscopy of Gaia Detected Protostars with DOT", authors: "Narang, Manoj, et al. incl. <b>Nayak</b>", journal: "JApA", ref: "44, 92", doi: "https://doi.org/10.1007/s12036-023-09982-4", q: "Q2", if: "1.5" },
    { year: 2022, title: "Li Distribution, Kinematics, and Detailed Abundance Analysis among Very Metal-poor Stars in the Galactic Halo from HESP-GOMPA Survey", authors: "Bandyopadhyay, Sivarani, Beers, et al. incl. <b>Nayak</b>", journal: "ApJ", ref: "937, 52", doi: "https://doi.org/10.3847/1538-4357/ac8b0f", q: "Q1", if: "5.9" },
    { year: 2021, title: "UOCS III. UVIT Catalogue of Open Clusters with Machine Learning-based Membership Using Gaia EDR3 Astrometry", authors: "Jadhav, Pennock, Subramaniam, Sagar, <b>Nayak</b>", journal: "MNRAS", ref: "503, 236", doi: "https://doi.org/10.1093/mnras/stab213", q: "Q1", if: "5.3" },
  ],

  proceedings: [
    { year: 2026, title: "Probing the formation histories of Nuclear Star Clusters in the Fornax Galaxy Cluster using UVIT", authors: "<b>Nayak, P. K.</b>, Puzia T. H., Ordenes-Briceño Y., et al.", journal: "RMxAC", ref: "60, 258", doi: "https://doi.org/10.22201/ia.14052059p.2026.60.256" },
    { year: 2026, title: "The Next Generation Fornax Survey (NGFS)", authors: "Puzia T. H., Ordenes-Briceño Y., Eigenthaler P., Blaña M., Miller B., <b>Nayak, P. K.</b>, et al.", journal: "RMxAC", ref: "60, 246", doi: "https://doi.org/10.22201/ia.14052059p.2026.60.201" },
    { year: 2020, title: "Detection of Extended Red Clump in the SMC Cluster Kron 3", authors: "<b>Nayak, P. K.</b>, Subramaniam A., Subramanian S., Sahu S., Mondal S., Cioni M.-R., Bell C.", journal: "IAUS", ref: "351", doi: "https://doi.org/10.1017/S1743921319007002" },
  ],
};
