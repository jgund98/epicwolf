/**
 * Solve the 2D homography that maps a flat w x h rect onto a destination quad
 * (TL, TR, BR, BL) and return it as a CSS matrix3d. Real DOM text projected
 * this way stays crisp at any DPR and costs nothing to re-render per keystroke.
 */
export function projectionMatrix(w: number, h: number, dst: number[][]): string | null {
  const src = [
    [0, 0],
    [w, 0],
    [w, h],
    [0, h],
  ]
  const rows: number[][] = []
  for (let i = 0; i < 4; i++) {
    const [sx, sy] = src[i]
    const [dx, dy] = dst[i]
    rows.push([sx, sy, 1, 0, 0, 0, -sx * dx, -sy * dx, dx])
    rows.push([0, 0, 0, sx, sy, 1, -sx * dy, -sy * dy, dy])
  }
  const n = 8
  for (let col = 0; col < n; col++) {
    let pivot = col
    for (let r = col + 1; r < n; r++) if (Math.abs(rows[r][col]) > Math.abs(rows[pivot][col])) pivot = r
    if (Math.abs(rows[pivot][col]) < 1e-10) return null
    ;[rows[col], rows[pivot]] = [rows[pivot], rows[col]]
    const p = rows[col][col]
    for (let c = col; c <= n; c++) rows[col][c] /= p
    for (let r = 0; r < n; r++) {
      if (r === col) continue
      const f = rows[r][col]
      if (!f) continue
      for (let c = col; c <= n; c++) rows[r][c] -= f * rows[col][c]
    }
  }
  const [a, b, c, d, e, f, g, hh] = rows.map((r) => r[n])
  return `matrix3d(${a},${d},0,${g}, ${b},${e},0,${hh}, 0,0,1,0, ${c},${f},0,1)`
}
