/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const Flashlight = ({ lightPosition }) => {
  
    const gradientStyle = {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        
        background: `radial-gradient(400px at ${lightPosition.x}px ${lightPosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        pointerEvents: 'none',
        zIndex: 30,
      };
  
    return <div className="flashLight" style={gradientStyle}></div>;
  };

  export default Flashlight;


  /*
  <div class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" style="background: radial-gradient(600px at 1205px 313px, rgba(29, 78, 216, 0.15), transparent 80%);"></div>
  */