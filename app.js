(() => {
  const DATA = window.KORD_DATA;
  const N = DATA.nativeSize || 8192;
  const bounds = [[-N, 0], [0, N]];

  const mapSelect = document.getElementById("mapSelect");
  const documentFilters = document.getElementById("documentFilters");
  const showAllDocs = document.getElementById("showAllDocs");
  const spawnList = document.getElementById("spawnList");
  const spawnCount = document.getElementById("spawnCount");
  const hudMapName = document.getElementById("hudMapName");
  const hudSpawnCount = document.getElementById("hudSpawnCount");
  const mobileMapName = document.getElementById("mobileMapName");
  const mobileDocSummary = document.getElementById("mobileDocSummary");
  const emptyState = document.getElementById("emptyState");
  const detailsSheet = document.getElementById("detailsSheet");
  const detailsType = document.getElementById("detailsType");
  const detailsTitle = document.getElementById("detailsTitle");
  const detailsDescription = document.getElementById("detailsDescription");
  const detailsMeta = document.getElementById("detailsMeta");
  const closeDetails = document.getElementById("closeDetails");
  const coordReadout = document.getElementById("coordReadout");
  const copyCoord = document.getElementById("copyCoord");

  const sidebar = document.getElementById("sidebar");
  const openSidebar = document.getElementById("openSidebar");
  const closeSidebar = document.getElementById("closeSidebar");
  const sidebarBackdrop = document.getElementById("sidebarBackdrop");

  let currentMapKey = Object.keys(DATA.maps)[0];
  let activeTypes = new Set(DATA.maps[currentMapKey].documents);
  let svgLayer = null;
  let markersLayer = null;
  let selectedCoord = null;

  const map = L.map("map", {
    crs: L.CRS.Simple,
    minZoom: -3,
    maxZoom: 2,
    zoomSnap: 0.25,
    attributionControl: true
  });

  map.setMaxBounds([[-N * 1.3, -N * .3], [N * .3, N * 1.3]]);
  map.fitBounds(bounds);
  L.control.attribution().addAttribution("KordMap / Tarkov community map assets");

  function markerIcon() {
    return L.divIcon({
      className: "custom-marker-wrap",
      html: '<div class="custom-marker"></div>',
      iconSize: [30, 30],
      iconAnchor: [15, 30]
    });
  }

  function toLeafletXY(spawn) {
    // data.jsでは x=左→右, y=上→下 の分かりやすい座標。
    // Leaflet CRS.Simple は [lat, lng] = [-y, x]
    return [-spawn.y, spawn.x];
  }

  function fillMapSelect() {
    mapSelect.innerHTML = "";
    for (const [key, cfg] of Object.entries(DATA.maps)) {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = cfg.label;
      mapSelect.appendChild(option);
    }
    mapSelect.value = currentMapKey;
  }

  function renderFilters() {
    const docs = DATA.maps[currentMapKey].documents;
    documentFilters.innerHTML = "";

    for (const doc of docs) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "filter-button" + (activeTypes.has(doc) ? " active" : "");
      btn.innerHTML = `<span class="doc-dot"></span><span>${escapeHtml(doc)}</span>`;
      btn.addEventListener("click", () => {
        if (activeTypes.has(doc)) activeTypes.delete(doc);
        else activeTypes.add(doc);
        if (activeTypes.size === 0) activeTypes.add(doc);
        renderFilters();
        renderSpawns();
      });
      documentFilters.appendChild(btn);
    }

    mobileDocSummary.textContent = [...activeTypes].join(" / ");
  }

  function renderSpawns() {
    if (markersLayer) markersLayer.clearLayers();

    const visible = DATA.spawns.filter(s =>
      s.map === currentMapKey &&
      activeTypes.has(s.type) &&
      Number.isFinite(s.x) &&
      Number.isFinite(s.y)
    );

    spawnCount.textContent = String(visible.length);
    hudSpawnCount.textContent = String(visible.length);
    spawnList.innerHTML = "";

    if (!visible.length) {
      const p = document.createElement("p");
      p.className = "no-spawns";
      p.textContent = "登録済みの湧き座標はありません。地図をタップして座標を確認し、data.js に追加してください。";
      spawnList.appendChild(p);
      emptyState.classList.remove("hidden");
    } else {
      emptyState.classList.add("hidden");
    }

    for (const spawn of visible) {
      const marker = L.marker(toLeafletXY(spawn), { icon: markerIcon(), title: spawn.title });
      marker.on("click", () => openDetails(spawn));
      marker.addTo(markersLayer);

      const card = document.createElement("button");
      card.type = "button";
      card.className = "spawn-card";
      card.innerHTML = `
        <span class="spawn-card-title">${escapeHtml(spawn.title)}</span>
        <span class="spawn-card-meta">${escapeHtml(spawn.type)}${spawn.floor ? " · " + escapeHtml(spawn.floor) : ""}</span>
      `;
      card.addEventListener("click", () => {
        map.flyTo(toLeafletXY(spawn), Math.max(map.getZoom(), -0.3), { duration: .5 });
        openDetails(spawn);
        closeMobileSidebar();
      });
      spawnList.appendChild(card);
    }
  }

  function openDetails(spawn) {
    detailsType.textContent = spawn.type || "";
    detailsTitle.textContent = spawn.title || "";
    detailsDescription.textContent = spawn.description || "説明なし";
    const meta = [
      spawn.floor ? `Floor: ${spawn.floor}` : null,
      typeof spawn.keyRequired === "boolean" ? `Key: ${spawn.keyRequired ? "Required" : "No"}` : null,
      `x: ${Math.round(spawn.x)}, y: ${Math.round(spawn.y)}`
    ].filter(Boolean);
    detailsMeta.textContent = meta.join(" · ");
    detailsSheet.classList.remove("hidden");
  }

  function closeDetailSheet() {
    detailsSheet.classList.add("hidden");
  }

  function loadCurrentMap() {
    const cfg = DATA.maps[currentMapKey];

    if (svgLayer) {
      map.removeLayer(svgLayer);
      svgLayer = null;
    }
    if (markersLayer) {
      map.removeLayer(markersLayer);
    }
    markersLayer = L.layerGroup().addTo(map);

    svgLayer = L.imageOverlay(cfg.mapUrl, bounds, {
      interactive: false,
      opacity: 1,
      crossOrigin: true
    }).addTo(map);

    map.fitBounds(bounds, { animate: false });
    hudMapName.textContent = cfg.label;
    mobileMapName.textContent = cfg.label;
    closeDetailSheet();
    renderFilters();
    renderSpawns();
  }

  map.on("click", (e) => {
    const x = Math.round(e.latlng.lng);
    const y = Math.round(-e.latlng.lat);
    selectedCoord = { x, y };
    coordReadout.textContent = `x: ${x}, y: ${y}`;
  });

  copyCoord.addEventListener("click", async () => {
    if (!selectedCoord) return;
    const text = `x: ${selectedCoord.x}, y: ${selectedCoord.y}`;
    try {
      await navigator.clipboard.writeText(text);
      const old = copyCoord.textContent;
      copyCoord.textContent = "COPIED";
      setTimeout(() => copyCoord.textContent = old, 900);
    } catch {
      copyCoord.textContent = "SELECT";
    }
  });

  mapSelect.addEventListener("change", () => {
    currentMapKey = mapSelect.value;
    activeTypes = new Set(DATA.maps[currentMapKey].documents);
    loadCurrentMap();
    closeMobileSidebar();
  });

  showAllDocs.addEventListener("click", () => {
    activeTypes = new Set(DATA.maps[currentMapKey].documents);
    renderFilters();
    renderSpawns();
  });

  closeDetails.addEventListener("click", closeDetailSheet);

  function openMobileSidebar() {
    sidebar.classList.add("open");
    sidebarBackdrop.classList.remove("hidden");
  }
  function closeMobileSidebar() {
    sidebar.classList.remove("open");
    sidebarBackdrop.classList.add("hidden");
  }

  openSidebar?.addEventListener("click", openMobileSidebar);
  closeSidebar?.addEventListener("click", closeMobileSidebar);
  sidebarBackdrop?.addEventListener("click", closeMobileSidebar);

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  fillMapSelect();
  loadCurrentMap();

  setTimeout(() => map.invalidateSize(), 80);
  window.addEventListener("resize", () => map.invalidateSize());
})();
