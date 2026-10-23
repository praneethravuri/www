import { writeFileSync } from "node:fs";

// Orthographic isometric drafting: no perspective, lighting, or raster effects.
const project = ([x, y, z]) => [480 + (x - y) * 0.866 * 4, 240 + (x + y) * 2 - z * 4];
const points = (vertices) => vertices.map((point) => project(point).join(",")).join(" ");
const line = (vertices, color = "#9b9997", dash = false, width = 1) =>
  `<polyline points="${points(vertices)}" fill="none" stroke="${color}" stroke-width="${width}"${dash ? ' stroke-dasharray="4 5"' : ""}/>`;
const face = (vertices, fill = "#1c1b1b", stroke = "#d8d5d2") =>
  `<polygon points="${points(vertices)}" fill="${fill}" stroke="${stroke}" stroke-width="1"/>`;
const orange = "#FF5D20";
const plane = (x, y, z, w, d, stroke = "#d8d5d2") =>
  face(
    [
      [x, y, z],
      [x + w, y, z],
      [x + w, y + d, z],
      [x, y + d, z],
    ],
    "#191818",
    stroke
  );
function box(x, y, z, w, d, h, accent = false) {
  const c = accent ? orange : "#d8d5d2";
  return [
    line(
      [
        [x, y, z + h],
        [x, y, z],
        [x + w, y, z],
      ],
      "#555150",
      true
    ),
    face(
      [
        [x, y + d, z],
        [x + w, y + d, z],
        [x + w, y + d, z + h],
        [x, y + d, z + h],
      ],
      "#201e1d",
      c
    ),
    face(
      [
        [x + w, y, z],
        [x + w, y + d, z],
        [x + w, y + d, z + h],
        [x + w, y, z + h],
      ],
      "#171616",
      c
    ),
    plane(x, y, z + h, w, d, c),
  ].join("");
}
const datum = () => [
  line(
    [
      [-57, 0, 0],
      [57, 0, 0],
    ],
    "#44403e",
    true
  ),
  line(
    [
      [0, -57, 0],
      [0, 57, 0],
    ],
    "#44403e",
    true
  ),
  line(
    [
      [0, 0, -4],
      [0, 0, 52],
    ],
    "#44403e",
    true
  ),
];
const tether = () => [
  ...datum(),
  ...[
    [-40, -30],
    [26, -30],
    [-40, 28],
    [26, 28],
  ].map(([x, y]) =>
    line(
      [
        [x + 7, y + 6, 12],
        [x + 7, 0, 12],
        [0, 0, 12],
      ],
      orange,
      false,
      1.5
    )
  ),
  ...[
    [-40, -30],
    [26, -30],
    [-40, 28],
    [26, 28],
  ].map(([x, y]) => box(x, y, 0, 14, 12, 18)),
  box(-11, -11, 0, 22, 22, 24, true),
  plane(-11, -11, 35, 22, 22),
  ...[
    [-11, -11],
    [11, -11],
    [11, 11],
    [-11, 11],
  ].map(([x, y]) =>
    line(
      [
        [x, y, 24],
        [x, y, 35],
      ],
      "#77716e",
      true
    )
  ),
];
const gary = () => [
  ...datum(),
  ...[-36, -6, 24].flatMap((x, i) => [
    box(x, -12, 0, 15, 24, 12 + i * 9, i === 1),
    plane(x - 2, -14, 26 + i * 9, 19, 28),
    line(
      [
        [x, -12, 12 + i * 9],
        [x, -12, 26 + i * 9],
      ],
      "#77716e",
      true
    ),
    ...[0, 1, 2].map((n) =>
      line(
        [
          [x + 2, -8 + n * 5, 26 + i * 9],
          [x + 12, -8 + n * 5, 26 + i * 9],
        ],
        n === 0 ? orange : "#77716e"
      )
    ),
  ]),
  line(
    [
      [-28, 16, 3],
      [-28, 27, 3],
      [32, 27, 3],
      [32, 16, 3],
    ],
    orange,
    false,
    1.5
  ),
];
const pitstop = () => {
  const ring = (inset, z) => [
    [-43 + inset, -27 + inset, z],
    [24 - inset, -27 + inset, z],
    [43 - inset, -8, z],
    [43 - inset, 20 - inset, z],
    [-24 + inset, 20 - inset, z],
    [-43 + inset, 1, z],
    [-43 + inset, -27 + inset, z],
  ];
  return [
    ...datum(),
    plane(-50, -34, -3, 100, 62),
    line(ring(0, 0), "#d8d5d2", false, 1.2),
    line(ring(6, 0)),
    line(ring(3, 0), "#66615e", true),
    line(
      [
        [-43, -27, 0],
        [24, -27, 0],
        [43, -8, 0],
      ],
      orange,
      false,
      2
    ),
    ...[0, 1, 2].map((i) => box(-26 + i * 19, -13, 0, 9, 12, 10 + i * 8, i === 2)),
    line(
      [
        [-35, 33, 8],
        [-22, 33, 8],
        [-17, 33, 19],
        [-8, 33, 9],
        [3, 33, 25],
        [10, 33, 12],
        [25, 33, 12],
      ],
      orange,
      false,
      1.5
    ),
  ];
};
const traffic = () => [
  ...datum(),
  plane(-38, -38, -2, 76, 76),
  ...[
    [-32, -32],
    [15, -32],
    [-32, 15],
    [15, 15],
  ].map(([x, y]) => box(x, y, 0, 17, 17, 9)),
  line(
    [
      [-45, -7, 1],
      [-7, -7, 1],
      [-7, -45, 1],
    ],
    "#d8d5d2"
  ),
  line(
    [
      [45, 7, 1],
      [7, 7, 1],
      [7, 45, 1],
    ],
    "#d8d5d2"
  ),
  line(
    [
      [-45, 7, 1],
      [-7, 7, 1],
      [-7, 45, 1],
    ],
    "#9b9997"
  ),
  line(
    [
      [45, -7, 1],
      [7, -7, 1],
      [7, -45, 1],
    ],
    "#9b9997"
  ),
  line(
    [
      [-43, 0, 2],
      [0, 0, 2],
      [0, -43, 2],
    ],
    orange,
    false,
    2
  ),
  box(-6, -6, 27, 12, 12, 12, true),
  ...[
    [-6, -6],
    [6, 6],
  ].map(([x, y]) =>
    line(
      [
        [x, y, 2],
        [x, y, 27],
      ],
      "#77716e",
      true
    )
  ),
];
const notstuck = () => [
  ...datum(),
  ...[0, 10, 20].flatMap((z) => [
    plane(-39, -12, z, 29, 35),
    ...[0, 1, 2].map((n) =>
      line(
        [
          [-34, -5 + n * 7, z],
          [-15, -5 + n * 7, z],
        ],
        "#77716e"
      )
    ),
  ]),
  line(
    [
      [-39, -12, 0],
      [-39, -12, 32],
    ],
    "#77716e",
    true
  ),
  line(
    [
      [-10, 23, 0],
      [-10, 23, 32],
    ],
    "#77716e",
    true
  ),
  line(
    [
      [-10, 5, 20],
      [4, 5, 20],
      [4, -12, 20],
      [15, -12, 20],
    ],
    orange,
    false,
    1.5
  ),
  box(15, -25, 0, 27, 27, 27),
  ...[9, 18].flatMap((n) => [
    line([
      [15, 2, n],
      [42, 2, n],
      [42, -25, n],
    ]),
    line([
      [15 + n, 2, 0],
      [15 + n, 2, 27],
      [15 + n, -25, 27],
    ]),
    line([
      [42, -25 + n, 0],
      [42, -25 + n, 27],
      [15, -25 + n, 27],
    ]),
  ]),
  box(24, -16, 9, 9, 9, 9, true),
];
for (const [name, draw] of Object.entries({
  tether,
  gary,
  pitstop,
  "smart-traffic": traffic,
  notstuck,
})) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 480" fill="none" stroke-linejoin="round" stroke-linecap="square"><rect width="960" height="480" fill="#151414"/><g>${draw().join("")}</g></svg>\n`;
  writeFileSync(`public/images/projects/${name}.svg`, svg);
}
