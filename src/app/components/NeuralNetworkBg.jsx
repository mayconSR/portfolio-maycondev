'use client'
import { useEffect, useState } from 'react'

const lines = [
  [ { x: 80, y: 120 }, { x: 200, y: 200 }, { x: 400, y: 60 }, { x: 600, y: 220 }, { x: 720, y: 120 } ],
  [ { x: 160, y: 300 }, { x: 350, y: 100 }, { x: 650, y: 480 }, { x: 500, y: 420 } ],
  [ { x: 50, y: 500 }, { x: 250, y: 350 }, { x: 450, y: 500 }, { x: 650, y: 320 }, { x: 750, y: 570 } ]
]
const colors = [ "#2563eb", "#06b6d4", "#818cf8" ]

// Fake “z”: mais alto = mais perto do usuário, varia raio e opacidade
const minZ = 0.7, maxZ = 1.4

const getRandom = (min, max) => Math.random() * (max - min) + min

export default function NeuralNetworkBg() {
  const [animatedLines, setAnimatedLines] = useState(() => lines.map(line =>
    line.map(pt => ({
      ...pt,
      baseX: pt.x,
      baseY: pt.y,
      amplitudeY: getRandom(9, 18),
      amplitudeX: getRandom(10, 22),
      speedY: getRandom(.4, .9),
      speedX: getRandom(.4, .9),
      phaseY: getRandom(0, Math.PI * 2),
      phaseX: getRandom(0, Math.PI * 2),
      zBase: getRandom(minZ, maxZ),         // valor central de z
      zAmp: getRandom(0.11, 0.36),          // amplitude da variação de z
      zSpeed: getRandom(.2, .5),
      zPhase: getRandom(0, Math.PI * 2),
    }))
  ))

  useEffect(() => {
    let frame
    const animate = () => {
      const now = Date.now() / 900
      setAnimatedLines(prev =>
        prev.map(line =>
          line.map(pt => {
            const z = pt.zBase + Math.sin(now * pt.zSpeed + pt.zPhase) * pt.zAmp
            return {
              ...pt,
              x: pt.baseX + Math.sin(now * pt.speedX + pt.phaseX) * pt.amplitudeX,
              y: pt.baseY + Math.sin(now * pt.speedY + pt.phaseY) * pt.amplitudeY,
              z: z, // entre minZ e maxZ
            }
          })
        )
      )
      frame = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <svg
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{
          opacity: 0.15,
          mixBlendMode: 'multiply',
        }}
      >
        {/* Linhas animadas */}
        {animatedLines.map((line, i) => (
          <polyline
            key={i}
            points={line.map(pt => `${pt.x},${pt.y}`).join(' ')}
            stroke={colors[i]}
            strokeWidth="2"
          />
        ))}
        {/* Pontos animados */}
        {animatedLines.flat().map((pt, i) => (
          <circle
            key={i}
            cx={pt.x}
            cy={pt.y}
            r={((i % 3 === 0 ? 7 : 5) * (pt.z ?? 1)).toFixed(2)}
            fill={colors[i % colors.length]}
            opacity={pt.z ? (0.18 + (pt.z - minZ) / (maxZ - minZ) * 0.65) : 0.18}
            style={{
              filter: pt.z && pt.z > 1.1 ? `blur(${(pt.z - 1.05) * 6}px)` : undefined,
              transition: "filter 0.1s",
            }}
          />
        ))}
      </svg>
    </div>
  )
}
