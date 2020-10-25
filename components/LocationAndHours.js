import Link from 'next/link'

export default function LocationAndHours() {
  return (
    <>
      <section className="location-and-hours">
        <h1>Location and Hours</h1>
        <ul>
          <li>Hours: TBD</li>
          <li><a href="mailto:sandi_85044@yahoo.com?subject=Question from Website">Email Sandra</a></li>
          <li>Phone: <a href="tel:1-602-574-3585">1-602-574-3585</a> or <a href="sms:1-602-574-3585">send a text</a></li>
        </ul>
      </section>
      <style jsx>{`
        .location-and-hours {
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .location-and-hours .description {
            padding: 2rem 20px;
            flex: 0;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }
      `}</style>
    </>
  )
}
