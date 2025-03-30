import Image from "next/image"
import styles from "./css/aboutUs.module.css"
export default function AboutUs() {
    return (
      <div className={styles.aboutContainer}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h1 className={styles.heroTitle}>
                  Our <span className={styles.highlight}>Story</span>
                </h1>
                <p className={styles.heroSubtitle}>We&apos;re on a mission to help everyone find peace in their nook</p>
              </div>
              <div className="col-lg-4">
                <div className={styles.heroImageWrapper}>
                  <Image
                    src="/images/undraw_memory-storage_x93l.svg"
                    alt="Team at Nook"
                    width={500}
                    height={400}
                    className={`img-fluid mx-auto  ${styles.heroImage}`}

                  />
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Our Mission */}
        <section className={styles.missionSection}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div className={styles.sectionIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                  </svg>
                </div>
                <h2 className={styles.sectionTitle}>Our Mission</h2>
                <p className={styles.sectionText}>
                  At Nook, we believe that everyone deserves to find peace and balance in their lives. Our science-based
                  well-being solution is designed to help you navigate life and work with confidence and peace, no matter
                  where you are on your journey.
                </p>
                <div className={styles.divider}></div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Our Story */}
        <section className={styles.storySection}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className={styles.storyImageWrapper}>
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Nook founding story"
                    width={600}
                    height={500}
                    className={styles.storyImage}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <h2 className={styles.sectionTitle}>How We Started</h2>
                <p className={styles.storyText}>
                  Nook was founded in 2020 by a team of wellness experts, psychologists, and technology innovators who saw
                  a gap in how people access mental wellness resources.
                </p>
                <p className={styles.storyText}>
                  We&apos;ve all tried to improve our well-being, but we know it&apos;s not always as easy as it seems, and we can
                  do with a bit of help in the comfort of our nook, our own little corner of the world.
                </p>
                <p className={styles.storyText}>
                  What started as a small idea has grown into a platform that helps thousands of people find their peace
                  every day.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Our Values */}
        <section className={styles.valuesSection}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <h2 className={styles.sectionTitle}>Our Values</h2>
                <p className={styles.sectionSubtitle}>The principles that guide everything we do</p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-4">
                <div className={styles.valueCard}>
                  <div className={styles.valueIcon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />
                    </svg>
                  </div>
                  <h3 className={styles.valueTitle}>Authenticity</h3>
                  <p className={styles.valueText}>
                    We believe in being real and transparent in everything we do, creating a space where everyone can be
                    their true selves.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.valueCard}>
                  <div className={styles.valueIcon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM2 1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm0 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H2zm.854-3.646a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647 1.646-1.647a.5.5 0 1 1 .708.708l-2 2zm7.146 1.146a.5.5 0 0 1 .708 0l.646.647 1.646-1.647a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 0-.708zM7 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                    </svg>
                  </div>
                  <h3 className={styles.valueTitle}>Science-Based</h3>
                  <p className={styles.valueText}>
                    Our approach is grounded in research and evidence, ensuring that our methods are effective and
                    reliable.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.valueCard}>
                  <div className={styles.valueIcon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                    </svg>
                  </div>
                  <h3 className={styles.valueTitle}>Compassion</h3>
                  <p className={styles.valueText}>
                    We approach every interaction with empathy and understanding, creating a supportive environment for
                    growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Team Section */}
        <section className={styles.teamSection}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <h2 className={styles.sectionTitle}>Meet Our Team</h2>
                <p className={styles.sectionSubtitle}>The passionate people behind Nook</p>
              </div>
            </div>
            <div className="row mt-5">
              {[1, 2, 3, 4].map((member) => (
                <div className="col-lg-3 col-md-6 mb-4" key={member}>
                  <div className={styles.teamCard}>
                    <div className={styles.teamImageWrapper}>
                      <Image
                        src={`/placeholder.svg?height=300&width=300&text=Team Member ${member}`}
                        alt={`Team Member ${member}`}
                        width={300}
                        height={300}
                        className={styles.teamImage}
                      />
                    </div>
                    <h3 className={styles.teamName}>Team Member {member}</h3>
                    <p className={styles.teamRole}>Co-Founder & Role</p>
                    <p className={styles.teamBio}>
                      With expertise in wellness and technology, they help guide our mission to bring peace to everyone&apos;s
                      nook.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Join Us CTA */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className={styles.ctaTitle}>Join us on our mission</h2>
                <p className={styles.ctaText}>
                  Be part of our journey to help people find peace in their nook and live their best lives.
                </p>
                <button className={styles.ctaButton}>
                  Contact Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className={styles.ctaIcon}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
  
  