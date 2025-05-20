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
  SiTwitch,
  SiTwitter,
  Rumble,
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
        {socialAccounts?.youtube && (
          <SocialLinkWrapper href={socialAccounts.youtube}>
            <SiYoutube {...svgProps} />
          </SocialLinkWrapper>
        )}
        {socialAccounts?.facebook && (
          <SocialLinkWrapper href={socialAccounts.facebook}>
           <SiTwitch {...svgProps} />
          </SocialLinkWrapper>
        )}
        {socialAccounts?.twitter && (
          <SocialLinkWrapper href={socialAccounts.twitter}>
            <Rumble {...svgProps} />
          </SocialLinkWrapper>
        )}
        {socialAccounts?.instagram && (
          <SocialLinkWrapper href={socialAccounts.instagram}>
            <SiDiscord {...svgProps} />
          </SocialLinkWrapper>
        )}
        
        {socialAccounts?.matrix && (
          <SocialLinkWrapper href={socialAccounts.matrix}>
            <SiMaildotru {...svgProps} />
          </SocialLinkWrapper>
        )}
        {socialAccounts?.github && (
          <SocialLinkWrapper href={socialAccounts.github}>
            <SiAnilist {...svgProps} />
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
