<!-- .slide: class="diagram-slide sim-single-slide graace-sim-slide" -->

<div class="graace-sim-title-row">
  <h2>Prompt Gamma Simulations</h2>
  <a href="https://github.com/lanl/graace-sim" target="_blank" aria-label="GRAACE-SIM repository on GitHub">
    <img class="sim-qr" src="images/graace-sim_GitHub_QR.png" width="1230" height="1230" alt="QR code for the GRAACE-SIM GitHub repository" />
  </a>
</div>

<div class="sim-layout sim-single">
  <div class="sim-tool">
    <div class="graace-sim-columns">
      <div class="graace-sim-visual">
        <img class="sim-logo" src="images/GRAACE-SIM.jpg" width="2017" height="750" alt="GRAACE-SIM logo: Gamma Resolved Activation Analysis for Characterization and Evaluation" />
        <img class="sim-figure" src="images/sample_size_spectra.png" width="2250" height="1440" alt="GRAACE-SIM gamma spectra from an iron sample at two sizes, for 2.45 MeV DD and 14.1 MeV DT neutrons, each with and without 50 mm of polyethylene" />
        <p class="sim-summary">Simulates prompt gamma activation analysis</p>
      </div>
      <div class="graace-sim-details">
        <div class="hermes-script">
<pre><code class="language-yaml">source:
  particle: neutron
  position:
    shape: point
    center_mm: {x_mm: 0, y_mm: 0, z_mm: -130}
  energy:
    type: mono
    mono_mev: 2.45
sample:
  composition:
    density_g_cm3: 8.908
    elements:
      - symbol: Ni
        mass_fraction: 1.0
        isotopes:
          - {mass_number: 58, atom_fraction: 1.0}</code></pre>
        </div>
        <ul class="hermes-features">
          <li>Can change setup without rebuilding the GEANT4 C++ code</li>
          <li>Catalogs of sources and detectors, or configure your own.</li>
          <li>Current examples for generators; Also supports pulsed beams</li>
        </ul>
        <div class="graace-flow pipeline">
          <div class="graace-ingredients">
            <div class="graace-ingredient-grid">
              <div class="step-box simulate"><p class="step-box-title">Source</p></div>
              <div class="step-box simulate"><p class="step-box-title">Shielding</p></div>
              <div class="step-box simulate"><p class="step-box-title">Sample</p></div>
              <div class="step-box simulate"><p class="step-box-title">Detectors</p></div>
            </div>
          </div>
          <span class="graace-flow-arrow" aria-hidden="true">&darr;</span>
          <div class="graace-results">
            <div class="graace-result-grid">
              <div class="step-box output"><p class="step-box-title">Gamma spectra</p></div>
              <div class="step-box output in-progress"><p class="step-box-title">Energy-resolved neutron images</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="sim-note">Currently being built for use in design of future GRAACE beamline at LANSCE</p>
  </div>
</div>
