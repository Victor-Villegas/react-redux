import images from './images';

export default function Footer() {
  return (
    <footer
      style={{
        position: 'relative',
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '1024px',
          margin: '0 auto',
          alignItems: 'center',
          padding: '24px 0',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '27%',
            justifyContent: 'space-evenly',
            marginBottom: '8px',
          }}
        >
          <p>This app was built using</p>
          <img alt='javascript' src={images.js} />
          <img alt='react' src={images.react} />
          <p>💙</p>
        </div>
      </div>
    </footer>
  );
}
