import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import { InlineLinks, Layout, PostsList } from '../components';
import { blogOperations } from '../store/ducks/blog';

function resolvePaginationText(page) {
  if (page === 10) {
    return 'Previous page';
  }

  if (page === 1) {
    return 'Next page';
  }

  return 'Previous page / Next Page';
}

function About(props) {
  const { loading, posts, page, fetchPosts, nextPage, prevPage } = props;

  useEffect(() => {
    fetchPosts(page);
  }, [fetchPosts, page]);

  function handleClickNextPage() {
    nextPage();
    window.scrollTo(0, 0);
  }

  function handleClickPreviousPage() {
    prevPage();
    window.scrollTo(0, 0);
  }

  return (
    <Layout>
      <section style={{ marginBottom: '32px', marginTop: 20 }}>
        <h1 style={{ fontSize: '40px', marginBottom: '24px' }}>
          This is not a boring blog 🔖
        </h1>

        <p style={{ fontSize: '24px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non
          lorem placerat, pellentesque nunc quis, malesuada odio. Cras vel nisi
          tincidunt, interdum ipsum eget, molestie tortor.
        </p>
      </section>

      {loading ? <h2>Loading posts...</h2> : null}

      <PostsList posts={posts} />

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <InlineLinks
          links={[
            { text: 'Home ', to: '/home' },
            { text: 'About', to: '/about' },
          ]}
        />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {page > 1 && (
            <button
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              type='button'
              onClick={handleClickPreviousPage}
            >
              <ArrowBackIcon />
            </button>
          )}
          <p style={{ margin: '0 8px' }}>{resolvePaginationText(page)}</p>
          {page !== 10 && (
            <button
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              type='button'
              onClick={handleClickNextPage}
            >
              <ArrowForwardIcon />
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.blog.loading,
    posts: state.blog.posts,
    error: state.blog.error,
    page: state.blog.page,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (page) => dispatch(blogOperations.fetchPosts(page)),
    nextPage: () => dispatch(blogOperations.nextPage()),
    prevPage: () => dispatch(blogOperations.prevPage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
