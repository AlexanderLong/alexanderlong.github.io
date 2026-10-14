<!-- .slide: class="diagram-slide sim-single-slide scintipix-slide" -->

<div class="scintipix-title-row">
  <h2>Simulating LumaCam Data</h2>
  <a href="https://github.com/lanl/ScintiPix" target="_blank" aria-label="ScintiPix repository on GitHub">
    <img class="sim-qr" src="images/ScintiPix_GitHub_QR.png" width="1200" height="1200" alt="QR code for the ScintiPix GitHub repository" />
  </a>
</div>

<div class="sim-layout sim-single">
  <div class="sim-tool">
    <div class="scintipix-columns">
      <div class="scintipix-details">
        <div class="scintipix-details-header">
          <p class="sim-name">Scinti<em>Pix</em></p>
          <p class="sim-summary">Simulates the entire event-mode imaging setup,<br />from scintillator to sensor</p>
        </div>
        <div class="hermes-script">
<pre><code class="language-yaml">scintillator:
  properties:
    name: OGS              # Organic glass
    fieldOfView:           # FoV of Scintillator
        widthMm: 40.0      # X-FoV in mm
        heightMm: 40.0     # Y-FoV in mm
    optical:               # Optical Properties
        scintYield: 15821  # photons per MeV
        timeComponents:    # decay times in ns
            neutron:
            - {timeConstant: 3.7, yieldFraction: 0.6931}
            - {timeConstant: 27.0, yieldFraction: 0.1485}
            - {timeConstant: 100.0, yieldFraction: 0.1584}
source:
  catalogId: AmBe</code></pre>
        </div>
        <ul class="hermes-features">
          <li><a href="https://geant4.web.cern.ch/" target="_blank"><strong>Geant4</strong></a> follows each neutron and gamma through the scintillator</li>
          <li><a href="https://github.com/mjhoptics/ray-optics" target="_blank"><strong>RayOptics</strong></a> traces the light through a real camera lens</li>
          <li>Catalogs of built-in scintillators and lenses</li>
          <li>Each photon is tagged with the particle ID that created it</li>
          <li>Can be integrated with HERMES to test reconstruction algorithms</li>
        </ul>
      </div>
      <div class="scintipix-visual">
        <img class="sim-figure" src="images/ambe_ogs_ScintiPix_photons-by-event.gif" width="600" height="600" alt="ScintiPix animation of light from an AmBe source landing on an organic glass scintillator, with light made by neutrons and by gammas marked differently" />
      </div>
    </div>
    <div class="step-boxes pipeline">
      <div class="step-box simulate"><p class="step-box-title">Source</p></div>
      <span class="pipeline-arrow" aria-hidden="true">&rarr;</span>
      <div class="step-box simulate"><p class="step-box-title">Scintillator</p></div>
      <span class="pipeline-arrow" aria-hidden="true">&rarr;</span>
      <div class="step-box simulate"><p class="step-box-title">Lens</p></div>
      <span class="pipeline-arrow" aria-hidden="true">&rarr;</span>
      <div class="step-box in-progress"><p class="step-box-title">Intensifier</p></div>
      <span class="pipeline-arrow" aria-hidden="true">&rarr;</span>
      <div class="step-box in-progress"><p class="step-box-title">Sensor</p></div>
    </div>
    <p class="sim-note">Available now: source to lens &nbsp;&middot;&nbsp; In progress: intensifier and sensor</p>
  </div>
</div>
