import { useMemo } from "react";
import { footerLinks as baseFooterLinks, whiteMedia } from "../constants";
import { footerlogo, line } from "../assets/images";
import { useTranslation } from "../hooks/useTranslation";

const Footer = () => {
  const { t } = useTranslation();

  const footerLinks = useMemo(() => [
    {
      title: t("footer.contactUs"),
      links: baseFooterLinks[0].links, // Contact info doesn't need translation
    },
    {
      title: t("footer.quickLinks"),
      links: baseFooterLinks[1].links.map(link => {
        // Map English names to translation keys
        const nameMap = {
          "Ethical Review Committee": t("footer.links.ethicalReviewCommittee"),
          "Child Abuse Tracker": t("footer.links.childAbuseTracker"),
          "COVID 19": t("footer.links.covid19"),
          "Partners": t("footer.links.partners"),
          "Events": t("footer.links.events"),
        };
        return { ...link, name: nameMap[link.name] || link.name };
      }),
    },
    {
      title: t("footer.whatWeDo"),
      links: baseFooterLinks[2].links.map(link => {
        const nameMap = {
          "Strategic Themes": t("footer.strategicThemes"),
          "Our Projects": t("footer.links.ourProjects"),
          "Expertise": t("footer.links.expertise"),
        };
        return { ...link, name: nameMap[link.name] || link.name };
      }),
    },
    {
      title: t("footer.resources"),
      links: baseFooterLinks[3].links.map(link => {
        const nameMap = {
          "Publications": t("footer.links.publications"),
          "News & Activities": t("common.newsAndActivities"),
          "Podcast": t("footer.links.podcast"),
          "Vodcast": t("footer.links.vodcast"),
          "Videos": t("footer.links.videos"),
          "Photos": t("footer.links.photos"),
        };
        return { ...link, name: nameMap[link.name] || link.name };
      }),
    },
    // Restore with Impact block in constants footerLinks and Our Impact route
    // {
    //   title: t("footer.impact"),
    //   links: baseFooterLinks[4].links.map(link => {
    //     const nameMap = {
    //       "Policy Change": t("ourImpact.policies.title"),
    //       "Practice Change": t("ourImpact.practices.title"),
    //       "System Change": t("ourImpact.systems.title"),
    //     };
    //     return { ...link, name: nameMap[link.name] || link.name };
    //   }),
    // },
  ], [t]);

  return (
    <footer id="footer" className="max-container min-h-full ">
      <div className="flex flex-row justify-between">
        <a
          href="https://pdaghana.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={footerlogo} alt="logo" width={120} height={40} />
        </a>
        <div className="flex gap-5 flii">
          {whiteMedia.map((icon) => (
            <div className="flex" key={icon.alt}>
              <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="bg-white h-1 w-full mt-10"></div> */}
      <div>
        <img src={line} alt="line" className="w-full mt-10" />
      </div>

      <div className="flex flex-1 justify-between gap-10 mt-10 flex-wrap">
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h4 className="font-poppins text-white font-semibold text-xl mb-10">
              {section.title}
            </h4>
            <ul>
              {section.links.map((link) => (
                <li
                  className="font-poppins text-base text-white hover:text-black mt-5"
                  key={link.name}
                >
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div>
        <img src={line} alt="line" className="w-full mt-10" />
      </div>

      <div className="flex mt-10 justify-between items-center">
        <a 
          href="/disclaimer" 
          className="font-poppins text-sm text-white hover:text-orange transition-colors"
        >
          {t("footer.links.disclaimer")}
        </a>
        <p className="font-poppins text-sm text-white">
          {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
