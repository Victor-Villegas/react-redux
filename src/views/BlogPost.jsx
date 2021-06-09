import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { Layout } from '../components';
import { blogPostOperations } from '../store/ducks/blogPost';

function Post(props) {
  const { postData, fetchPostData, loading } = props;
  const { id } = useParams();

  useEffect(() => {
    fetchPostData(id);
  }, [fetchPostData, id]);

  return (
    <Layout>
      <section style={{ marginBottom: '32px', position: 'relative' }}>
        <div
          style={{
            height: '400px',
            width: 'calc(100% + 100px)',
            backgroundSize: 'cover',
            background: `no-repeat center/100% url(https://picsum.photos/id/${postData.id}/800/600)`,
            marginBottom: 15,
            position: 'absolute',
            top: 0,
            left: -50,
          }}
        />

        {loading ? (
          <h2>Loading post data...</h2>
        ) : (
          <>
            <h1
              style={{
                fontSize: '40px',
                marginBottom: '24px',
                paddingTop: 420,
                boxSizing: 'content-box',
              }}
            >
              {postData.title}
            </h1>
            <hr
              style={{
                marginBottom: 15,
                borderTop: '1px solid #DDDDDD',
                borderBottom: 0,
                borderRight: 0,
                borderLeft: 0,
              }}
            />
            <p style={{ fontSize: '24px' }}>{postData.body}</p>
          </>
        )}
      </section>
      <Link
        style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          cursor: 'pointer',
          color: 'black',
        }}
        to='/blog'
      >
        <ArrowBackIcon />
        <p style={{ marginLeft: '4px' }}>Back to blog</p>
      </Link>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.blogPost.loading,
    postData: state.blogPost.postData,
    error: state.blogPost.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostData: (postId) =>
      dispatch(blogPostOperations.fetchPostData(postId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
