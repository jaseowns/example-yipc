import Layout from '@components/Layout'

const Telehealth = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | Telehealth`} description={description}>
        <h1 className="title">What is Telehealth or Teletherapy?</h1>
        <a href="../static/pdf/YIPC-Telehealth pdf form-Adult-w sig box.pdf" target="_blank">Download this form as PDF</a>
        <p className="description">            
            <ol>
<li>Telehealth is defined as the use of synchronous or asynchronous telecommunications technology by a telehealth
provider to provide health care services, including, but not limited to, assessment, diagnosis, consultation, treatment,
and monitoring of a patient; transfer of medical data; patient and professional health-related education; public health
services; and health administration.</li>
<li>The term “Telehealth” does not include audio-only telephone calls, e-mail messages, or fax transmissions, however,
Sandra Lehmann, MC, LPC is certified to provide telehealth and will be practicing under that certification to provide the
best, most ethical care possible.</li>
<li>A Telehealth Provider is broadly defined as an individual who provides a health care service using telehealth, which
includes, but is not limited to, psychologist, clinical social worker, mental health counselor, or marriage and family
therapist, Telehealth provider also includes an individual licensed under a multi-state health care licensure compact of
which Arizona is a member state or an individual who obtains an out-of-state telehealth registration.</li>
<li>Sessions will occur primarily through interactive video communication.</li>
<li>Services delivered by the therapist is required by law to take place within the State of Arizona with the exception of
crisis consultations or sessions, and phone sessions may not be provided in international jurisdictions. If I am physically
located outside of the state in which my therapist is licensed, I will immediately notify my therapist.</li>
</ol>
</p>
<h2>What are my rights in regards to telehealth?</h2>
<p className="description">

<ol>
<li>I have the right to withhold or withdraw consent at any time.</li>
<li>The laws that protect the confidentiality of my personal information in a face-to-face counseling setting also apply to
teletherapy. As such, the information disclosed by me during the course of my sessions is generally confidential. The
dissemination of any personally identifiable images or information from the teletherapy interaction to other entities
shall not occur without my written consent except in the case of mandatory or permissive exceptions to confidentiality.
Such exceptions include, but are not limited to:
    <ul className="limited">
        <li>suspected child, elder, and/or dependent adult abuse;</li>
        <li>expressed threat of violence towards an ascertainable victim;</li>
        <li>expressed threat to harm or kill self; and</li>
        <li>court subpoena.</li>
    </ul>
    </li>

    <li>I have a right to access my personal information and copies of case records in accordance with Federal and Arizona
law.</li>

<li>I agree not to record phone sessions.</li>
</ol></p>
<h2>When is telethealth not appropriate?</h2>
<p className="description">
<ol>
<li>Receiving telehealth services may not be advised if I have experienced any of the following:
<ul>
    <li>recent suicide attempt(s), psychiatric hospitalization, or psychotic processing (last 3 years)</li>
    <li>moderate to severe major depression or bipolar disorder symptoms</li>
    <li>moderate to severe alcohol or drug abuse</li>
    <li>severe eating disorders</li>
    <li>repeated “acute” crises (e.g., occurring once a month or more frequently)</li>
    </ul>
    </li>
    <li> I agree that certain situations, including emergencies and mental health crises, are inappropriate for audio based
counseling services. These include:
<ul>
<li>thoughts of hurting or killing myself or another person;</li>
<li>hallucinations;</li>
<li>being in a life threatening situation or emergency of any kind;    </li>
<li>having uncontrollable emotional reactions; and/or</li>
<li>being under the influence of drugs or alcohol.</li></ul>
    </li>
    <li>I understand that my teletherapy counselor may not be available for contact between scheduled sessions. If I am in an
emergency or crisis situation (such as those listed above), I should immediately call 911 or a crisis-oriented health care
facility in my immediate area. If I am experiencing thoughts of suicide without a clear commitment to safety, I am to
contact one of the following resources:</li>
<ul>
<li>National Suicide Prevention Lifeline: Call 1-800-273-8255</li>
<li>Crisis Text Line: Text HELP to 741741</li></ul>
    </ol>
        </p>
        <a href="/new-patient">I'm interested in becoming a new patient</a>
        <style jsx>{`
        ul li {
            margin: .5rem;
        }
.limited li {
    list-style: lower-alpha;
}
        `}</style>
      </Layout>
    </>
  )
}

export default Telehealth

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
