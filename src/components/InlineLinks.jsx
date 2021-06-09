import { Link } from 'react-router-dom';

export default function InlineLinks({ links }) {
  return (
    <div>
      {links.map(({ text, to }, index) => (
        <Link
          key={`inlineLink-${text}`}
          style={{
            marginBottom: '8px',
            marginRight: index === 0 ? '16px' : 0,
            textDecoration: 'none',
            cursor: 'pointer',
            color: '#30475e',
          }}
          to={to}
        >
          {text}
        </Link>
      ))}
    </div>
  );
}
