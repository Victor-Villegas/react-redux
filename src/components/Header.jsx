import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';

const routes = [
  { text: 'Home', to: '/home' },
  { text: 'About', to: '/about' },
  { text: 'Blog', to: '/blog' },
];

export default function Header() {
  return (
    <header
      style={{
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#222831',
        color: 'white',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1024px',
          margin: '0 auto',
        }}
      >
        <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link
            style={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              textDecoration: 'none',
              color: 'white',
            }}
            to='/'
          >
            <AccountCircleIcon style={{ fontSize: '40px' }} />
            <span style={{ marginLeft: '12px', fontSize: '24px' }}>
              Hi! Welcome to the Cave! 👋
            </span>
          </Link>

          <ul style={{ display: 'flex', alignItems: 'center' }}>
            {routes.map(({ text, to }) => (
              <li key={`link-${text}`} style={{ listStyle: 'none' }}>
                <Link
                  style={{
                    padding: '8px',
                    cursor: 'pointer',
                    fontSize: '24px',
                    color: 'white',
                    textDecoration: 'none',
                  }}
                  to={to}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
