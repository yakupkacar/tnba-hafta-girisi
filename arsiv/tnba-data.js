// T-NBA CHAMPIONSHIP — haftalık veri. Bu dosya otomasyonla üretilir (src/build-data.js | src/derive-week.js).
// prev: takımın geçen haftaki sırası (ilk haftada null) — sıra okları bundan hesaplanır.
export const TEAMS = {
  "Dosma's Crazy Horses": ["DC", "#915A2B", "assets/teams/DC.png"],
  "Sin City Wolves": ["SW", "#5D7285", "assets/teams/SW.jpg"],
  "Ventolins": ["VE", "#1782C4", "assets/teams/VE.jpg"],
  "Cardinals": ["CA", "#A6192E", "assets/teams/CA.jpg"],
  "San Andon Spurs": ["SA", "#8E9296", "assets/teams/SA.jpg"],
  "Kaplıca Gunslingers": ["KG", "#607D8B", "assets/teams/KG.png"],
  "Phoenix Ashes": ["PA", "#C0452B", "assets/teams/PA.jpg"],
  "Borçka Bulls": ["BB", "#CE1141", "assets/teams/BB.jpg"],
  "Peripol Hornets": ["PH", "#00889E", "assets/teams/PH.png"],
  "Wild Butterfli's": ["WB", "#8A5BB0", "assets/teams/WB.png"],
  "Sultan Selim Suns": ["SS", "#E8872B", "assets/teams/SS.jpg"],
  "Dağsu Bears": ["DB", "#4E7A54", "assets/teams/DB.jpg"],
  "Ottoman": ["OT", "#9E2235", "assets/teams/OT.jpg"],
  "God's Wrath": ["GW", "#6A4FA8", "assets/teams/GW.jpg"],
  "Giresun Hazelnuts": ["GH", "#8A6A42", "assets/teams/GH.png"],
  "Eagles": ["EA", "#0E7C4A", "assets/teams/EA.jpg"],
  "Rhizus Hawks": ["RH", "#E03A3E", "assets/teams/RH.jpg"],
  "Wildcats": ["WC", "#3B62C4", "assets/teams/WC.jpg"]
};
export const WEEK = {
  hafta: 14,
  standings: [
    { r: 1, n: "Dosma's Crazy Horses", rec: "98-56-0", form: "WWWWW", prev: 1 },
    { r: 2, n: "Ventolins", rec: "92-60-2", form: "LLLWW", prev: 3 },
    { r: 3, n: "Sin City Wolves", rec: "91-61-2", form: "LWWWL", prev: 2 },
    { r: 4, n: "San Andon Spurs", rec: "82-65-7", form: "WWLWT", prev: 5 },
    { r: 5, n: "Kaplıca Gunslingers", rec: "81-67-6", form: "WWLLT", prev: 6 },
    { r: 6, n: "Cardinals", rec: "82-71-1", form: "WWWWL", prev: 4 },
    { r: 7, n: "Phoenix Ashes", rec: "81-70-3", form: "TLWWW", prev: 7 },
    { r: 8, n: "Borçka Bulls", rec: "78-74-2", form: "WWWWL", prev: 8 },
    { r: 9, n: "Sultan Selim Suns", rec: "78-74-2", form: "LLWWW", prev: 11 },
    { r: 10, n: "Peripol Hornets", rec: "76-75-3", form: "TWWLL", prev: 9 },
    { r: 11, n: "Wild Butterfli's", rec: "76-75-3", form: "LLWLW", prev: 10 },
    { r: 12, n: "Ottoman", rec: "69-84-1", form: "LWWLL", prev: 13 },
    { r: 13, n: "God's Wrath", rec: "68-84-2", form: "WWWLW", prev: 14 },
    { r: 14, n: "Eagles", rec: "67-84-3", form: "LLLLW", prev: 16 },
    { r: 15, n: "Dağsu Bears", rec: "67-85-2", form: "WLLLL", prev: 12 },
    { r: 16, n: "Giresun Hazelnuts", rec: "61-89-4", form: "LLLWL", prev: 15 },
    { r: 17, n: "Rhizus Hawks", rec: "59-92-3", form: "WLLLW", prev: 17 },
    { r: 18, n: "Wildcats", rec: "56-96-2", form: "LLLLL", prev: 18 }
  ],
  matchups: [
    ["Dosma's Crazy Horses", 6, "Sin City Wolves", 5],
    ["Ventolins", 9, "Cardinals", 2],
    ["San Andon Spurs", 4, "Kaplıca Gunslingers", 4],
    ["Phoenix Ashes", 7, "Borçka Bulls", 4],
    ["Peripol Hornets", 3, "Wild Butterfli's", 8],
    ["Sultan Selim Suns", 10, "Dağsu Bears", 1],
    ["Ottoman", 5, "God's Wrath", 6],
    ["Giresun Hazelnuts", 2, "Eagles", 9],
    ["Rhizus Hawks", 6, "Wildcats", 5]
  ],
  leaders: [
    ["FG%", "FIELD GOAL %", ".522", "Eagles"],
    ["FT%", "FREE THROW %", ".865", "Ventolins"],
    ["3PTM", "THREE POINTERS MADE", "83", "Ventolins"],
    ["PTS", "POINTS", "613", "Phoenix Ashes"],
    ["OREB", "OFFENSIVE REBOUNDS", "62", "God's Wrath"],
    ["DREB", "DEFENSIVE REBOUNDS", "181", "Sin City Wolves"],
    ["AST", "ASSISTS", "178", "Sultan Selim Suns"],
    ["ST", "STEALS", "55", "Phoenix Ashes"],
    ["BLK", "BLOCKS", "30", "Dağsu Bears"],
    ["TO", "TURNOVERS", "41", "Dağsu Bears"],
    ["A/T", "ASSIST / TURNOVER", "2.78", "Ventolins"]
  ]
};

// Hafta öncesi fikstür — teaser kartı bunu okur.
export const FIXTURES = {
  hafta: 1,
  pairs: [
    ["Cardinals", "Sin City Wolves"],
    ["Ventolins", "Dağsu Bears"],
    ["God's Wrath", "Giresun Hazelnuts"],
    ["Eagles", "Wild Butterfli's"],
    ["Peripol Hornets", "Rhizus Hawks"],
    ["Wildcats", "Dosma's Crazy Horses"],
    ["Borçka Bulls", "Phoenix Ashes"],
    ["Kaplıca Gunslingers", "San Andon Spurs"],
    ["Sultan Selim Suns", "Ottoman"]
  ]
};
// Kategori lideri OYUNCULAR.
export const PLAYER_LEADERS = [
  ["FG%", "FIELD GOAL %", ".712", "Nikola Jokić", "Ventolins"],
  ["FT%", "FREE THROW %", ".933", "Stephen Curry", "Sin City Wolves"],
  ["3PTM", "THREE POINTERS MADE", "22", "Stephen Curry", "Sin City Wolves"],
  ["PTS", "POINTS", "187", "Luka Dončić", "Dosma's Crazy Horses"],
  ["OREB", "OFFENSIVE REBOUNDS", "19", "Ivica Zubac", "Cardinals"],
  ["DREB", "DEFENSIVE REBOUNDS", "52", "Domantas Sabonis", "Phoenix Ashes"],
  ["AST", "ASSISTS", "54", "Trae Young", "Sultan Selim Suns"],
  ["ST", "STEALS", "13", "Dyson Daniels", "Kaplıca Gunslingers"],
  ["BLK", "BLOCKS", "11", "Victor Wembanyama", "San Andon Spurs"],
  ["TO", "TURNOVERS", "2", "Derrick White", "Borçka Bulls"],
  ["A/T", "ASSIST / TURNOVER", "5.40", "Tyus Jones", "Peripol Hornets"]
];

// Haftanın Maçı — en çekişmeli maç otomatik seçilir.
export const SPOTLIGHT = { index: 2, etiket: "HAFTANIN MAÇI" };

// Şampiyonluk onur listesi — her sezon sonunda elle bir satır eklenir.
export const CHAMPIONS = [
  ["2020-21", "God's Wrath"],
  ["2021-22", "Ventolins"],
  ["2022-23", "Ventolins"],
  ["2023-24", "Rhizus Hawks"],
  ["2024-25", "God's Wrath"],
  ["2025-26", "San Andon Spurs"]
];
