import React from 'react'
import styles from './css/cookies.module.css';
export default function Cookies() {
  return (
    <>
        <div className={styles.cookieContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className={styles.heroTitle}>
                Cookie <span className={styles.highlight}>Policy</span>
              </h1>
              <p className={styles.heroSubtitle}>Effective Date: April 3, 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Content */}
      <section className={styles.cookieContent}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className={`${styles.cookieCard} shadow-lg `}>
                <div className={styles.introText}>
                  <p>
                    At Nook, we use cookies and similar technologies to enhance your experience, analyze app
                    performance, and deliver personalized content. This Cookie Policy explains what cookies are, how we
                    use them, and the choices you have regarding their use.
                  </p>
                </div>

                <div className={styles.cookieSection}>
                  <h2 className={styles.cookieTitle}>1. What Are Cookies?</h2>
                  <p>
                    Cookies are small text files stored on your device (computer, smartphone, or tablet) when you visit
                    a website or use an app. They help us recognize your device and remember information about your
                    preferences or actions.
                  </p>
                  <p>
                    We also use similar technologies like pixels, web beacons, and local storage for purposes described
                    in this policy.
                  </p>
                </div>

                <div className={styles.cookieSection}>
                  <h2 className={styles.cookieTitle}>2. Types of Cookies We Use</h2>

                  <div className={styles.cookieTypeCard}>
                    <div className={styles.cookieTypeHeader}>
                      <div className={styles.cookieTypeIcon}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                        </svg>
                      </div>
                      <h3 className={styles.cookieTypeTitle}>a. Essential Cookies</h3>
                    </div>
                    <div className={styles.cookieTypeContent}>
                      <p>
                        These cookies are necessary for the app to function properly. Without them, certain features
                        (like secure login) may not work.
                      </p>
                      <p>
                        <strong>Example:</strong> Session cookies to keep you logged in.
                      </p>
                    </div>
                  </div>

                  <div className={styles.cookieTypeCard}>
                    <div className={styles.cookieTypeHeader}>
                      <div className={styles.cookieTypeIcon}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                        </svg>
                      </div>
                      <h3 className={styles.cookieTypeTitle}>b. Performance & Analytics Cookies</h3>
                    </div>
                    <div className={styles.cookieTypeContent}>
                      <p>
                        These cookies help us understand how users interact with our app so we can improve its
                        functionality and performance.
                      </p>
                      <p>
                        <strong>Example:</strong> Google Analytics to track usage patterns and identify bugs.
                      </p>
                    </div>
                  </div>

                  <div className={styles.cookieTypeCard}>
                    <div className={styles.cookieTypeHeader}>
                      <div className={styles.cookieTypeIcon}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        </svg>
                      </div>
                      <h3 className={styles.cookieTypeTitle}>c. Functional Cookies</h3>
                    </div>
                    <div className={styles.cookieTypeContent}>
                      <p>These cookies remember your preferences to provide a more personalized experience.</p>
                      <p>
                        <strong>Example:</strong> Remembering your language settings or display preferences.
                      </p>
                    </div>
                  </div>

                  <div className={styles.cookieTypeCard}>
                    <div className={styles.cookieTypeHeader}>
                      <div className={styles.cookieTypeIcon}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                      </div>
                      <h3 className={styles.cookieTypeTitle}>d. Advertising & Marketing Cookies</h3>
                    </div>
                    <div className={styles.cookieTypeContent}>
                      <p>
                        These cookies are used to deliver relevant ads and measure their effectiveness. They may also
                        track your behavior across apps or websites for targeted advertising.
                      </p>
                      <p>
                        <strong>Example:</strong> Facebook Pixel or Google Ads tracking.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles.cookieSection}>
                  <h2 className={styles.cookieTitle}>3. Why We Use Cookies</h2>
                  <p>We use cookies for the following purposes:</p>
                  <ul className={styles.cookieList}>
                    <li>To enable core app functionality (e.g., logging in securely).</li>
                    <li>To analyze usage patterns and improve app performance.</li>
                    <li>To remember your preferences and settings for a better experience.</li>
                    <li>To deliver personalized content and advertisements tailored to your interests.</li>
                  </ul>
                </div>

                <div className={styles.cookieSection}>
                  <h2 className={styles.cookieTitle}>4. Third-Party Cookies</h2>
                  <p>Some cookies on our app are set by third-party services we use, such as:</p>
                  <ul className={styles.cookieList}>
                    <li>
                      <strong>Google Analytics:</strong> For performance tracking and analytics (
                      <a href="#" className={styles.cookieLink}>
                        Google&apos;s Privacy Policy
                      </a>
                      ).
                    </li>
                    <li>
                      <strong>Facebook Pixel:</strong> For targeted advertising (
                      <a href="#" className={styles.cookieLink}>
                        Facebook&apos;s Privacy Policy
                      </a>
                      ).
                    </li>
                    <li>
                      <strong>Payment Processors:</strong> To facilitate secure payments (e.g., Stripe).
                    </li>
                  </ul>
                  <p>
                    These third parties may collect data about your online activities over time and across different
                    websites or apps.
                  </p>
                </div>

                <div className={styles.cookieSection}>
                  <h2 className={styles.cookieTitle}>5. Your Choices & Managing Cookies</h2>

                  <h3 className={styles.cookieSubtitle}>a. Managing Cookies in the App</h3>
                  <p>
                    You can manage your cookie preferences through the settings menu in the Nook app under &quot;Privacy
                    Settings.&quot; You can choose to accept all cookies, reject non-essential cookies, or customize which
                    types of cookies you allow.
                  </p>

                  <h3 className={styles.cookieSubtitle}>b. Managing Cookies on Your Device</h3>
                  <p>Most devices allow you to block or delete cookies through your browser or device settings:</p>
                  <ul className={styles.cookieList}>
                    <li>
                      For Chrome:{" "}
                      <a
                        href="https://support.google.com/chrome/answer/95647"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.cookieLink}
                      >
                        https://support.google.com/chrome/answer/95647
                      </a>
                    </li>
                    <li>
                      For Safari:{" "}
                      <a
                        href="https://support.apple.com/en-us/HT201265"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.cookieLink}
                      >
                        https://support.apple.com/en-us/HT201265
                      </a>
                    </li>
                    <li>For Android devices: Check your browser settings under &quot;Privacy.&quot;</li>
                  </ul>
                  <p>Please note that disabling certain cookies may impact the functionality of the app.</p>

                  <h3 className={styles.cookieSubtitle}>c. Opting Out of Targeted Advertising</h3>
                  <p>You can opt out of personalized ads by adjusting your device&apos;s ad settings or using tools like:</p>
                  <ul className={styles.cookieList}>
                    <li>
                      <a href="#" className={styles.cookieLink}>
                        Your Online Choices
                      </a>{" "}
                      (EU users)
                    </li>
                    <li>
                      <a href="#" className={styles.cookieLink}>
                        Network Advertising Initiative
                      </a>{" "}
                      (US users)
                    </li>
                  </ul>
                </div>

                <div className={styles.cookieSection}>
                  <h2 className={styles.cookieTitle}>6. Legal Basis for Using Cookies</h2>
                  <p>
                    We use essential cookies based on our legitimate interest in providing a functional app experience.
                    For non-essential cookies (e.g., analytics and marketing), we rely on your consent as required by
                    GDPR, CCPA, PIPL, and other global privacy laws.
                  </p>
                  <p>
                    When you first use the Nook app, you&apos;ll see a cookie banner asking for your consent to use
                    non-essential cookies. You can update your preferences at any time in the app&apos;s privacy settings.
                  </p>
                </div>

                <div className={styles.cookieSection}>
                  <h2 className={styles.cookieTitle}>7. Updates to This Cookie Policy</h2>
                  <p>
                    We may update this Cookie Policy from time to time to reflect changes in our practices or legal
                    requirements. We&apos;ll notify you of significant updates via email or in-app notifications.
                  </p>
                  <p>
                    If you have any questions about this Cookie Policy or how we use cookies, please contact us at
                    <a href="mailto:contact@yournook.org" className={styles.cookieLink}>
                      {" "}
                      contact@yournook.org
                    </a>
                    .
                  </p>
                </div>

                <div className={styles.cookieFooter}>
                  <p>
                    This Cookie Policy is designed to comply with global privacy laws such as GDPR (EU), CCPA
                    (California), PIPL (China), and others while remaining user-friendly and transparent about cookie
                    usage and management options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Preferences Section */}
      {/* <section className={styles.preferencesSection}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className={styles.preferencesCard}>
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <h2 className={styles.preferencesTitle}>Cookie Preferences</h2>
                    <p className={styles.preferencesText}>
                      You can customize which cookies you allow us to use. Essential cookies cannot be disabled as they
                      are necessary for the website to function properly.
                    </p>
                  </div>
                  <div className="col-md-4 text-md-end mt-3 mt-md-0">
                    <button className={styles.preferencesButton}>
                      Cookie Settings
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className={styles.buttonIcon}
                        viewBox="0 0 16 16"
                      >
                        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>

    </>
  )
}
