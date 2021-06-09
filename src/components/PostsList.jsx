import { useHistory } from 'react-router-dom';

function Post({ description, title, id }) {
  const history = useHistory();

  function goToPost() {
    history.push(`/blog/${id}`);
  }

  return (
    <div
      style={{
        width: '100%',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        marginBottom: '32px',
        cursor: 'pointer',
      }}
    >
      <img
        alt='default'
        src={`https://picsum.photos/id/${id}/800/600`}
        style={{ maxWidth: '100%', display: 'block' }}
      />
      <div style={{ padding: '8px', backgroundColor: 'white' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '8px' }}>{title}</h2>
        <p style={{ fontSize: '12px' }}>{description}</p>
      </div>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'flex-end',
          padding: '0 8px 8px',
          backgroundColor: 'white',
        }}
      >
        <button
          style={{
            cursor: 'pointer',
            width: '56px',
            padding: '4px',
            backgroundColor: '#f05454',
            border: 'none',
            borderRadius: '4px',
            color: 'white',
          }}
          type='button'
          onClick={goToPost}
        >
          Visit
        </button>
      </div>
    </div>
  );
}

function PostsColumn({ column }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '30%' }}>
      {column}
    </div>
  );
}

export default function PostsLists({ posts = [] }) {
  const postsColumns = [];
  const COLUMNS_NUMBER = 3;

  function createCols() {
    for (let i = 0; i < COLUMNS_NUMBER; i += 1) {
      postsColumns[i] = [];
    }

    posts.forEach((post, index) =>
      postsColumns[index % COLUMNS_NUMBER].push(
        <Post
          description={post.body}
          id={post.id}
          key={`post-${index.toString()}`}
          title={post.title}
        />,
      ),
    );
  }

  createCols();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {postsColumns.map((column, index) => (
        <PostsColumn column={column} key={`column-${index.toString()}`} />
      ))}
    </div>
  );
}
