import 'isomorphic-fetch';
import Link from "next/link";
import Router, { useRouter } from 'next/router';
import React from 'react';
import Modal from '../components/modal';

const KEYCODE_ESC = 27;

function IndexPage({ photos }) {
  const router = useRouter();
  const [photoId, setPhotoId] = React.useState();

  React.useEffect(() => {
    const { id } = router.query;
    setPhotoId(id);
  }, [router]);

  const onModalDismiss = React.useCallback(() => {
    Router.push('/', '/', { shallow: true });
  }, [router]);

  const onKeyDown = React.useCallback((e) => {
    if (photoId && e.keyCode === KEYCODE_ESC) {
      router.back();
    }
  }, [photoId, router]);

  React.useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);

  const modal = photoId ? <Modal id={photoId} onDismiss={onModalDismiss} /> : null;

  return (
    <div className='list'>
      {modal}
      {
        photos.map(({ id, thumbnail }) => (
          <div key={id} className='photo'>
            <Link href={{
              pathname: "/",
              query: {
                id,
              },
            }} as={`/p/${id}`} passHref shallow>
              <a className='photoLink'>
                <img src={thumbnail} />
              </a>
            </Link>
          </div>
        ))
      }
      <style jsx>{`
        .list {
          padding: 50px;
          text-align: center;
        }

        .photo {
          display: inline-block;
        }

        .photoLink {
          color: #333;
          verticalAlign: middle;
          cursor: pointer;
          background: #eee;
          display: inline-block;
          width: 250px;
          height: 120px;
          line-height: 120px;
          margin: 10px;
          border: 2px solid transparent;
        }

        .photoLink img {
          width: 250px;
        }

        .photoLink:hover {
          borderColor: blue;
        }
      `}</style>
    </div>
  );
}

IndexPage.getInitialProps = async () => {
  return {
    photos: await getGifNames(),
  };
};

export default IndexPage;

async function getGithubProfileIds() {
  const res = await fetch('https://api.github.com/users')
  const result = await res.json()
  return result.map((info) => info.id)
}

async function getGifNames() {
  const res = await fetch('https://api.gfycat.com/v1/gfycats/trending?count=20')
  const result = await res.json()

  return result.gfycats.map((info) => ({ id: info.gfyName, thumbnail: info.thumb100PosterUrl }));
}
