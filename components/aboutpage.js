import styles from "../styles/about.module.css";

export default function Aboutpage() {
  return (
    <>
      <div className={styles.profile}>
        <h1 className={styles.profileh1}>
          COMPANY <b className={styles.red}>PROFILE</b>
        </h1>
        <p className={styles.profilep}>
          Schon Peesol Energy RC:912767 was established in 2010 in order to
          supply alternative energy solutions for its customers both in Nigeria
          and abroad. Schon Peesol Energy is a company that is active in the
          promotion, planning and implementation of alternative energy systems.
          Since its inception, the company has made its goal to be the standard
          setter for the alternative energy industry and to bring clean, green
          electricity both to the urban environment and the periphery. We
          operate across Nigeria and around the globe.
        </p>
      </div>

      <div className={styles.overview}>
        <div className={styles.overviewleft}>
          <h2 className={styles.overviewh2}>
            Company <b className={styles.red}>Overview</b>
          </h2>
          <p>
            Schon Peesol Nigeria ltd was founded by seasoned Business Executives
            and experienced Electrical Engineers with proven records of superior
            service delivery in the energy sector of our economy. Our team are
            experienced in systems designs, simulations, energy audit and have
            been involved in sensitive and life saving projects. Our core
            business function includes System design, Energy Audit, simulations,
            Product sourcing , Installation, maintenance and Online monitoring
            Schon Peesol Energy provides Solar solutions for sensitive and life
            saving equipment in hospitals, homes & Offices. We also provide
            custom solutions tailored to the clients needs and within affordable
            budget. We source all our materials directly from the manufacturers
            with the extension of full warranty to our customers. Schon Peesol
            Energy is one of the leading companies in Nigeria for the
            implementation of alternative energy systems. We accomplish this by
            virtue of our team of the most experienced and highly skilled
            employees in Nigeria. Our professional workforce focuses on the
            design and construction of each individual project right down to the
            smallest of details. <br />
            <br />
            <b className={styles.bold}>DESIGN</b>–With Schon Peesol Energy,
            there is no room for error. Each system is meticulously designed by
            a team of highly skilled and experienced professionals, who have
            designed more solar systems in Nigeria among many others. <br />
            <br />
            <b className={styles.bold}>SUPPLY</b> – At Schon Peesol Energy, we
            use only the leading materials available in the world. All materials
            used are checked and evaluated to the highest possible standards and
            over extended periods of time. <br />
            <br />
            <b className={styles.bold}>EXECUTION</b> – the process of installing
            and integrating solar systems demands experience, skill and
            professionalism. Our work force deals, on a daily basis, with the
            construction and implementation of solar system in Nigeria. <br />
            <br />
            <b className={styles.bold}>SERVICE AND MAINTENANCE</b> –Schon Peesol
            Energy works closely with each client to ensure that the system
            operates consistently and reliably. We realize that a system that is
            expected to operate for many years needs fast and professional
            support.
          </p>
        </div>
        <div className={styles.overviewright}>
          <img className={styles.img} src="/comprof.jpg" alt="overviewphoto" />
          <p></p>
        </div>
      </div>

      <div className={styles.after}></div>

      <div className={styles.product}>
            <div className={styles.productleft}>
            <h2 className={styles.producth2}>
                Schon Peesol Energy products and services
            </h2>
            <p>
                Grid connected PV systems – commercial and large scale <br />
                Solar power for telecommunication systems <br />
                Solar stand-alone systems for rural electrification <br />
                Solar stand-alone systems for medical equipment <br />
                Real-time Online monitoring of systems on PCs and mobile devices{" "}
                <br />
                Consultancy services in alternative energy need <br />
                Product sourcing at the right price and quality.
            </p>
            </div>

            <div className={styles.productright}>
            <h2 className={styles.producth2}>
                Schon Peesol Energy represents leading international vendors such
                as:
            </h2>
            <p>
                Suntech Power – the world largest solar panels suppliers (China).
                <br />
                Outback Power – one of the world’s largest manufacturers of
                Inverters (USA)
                <br />
                Schneider Electric- grid-connected Inverters (USA)
                <br />
                Sukam- grid-connected Inverters (India)
                <br />
                Deka- Deep Cycle batteries (USA)
                <br />
                Victron Energy – Off-grid sine-wave DC/AC Inverters (The
                Netherlands)
                <br />
                Morning Star Corporation – Charge Controllers (USA)
                <br />
                African Energy – Mono-crystalline Solar panels & an array of other
                Renewable Energy Products (USA)
            </p>
            </div>
        </div>
        <div className={styles.provision}>
          <p>
            Schon Peesol Energy provides its clients with complete and
            comprehensive support including consultation regarding the most
            suitable solutions, training and professional service. Schon Peesol
            Energy’s systems use only the finest components that are manufacture
            to the highest of standards and strict quality assurance procedures. <br/> <br/>
            Schon Peesol Energy provides its customers with a close support
            service, a choice of solutions, as well as consultancy and training
            services. Schon Peesol Energy systems are individually designed to
            be cost-effective and reliable and are manufactured with the finest
            components under high quality standards. <br/> <br/> Our key partner in the USA
            is African Energy, Arizona, USA which distributes Quality products
            like Schneider Inverters & Charge Controllers, Outback Inverters &
            Charge Controllers, DEKA Batteries, Morning-Star Charge Controllers,
            Suntech Solar Panels etc. <br/> <br/> Other partners includes A&E Dunamis,
            Sukam, Luminous, I-Cell Power, Royal Power Ltd. etc we mobilize to
            site and complete our installations on record time within budget.Our
            after sales services is enviable
          </p>
        </div>

        <div className={styles.partner}>
            <h2 className={styles.partnerh2}> OUR <b className={styles.red}>CLIENTS</b></h2>
            <img className={styles.partnerimg} src="/billgatesfoundation.jpg" alt="billgatefoundation"/>
            <img className={styles.partnerimg} src="/cita.png" alt="cita"/>
            <img className={styles.partnerimg} src="/iita.png" alt="iita"/>
            <img className={styles.partnerimg} src="/jdhd.png" alt="jdhd"/>
            <img className={styles.partnerimg} src="/leadcity.png" alt="leadcity"/>
            <img className={styles.partnerimg} src="/oritamefaLogo.png" alt="oritamefa"/>
            <img className={styles.partnerimg} src="/oxyfor-life.png" alt="oxyforlife"/>
        </div>
        
    </>
  );
}
