// T-NBA CHAMPIONSHIP — haftalık veri. Her hafta SADECE bu dosya güncellenir.
// prev: takımın geçen haftaki sırası (ilk haftada null) — sıra okları bundan hesaplanır.
export const TEAMS = {
  "Dosma's Crazy Horses": ["DC", "#915A2B"],
  "Sin City Wolves": ["SW", "#5D7285"],
  "Ventolins": ["VE", "#1782C4"],
  "Cardinals": ["CA", "#A6192E"],
  "San Andon Spurs": ["SA", "#8E9296"],
  "Kaplıca Gunslingers": ["KG", "#607D8B"],
  "Phoenix Ashes": ["PA", "#C0452B"],
  "Borçka Bulls": ["BB", "#CE1141"],
  "Peripol Hornets": ["PH", "#00889E"],
  "Wild Butterfli's": ["WB", "#8A5BB0"],
  "Sultan Selim Suns": ["SS", "#E8872B"],
  "Dağsu Bears": ["DB", "#4E7A54"],
  "Ottoman": ["OT", "#9E2235"],
  "God's Wrath": ["GW", "#6A4FA8"],
  "Giresun Hazelnuts": ["GH", "#8A6A42"],
  "Eagles": ["EA", "#0E7C4A"],
  "Rhizus Hawks": ["RH", "#E03A3E"],
  "Wildcats": ["WC", "#3B62C4"]
};
export const WEEK = {
  hafta: 13,
  standings: [
    { r: 1, n: "Dosma's Crazy Horses", rec: "92-51-0", form: "LWWWW", prev: null },
    { r: 2, n: "Sin City Wolves", rec: "86-55-2", form: "WLWWW", prev: null },
    { r: 3, n: "Ventolins", rec: "83-58-2", form: "WLLLW", prev: null },
    { r: 4, n: "Cardinals", rec: "80-62-1", form: "LWWWW", prev: null },
    { r: 5, n: "San Andon Spurs", rec: "78-61-4", form: "WWWLW", prev: null },
    { r: 6, n: "Kaplıca Gunslingers", rec: "77-63-3", form: "WWWLL", prev: null },
    { r: 7, n: "Phoenix Ashes", rec: "74-66-3", form: "LTLWW", prev: null },
    { r: 8, n: "Borçka Bulls", rec: "74-67-2", form: "LWWWW", prev: null },
    { r: 9, n: "Peripol Hornets", rec: "73-67-3", form: "LTWWL", prev: null },
    { r: 10, n: "Wild Butterfli's", rec: "68-72-3", form: "WLLWL", prev: null },
    { r: 11, n: "Sultan Selim Suns", rec: "68-73-2", form: "WLLWW", prev: null },
    { r: 12, n: "Dağsu Bears", rec: "66-75-2", form: "WWLLL", prev: null },
    { r: 13, n: "Ottoman", rec: "64-78-1", form: "LLWWL", prev: null },
    { r: 14, n: "God's Wrath", rec: "62-79-2", form: "LWWWL", prev: null },
    { r: 15, n: "Giresun Hazelnuts", rec: "59-80-4", form: "LLLLW", prev: null },
    { r: 16, n: "Eagles", rec: "58-82-3", form: "LLLLL", prev: null },
    { r: 17, n: "Rhizus Hawks", rec: "53-87-3", form: "WWLLL", prev: null },
    { r: 18, n: "Wildcats", rec: "51-90-2", form: "LLLLL", prev: null }
  ],
  matchups: [
    ["Dosma's Crazy Horses", 8, "Eagles", 3],
    ["Sin City Wolves", 6, "Wild Butterfli's", 5],
    ["Kaplıca Gunslingers", 2, "Ventolins", 9],
    ["San Andon Spurs", 8, "Dağsu Bears", 3],
    ["Cardinals", 9, "Rhizus Hawks", 2],
    ["Peripol Hornets", 5, "Borçka Bulls", 6],
    ["Phoenix Ashes", 6, "God's Wrath", 5],
    ["Sultan Selim Suns", 8, "Wildcats", 3],
    ["Ottoman", 5, "Giresun Hazelnuts", 6]
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
