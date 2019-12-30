import React from 'react'
import Photo from '../../components/frame'
import { useRouter } from 'next/router'

export default function PhotoPage() {
  const router = useRouter();
  const { id } = router.query;

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
