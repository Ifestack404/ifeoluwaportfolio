import { useEffect, useRef } from 'react'

export default function MoleculePortrait() {
  const imageRef = useRef(null)

  useEffect(() => {
    // Image displays simply without animation
    if (imageRef.current) {
      imageRef.current.style.objectFit = 'cover'
    }
  }, [])

  return (
    <div className="molecule-portrait" aria-label="Profile portrait">
      <img 
        ref={imageRef}
        src="/profile-portrait.jpg" 
        alt="IFE STACK - Full Stack Web Developer"
        className="molecule-portrait__image"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block'
        }}
      />
      <div className="molecule-portrait__caption">
        <span className="molecule-portrait__status" />
        <span>IFE STACK / digital craft</span>
      </div>
    </div>
  )
}