/* Footer component — injected into every page via this script */
(function () {
    const placeholder = document.getElementById("footer-placeholder");
    if (!placeholder) return;

    placeholder.outerHTML = `
<footer class="site-footer" id="site-footer">

    <!-- HUGE WORDMARK -->


    <!-- CTA -->

    <div class="footer-cta">

        <div class="footer-wordmark">
            <span>AMNIKON</span>
        </div>

        <div class="container">

            <div class="footer-cta-content">

                <div>

                    <div class="eyebrow">
                        LET'S BUILD SOMETHING GREAT
                    </div>

                    <h2>
                        Ready to Transform
                        Your IT?
                    </h2>

                    <p>
                        From managed IT and cloud infrastructure
                        to cybersecurity and strategic consulting,
                        AMNIKON helps businesses scale with confidence.
                    </p>

                </div>

                <div class="footer-cta-actions">

                    <a href="../contact/contact.html"
                       class="btn btn-primary">
                        Contact Us
                    </a>

                    <a href="../support/support.html"
                       class="btn btn-outline">
                        Get Support
                    </a>

                </div>

            </div>

        </div>

    </div>


    <!-- FOOTER LINKS -->

    <div class="footer-main">

        <div class="container">

            <div class="footer-grid">


                <!-- BRAND -->

                <div class="footer-brand">

                    <h4>AMNIKON</h4>

                    <p>
                        Engineering Digital Growth through
                        managed services, cybersecurity,
                        cloud infrastructure and strategic IT.
                    </p>

                </div>


                <!-- COMPANY -->

                <div class="footer-col">

                    <h5>Company</h5>

                    <ul>

                        <li>
                            <a href="../about/company.html">
                                About Us
                            </a>
                        </li>

                        <li>
                            <a href="../about/team.html">
                                Team
                            </a>
                        </li>

                        <li>
                            <a href="../projects/index.html">
                                Projects
                            </a>
                        </li>

                        <li>
                            <a href="../careers/careers.html">
                                Careers
                            </a>
                        </li>

                    </ul>

                </div>


                <!-- SERVICES -->

                <div class="footer-col">

                    <h5>Services</h5>

                    <ul>

                        <li>
                            <a href="../services/managed-it.html">
                                Managed IT
                            </a>
                        </li>

                        <li>
                            <a href="../services/cloud.html">
                                Cloud Solutions
                            </a>
                        </li>

                        <li>
                            <a href="../services/cybersecurity.html">
                                Cybersecurity
                            </a>
                        </li>

                    </ul>

                </div>


                <!-- CONTACT -->

                <div class="footer-col footer-contact">

                    <h5>Contact</h5>

                    <ul>

                        <!-- Email -->

                        <li>
                            <a href="mailto:info@amnikontechnologies.com"
                               class="info-email">
                                info@amnikontechnologies.com
                            </a>
                        </li>


                        <!-- MAIN BRANCH -->

                        <li class="footer-address">

                            <h5>
                                Main Branch
                            </h5>

                            <p class="info-address">
                                Building A1, Dubai Silicon Oasis,
                                Dubai, United Arab Emirates
                            </p>

                        </li>


                        <!-- BRANCH -->

                        <li class="footer-address">

                            <h5>
                                Branch
                            </h5>

                            <p class="info-address">
                                Arihant Aura Thane - Belapur Rd, Turbhe MIDC, Navi Mumbai
                            </p>

                        </li>

                    </ul>

                </div>


            </div>


            <!-- FOOTER BOTTOM -->

            <div class="footer-bottom">

                <p>
                    © 2025 AMNIKON Technologies.
                    All rights reserved.
                </p>

                <div class="footer-bottom-links">

                    <a href="#">
                        Privacy Policy
                    </a>

                    <a href="#">
                        Terms of Service
                    </a>

                </div>

            </div>

        </div>

    </div>

</footer>
`;
})();