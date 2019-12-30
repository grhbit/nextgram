import React from 'react'
import Photo from '../../components/frame'
import { useRouter } from 'next/router'

export default function PhotoPage() {
  const router = useRouter();
  let { id } = router.query;
  if (Array.isArray(id)) {
    id = id[0];
  }

  return (
    <div className='permalink'>
      <div className='wrap'>
        <Photo id={id} />
      </div>
      <style jsx>{`
        .permalink {
          padding: 100px;
          text-align: center;
        }

        .wrap {
          display: inline-block;
          border: 1px solid #999;
          margin: auto;
        }
      `}</style>
    </div>
  );
}
