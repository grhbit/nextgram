import React from 'react'
import Photo from './frame'

export default function Modal({ id, onDismiss }) {
  const shim = React.useRef(null);
  const photoWrap = React.useRef(null);

  const onClick = React.useCallback((e) => {
    if (shim.current === e.target || photoWrap.current === e.target) {
     if (onDismiss) {
       onDismiss();
     }
   }
  }, [onDismiss]);

  return (
    <div ref={shim} className='shim' onClick={onClick}>
      <div ref={photoWrap} className='photo'>
        <Photo id={id} />
      </div>
      <style jsx>{`
        .shim {
          position: fixed;
          background: rgba(0,0,0,.65);
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
        }

        .photo {
          position: absolute;
          top: 50%;
          width: 100%;
          margin-top: -250px;
        }
      `}</style>
    </div>
  );
}
