import { InlineLinks, Layout } from '../components';

export default function About() {
  return (
    <Layout>
      <section style={{ marginBottom: '32px', marginTop: 20 }}>
        <h1 style={{ fontSize: '40px', marginBottom: '24px' }}>
          Which kind of Cave are we? 🤔
        </h1>

        <img
          alt='elephant'
          src='elephant.jpeg'
          style={{
            border: '2px solid black',
            borderRadius: '50%',
            width: '200px',
            marginBottom: '24px',
          }}
        />

        <p style={{ fontSize: '24px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non
          lorem placerat, pellentesque nunc quis, malesuada odio. Cras vel nisi
          tincidunt, interdum ipsum eget, molestie tortor. Nunc egestas molestie
          purus sed sodales. Sed non elementum nisl, nec Maecenas et lorem
          massa. Lorem ipsum dolor sit amet, consectetur adipiscing.
        </p>
      </section>

      <InlineLinks
        links={[
          { text: 'Home ', to: '/home' },
          { text: 'Blog', to: '/blog' },
        ]}
      />
    </Layout>
  );
}
