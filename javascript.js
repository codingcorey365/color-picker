const categories = [
  {
    name: "Reds / Pinks",
    colors: [
      ["DarkRed", "#8B0000"],
      ["Maroon", "#800000"],
      ["Brown", "#A52A2A"],
      ["FireBrick", "#B22222"],
      ["Crimson", "#DC143C"],
      ["MediumVioletRed", "#C71585"],
      ["DeepPink", "#FF1493"],
      ["Red", "#FF0000"],
      ["IndianRed", "#CD5C5C"],
      ["PaleVioletRed", "#DB7093"],
      ["HotPink", "#FF69B4"],
      ["LightCoral", "#F08080"],
      ["Salmon", "#FA8072"],
      ["DarkSalmon", "#E9967A"],
      ["LightSalmon", "#FFA07A"],
      ["RosyBrown", "#BC8F8F"],
      ["Pink", "#FFC0CB"],
      ["LightPink", "#FFB6C1"],
      ["MistyRose", "#FFE4E1"]
    ]
  },
  {
    name: "Oranges / Browns",
    colors: [
      ["SaddleBrown", "#8B4513"],
      ["Sienna", "#A0522D"],
      ["Chocolate", "#D2691E"],
      ["Peru", "#CD853F"],
      ["DarkGoldenRod", "#B8860B"],
      ["GoldenRod", "#DAA520"],
      ["OrangeRed", "#FF4500"],
      ["DarkOrange", "#FF8C00"],
      ["Tomato", "#FF6347"],
      ["Coral", "#FF7F50"],
      ["SandyBrown", "#F4A460"],
      ["Orange", "#FFA500"],
      ["BurlyWood", "#DEB887"],
      ["Tan", "#D2B48C"],
      ["NavajoWhite", "#FFDEAD"],
      ["PeachPuff", "#FFDAB9"],
      ["Moccasin", "#FFE4B5"],
      ["Bisque", "#FFE4C4"],
      ["BlanchedAlmond", "#FFEBCD"],
      ["PapayaWhip", "#FFEFD5"],
      ["AntiqueWhite", "#FAEBD7"],
      ["Linen", "#FAF0E6"]
    ]
  },
  {
    name: "Yellows / Golds",
    colors: [
      ["Olive", "#808000"],
      ["OliveDrab", "#6B8E23"],
      ["DarkKhaki", "#BDB76B"],
      ["Gold", "#FFD700"],
      ["Khaki", "#F0E68C"],
      ["PaleGoldenRod", "#EEE8AA"],
      ["Yellow", "#FFFF00"],
      ["LightGoldenRodYellow", "#FAFAD2"],
      ["LemonChiffon", "#FFFACD"],
      ["LightYellow", "#FFFFE0"],
      ["Cornsilk", "#FFF8DC"]
    ]
  },
  {
    name: "Greens",
    colors: [
      ["DarkGreen", "#006400"],
      ["Green", "#008000"],
      ["ForestGreen", "#228B22"],
      ["SeaGreen", "#2E8B57"],
      ["DarkOliveGreen", "#556B2F"],
      ["MediumSeaGreen", "#3CB371"],
      ["LimeGreen", "#32CD32"],
      ["YellowGreen", "#9ACD32"],
      ["Lime", "#00FF00"],
      ["Chartreuse", "#7FFF00"],
      ["LawnGreen", "#7CFC00"],
      ["GreenYellow", "#ADFF2F"],
      ["SpringGreen", "#00FF7F"],
      ["MediumSpringGreen", "#00FA9A"],
      ["DarkSeaGreen", "#8FBC8F"],
      ["LightGreen", "#90EE90"],
      ["PaleGreen", "#98FB98"],
      ["HoneyDew", "#F0FFF0"]
    ]
  },
  {
    name: "Cyans / Teals",
    colors: [
      ["DarkSlateGray", "#2F4F4F"],
      ["DarkSlateGrey", "#2F4F4F"],
      ["Teal", "#008080"],
      ["DarkCyan", "#008B8B"],
      ["LightSeaGreen", "#20B2AA"],
      ["CadetBlue", "#5F9EA0"],
      ["DarkTurquoise", "#00CED1"],
      ["MediumAquaMarine", "#66CDAA"],
      ["MediumTurquoise", "#48D1CC"],
      ["Turquoise", "#40E0D0"],
      ["Aqua", "#00FFFF"],
      ["Cyan", "#00FFFF"],
      ["Aquamarine", "#7FFFD4"],
      ["PaleTurquoise", "#AFEEEE"],
      ["LightCyan", "#E0FFFF"],
      ["Azure", "#F0FFFF"],
      ["MintCream", "#F5FFFA"]
    ]
  },
  {
    name: "Blues",
    colors: [
      ["Navy", "#000080"],
      ["DarkBlue", "#00008B"],
      ["MediumBlue", "#0000CD"],
      ["Blue", "#0000FF"],
      ["MidnightBlue", "#191970"],
      ["DarkSlateBlue", "#483D8B"],
      ["RoyalBlue", "#4169E1"],
      ["SlateBlue", "#6A5ACD"],
      ["MediumSlateBlue", "#7B68EE"],
      ["SteelBlue", "#4682B4"],
      ["DodgerBlue", "#1E90FF"],
      ["CornflowerBlue", "#6495ED"],
      ["DeepSkyBlue", "#00BFFF"],
      ["SkyBlue", "#87CEEB"],
      ["LightSkyBlue", "#87CEFA"],
      ["LightSteelBlue", "#B0C4DE"],
      ["LightBlue", "#ADD8E6"],
      ["PowderBlue", "#B0E0E6"],
      ["AliceBlue", "#F0F8FF"]
    ]
  },
  {
    name: "Purples / Violets",
    colors: [
      ["Indigo", "#4B0082"],
      ["Purple", "#800080"],
      ["DarkMagenta", "#8B008B"],
      ["DarkViolet", "#9400D3"],
      ["DarkOrchid", "#9932CC"],
      ["BlueViolet", "#8A2BE2"],
      ["RebeccaPurple", "#663399"],
      ["MediumPurple", "#9370DB"],
      ["MediumOrchid", "#BA55D3"],
      ["Orchid", "#DA70D6"],
      ["Violet", "#EE82EE"],
      ["Plum", "#DDA0DD"],
      ["Thistle", "#D8BFD8"],
      ["Lavender", "#E6E6FA"],
      ["LavenderBlush", "#FFF0F5"],
      ["Fuchsia", "#FF00FF"],
      ["Magenta", "#FF00FF"]
    ]
  },
  {
    name: "Neutrals / Grays / Whites",
    colors: [
      ["Black", "#000000"],
      ["DimGray", "#696969"],
      ["DimGrey", "#696969"],
      ["Gray", "#808080"],
      ["Grey", "#808080"],
      ["SlateGray", "#708090"],
      ["SlateGrey", "#708090"],
      ["LightSlateGray", "#778899"],
      ["LightSlateGrey", "#778899"],
      ["DarkGray", "#A9A9A9"],
      ["DarkGrey", "#A9A9A9"],
      ["Silver", "#C0C0C0"],
      ["LightGray", "#D3D3D3"],
      ["LightGrey", "#D3D3D3"],
      ["Gainsboro", "#DCDCDC"],
      ["WhiteSmoke", "#F5F5F5"],
      ["GhostWhite", "#F8F8FF"],
      ["FloralWhite", "#FFFAF0"],
      ["SeaShell", "#FFF5EE"],
      ["OldLace", "#FDF5E6"],
      ["Beige", "#F5F5DC"],
      ["Ivory", "#FFFFF0"],
      ["Snow", "#FFFAFA"],
      ["White", "#FFFFFF"]
    ]
  }
];

function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  const bigint = parseInt(clean, 16);

  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255
  };
}

function getLuminance(hex) {
  const { r, g, b } = hexToRgb(hex);

  const srgb = [r, g, b].map((value) => {
    const c = value / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
}

function getContrastText(hex) {
  return getLuminance(hex) > 0.45 ? "#111111" : "#ffffff";
}

function getChipBackground(hex) {
  return getLuminance(hex) > 0.45
    ? "rgba(255,255,255,0.72)"
    : "rgba(0,0,0,0.34)";
}

function copyText(text, button) {
  navigator.clipboard.writeText(text).then(() => {
    const originalText = button.textContent;
    button.textContent = "Copied";
    button.classList.add("copied");

    setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove("copied");
    }, 1100);
  });
}

function createCard(name, hex, familyName) {
  const luminance = getLuminance(hex);
  const swatchText = getContrastText(hex);
  const chipBg = getChipBackground(hex);

  const card = document.createElement("article");
  card.className = "card";
  card.dataset.search = `${name} ${hex} ${familyName}`.toLowerCase();

  const swatch = document.createElement("div");
  swatch.className = "swatch";
  swatch.style.background = hex;

  const chip = document.createElement("span");
  chip.className = "chip";
  chip.textContent = name;
  chip.style.color = swatchText;
  chip.style.background = chipBg;

  swatch.appendChild(chip);

  const body = document.createElement("div");
  body.className = "card-body";

  const title = document.createElement("h3");
  title.className = "name";
  title.textContent = name;

  const hexLine = document.createElement("p");
  hexLine.className = "hex";
  hexLine.textContent = hex;

  const details = document.createElement("div");
  details.className = "details";
  details.innerHTML = `
    <div class="detail-box">
      <span class="detail-label">Family</span>
      <span>${familyName}</span>
    </div>
    <div class="detail-box">
      <span class="detail-label">Brightness</span>
      <span>${Math.round(luminance * 100)}%</span>
    </div>
  `;

  const actions = document.createElement("div");
  actions.className = "actions";

  const copyNameBtn = document.createElement("button");
  copyNameBtn.type = "button";
  copyNameBtn.textContent = "Copy name";
  copyNameBtn.addEventListener("click", () => copyText(name, copyNameBtn));

  const copyHexBtn = document.createElement("button");
  copyHexBtn.type = "button";
  copyHexBtn.textContent = "Copy hex";
  copyHexBtn.addEventListener("click", () => copyText(hex, copyHexBtn));

  actions.append(copyNameBtn, copyHexBtn);
  body.append(title, hexLine, details, actions);
  card.append(swatch, body);

  return card;
}

function renderCategories(filter = "") {
  const app = document.getElementById("app");
  app.innerHTML = "";

  const normalizedFilter = filter.trim().toLowerCase();
  let visibleCount = 0;

  categories.forEach((category) => {
    const section = document.createElement("section");
    section.className = "category";

    const header = document.createElement("div");
    header.className = "category-header";

    const title = document.createElement("h2");
    title.className = "category-title";
    title.textContent = category.name;

    const meta = document.createElement("div");
    meta.className = "category-meta";

    const grid = document.createElement("div");
    grid.className = "grid";

    let sectionCount = 0;

    category.colors.forEach(([name, hex]) => {
      const card = createCard(name, hex, category.name);
      const haystack = card.dataset.search;

      if (!normalizedFilter || haystack.includes(normalizedFilter)) {
        grid.appendChild(card);
        sectionCount++;
        visibleCount++;
      }
    });

    if (sectionCount > 0) {
      meta.textContent = `${sectionCount} color${sectionCount === 1 ? "" : "s"}`;
      header.append(title, meta);
      section.append(header, grid);
      app.appendChild(section);
    }
  });

  const resultsText = document.getElementById("resultsText");
  resultsText.textContent = normalizedFilter
    ? `Showing ${visibleCount} matching color${visibleCount === 1 ? "" : "s"}`
    : "Showing all 140 colors";
}

document.getElementById("searchInput").addEventListener("input", (event) => {
  renderCategories(event.target.value);
});

renderCategories();