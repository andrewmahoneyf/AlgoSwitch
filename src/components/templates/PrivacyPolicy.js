import React from 'react';
import withAuthorization from '../withAuthorization';

class Privacy extends React.Component {
    render() {
        return (
            <section className="privacy bg-light pb-5">
                <h2 id="ppHeader" className="pt-5">Coinglomerate AlgoSwitch Privacy Policy</h2><br/>
                <div className="container text-left">
                    <div>
                        <div className="innerText">This privacy policy has been compiled to better serve
                            those who are concerned with how their 'Personally Identifiable Information'
                            (PII) is being used online. PII, as described in US privacy law and information
                            security, is information that can be used on its own or with other information
                            to identify, contact, or locate a single person, or to identify an individual in
                            context. Please read our privacy policy carefully to get a clear understanding
                            of how we collect, use, protect or otherwise handle your Personally Identifiable
                            Information in accordance with our website.<br/></div>
                        <span id="infoCo"></span><br/>
                        <div className="grayText">
                            <strong>What personal information do we collect from the people that visit our
                                blog, website or app?</strong>
                        </div><br/>
                        <div className="innerText">When ordering or registering on our site, as
                            appropriate, you may be asked to enter your name, email address, mailing
                            address, phone number, credit card information, social security number or other
                            details to help you with your experience.</div><br/>
                        <div className="grayText">
                            <strong>When do we collect information?</strong>
                        </div><br/>
                        <div className="innerText">We collect information from you when you register on
                            our site, fill out a form or enter information on our site.</div><br/>
                        <span id="infoUs"></span><br/>
                        <div className="grayText">
                            <strong>How do we use your information?
                            </strong>
                        </div><br/>
                        <div className="innerText">
                            We may use the information we collect from you when you register, make a
                            purchase, sign up for our newsletter, respond to a survey or marketing
                            communication, surf the website, or use certain other site features in the
                            following ways:<br/><br/></div>
                        <div className="innerText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <strong>•</strong>
                            To personalize your experience and to allow us to deliver the type of content
                            and product offerings in which you are most interested.</div>
                        <div className="innerText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <strong>•</strong>
                            To improve our website in order to better serve you.</div>
                        <div className="innerText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <strong>•</strong>
                            To allow us to better service you in responding to your customer service
                            requests.</div>
                        <div className="innerText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <strong>•</strong>
                            To quickly process your transactions.</div>
                        <div className="innerText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <strong>•</strong>
                            To send periodic emails regarding your order or other products and services.</div>
                        <span id="infoPro"></span><br/>
                        <div className="grayText">
                            <strong>How do we protect your information?</strong>
                        </div><br/>
                        <div className="innerText">Our website is scanned on a regular basis for
                            security holes and known vulnerabilities in order to make your visit to our site
                            as safe as possible.<br/><br/></div>
                        <div className="innerText">We do not use Malware Scanning.<br/><br/></div>
                        <div className="innerText">Your personal information is contained behind secured
                            networks and is only accessible by a limited number of persons who have special
                            access rights to such systems, and are required to keep the information
                            confidential. In addition, all sensitive/credit information you supply is
                            encrypted via Secure Socket Layer (SSL) technology.
                        </div><br/>
                        <div className="innerText">We implement a variety of security measures when a
                            user enters, submits, or accesses their information to maintain the safety of
                            your personal information.</div><br/>
                        <div className="innerText">For your convenience we may store your credit card
                            information longer than 30 days in order to expedite future orders, and to
                            automate the billing process.</div><br/>
                        <span id="coUs"></span><br/>
                        <div className="grayText">
                            <strong>Do we use 'cookies'?</strong>
                        </div><br/>
                        <div className="innerText">Yes. Cookies are small files that a site or its
                            service provider transfers to your computer's hard drive through your Web
                            browser (if you allow) that enables the site's or service provider's systems to
                            recognize your browser and capture and remember certain information. For
                            instance, we use cookies to help us remember and process the items in your
                            shopping cart. They are also used to help us understand your preferences based
                            on previous or current site activity, which enables us to provide you with
                            improved services. We also use cookies to help us compile aggregate data about
                            site traffic and site interaction so that we can offer better site experiences
                            and tools in the future.</div>
                        <div className="innerText"><br/>
                            <strong>We use cookies to:</strong>
                        </div>
                        <div className="innerText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <strong>•</strong>
                            Help remember and process the items in the shopping cart.</div>
                        <div className="innerText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <strong>•</strong>
                            Understand and save user's preferences for future visits.</div>
                        <div className="innerText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <strong>•</strong>
                            Keep track of advertisements.</div>
                        <div className="innerText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <strong>•</strong>
                            Compile aggregate data about site traffic and site interactions in order to
                            offer better site experiences and tools in the future. We may also use trusted
                            third-party services that track this information on our behalf.</div>
                        <div className="innerText"><br/>You can choose to have your computer warn you
                            each time a cookie is being sent, or you can choose to turn off all cookies. You
                            do this through your browser settings. Since browser is a little different, look
                            at your browser's Help Menu to learn the correct way to modify your cookies.<br/></div><br/>
                        <div className="innerText">If you turn cookies off, Some of the features that
                            make your site experience more efficient may not function properly.It won't
                            affect the user's experience that make your site experience more efficient and
                            may not function properly.</div><br/>
                        <span id="trDi"></span><br/>
                        <div className="grayText">
                            <strong>Third-party disclosure</strong>
                        </div><br/>
                        <div className="innerText">We do not sell, trade, or otherwise transfer to
                            outside parties your Personally Identifiable Information unless we provide users
                            with advance notice. This does not include website hosting partners and other
                            parties who assist us in operating our website, conducting our business, or
                            serving our users, so long as those parties agree to keep this information
                            confidential. We may also release information when it's release is appropriate
                            to comply with the law, enforce our site policies, or protect ours or others'
                            rights, property or safety.
                            <br/><br/>
                            However, non-personally identifiable visitor information may be provided to
                            other parties for marketing, advertising, or other uses.
                        </div>
                        <span id="trLi"></span><br/>
                        <div className="grayText">
                            <strong>Third-party links</strong>
                        </div><br/>
                        <div className="innerText">Occasionally, at our discretion, we may include or
                            offer third-party products or services on our website. These third-party sites
                            have separate and independent privacy policies. We therefore have no
                            responsibility or liability for the content and activities of these linked
                            sites. Nonetheless, we seek to protect the integrity of our site and welcome any
                            feedback about these sites.</div>
                        <span id="gooAd"></span><br/>
                        <div className="blueText">
                            <strong>Google</strong>
                        </div><br/>
                        <div className="innerText">Google's advertising requirements can be summed up by
                            Google's Advertising Principles. They are put in place to provide a positive
                            experience for users.
                            https://support.google.com/adwordspolicy/answer/1316548?hl=en
                            <br/><br/></div>
                        <div className="innerText">We use Google AdSense Advertising on our website.</div>
                        <div className="innerText"><br/>Google, as a third-party vendor, uses cookies to
                            serve ads on our site. Google's use of the DART cookie enables it to serve ads
                            to our users based on previous visits to our site and other sites on the
                            Internet. Users may opt-out of the use of the DART cookie by visiting the Google
                            Ad and Content Network privacy policy.<br/></div>
                        <div className="innerText"><br/>
                            <strong>We have implemented the following:</strong>
                        </div>
                        <div className="innerText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <strong>•</strong>
                            Remarketing with Google AdSense</div>
                        <div className="innerText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <strong>•</strong>
                            Google Display Network Impression Reporting</div>
                        <div className="innerText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <strong>•</strong>
                            Demographics and Interests Reporting</div>
                        <div className="innerText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <strong>•</strong>
                            DoubleClick Platform Integration<br/></div><br/>
                        <div className="innerText">We, along with third-party vendors such as Google use
                            first-party cookies (such as the Google Analytics cookies) and third-party
                            cookies (such as the DoubleClick cookie) or other third-party identifiers
                            together to compile data regarding user interactions with ad impressions and
                            other ad service functions as they relate to our website.
                        </div>
                        <div className="innerText"><br/>
                            <strong>Opting out:</strong><br/>Users can set preferences for how Google
                                advertises to you using the Google Ad Settings page. Alternatively, you can opt
                                out by visiting the Network Advertising Initiative Opt Out page or by using the
                                Google Analytics Opt Out Browser add on.</div>
                        <span id="calOppa"></span><br/>
                        <div className="blueText">
                            <strong>California Online Privacy Protection Act</strong>
                        </div><br/>
                        <div className="innerText">CalOPPA is the first state law in the nation to
                            require commercial websites and online services to post a privacy policy. The
                            law's reach stretches well beyond California to require any person or company in
                            the United States (and conceivably the world) that operates websites collecting
                            Personally Identifiable Information from California consumers to post a
                            conspicuous privacy policy on its website stating exactly the information being
                            collected and those individuals or companies with whom it is being shared. - See
                            more at:
                            http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf<br/></div>
                        <div className="innerText"><br/>
                            <strong>According to CalOPPA, we agree to the following:</strong><br/></div>
                        <div className="innerText">Users can visit our site anonymously.</div>
                        <div className="innerText">Once this privacy policy is created, we will add a
                            link to it on our home page or as a minimum, on the first significant page after
                            entering our website.<br/></div>
                        <div className="innerText">Our Privacy Policy link includes the word 'Privacy'
                            and can easily be found on the page specified above.</div>
                        <div className="innerText"><br/>You will be notified of any Privacy Policy changes:</div>
                        <div className="innerText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <strong>•</strong>
                            On our Privacy Policy Page<br/></div>
                        <div className="innerText">Can change your personal information:</div>
                        <div className="innerText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <strong>•</strong>
                            By logging in to your account</div>
                        <div className="innerText"><br/>
                            <strong>How does our site handle Do Not Track signals?</strong><br/></div>
                        <div className="innerText">We honor Do Not Track signals and Do Not Track, plant
                            cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in
                            place.
                        </div>
                        <div className="innerText"><br/>
                            <strong>Does our site allow third-party behavioral tracking?</strong><br/></div>
                        <div className="innerText">It's also important to note that we do not allow third-party behavioral tracking</div>
                        <span id="coppAct"></span><br/>
                        <div className="blueText">
                            <strong>COPPA (Children Online Privacy Protection Act)</strong>
                        </div><br/>
                        <div className="innerText">When it comes to the collection of personal
                            information from children under the age of 13 years old, the Children's Online
                            Privacy Protection Act (COPPA) puts parents in control. The Federal Trade
                            Commission, United States' consumer protection agency, enforces the COPPA Rule,
                            which spells out what operators of websites and online services must do to
                            protect children's privacy and safety online.<br/><br/></div>
                        <div className="innerText">We do not specifically market to children under the age of 13 years old.</div>
                        <div className="innerText">Do we let third-parties, including ad networks or
                            plug-ins collect PII from children under 13?</div>
                        <span id="ftcFip"></span><br/>
                        <div className="blueText">
                            <strong>Fair Information Practices</strong>
                        </div><br/>
                        <div className="innerText">The Fair Information Practices Principles form the
                            backbone of privacy law in the United States and the concepts they include have
                            played a significant role in the development of data protection laws around the
                            globe. Understanding the Fair Information Practice Principles and how they
                            should be implemented is critical to comply with the various privacy laws that
                            protect personal information.<br/><br/></div>
                        <div className="innerText">
                            <strong>In order to be in line with Fair Information Practices we will take the
                                following responsive action, should a data breach occur:</strong>
                        </div>
                        <div className="innerText">We will notify you via email</div>
                        <div className="innerText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <strong>•</strong>
                            Within 7 business days</div>
                        <div className="innerText"><br/>We also agree to the Individual Redress
                            Principle which requires that individuals have the right to legally pursue
                            enforceable rights against data collectors and processors who fail to adhere to
                            the law. This principle requires not only that individuals have enforceable
                            rights against data users, but also that individuals have recourse to courts or
                            government agencies to investigate and/or prosecute non-compliance by data
                            processors.</div>
                        <span id="canSpam"></span><br/>
                        <div className="blueText">
                            <strong>CAN SPAM Act</strong>
                        </div><br/>
                        <div className="innerText">The CAN-SPAM Act is a law that sets the rules for
                            commercial email, establishes requirements for commercial messages, gives
                            recipients the right to have emails stopped from being sent to them, and spells
                            out tough penalties for violations.<br/><br/></div>
                        <div className="innerText">
                            <strong>We collect your email address in order to:</strong>
                        </div>
                        <div className="innerText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <strong>•</strong>
                            Send information, respond to inquiries, and/or other requests or questions</div>
                        <div className="innerText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <strong>•</strong>
                            Process orders and to send information and updates pertaining to orders.</div>
                        <div className="innerText"><br/>
                            <strong>To be in accordance with CANSPAM, we agree to the following:</strong>
                        </div>
                        <div className="innerText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <strong>•</strong>
                            Not use false or misleading subjects or email addresses.</div>
                        <div className="innerText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <strong>•</strong>
                            Identify the message as an advertisement in some reasonable way.</div>
                        <div className="innerText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <strong>•</strong>
                            Include the physical address of our business or site headquarters.</div>
                        <div className="innerText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <strong>•</strong>
                            Monitor third-party email marketing services for compliance, if one is used.</div>
                        <div className="innerText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <strong>•</strong>
                            Honor opt-out/unsubscribe requests quickly.</div>
                        <div className="innerText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <strong>•</strong>
                            Allow users to unsubscribe by using the link at the bottom of each email.</div>
                        <div className="innerText">
                            <strong><br/>If at any time you would like to unsubscribe from receiving future
                                emails, you can email us at</strong>
                        </div>
                        <div className="innerText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <strong>•</strong>
                            Follow the instructions at the bottom of each email.</div>
                        and we will promptly remove you from
                        <strong>ALL</strong>
                        correspondence.</div><br/>
                    <span id="ourCon"></span><br/>
                    <div className="blueText"></div>
                    <div className="container text-center">
                        <strong>Contacting Us</strong><br/>
                        <div className="innerText">If there are any questions regarding this privacy
                            policy, you may contact us using the information below.<br/><br/></div>
                        <div className="innerText">coinglomerate.com</div>
                        <div className="innerText">4504 16th Ave NE</div>Seattle, WA 98105
                        <div className="innerText">United States</div>
                        <div className="innerText">info@coinglomerate.com</div>
                        <div className="innerText"><br/>Last Edited on 2018-03-22</div>
                    </div>
                </div>
            </section>
        );
    }
}



const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Privacy);