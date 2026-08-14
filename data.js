// KORD Document Tracker static data
// DBなし / localStorageなし。
// 湧き位置は `spawns` に直書きしてください。
// 座標系は KordMap と同じ 8192 x 8192 のシンプル座標。
// map上をタップすると x/y を確認できます。

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

  // 例:
  // {
  //   id: "customs-fin-001",
  //   map: "Customs",
  //   type: "Financial documents",
  //   title: "Crackhouse 2F",
  //   description: "本棚付近。位置を確認してから座標を入れる。",
  //   x: 5100,
  //   y: 4200,
  //   floor: "2F",
  //   keyRequired: false
  // }
  //
  // ※ x/y の例はサンプルです。実際の湧き座標として使用しないでください。
  spawns: []
};
