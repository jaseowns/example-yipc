import Layout from '@components/Layout'

const NewPatient = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | New Patient`} description={description}>
        <h1 className="title">New Patient</h1>
<h2>Welcome to Your Inner Pathways Counseling, PLLC.</h2>
        <p className="description">
        In order to assist you in understanding the
responsibilities and expectations of counseling, please read and sign the following packets by following the steps below.
        </p>
        <h2>Steps to become a new patient</h2>
        <ol>
          <li>
            <a href="../static/pdf/YIPC-Intake Packet- Complete (Adult)-fillable.pdf" target="_blank">Download, read and sign intake packet</a>
<ul><li>This document is intended to inform you of policies,
State and Federal Laws, and your rights. </li></ul>
          </li>
          <li><a href="../static/pdf/YIPC-Telehealth pdf form-Adult-w sig box.pdf" target="_blank">Download, read and sign Telehealth packet</a></li>
          <li><a href="../static/pdf/YIPC-COVID-19 Waiver.pdf" target="_blank">Download, read and sign COVID-19 Liability Waiver</a></li>

          
        </ol>
        <h3>More information</h3>
        <p className="description">
          Appointment times range from 50 to 90 minutes depending on your needs.
        </p>
        <p className="description">
          Starting counseling is a major decision and you may have questions, please feel free to ask and I will try my best to give you all the information you need.
        </p>
        <a href="/">Back home</a>
      </Layout>
    </>
  )
}

export default NewPatient

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
