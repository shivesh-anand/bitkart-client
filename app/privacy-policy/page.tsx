import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta name="description" content="Privacy Policy for Bitkart" />
      </Head>
      <div className="container mx-auto p-4 md:p-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        </header>
        <main>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              Welcome to Bitkart. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you use our
              platform. Bitkart is intended exclusively for the students of BIT
              Mesra. By using our service, you agree to the collection and use
              of information in accordance with this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              2. Information We Collect
            </h2>
            <p>
              We may collect and process the following types of information:
            </p>
            <ul className="list-disc pl-6">
              <li>
                <strong>Personal Information:</strong> Such as name, email
                address, and contact details provided during registration or
                communication.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact
                with our platform, including IP address, browser type, and
                activity logs.
              </li>
              <li>
                <strong>Item Information:</strong> Details about items listed or
                purchased, including images and descriptions.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              3. How We Use Your Information
            </h2>
            <p>We use your information for the following purposes:</p>
            <ul className="list-disc pl-6">
              <li>
                <strong>Account Management:</strong> To facilitate account
                creation, authentication, and maintenance.
              </li>
              <li>
                <strong>Communication:</strong> To send you relevant
                notifications, updates, and support messages.
              </li>
              <li>
                <strong>Service Improvement:</strong> To analyze usage patterns
                and enhance our platform's functionality and user experience.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              4. How We Share Your Information
            </h2>
            <p>
              We do not sell or trade your personal information. We may share
              your information in the following scenarios:
            </p>
            <ul className="list-disc pl-6">
              <li>
                <strong>Service Providers:</strong> With third-party service
                providers who perform services on our behalf, such as hosting
                and email communication.
              </li>
              <li>
                <strong>Legal Compliance:</strong> When required by law or in
                response to legal processes.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Security</h2>
            <p>
              We implement industry-standard security measures to protect your
              information from unauthorized access, alteration, or destruction.
              However, no method of transmission over the Internet or electronic
              storage is 100% secure, so we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              6. Authenticity Disclaimer
            </h2>
            <p>
              Bitkart acts solely as a platform for connecting buyers and
              sellers within the BIT Mesra community. We do not verify the
              authenticity of items listed on the platform. It is your
              responsibility to verify the details and authenticity of any items
              before purchasing. We are not liable for any authenticity-related
              issues with the items listed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              7. Platform Availability
            </h2>
            <p>
              Bitkart is a personal project and may not be guaranteed to be
              available indefinitely. We reserve the right to modify or
              discontinue the platform at any time without prior notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              8. Your Rights and Choices
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6">
              <li>
                <strong>Access and Update:</strong> Request access to and update
                your personal information.
              </li>
              <li>
                <strong>Opt-Out:</strong> Opt-out of receiving marketing
                communications from us.
              </li>
              <li>
                <strong>Delete:</strong> Request deletion of your account and
                personal information, subject to legal and contractual
                obligations.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              9. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page, and the revised policy will be
              effective immediately upon posting.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:
            </p>
            <ul className="list-disc pl-6">
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:bitkart.contact@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  bitkart.contact@gmail.com
                </a>
              </li>
            </ul>
          </section>
        </main>
        <footer className="text-center mt-8">
          <hr className="my-4" />
          <p>&copy; 2024 Bitkart. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default PrivacyPolicy;
