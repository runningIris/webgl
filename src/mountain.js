import rough from "roughjs/bin/rough"

export default function drawMountain() {
  const canvas = window.document.querySelector("canvas")
  const rc = rough.canvas(canvas)
  const hillOpts = {
    roughness: 2.8,
    strokeWidth: 2,
    fill: "blue",
  }

  rc.path("M76 256L176 156L276 256", hillOpts)
  rc.path("M76 256L176 156L276 256", hillOpts)

  rc.circle(256, 106, 105, {
    stroke: "red",
    strokeWidth: 4,
    fill: "rgba(255, 255, 0, 0.4)",
    fillStyle: "solid",
  })
}