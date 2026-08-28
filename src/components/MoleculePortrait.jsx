export default function MoleculePortrait() {
  return (
    <div className="molecule-portrait" aria-label="Profile portrait">
      <img 
        src="/6051107654890884924%20(1).jpg" 
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