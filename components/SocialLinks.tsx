import {
  Dribbble,
  Facebook,
  Github,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  MessageSquare,
  Twitter,
  Youtube,
} from "preact-feather";
import {
  SiGithub,
  SiMaildotru,
  SiMatrix,
  SiOdysee,
  SiAnilist,
  SiDiscord,
  SiSteam,
  SiYoutube,
} from "react-icons/si";
import SocialLinkWrapper from "./SocialLinkWrapper.tsx";

import type Profile from "../profile/type.ts";

export default function SocialLinks(
  props: { socialAccounts: Profile["socialAccounts"] },
) {
  const { socialAccounts } = props;

  const svgProps = {
    size: 18,
    color: "#c9d1d9",
  };

  return (
    <div>
      <div class="flex justify-center mb-6 space-x-2">
        {socialAccounts?.twitter && (
          <SocialLinkWrapperComponent href={socialAccounts.twitter}>
            <Twitter {...svgProps} />
          </SocialLinkWrapperComponent>
        )}
        {socialAccounts?.anilist && (
          <SocialLinkWrapper href={socialAccounts.anilist}>
            <SiAnilist {...svgProps} />
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
        {socialAccounts?.steam && (
          <SocialLinkWrapper href={socialAccounts.steam}>
            <SiSteam {...svgProps} />
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
