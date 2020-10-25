import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="nav" role="navigation" aria-label="main navigation">
        <Link href="/">
        <a><img src="../static/images/YIPC-logo.jpg" className="header-logo-img" title="Your Inner Pathways Counseling" /></a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          {/* <Link href="/telehealth">
            <a>Teletherapy</a>
          </Link> */}
          <Link href="/new-patient">
            <a>New Patient</a>
          </Link>
        </nav>
      </header>
      <style jsx>{`
        header {
          width: 100%;
          height: 100px;
          border-bottom: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .header-logo-img {
          width: 5%;
          max-width: 50px;
          min-width: 25px;
        }
        nav {
          width: calc(100% - 40px);
          max-width: 1200px;
          font-weight: bold;
          font-size: 1.3rem;
        }
        nav a {
          margin-right: 5px;
          color: #00a395;
          text-decoration: none;
        }


        nav a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  )
}
