<!-- .slide: class="diagram-slide hermes-intro-slide" -->

<div class="hermes-title-row">
  <h2>HERMES: Acquisition and Analysis Code</h2>
  <a href="https://github.com/lanl/HERMES" target="_blank" aria-label="HERMES repository on GitHub">
    <img class="hermes-qr" src="images/HERMES_GitHub_QR.png" width="1312" height="1312" alt="QR code for the HERMES GitHub repository" />
  </a>
</div>

<div class="hermes-layout">
  <div class="hermes-intro-columns">
    <div class="hermes-overview">
      <p class="hermes-name"><strong>H</strong>igh-speed <strong>E</strong>vent <strong>R</strong>etrieval and <strong>M</strong>anagement for <strong>E</strong>nhanced <strong>S</strong>pectral<br />Neutron Imaging with LumaCams</p>
      <div class="hermes-brand">
        <img class="hermes-logo" src="images/HERMES.png" width="1439" height="437" alt="HERMES logo: neutron imaging with TPX3Cams" />
      </div>
      <ul class="hermes-features">
        <li>One complete record follows each run, from acquisition to analysis, so it can be repeated</li>
        <li><a href="https://loguru.readthedocs.io/en/stable/" target="_blank"><strong>Loguru</strong></a> logs each step as it runs, at the level of detail the user picks</li>
        <li><a href="https://pydantic.dev/" target="_blank"><strong>Pydantic</strong></a> checks every setting before a run starts, so fewer runs fail</li>
      </ul>
      <p class="slide-takeaway">Works out of the box with defaults</p>
    </div>
    <div class="hermes-code">
      <div class="hermes-points">
        <div class="hermes-script install">
<pre><code class="language-toml">[pypi-dependencies.hermes]
git = "https://github.com/lanl/HERMES.git"
tag = "v3.3.7"</code></pre>
<pre><code class="language-bash">pixi install   # builds HERMES from source
pixi run hermes-mcp-setup # install skills and mcps
</code></pre>
          <p class="hermes-script-note">Easy to set up in any project folder with pixi</p>
        </div>
        <div class="hermes-script">
<pre><code class="language-python">from pathlib import Path
from hermes.state_service.state_io import load_hermes_record_from_yaml
from hermes.workflows.workflow import Workflow
&nbsp;
def main(config_path: Path = Path("hermes-config.yaml")) -> None:
    record = load_hermes_record_from_yaml(config_path)
    workflow = Workflow(record)
    updated_record = workflow.run()</code></pre>
          <p class="hermes-script-note">Simple scripts to run acquisition and analysis; only config files change</p>
        </div>
      </div>
    </div>
  </div>
  <div class="pipelines">
    <div class="workflow-row">
      <h3 class="pipeline-heading">Acquisition</h3>
      <div class="step-boxes pipeline">
        <div class="step-box acquire"><p class="step-box-title">Configure Env.</p></div>
        <span class="pipeline-arrow" aria-hidden="true">&rarr;</span>
        <div class="step-box acquire"><p class="step-box-title">Start Serval</p></div>
        <span class="pipeline-arrow" aria-hidden="true">&rarr;</span>
        <div class="step-box acquire"><p class="step-box-title">Set up camera</p></div>
        <span class="pipeline-arrow" aria-hidden="true">&rarr;</span>
        <div class="step-box acquire"><p class="step-box-title">Record data</p></div>
      </div>
    </div>
    <div class="workflow-row">
      <h3 class="pipeline-heading">Analysis</h3>
      <div class="step-boxes pipeline analysis-pipeline">
        <div class="step-box unpack"><p class="step-box-title">Unpack pixels</p></div>
        <span class="pipeline-arrow" aria-hidden="true">&rarr;</span>
        <div class="step-box to-photon"><p class="step-box-title">Group pixels</p></div>
        <span class="pipeline-arrow" aria-hidden="true">&rarr;</span>
        <div class="step-box to-photon"><p class="step-box-title">Reconstruct photons</p></div>
        <span class="pipeline-arrow" aria-hidden="true">&rarr;</span>
        <div class="step-box to-event"><p class="step-box-title">Group photons</p></div>
        <span class="pipeline-arrow" aria-hidden="true">&rarr;</span>
        <div class="step-box to-event"><p class="step-box-title">Reconstruct events</p></div>
      </div>
    </div>
  </div>
</div>
