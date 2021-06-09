import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <main style={{ height: '100vh', position: 'relative' }}>
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: 'calc(100vh - 100px)',
          width: '1024px',
          margin: 'auto',
          backgroundColor: 'white',
          padding: '0 50px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        }}
      >
        <div
          style={{
            width: '100%',
            margin: '0px auto',
            flexGrow: 1,
          }}
        >
          {children}
        </div>
        <Footer />
      </div>
    </main>
  );
}
