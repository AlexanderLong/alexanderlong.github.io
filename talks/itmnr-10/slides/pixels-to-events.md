<!-- .slide: class="diagram-slide" -->

## From Pixel Hits to Neutron Events

<div class="tile-grid step-grid">
  <div class="tile" style="grid-area: pic"><p class="tile-label">Pixel hits &rarr; photons &rarr; neutron events</p><img src="images/Reconstruction-Illustraintion.png" width="1111" height="1111" alt="Reconstruction illustration: pixel hits grouped into photons, shown as yellow circles, and photons grouped into one neutron event, shown as a green circle" /></div>
  <div class="tile" style="grid-area: s2"><p class="tile-label"><strong>2.</strong> Cluster pixels</p><img src="images/rawCbq_000000_pixel_clusters_bursts_500x.gif" width="600" height="600" alt="Pixel clusters: pixel hits grouped by position and time, played back 500 times slower than real time" /></div>
  <div class="tile" style="grid-area: s4"><p class="tile-label"><strong>4.</strong> Cluster photons</p><img src="images/rawCbq_000000_photon_clusters_bursts_500x.gif" width="600" height="600" alt="Photon clusters: photons grouped by position and time into neutron events, played back 500 times slower than real time" /></div>
  <div class="tile" style="grid-area: s1"><p class="tile-label"><strong>1.</strong> Unpack and time-sort</p><img src="images/rawCbq_000000_pixels_bursts_500x.gif" width="600" height="600" alt="Pixel hits as recorded by the camera, played back 500 times slower than real time" /></div>
  <div class="tile" style="grid-area: s3"><p class="tile-label"><strong>3.</strong> Reconstruct single photons</p><img src="images/rawCbq_000000_photons_bursts_500x.gif" width="600" height="600" alt="Photons found from the pixel clusters, played back 500 times slower than real time" /></div>
  <div class="tile" style="grid-area: s5"><p class="tile-label"><strong>5.</strong> Reconstruct events</p><img src="images/rawCbq_000000_events_bursts_500x.gif" width="600" height="600" alt="Neutron events found from the photon clusters, played back 500 times slower than real time" /></div>
  <div class="arrow up-right to-photon" style="grid-area: a1" aria-hidden="true"></div>
  <div class="arrow down to-photon" style="grid-area: a2" aria-hidden="true"></div>
  <div class="arrow up-right to-event" style="grid-area: a3" aria-hidden="true"></div>
  <div class="arrow down to-event" style="grid-area: a4" aria-hidden="true"></div>
</div>
