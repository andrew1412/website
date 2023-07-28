import {
  Dribbble,
  Facebook,
  Github,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
} from "preact-feather";
import SocialLinkWrapper from "./SocialLinkWrapper.tsx";

import type Profile from "../profile/type.ts";

export default function SocialLinks(
  props: { socialAccounts: Profile["socialAccounts"] },
) {
  const { socialAccounts } = props;

  const svgProps = {
    size: 18,
    color: "#1f2937",
    "stroke-width": 2.5,
  };

  return (
    <div>
      <div class="flex justify-center mb-6 space-x-2">
        {socialAccounts?.twitter && (
          <SocialLinkWrapper href={socialAccounts.twitter}>
            <Twitter {...svgProps} />
          </SocialLinkWrapper>
        )}
        {socialAccounts?.instagram && (
          <SocialLinkWrapper href={socialAccounts.instagram}>
            <Instagram {...svgProps} />
          </SocialLinkWrapper>
        )}
        {socialAccounts?.youtube && (
          <SocialLinkWrapper href={socialAccounts.youtube}>
            <Youtube {...svgProps} />
          </SocialLinkWrapper>
        )}
        {socialAccounts?.linkedin && (
          <SocialLinkWrapper href={socialAccounts.linkedin}>
            <Linkedin {...svgProps} />
          </SocialLinkWrapper>
        )}
        {socialAccounts?.facebook && (
          <SocialLinkWrapper href={socialAccounts.facebook}>
            <Facebook {...svgProps} />
          </SocialLinkWrapper>
        )}
        {socialAccounts?.github && (
          <SocialLinkWrapper href={socialAccounts.github}>
            <Github {...svgProps} />
          </SocialLinkWrapper>
        )}
        {socialAccounts?.dribbble && (
          <SocialLinkWrapper href={socialAccounts.dribbble}>
            <Dribbble {...svgProps} />
          </SocialLinkWrapper>
        )}
        {socialAccounts?.website && (
          <SocialLinkWrapper href={socialAccounts.website}>
            <Globe {...svgProps} />
          </SocialLinkWrapper>
        )}
        {socialAccounts?.mail && (
          <SocialLinkWrapper href={`mailto:${socialAccounts.mail}`}>
            <Mail {...svgProps} />
          </SocialLinkWrapper>
        )}
      </div>
    </div>
  );
}
