import React from "react";
import { Footer } from "../components";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Call 00-308-321-0161</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">FAQ</Footer.Link>
          <Footer.Link href="#">Investor Relations</Footer.Link>
          <Footer.Link href="#">Privacy</Footer.Link>
          <Footer.Link href="#">Speed Test</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Help Center</Footer.Link>
          <Footer.Link href="#">Jobs</Footer.Link>
          <Footer.Link href="#">Cookie Preferences</Footer.Link>
          <Footer.Link href="#">Legal Notices</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Account</Footer.Link>
          <Footer.Link href="#">Ways to Watch</Footer.Link>
          <Footer.Link href="#">Corporate Information</Footer.Link>
          <Footer.Link href="#">Only on Netflix</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Media Center</Footer.Link>
          <Footer.Link href="#">Terms of Use</Footer.Link>
          <Footer.Link href="#">Contact Us</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>
        {`Netflix South Korea

        
Netflix Services Korea Ltd. E-Commerce Registration Number: Je 2018-Seoul Jong-ro-0426 Ho. Phone: 00-308-321-0161
Representative: Reginald Shawn Thompson
Email: korea@netflix.com
Address: 20F, Tower A, Centropolis Building 26, Ujeongguk-ro, Jongno-gu, Seoul, 03161 Republic of Korea
Business registration number: 165-87-00119
Hosted by: Amazon Web Services Inc.
KFTC website`}
      </Footer.Text>
    </Footer>
  );
}
