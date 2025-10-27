// src/palette.ts

const gray = {
  "020":"#f6f7f8",
  "040":"#f4f4f5",
  "060":"#eeeff1",
  "080":"#e8eaec",
  "100":"#e3e5e7",
  "200":"#c7cbd0",
  "300":"#abb2b8",
  "400":"#919aa2",
  "500":"#77828c",
  "600":"#636c74",
  "700":"#50575d",
  "800":"#3e4347",
  "900":"#2c2f32",
  "920":"#26282b",
  "940":"#222426",
  "960":"#1e1f21",
  "980":"#18191a",
  "1000":"#131415",
  "1020":"#0e0f10",
  "1040":"#0b0c0d"
};

const red = {
  "050":"#ffeceb",
  "100":"#ffd9d7",
  "200":"#ffb3b0",
  "300":"#fc8c8a",
  "400":"#f26167",
  "500":"#e62845",
  "600":"#be273a",
  "700":"#982430",
  "800":"#732026",
  "900":"#501a1d",
  "950":"#371516"
};

const orange = {
  "050":"#fff0e7",
  "100":"#ffe2cf",
  "200":"#ffc4a0",
  "300":"#ffa772",
  "400":"#ff8843",
  "500":"#ff6800",
  "600":"#d2580a",
  "700":"#a8480f",
  "800":"#7f3810",
  "900":"#58290f",
  "950":"#3c1e0d"
};

const yellow = {
  "050": "#fff9ea",
  "100": "#fff4d5",
  "200": "#ffe9ab",
  "300": "#ffde80",
  "400": "#ffd352",
  "500": "#ffc900",
  "600": "#d2a611",
  "700": "#a78416",
  "800": "#7e6317",
  "900": "#564515",
  "950": "#3b2f12"
};

const green = {
  "050": "#ecf8ee",
  "100": "#d8f0dd",
  "200": "#b0e1bb",
  "300": "#87d29a",
  "400": "#59c27a",
  "500": "#00b15a",
  "600": "#13924c",
  "700": "#19753e",
  "800": "#1a5931",
  "900": "#173e24",
  "950": "#142b1a"
};

const lime = {
  "050": "#eef7e8",
  "100": "#ddefd1",
  "200": "#badea3",
  "300": "#96cd76",
  "400": "#6fbc48",
  "500": "#40ab00",
  "600": "#398e0c",
  "700": "#317111",
  "800": "#295612",
  "900": "#203c11",
  "950": "#192a0f"
};

const teal = {
  "050": "#edf9f7",
  "100": "#dbf2f0",
  "200": "#b5e6e1",
  "300": "#8ed9d3",
  "400": "#5fcbc4",
  "500": "#00beb6",
  "600": "#169d96",
  "700": "#1c7d78",
  "800": "#1d5f5b",
  "900": "#1a423f",
  "950": "#162d2b"
};

const cyan = {
  "050": "#eff7ff",
  "100": "#def0fe",
  "200": "#bce0fd",
  "300": "#96d1fb",
  "400": "#68c3fa",
  "500": "#00b4f8",
  "600": "#1a95cc",
  "700": "#2177a1",
  "800": "#215a79",
  "900": "#1d3e53",
  "950": "#182b38"
};

const blue = {
  "050": "#eff0ff",
  "100": "#dfe1ff",
  "200": "#bdc5ff",
  "300": "#98a9ff",
  "400": "#6a8eff",
  "500": "#0075ff",
  "600": "#1b61d2",
  "700": "#214fa6",
  "800": "#213c7c",
  "900": "#1e2b55",
  "950": "#181f39"
};

const indigo = {
  "050": "#f5ecff",
  "100": "#ead9ff",
  "200": "#d3b3ff",
  "300": "#b98eff",
  "400": "#9c68ff",
  "500": "#7740ff",
  "600": "#6537d2",
  "700": "#532fa6",
  "800": "#41267c",
  "900": "#301d55",
  "950": "#23163a"
};

const violet = {
  "050": "#f6ecfd",
  "100": "#ecd9fc",
  "200": "#d8b3f8",
  "300": "#c28df3",
  "400": "#aa67ee",
  "500": "#8e3de8",
  "600": "#7735bf",
  "700": "#602d98",
  "800": "#4a2572",
  "900": "#351d4e",
  "950": "#261635"
};

const purple = {
  "050": "#f9ebfa",
  "100": "#f2d7f5",
  "200": "#e4b0ea",
  "300": "#d388e0",
  "400": "#c25ed5",
  "500": "#ae29c9",
  "600": "#9027a6",
  "700": "#742384",
  "800": "#581f64",
  "900": "#3e1945",
  "950": "#2b142f"
};

const pink = {
  "050": "#ffecf0",
  "100": "#ffd9e1",
  "200": "#fcb3c3",
  "300": "#f68ca7",
  "400": "#ed618b",
  "500": "#e12871",
  "600": "#ba275e",
  "700": "#94244c",
  "800": "#70203b",
  "900": "#4e1b2a",
  "950": "#36151e"
};

const amber = {
  "050": "#fff6e9",
  "100": "#ffecd2",
  "200": "#ffdaa7",
  "300": "#ffc87b",
  "400": "#ffb64c",
  "500": "#ffa500",
  "600": "#d2890e",
  "700": "#a76d13",
  "800": "#7e5314",
  "900": "#573a13",
  "950": "#3b2810"
};

const brown = {
  "050": "#faefe9",
  "100": "#f5e0d3",
  "200": "#e9c1a9",
  "300": "#daa481",
  "400": "#ca8759",
  "500": "#b76a32",
  "600": "#98592b",
  "700": "#7a4825",
  "800": "#5d381e",
  "900": "#412818",
  "950": "#2d1d12"
};

export type Roles = {
  bg: {
    editor: string;    // main editor background (brightest in light, darkest in dark)
    window: string;    // sidebar, activity bar, status bar, title bar, inactive tabs
    inset: string;     // inputs, dropdowns
    elevated: string;  // panels, hover backgrounds
  };
  fg: { base: string; fg1: string; fg2: string; fg3: string; fg4: string };
  border: {
    window: string;           // borders for sidebar, activity bar, status bar, title bar
    editor: string;           // general editor borders
    indentGuide: string;      // indent guide lines
    indentGuideActive: string; // active indent guide line
    inset: string;            // borders for inputs, dropdowns
    elevated: string;         // borders for panels
  };
  accent: { primary: string; link: string; subtle: string; contrastOnAccent: string };
  states: { merge: string, success: string; danger: string; warn: string; info: string };
  syntax: {
    comment: string; string: string; number: string; keyword: string;
    regexp: string; func: string; type: string; variable: string;
    // Extended token types
    operator: string; punctuation: string; constant: string;
    parameter: string; namespace: string; decorator: string;
    escape: string; invalid: string; tag: string; attribute: string;
  };
  ansi: {
    black: string; red: string; green: string; yellow: string;
    blue: string; magenta: string; cyan: string; white: string;
    brightBlack: string; brightRed: string; brightGreen: string; brightYellow: string;
    brightBlue: string; brightMagenta: string; brightCyan: string; brightWhite: string;
  };
};

export const light: Roles = {
  bg: {
    editor: "#ffffff",
    window: gray["060"],
    inset: gray["080"],
    elevated: gray["040"]
  },
  fg: {
    base: gray["1040"],
    fg1: gray["900"],
    fg2: gray["800"],
    fg3: gray["600"],
    fg4: gray["500"]
  },
  border: {
    window: gray["100"],
    editor: gray["200"],
    indentGuide: gray["100"],
    indentGuideActive: gray["200"],
    inset: gray["200"],
    elevated: gray["100"]
  },
  accent: {
    primary: blue["500"],
    link: blue["500"],
    subtle: blue["100"],
    contrastOnAccent: "#ffffff"
  },
  states: {
    merge: indigo["500"],
    success: green["500"],
    danger: red["500"],
    warn: yellow["500"],
    info: cyan["500"]
  },
  syntax: {
    comment: gray["600"],
    string: green["600"],
    number: cyan["600"],
    keyword: pink["500"],
    regexp: teal["600"],
    func: indigo["500"],
    type: violet["500"],
    variable: orange["600"],
    // Extended token types
    operator: cyan["500"],
    punctuation: gray["700"],
    constant: yellow["600"],
    parameter: gray["700"],
    namespace: yellow["600"],
    decorator: blue["500"],
    escape: cyan["600"],
    invalid: "#ffffff",
    tag: red["600"],
    attribute: teal["600"]
  },
  ansi: {
    black: gray["980"],
    red: red["500"],
    green: green["500"],
    yellow: yellow["500"],
    blue: blue["500"],
    magenta: purple["500"],
    cyan: cyan["500"],
    white: gray["300"],
    // make bright colors match the non-bright counterparts
    brightBlack: gray["980"],
    brightRed: red["500"],
    brightGreen: green["500"],
    brightYellow: yellow["500"],
    brightBlue: blue["500"],
    brightMagenta: purple["500"],
    brightCyan: cyan["500"],
    brightWhite: gray["300"]
  }
};

export const dark: Roles = {
  bg: {
    editor: gray["1040"],
    window: gray["1000"],
    inset: gray["980"],
    elevated: gray["1020"]
  },
  fg: {
    base: gray["020"],
    fg1: gray["200"],
    fg2: gray["400"],
    fg3: gray["600"],
    fg4: gray["700"]
  },
  border: {
    window: gray["1040"],
    editor: gray["920"],
    indentGuide: gray["940"],
    indentGuideActive: gray["960"],
    inset: gray["920"],
    elevated: gray["960"]
  },
  accent: {
    primary: blue["600"],
    link: blue["600"],
    subtle: blue["950"],
    contrastOnAccent: gray["1040"]
  },
  states: {
    merge: indigo["500"],
    success: green["500"],
    danger: red["500"],
    warn: yellow["500"],
    info: cyan["500"]
  },
  syntax: {
    comment: gray["600"],
    string: green["400"],
    number: cyan["400"],
    keyword: pink["400"],
    regexp: teal["400"],
    func: indigo["400"],
    type: violet["400"],
    variable: orange["400"],
    // Extended token types
    operator: cyan["500"],
    punctuation: gray["700"],
    constant: yellow["400"],
    parameter: gray["400"],
    namespace: yellow["500"],
    decorator: blue["400"],
    escape: cyan["400"],
    invalid: "#ffffff",
    tag: red["400"],
    attribute: teal["400"]
  },
  ansi: {
    black: gray["1000"],
    red: red["500"],
    green: green["500"],
    yellow: yellow["500"],
    blue: blue["500"],
    magenta: purple["500"],
    cyan: cyan["500"],
    white: gray["300"],
    brightBlack: gray["1000"],
    brightRed: red["500"],
    brightGreen: green["500"],
    brightYellow: yellow["500"],
    brightBlue: blue["500"],
    brightMagenta: purple["500"],
    brightCyan: cyan["500"],
    brightWhite: gray["300"]
  }
};
