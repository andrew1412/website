import {
  Dribbble,
  Facebook,
  Github,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Twitter,
  Youtube,
} from "preact-feather";
import { SiGithub, SiMaildotru, SiOdysee, SiYoutube } from "react-icons/si";
import SocialLinkWrapper from "./SocialLinkWrapper.tsx";

import type Profile from "../profile/type.ts";

export default function SocialLinks(
  props: { socialAccounts: Profile["socialAccounts"] },
) {
  const { socialAccounts } = props;

  const svgProps = {
    size: 18,
    color: "#cdc8c2",
  };

  return (
    <div>
      <div class="flex justify-center mb-6 space-x-2">
        {socialAccounts?.odysee && (
          <SocialLinkWrapper href={socialAccounts.odysee}>
            <SiOdysee {...svgProps} />
          </SocialLinkWrapper>
        )}
        {socialAccounts?.instagram && (
          <SocialLinkWrapper href={socialAccounts.instagram}>
            <Instagram {...svgProps} />
          </SocialLinkWrapper>
        )}
        {socialAccounts?.youtube && (
          <SocialLinkWrapper href={socialAccounts.youtube}>
            <SiYoutube {...svgProps} />
          </SocialLinkWrapper>
        )}
        {socialAccounts?.matrix && (
          <SocialLinkWrapper href={socialAccounts.matrix}>
            <MessageCircle {...svgProps} />
          </SocialLinkWrapper>
        )}
        {socialAccounts?.facebook && (
          <SocialLinkWrapper href={socialAccounts.facebook}>
            <Facebook {...svgProps} />
          </SocialLinkWrapper>
        )}
        {socialAccounts?.github && (
          <SocialLinkWrapper href={socialAccounts.github}>
            <SiGithub {...svgProps} />
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
            <SiMaildotru {...svgProps} />
          </SocialLinkWrapper>
        )}
      </div>
    </div>
  );
}
