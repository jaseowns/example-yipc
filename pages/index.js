import Layout from '@components/Layout'
// import PostList from '@components/PostList'
// import getPosts from '@utils/getPosts'

const Index = ({ posts, title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <h1 className="title">Your Inner Pathways Counseling</h1>
        <h2>Sandra Lehmann, MC, LPC</h2>
        <h3>Need to Talk to Someone?</h3>
        <p className="description">        
        Get help with depression, anxiety, relationships, trauma, grief, and more.
        </p>
        <div className="learn-more-cta">
          <a href="/about">Learn about Sandra Lehmann</a>
        </div>
        {/* <main>
          <PostList posts={posts} />
        </main> */}
      </Layout>
      <style jsx>{`
      .learn-more-cta {
        font-size: 2rem;
        text-align:center;
      }
      .learn-more-cta img {
        display: block;
      }
        .title {
          margin: 1rem auto;
          font-size: 3rem;
        }
      `}</style>
    </>
  )
}

export default Index

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  // const posts = ((context) => {
  //   return getPosts(context)
  // })(require.context('../posts', true, /\.md$/))

  return {
    props: {
      //posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
