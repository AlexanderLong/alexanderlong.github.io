<!-- .slide: class="diagram-slide hermes-ai-slide" -->

## HERMES: AI-Assisted Analysis

<div class="hermes-ai-layout">
  <div class="hermes-ai-points">
    <h3>Available in v3.3.7</h3>
    <ul>
      <li><strong>MCP tools</strong> help an assistant create analysis configs and validate HERMES configs.</li>
    </ul>
    <h3>Planned skills &amp; tools</h3>
    <ul>
      <li>Explain settings and output data with the <strong>hermes-config-and-files</strong> skill.</li>
      <li>Create acquisition configs, check the camera, and report run status.</li>
      <li>Guide setup, analysis, and troubleshooting; find clustering settings and make event movies.</li>
    </ul>
    <div class="hermes-ai-addon">
      <p class="hermes-ai-addon-title">Use with existing harnesses</p>
      <div class="hermes-ai-addon-flow">
        <span>Codex / Claude Code</span>
        <span class="hermes-ai-addon-plus">+</span>
        <span>HERMES MCP tools</span>
      </div>
      <p>Pixi MCP setup for Claude Code:</p>
      <p class="hermes-ai-addon-install"><code>pixi run hermes-mcp-setup</code></p>
    </div>
  </div>
  <div class="chat-box">
  <p class="chat-box-title">Planned AI-assisted workflow</p>
  <p class="chat-you">Set up a HERMES analysis for my data in ./run0014</p>
  <p class="chat-assistant">Which steps should I run: unpack only, up to photons, or all the way to neutron events? Should I run with default parameters or would you like me to run a parameter scan?</p>
  <p class="chat-you">All the way to events, and please run a parameter scan</p>
  <p class="chat-assistant">Done. I wrote <code>hermes-config.yaml</code> and <code>run_hermes.py</code> in ./run0014 to start the parameter scan. I included the standard time-walk correction from HERMES</p>
  <p class="chat-you">Please check the settings file before I run it</p>
  <p class="chat-assistant">It is valid and will run the scan</p>
  <p class="chat-you">Please run it</p>
  <div class="chat-assistant">
    <p>Starting the scan now, with these settings:</p>
    <table class="chat-table">
      <thead>
        <tr><th>Setting</th><th>Default</th><th>Values to try</th></tr>
      </thead>
      <tbody>
        <tr><td><code>spatial_link_radius_pixels</code></td><td>10</td><td>3, 5, 10, 15, 20</td></tr>
        <tr><td><code>max_time_difference_ticks</code></td><td>10&nbsp;µs</td><td>1, 5, 10, 15, 30&nbsp;µs</td></tr>
        <tr><td><code>max_event_duration_ticks</code></td><td>30&nbsp;µs</td><td>15, 30, 100&nbsp;µs</td></tr>
        <tr><td><code>min_photon_count</code></td><td>1</td><td>1, 2, 3, 5, 10</td></tr>
      </tbody>
    </table>
  </div>
  <p class="chat-assistant">Running event-reconstruction scans: starting with radius = 10&nbsp;pixels, time difference = 10&nbsp;µs, event duration = 30&nbsp;µs, min photons = 1&hellip;</p>
  <p class="chat-box-note">Config and validation tools available now &nbsp;&middot;&nbsp; Automated scans planned</p>
  </div>
</div>
