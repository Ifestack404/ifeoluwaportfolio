import { useEffect, useRef, useState } from 'react'
import { createLogoHeroScene } from '../scene/logoHeroScene'

export default function LogoHeroCanvas() {
  const canvasRef = useRef(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    let dispose = () => {}
    try {
      dispose = createLogoHeroScene(canvas)
    } catch {
      setFailed(true)
    }

    return () => {
      dispose()
    }
  }, [])

  return (
    <div className="hero-portrait">
      <div className="hero-portrait__glow" aria-hidden="true" />
      <div className="hero-portrait__frame">
        <canvas
          ref={canvasRef}
          className="hero-portrait__canvas"
          aria-label="IFE STACK logo particle animation"
        />
        {failed && (
          <div className="hero-portrait__fallback" aria-hidden="true">
            <span>I</span>
          </div>
        )}
      </div>
    </div>
  )
}
