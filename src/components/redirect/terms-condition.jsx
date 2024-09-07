import React from "react";

const TermsAndConditions = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>Terms and Conditions</h1>
        <p style={styles.paragraph}>Welcome to bot.ai!</p>
        <p style={styles.paragraph}>
          These terms and conditions outline the rules and regulations for the
          use of bot9 inc's Website, located at{" "}
          <a href="https://bot9.ai/" style={styles.link}>
            https://bot9.ai/
          </a>
          .
        </p>
        <p style={styles.paragraph}>
          By accessing this website we assume you accept these terms and
          conditions. Do not continue to use bot.ai if you do not agree to take
          all of the terms and conditions stated on this page.
        </p>
        <p style={styles.paragraph}>
          The following terminology applies to these Terms and Conditions,
          Privacy Statement and Disclaimer Notice and all Agreements: "Client",
          "You" and "Your" refers to you, the person log on this website and
          compliant to the Company's terms and conditions. "The Company",
          "Ourselves", "We", "Our" and "Us", refers to our Company. "Party",
          "Parties", or "Us", refers to both the Client and ourselves. All terms
          refer to the offer, acceptance and consideration of payment necessary
          to undertake the process of our assistance to the Client in the most
          appropriate manner for the express purpose of meeting the Client's
          needs in respect of provision of the Company's stated services, in
          accordance with and subject to, prevailing law of af. Any use of the
          above terminology or other words in the singular, plural,
          capitalization and/or he/she or they, are taken as interchangeable and
          therefore as referring to same.
        </p>

        <h2 style={styles.heading}>Cookies</h2>
        <p style={styles.paragraph}>
          We employ the use of cookies. By accessing bot.ai, you agreed to use
          cookies in agreement with the bot9 inc's Privacy Policy.
        </p>
        <p style={styles.paragraph}>
          Most interactive websites use cookies to let us retrieve the user's
          details for each visit. Cookies are used by our website to enable the
          functionality of certain areas to make it easier for people visiting
          our website. Some of our affiliate/advertising partners may also use
          cookies.
        </p>

        <h2 style={styles.heading}>License</h2>
        <p style={styles.paragraph}>
          Unless otherwise stated, bot9 inc and/or its licensors own the
          intellectual property rights for all material on bot.ai. All
          intellectual property rights are reserved. You may access this from
          bot.ai for your own personal use subjected to restrictions set in
          these terms and conditions.
        </p>
        <p style={styles.paragraph}>You must not:</p>
        <ul
          style={{ ...styles.list, listStyleType: "disc", paddingLeft: "20px" }}
        >
          <li style={styles.listItem}>Republish material from bot.ai</li>
          <li style={styles.listItem}>
            Sell, rent or sub-license material from bot.ai
          </li>
          <li style={styles.listItem}>
            Reproduce, duplicate or copy material from bot.ai
          </li>
          <li style={styles.listItem}>Redistribute content from bot.ai</li>
        </ul>

        <h2 style={styles.heading}>User Comments</h2>
        <p style={styles.paragraph}>
          Parts of this website offer an opportunity for users to post and
          exchange opinions and information in certain areas of the website.
          bot9 inc does not filter, edit, publish or review Comments prior to
          their presence on the website. Comments do not reflect the views and
          opinions of bot9 inc, its agents and/or affiliates. Comments reflect
          the views and opinions of the person who post their views and
          opinions.
        </p>
        <p style={styles.paragraph}>
          To the extent permitted by applicable laws, bot9 inc shall not be
          liable for the Comments or for any liability, damages or expenses
          caused and/or suffered as a result of any use of and/or posting of
          and/or appearance of the Comments on this website.
        </p>
        <p style={styles.paragraph}>
          bot9 inc reserves the right to monitor all Comments and to remove any
          Comments which can be considered inappropriate, offensive or causes
          breach of these Terms and Conditions.
        </p>

        <h2 style={styles.heading}>Hyperlinking to our Content</h2>
        <p style={styles.paragraph}>
          The following organizations may link to our Website without prior
          written approval:
        </p>
        <ul
          style={{ ...styles.list, listStyleType: "disc", paddingLeft: "20px" }}
        >
          <li style={styles.listItem}>Government agencies;</li>
          <li style={styles.listItem}>Search engines;</li>
          <li style={styles.listItem}>News organizations;</li>
          <li style={styles.listItem}>
            Online directory distributors may link to our Website in the same
            manner as they hyperlink to the Websites of other listed businesses;
            and
          </li>
          <li style={styles.listItem}>
            System wide Accredited Businesses except soliciting non-profit
            organizations, charity shopping malls, and charity fundraising
            groups which may not hyperlink to our Website.
          </li>
        </ul>

        <h2 style={styles.heading}>Content Liability</h2>
        <p style={styles.paragraph}>
          We shall not be hold responsible for any content that appears on your
          Website. You agree to protect and defend us against all claims that is
          rising on your Website. No link(s) should appear on any Website that
          may be interpreted as libelous, obscene or criminal, or which
          infringes, otherwise violates, or advocates the infringement or other
          violation of, any third party rights.
        </p>
        <h2 style={styles.heading}>Disclaimer</h2>
        <p style={styles.paragraph}>
          To the maximum extent permitted by applicable law, we exclude all
          representations, warranties and conditions relating to our website and
          the use of this website. Nothing in this disclaimer will:
        </p>
        <ul
          style={{ ...styles.list, listStyleType: "disc", paddingLeft: "20px" }}
        >
          <li style={styles.listItem}>
            Limit or exclude our or your liability for death or personal injury;
          </li>
          <li style={styles.listItem}>
            Limit or exclude our or your liability for fraud or fraudulent
            misrepresentation;
          </li>
          <li style={styles.listItem}>
            Limit any of our or your liabilities in any way that is not
            permitted under applicable law; or
          </li>
          <li style={styles.listItem}>
            Exclude any of our or your liabilities that may not be excluded
            under applicable law.
          </li>
        </ul>
        <p style={styles.paragraph}>
          The limitations and prohibitions of liability set in this Section and
          elsewhere in this disclaimer: (a) are subject to the preceding
          paragraph; and (b) govern all liabilities arising under the
          disclaimer, including liabilities arising in contract, in tort and for
          breach of statutory duty.
        </p>
        <p style={styles.paragraph}>
          As long as the website and the information and services on the website
          are provided free of charge, we will not be liable for any loss or
          damage of any nature.
        </p>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
  },
  container: {
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    color: "#333",
    maxWidth: "1150px",
    width: "100%",
    padding: "40px",
    backgroundColor: "#ffffff",
    marginTop: "60px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#1a1a1a",
  },
  heading: {
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "30px",
    marginBottom: "15px",
    color: "#1a1a1a",
  },
  paragraph: {
    marginBottom: "15px",
    fontSize: "14px",
  },
  list: {
    marginBottom: "15px",
    paddingLeft: "20px",
  },
  listItem: {
    marginBottom: "5px",
    fontSize: "14px",
  },
  link: {
    color: "#5755FF",
    textDecoration: "none",
  },
};

export default TermsAndConditions;
