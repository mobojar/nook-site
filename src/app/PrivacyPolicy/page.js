import React from 'react';
import Link from "next/link";
import styles from './css/privacy.module.css';

export default function PrivacyPolicy() {
  return (
    <>
      <div className={styles.privacyContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className={styles.heroTitle}>
                Privacy <span className={styles.highlight}>Policy</span>
              </h1>
              <p className={styles.heroSubtitle}>Effective Date: April 3, 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className={styles.privacyContent}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className={`${styles.privacyCard} shadow`}>
                <div className={styles.introText}>
                  <p>
                    At Nook, we value your privacy and are committed to protecting your personal data. This Privacy
                    Policy explains how we collect, use, and safeguard your information while complying with global
                    privacy laws, including GDPR, CCPA, PIPL, and other international regulations.
                  </p>
                </div>

                <div className={styles.policySection}>
                  <h2 className={styles.policyTitle}>1. Who We Are</h2>
                  <p>
                    Nook ("we," "us," or "our") is a mobile app designed to provide a science-based well-being solution
                    to help you navigate life and work with confidence and peace. If you have questions about this
                    policy or your rights, contact us at:
                  </p>
                  <ul className={styles.policyList}>
                    <li>
                      Email:{" "}
                      <a href="mailto:contact@yournook.org" className={styles.emailLink}>
                        contact@yournook.org
                      </a>
                    </li>
                    <li>Address:</li>
                  </ul>
                </div>

                <div className={styles.policySection}>
                  <h2 className={styles.policyTitle}>2. What Data We Collect</h2>
                  <p>We collect the following types of information:</p>

                  <h3 className={styles.policySubtitle}>a. Information You Provide Directly</h3>
                  <ul className={styles.policyList}>
                    <li>Your name, email address, and account preferences when you sign up.</li>
                    <li>Payment details for purchases made within the app.</li>
                  </ul>

                  <h3 className={styles.policySubtitle}>b. Information We Collect Automatically</h3>
                  <ul className={styles.policyList}>
                    <li>Device information (e.g., model, operating system).</li>
                    <li>IP address and location data (if enabled).</li>
                    <li>App usage data (e.g., features used, time spent).</li>
                  </ul>

                  <h3 className={styles.policySubtitle}>c. Information from Third Parties</h3>
                  <ul className={styles.policyList}>
                    <li>Social media accounts (if you log in via platforms like Google or Facebook).</li>
                  </ul>
                </div>

                <div className={styles.policySection}>
                  <h2 className={styles.policyTitle}>3. How We Use Your Data</h2>
                  <p>We use your data for the following purposes:</p>

                  <div className={styles.tableWrapper}>
                    <table className={styles.policyTable}>
                      <thead>
                        <tr>
                          <th>Purpose</th>
                          <th>Examples</th>
                          <th>Legal Basis</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>To provide our services</td>
                          <td>Account creation, app functionality</td>
                          <td>Contractual necessity</td>
                        </tr>
                        <tr>
                          <td>To improve our app</td>
                          <td>Analyzing usage patterns</td>
                          <td>Legitimate interests</td>
                        </tr>
                        <tr>
                          <td>To send marketing updates</td>
                          <td>Newsletters, special offers (with consent)</td>
                          <td>Consent</td>
                        </tr>
                        <tr>
                          <td>To comply with legal obligations</td>
                          <td>Fraud prevention, tax compliance</td>
                          <td>Legal obligation</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className={styles.policySection}>
                  <h2 className={styles.policyTitle}>4. Sharing Your Data</h2>
                  <p>We only share your data in limited circumstances:</p>
                  <ul className={styles.policyList}>
                    <li>
                      <strong>Service Providers:</strong> Payment processors (e.g., Stripe), analytics tools (e.g.,
                      Google Analytics), and cloud storage providers.
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> When required by law or to protect our rights.
                    </li>
                  </ul>
                  <p>We never sell your personal data to third parties.</p>
                </div>

                <div className={styles.policySection}>
                  <h2 className={styles.policyTitle}>5. International Compliance & Data Transfers</h2>
                  <p>We comply with privacy laws worldwide, including:</p>
                  <ul className={styles.policyList}>
                    <li>
                      <strong>GDPR (EU):</strong> Protecting your rights as a user in Europe.
                    </li>
                    <li>
                      <strong>CCPA/CPRA (California):</strong> Providing transparency and control for California
                      residents.
                    </li>
                    <li>
                      <strong>PIPL (China):</strong> Ensuring strict measures for personal data protection in China.
                    </li>
                    <li>
                      <strong>India's DPDPA:</strong> Adhering to localization and cross-border transfer rules in India.
                    </li>
                  </ul>
                  <p>
                    If your data is transferred outside your country or region, we use safeguards like Standard
                    Contractual Clauses or adequacy decisions to ensure its security.
                  </p>
                </div>

                <div className={styles.policySection}>
                  <h2 className={styles.policyTitle}>6. Your Rights Under Global Privacy Laws</h2>
                  <p>Depending on where you live, you may have the following rights regarding your personal data:</p>
                  <ol className={styles.numberedList}>
                    <li>
                      <strong>Access:</strong> Request a copy of your data.
                    </li>
                    <li>
                      <strong>Correction:</strong> Update inaccurate or incomplete information.
                    </li>
                    <li>
                      <strong>Deletion:</strong> Ask us to delete your data (except where legally required).
                    </li>
                    <li>
                      <strong>Restriction:</strong> Limit how we process your data in certain cases.
                    </li>
                    <li>
                      <strong>Portability:</strong> Receive your data in a portable format for transfer to another
                      service provider.
                    </li>
                    <li>
                      <strong>Objection:</strong> Stop certain types of processing (e.g., marketing).
                    </li>
                    <li>
                      <strong>Withdraw Consent:</strong> Revoke consent for activities based on it (e.g., newsletters).
                    </li>
                  </ol>
                  <p>
                    To exercise these rights, email us at{" "}
                    <a href="mailto:contact@yournook.org" className={styles.emailLink}>
                      contact@yournook.org
                    </a>
                    .
                  </p>
                </div>

                <div className={styles.policySection}>
                  <h2 className={styles.policyTitle}>7. Data Retention</h2>
                  <p>We keep your personal data only as long as necessary for the purposes outlined above:</p>
                  <ul className={styles.policyList}>
                    <li>
                      <strong>Account information:</strong> Until you delete your account or request deletion.
                    </li>
                    <li>
                      <strong>Payment records:</strong> Retained for 7 years for tax purposes.
                    </li>
                    <li>
                      <strong>Usage data:</strong> Retained for up to 12 months for analytics purposes.
                    </li>
                  </ul>
                </div>

                <div className={styles.policySection}>
                  <h2 className={styles.policyTitle}>8. Cookies and Tracking Technologies</h2>
                  <p>
                    We use cookies and similar technologies to enhance your experience and analyze app performance. You
                    can manage cookie preferences through your device settings or our cookie banner.
                  </p>
                  <p>For more details, read our Cookie Policy.</p>
                </div>

                <div className={styles.policySection}>
                  <h2 className={styles.policyTitle}>9. Data Security Measures</h2>
                  <p>
                    We implement strict security measures to protect your information, including encryption during
                    transmission and storage, regular audits, and access controls to limit unauthorized access.
                  </p>
                  <p>
                    However, no system is completely secure; please notify us immediately if you suspect unauthorized
                    access to your account.
                  </p>
                </div>

                <div className={styles.policySection}>
                  <h2 className={styles.policyTitle}>10. Updates to This Policy</h2>
                  <p>
                    We may update this Privacy Policy periodically to reflect changes in our practices or legal
                    requirements worldwide (e.g., GDPR updates in Europe, CCPA/CPRA changes in California). We'll notify
                    you of significant updates via email or in-app notifications.
                  </p>
                </div>

                <div className={styles.policyFooter}>
                  <p>
                    Thank you for trusting Nook! If you have any questions or concerns about this policy or how we
                    handle your data globally, feel free to contact us at{" "}
                    <a href="mailto:contact@yournook.org" className={styles.emailLink}>
                      contact@yournook.org
                    </a>
                    .
                  </p>
                  <p className={styles.policyNote}>
                    This policy aligns with major privacy laws worldwide and includes provisions for emerging
                    regulations such as AI governance and biometric protections where applicable.
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
              <h2 className={styles.ctaTitle}>Have questions about your privacy?</h2>
              <p className={styles.ctaText}>
                We're committed to transparency and protecting your data. If you have any questions about our privacy
                practices, we're here to help.
              </p>
              <a href="mailto:contact@yournook.org" className={styles.ctaButton}>
                Contact Our Privacy Team
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
