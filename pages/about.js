import Layout from '@components/Layout'

const About = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <h1 className="title">Meet Sandra Lehmann</h1>

        <p className="description">
          <img src="../static/images/sandra_lehmann_photo.jpg" alt="Photo of Sandra Lehmann" title="Photo of Sandra Lehmann" />
        </p>
        <h2>Areas of Expertise:</h2>
        <ul>
          <li>Relationship Issues</li>
          <li>Marital and Premarital</li>
          <li>Couples Counseling</li>
          <li>Communication Skills</li>
          <li>Infidelity</li>
          <li>Trauma and Abuse</li>
          <li>Sexual Abuse</li>
          <li>Self-esteem</li>
          <li>Assertiveness/Boundaries</li>
        </ul>
        <a href="/new-patient">I'm interested in becoming a new patient</a>
        or
        <a href="/telehealth">Learn more about Teletherapy</a>
      </Layout>
    </>
  )
}

export default About

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
