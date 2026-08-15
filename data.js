window.KORD_DATA = {
  nativeSize: 8192,

  maps: {
    Customs: {
      label: "Customs",
      mapUrl: "https://raw.githubusercontent.com/the-hideout/tarkov-dev-svg-maps/refs/heads/main/Customs.svg",
      documents: ["Financial documents", "Project documentation"]
    },
    Factory: {
      label: "Factory",
      mapUrl: "https://raw.githubusercontent.com/the-hideout/tarkov-dev-svg-maps/refs/heads/main/Factory.svg",
      documents: ["Blueprints and technical documentation", "Project documentation"]
    },
    GroundZero: {
      label: "Ground Zero",
      mapUrl: "https://raw.githubusercontent.com/the-hideout/tarkov-dev-svg-maps/refs/heads/main/GroundZero.svg",
      documents: ["Medical documents", "User documentation"]
    },
    Icebreaker: {
      label: "Icebreaker",
      mapUrl: "https://raw.githubusercontent.com/KalleLeskinen/KordMap/refs/heads/New-Maps/kord-map-rw/public/Custom%20Maps/Icebreaker/Icebreaker.svg",
      documents: ["Pmc personnel files", "Test documentation"]
    },
    Interchange: {
      label: "Interchange",
      mapUrl: "https://raw.githubusercontent.com/the-hideout/tarkov-dev-svg-maps/refs/heads/main/Interchange.svg",
      documents: ["Blueprints and technical documentation", "Financial documents"]
    },
    Labs: {
      label: "Labs",
      mapUrl: "https://raw.githubusercontent.com/the-hideout/tarkov-dev-svg-maps/refs/heads/main/Labs.svg",
      documents: ["Medical documents", "User documentation"]
    },
    Lighthouse: {
      label: "Lighthouse",
      mapUrl: "https://raw.githubusercontent.com/KalleLeskinen/KordMap/refs/heads/New-Maps/kord-map-rw/public/Custom%20Maps/Lighthouse.svg",
      documents: ["Pmc personnel files", "Technical documentation"]
    },
    Reserve: {
      label: "Reserve",
      mapUrl: "https://raw.githubusercontent.com/KalleLeskinen/KordMap/refs/heads/New-Maps/kord-map-rw/public/Custom%20Maps/Reserve.svg",
      documents: ["Pmc personnel files", "Project documentation"]
    },
    Shoreline: {
      label: "Shoreline",
      mapUrl: "https://raw.githubusercontent.com/the-hideout/tarkov-dev-svg-maps/refs/heads/main/Shoreline.svg",
      documents: ["Test documentation", "Technical documentation"]
    },
    StreetsOfTarkov: {
      label: "Streets of Tarkov",
      mapUrl: "https://raw.githubusercontent.com/the-hideout/tarkov-dev-svg-maps/refs/heads/main/StreetsOfTarkov.svg",
      documents: ["Financial documents", "User documentation"]
    },
    TheLabyrinth: {
      label: "The Labyrinth",
      mapUrl: "https://raw.githubusercontent.com/KalleLeskinen/KordMap/refs/heads/New-Maps/kord-map-rw/public/Custom%20Maps/Labyrinth/Labyrinth.svg",
      documents: ["Blueprints and technical documentation", "Medical documents"]
    },
    Woods: {
      label: "Woods",
      mapUrl: "https://raw.githubusercontent.com/KalleLeskinen/KordMap/refs/heads/New-Maps/kord-map-rw/public/Custom%20Maps/Woods.svg",
      documents: ["Test documentation", "Technical documentation"]
    }
  },

  /*
    confidence:
      verified  = multiple/strong evidence + coordinate confirmed
      community = concrete community/guide report, coordinate not necessarily confirmed
      area      = area/building-level report only

    x/y are intentionally omitted until the point is confirmed against the 8192 map coordinate system.
    The UI will still show these entries as "座標未確定".
  */
  spawns: [
    {
      id: "customs-fin-2story-dorms-guard-desk",
      map: "Customs",
      type: "Financial documents",
      title: "2-story Dorms entrance guard desk",
      description: "2階建て寮の入口にある警備員デスク。Financial documents の発見報告あり。",
      floor: "1F / entrance",
      keyRequired: false,
      confidence: "community",
      source: "Escorenews (2026-08-04)"
    },
    {
      id: "customs-fin-red-warehouse-area",
      map: "Customs",
      type: "Financial documents",
      title: "Red Customs warehouse / office area",
      description: "赤倉庫（Big Red）側のFinancial documents候補。攻略記事でも候補として挙げられているが、種類固定は未確認。",
      floor: "Office area",
      keyRequired: false,
      confidence: "area",
      source: "Escorenews preliminary community map (2026-08-04)"
    },
    {
      id: "factory-doc-office-desk-filecabinet",
      map: "Factory",
      type: "Project documentation",
      title: "Office desk / file cabinet area",
      description: "Factoryのオフィス系デスク周辺。机の側面、机とファイルキャビネットの間にもスポーン報告あり。",
      floor: "Office area",
      keyRequired: false,
      confidence: "community",
      source: "Escorenews (2026-08-04)"
    },
    {
      id: "factory-blueprint-office-desk-filecabinet",
      map: "Factory",
      type: "Blueprints and technical documentation",
      title: "Office desk / file cabinet area",
      description: "FactoryではBlueprints and technical documentationも複数地点に出現。記事のスクリーンショット群でオフィス/デスク周辺のスポーンが報告されている。",
      floor: "Office area",
      keyRequired: false,
      confidence: "community",
      source: "Escorenews (2026-08-04)"
    }
  ],

  evidence: [
    {
      id: "bsg-battlepass-docs",
      label: "Battlestate Games official announcement",
      note: "Kord Breach Battle Pass progression uses TerraGroup documentation found during raids; loot behaves similarly to task items for multiple players.",
      url: "https://t.me/s/escapefromtarkovEN"
    },
    {
      id: "escorenews-customs",
      label: "Escorenews - Customs KORD documents",
      note: "Financial documents reported at the guard desk at the entrance of 2-story Dorms; preliminary Customs community map.",
      url: "https://escorenews.com/en/article/80029-where-to-find-financial-documents-for-battle-pass-in-tarkov-documentation-spawn-locations-on-customs"
    },
    {
      id: "escorenews-factory",
      label: "Escorenews - Factory KORD documents",
      note: "Project documentation and Blueprints and technical documentation spawn on Factory; multiple user-found spawn screenshots, including desk/file-cabinet area.",
      url: "https://escorenews.com/en/article/80013-where-to-find-documents-on-factory-for-tarkov-s-battle-pass-project-documentation-and-blueprints-and-technical-documentation-spawn-points"
    }
  ]
};
