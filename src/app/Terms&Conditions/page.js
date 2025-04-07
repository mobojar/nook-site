"use client"
import React from 'react'
import styles from './css/terms.module.css'

export default function TermsAndCondition() {
  return (
    <>
       <div className={styles.termsContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className={styles.heroTitle}>
                Terms and <span className={styles.highlight}>Conditions</span>
              </h1>
              <p className={styles.heroSubtitle}>Effective Date: April 3, 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className={styles.termsContent}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className={`${styles.termsCard} shadow`}>
                <div className={styles.introText}>
                  <p>
                    Welcome to Nook! These Terms and Conditions (&quot;Terms&quot;) govern your use of the Nook website and mobile
                    app. Please read them carefully before using our services. By accessing or using Nook, you agree to
                    these Terms. If you do not agree, please refrain from using our services.
                  </p>
                </div>

                <div className={styles.termSection}>
                  <h2 className={styles.termTitle}>1. Introduction</h2>
                  <p>
                    <strong>Who We Are:</strong> Nook (&quot;we&quot;, &quot;us&quot;, or &apos;our&apos;) provides a science-based well-being
                    solution to help you navigate life and work with confidence and peace.
                  </p>
                  <p>
                    <strong>Applicability:</strong> These Terms apply to all users of the Nook website and mobile app.
                  </p>
                </div>

                <div className={styles.termSection}>
                  <h2 className={styles.termTitle}>2. Definitions</h2>
                  <p>
                    <strong>&quot;Services&quot;:</strong> Refers to the Nook website, mobile app, and any related features or
                    content.
                  </p>
                  <p>
                    <strong>&quot;User&quot;:</strong> Any individual accessing or using our Services.
                  </p>
                  <p>
                    <strong>&quot;Content&quot;:</strong> Includes text, images, videos, and other materials available on the
                    Services.
                  </p>
                </div>

                <div className={styles.termSection}>
                  <h2 className={styles.termTitle}>3. License to Use</h2>
                  <p>
                    We grant you a limited, non-exclusive, non-transferable license to access and use our Services for
                    personal, non-commercial purposes in accordance with these Terms.
                  </p>
                </div>

                <div className={styles.termSection}>
                  <h2 className={styles.termTitle}>4. User Accounts</h2>
                  <p>
                    <strong>Account Creation:</strong> You may need to create an account to access certain features. You
                    are responsible for keeping your login credentials secure.
                  </p>
                  <p>
                    <strong>Eligibility:</strong> You must be at least 18 years old (or the age of majority in your
                    jurisdiction) to create an account.
                  </p>
                  <p>
                    <strong>Termination:</strong> We reserve the right to suspend or terminate accounts for violations
                    of these Terms or applicable laws.
                  </p>
                </div>

                <div className={styles.termSection}>
                  <h2 className={styles.termTitle}>5. User Conduct</h2>
                  <p>You agree not to:</p>
                  <ul className={styles.termsList}>
                    <li>Use the Services for unlawful purposes.</li>
                    <li>Harass, threaten, or abuse other users.</li>
                    <li>Reverse-engineer or tamper with the Services&apos; functionality.</li>
                    <li>Upload harmful content such as viruses or malware.</li>
                  </ul>
                </div>

                <div className={styles.termSection}>
                  <h2 className={styles.termTitle}>6. Content Ownership and Intellectual Property</h2>
                  <p>
                    All intellectual property rights in the Services, including logos, trademarks, and software, are
                    owned by Nook or its licensors.
                  </p>
                  <p>
                    Users retain ownership of any content they upload but grant us a worldwide, royalty-free license to
                    use it for providing our Services (e.g., displaying user-generated content).
                  </p>
                </div>

                <div className={styles.termSection}>
                  <h2 className={styles.termTitle}>7. Payments and Subscriptions (If Applicable)</h2>
                  <p>
                    If you purchase a subscription or make in-app purchases, you agree to provide accurate payment
                    information.
                  </p>
                  <p>
                    All payments are non-refundable unless required by law or explicitly stated otherwise in our refund
                    policy.
                  </p>
                </div>

                <div className={styles.termSection}>
                  <h2 className={styles.termTitle}>8. Links to Third-Party Websites</h2>
                  <p>
                    Our Services may include links to third-party websites or apps. We are not responsible for their
                    content, policies, or practices.
                  </p>
                </div>

                <div className={styles.termSection}>
                  <h2 className={styles.termTitle}>9. Disclaimer of Warranties</h2>
                  <p>
                    The Services are provided &quot;AS IS&quot; and &quot;AS AVAILABLE.&quot; We make no guarantees about their
                    availability, accuracy, or reliability and disclaim all warranties except those required by law.
                  </p>
                </div>

                <div className={styles.termSection}>
                  <h2 className={styles.termTitle}>10. Limitation of Liability</h2>
                  <p>To the fullest extent permitted by law:</p>
                  <p>
                    We are not liable for any indirect, incidental, or consequential damages arising from your use of
                    the Services.
                  </p>
                  <p>
                    Our total liability is limited to the amount you paid us (if any) in the 12 months preceding the
                    claim.
                  </p>
                </div>

                <div className={styles.termSection}>
                  <h2 className={styles.termTitle}>11. Governing Law and Dispute Resolution</h2>
                  <p>
                    These Terms are governed by the laws of Dubai, UAE. Any disputes will be resolved through
                    arbitration in Dubai, UAE. unless prohibited by local law.
                  </p>
                </div>

                <div className={styles.termSection}>
                  <h2 className={styles.termTitle}>12. Modifications to These Terms</h2>
                  <p>
                    We may update these Terms periodically to reflect changes in our practices or legal requirements. We
                    will notify users of significant updates via email or in-app notifications.
                  </p>
                </div>

                <div className={styles.termSection}>
                  <h2 className={styles.termTitle}>13. Contact Information</h2>
                  <p>If you have questions about these Terms, contact us at:</p>
                  <p>
                    Email:{" "}
                    <a href="mailto:contact@yournook.org" className={styles.emailLink}>
                      contact@yournook.org
                    </a>
                  </p>
                </div>

                <div className={styles.termFooter}>
                  <p>
                    This document is designed to cover both website and app usage while addressing global legal
                    requirements like GDPR compliance (EU), CCPA (California), PIPL (China), and others where
                    applicable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className={styles.ctaSection}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className={styles.ctaTitle}>Have questions about our terms?</h2>
              <p className={styles.ctaText}>
                Our team is here to help you understand our policies and answer any questions you might have.
              </p>
              <a href="mailto:contact@yournook.org" className={styles.ctaButton}>
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
              </a>
            </div>
          </div>
        </div>
      </section> */}
    </div>
    </>
  )
}
