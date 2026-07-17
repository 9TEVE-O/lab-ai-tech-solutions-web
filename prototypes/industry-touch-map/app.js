const sectors = [
      {n:1,industry:"AI, software and developer tools",domain:"AI and software systems",evidence:"built capability",lifecycle:"active",representative:"LAB Agentic Application Architecture Standard; AI-assisted development controls; RAG, document-intelligence and AI Work Control assets",boundary:"Core capability domain. Public claims must remain bounded to demonstrated systems and reviewed artefacts."},
      {n:2,industry:"Music and audio technology",domain:"Music, arts and creative operations",evidence:"direct evidence",lifecycle:"active",representative:"Music-management and production background; Music + AI Trend Radar; producer and music-business workflow material",boundary:"Strong founder-context and workflow domain. Do not revive superseded multi-offer positioning without current approval."},
      {n:3,industry:"Arts and creative services",domain:"Music, arts and creative operations",evidence:"direct evidence",lifecycle:"completed",representative:"Creative-operations work; arts-organisation, gallery, theatre, film and creative-business workflow material",boundary:"Valid completed-capability and audience insight. Not currently a separate active offer."},
      {n:4,industry:"Events, festivals and public markets",domain:"Events, logistics and public-sector operations",evidence:"direct evidence",lifecycle:"completed",representative:"Mindil Beach Sunset Market logistics and WHS case study; event, festival and major-audience operations",boundary:"Strong proof-of-work domain. Use as operational background, not proof of a current LAB client pipeline."},
      {n:5,industry:"Education and training",domain:"Education, research and knowledge systems",evidence:"built capability",lifecycle:"active",representative:"AI Chat Hygiene teaching kit; lesson resources; music education and producer knowledge systems",boundary:"Suitable for workshops, tutoring, enablement and knowledge-system work. Requires defined buyer and delivery format."},
      {n:6,industry:"Publishing, media and content production",domain:"Music, arts and creative operations",evidence:"built capability",lifecycle:"active",representative:"Public-writing lane; research publishing; blog-series and content-workflow assets",boundary:"Active authority-building channel and possible service adjacency. Publishing activity is not client proof."},
      {n:7,industry:"Government and public administration",domain:"Events, logistics and public-sector operations",evidence:"direct evidence",lifecycle:"completed",representative:"Parks Australia material; City of Darwin governance and complaint work; council/public-sector workflow experience",boundary:"Credible operational context. Government procurement, security or compliance readiness must not be inferred."},
      {n:8,industry:"Legal, regulatory and compliance services",domain:"Document-heavy and regulated workflows",evidence:"direct evidence",lifecycle:"active",representative:"Code-of-conduct complaint systems; regulatory research; evidence handling; acceptable-use and governance controls",boundary:"Strong adjacent domain for document-risk and workflow-control work. LAB must not present itself as a law firm or regulator."},
      {n:9,industry:"Childcare and outside-school-hours care",domain:"Document-heavy and regulated workflows",evidence:"direct evidence",lifecycle:"completed",representative:"OSHC Safe Intake and Research Package concerning an incident involving a child and an OSHC service",boundary:"Demonstrates sensitive-document and regulatory-support capability. Does not establish sector-wide experience, legal authority or an ongoing engagement."},
      {n:10,industry:"Construction and infrastructure",domain:"Events, logistics and public-sector operations",evidence:"direct evidence",lifecycle:"completed",representative:"Maguk Road upgrade contractor-induction and safety material",boundary:"Valid bounded operational artefact. Does not establish engineering, construction certification or infrastructure-delivery authority."},
      {n:11,industry:"Environment, national parks and cultural heritage",domain:"Events, logistics and public-sector operations",evidence:"direct evidence",lifecycle:"completed",representative:"Kakadu National Park contractor systems and cultural-heritage stop-work material",boundary:"Strong public-sector operational context. Do not claim environmental, heritage or Indigenous-cultural authority beyond the reviewed work."},
      {n:12,industry:"Cybersecurity, OSINT and media integrity",domain:"AI and software systems",evidence:"research",lifecycle:"parked",representative:"OSINT threat-tool recommendations; vulnerability-management concepts; AI scam and synthetic-media readiness concept",boundary:"Adjacent future opportunity. Requires explicit reactivation, technical validation, security review and clear authorisation boundaries."},
      {n:13,industry:"Healthcare, aged care and care robotics",domain:"Document-heavy and regulated workflows",evidence:"idea only",lifecycle:"parked",representative:"Care Robot Governance Readiness Audit concept",boundary:"Early opportunity signal only. No healthcare delivery, clinical validation, safety approval or buyer evidence."},
      {n:14,industry:"Food security, agriculture and nutrition",domain:"Education, research and knowledge systems",evidence:"research",lifecycle:"active",representative:"Global Zero Hunger work; food-security floor; local production, affordability and delivery frameworks",boundary:"Active research domain with strong systems-thinking potential. It is not agricultural, nutrition or humanitarian implementation proof."},
      {n:15,industry:"Transport, logistics and supply chains",domain:"Events, logistics and public-sector operations",evidence:"direct evidence",lifecycle:"active",representative:"Event logistics experience; food transport, cold-chain and national supply-chain stress-test work",boundary:"Strong bridge between prior operations and current research. Commercial offer still requires buyer validation and a bounded use case."},
      {n:16,industry:"Humanitarian, nonprofit and community development",domain:"Education, research and knowledge systems",evidence:"research",lifecycle:"active",representative:"Hunger-reduction systems; emergency protection; public participation; community-arts and nonprofit workflow material",boundary:"Active research and community-systems opportunity. Do not claim field implementation, aid delivery or institutional endorsement."},
      {n:17,industry:"Scientific research and academia",domain:"Education, research and knowledge systems",evidence:"research",lifecycle:"active",representative:"Global Research Operating System; evidence-bound research workflows; AI-architecture and claim-ledger research",boundary:"Core authority-building domain. Distinguish independent research systems from peer-reviewed academic publication."},
      {n:18,industry:"Gaming and interactive learning",domain:"Education, research and knowledge systems",evidence:"built capability",lifecycle:"completed",representative:"Book-to-Game learning harness and test-report playbook",boundary:"Completed prototype pattern. Not a shipped game, commercial game-development service or validated learning product."},
      {n:19,industry:"Spirituality, wellbeing and personal development",domain:"Education, research and knowledge systems",evidence:"research",lifecycle:"parked",representative:"Belief-Aware AI Function Field; spiritual-authority and agency safeguards; goal-setting concepts",boundary:"Useful responsible-AI research boundary. Not spiritual authority, therapeutic care or a validated wellbeing product."},
      {n:20,industry:"Digital commerce and creator products",domain:"AI and software systems",evidence:"built capability",lifecycle:"active",representative:"Gumroad product ladder; AI Project Rescue Pack; practical AI workflow products and listing assets",boundary:"Active productisation lane. Launch-candidate status does not equal publication, sales, demand or product-market fit."}
    ];

    const evidenceClass = {"direct evidence":"direct","built capability":"built","research":"research","idea only":"idea"};
    const lifecycleClass = {active:"active",completed:"completed",parked:"parked"};
    const grid = document.getElementById('sectorGrid');
    const matrixBody = document.getElementById('matrixBody');

    function escapeHTML(value) {
      return value.replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
    }

    sectors.forEach(s => {
      const searchText = `${s.industry} ${s.domain} ${s.evidence} ${s.lifecycle} ${s.representative} ${s.boundary}`.toLowerCase();
      const card = document.createElement('article');
      card.className = 'sector-card';
      card.dataset.search = searchText;
      card.dataset.evidence = s.evidence;
      card.dataset.lifecycle = s.lifecycle;
      card.innerHTML = `
        <div class="sector-top">
          <div class="sector-number">${String(s.n).padStart(2,'0')}</div>
          <div><h3 class="sector-title">${escapeHTML(s.industry)}</h3><div class="tag-row">
            <span class="tag tag-domain">${escapeHTML(s.domain)}</span>
            <span class="tag tag-${evidenceClass[s.evidence]}">${escapeHTML(s.evidence)}</span>
            <span class="tag tag-${lifecycleClass[s.lifecycle]}">${escapeHTML(s.lifecycle)}</span>
          </div></div>
        </div>
        <details><summary>Evidence and boundary</summary><div class="detail-block">
          <section><h4>Representative evidence</h4><p>${escapeHTML(s.representative)}</p></section>
          <section><h4>Opportunity posture and boundary</h4><p>${escapeHTML(s.boundary)}</p></section>
        </div></details>`;
      grid.appendChild(card);

      const row = document.createElement('div');
      row.className = 'matrix-row';
      row.setAttribute('role','row');
      row.dataset.search = searchText;
      row.dataset.evidence = s.evidence;
      row.dataset.lifecycle = s.lifecycle;
      row.innerHTML = `<div class="matrix-title" role="cell">${String(s.n).padStart(2,'0')} · ${escapeHTML(s.industry)}</div><div class="matrix-domain" role="cell">${escapeHTML(s.domain)}</div><div role="cell"><span class="tag tag-${evidenceClass[s.evidence]}">${escapeHTML(s.evidence)}</span></div><div role="cell"><span class="tag tag-${lifecycleClass[s.lifecycle]}">${escapeHTML(s.lifecycle)}</span></div>`;
      matrixBody.appendChild(row);
    });

    let activeFilter = 'all';
    const search = document.getElementById('search');
    const resultCount = document.getElementById('resultCount');
    const emptyState = document.getElementById('emptyState');

    function updateResults() {
      const q = search.value.trim().toLowerCase();
      const cards = [...document.querySelectorAll('.sector-card')];
      const rows = [...document.querySelectorAll('#matrixBody .matrix-row')];
      let shown = 0;
      cards.forEach((card, index) => {
        const matchesText = !q || card.dataset.search.includes(q);
        const matchesFilter = activeFilter === 'all' || card.dataset.evidence === activeFilter || card.dataset.lifecycle === activeFilter;
        const visible = matchesText && matchesFilter;
        card.hidden = !visible;
        rows[index].hidden = !visible;
        if (visible) shown++;
      });
      resultCount.textContent = `${shown} sector${shown === 1 ? '' : 's'} shown`;
      emptyState.classList.toggle('show', shown === 0);
    }

    search.addEventListener('input', updateResults);
    document.getElementById('filters').addEventListener('click', e => {
      const button = e.target.closest('[data-filter]');
      if (!button) return;
      activeFilter = button.dataset.filter;
      document.querySelectorAll('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
      updateResults();
    });

    const viewButtons = document.querySelectorAll('.view-button[data-view]');
    viewButtons.forEach(button => {
      button.addEventListener('click', () => {
        document.body.dataset.view = button.dataset.view;
        viewButtons.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
      });
    });
