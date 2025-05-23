import { Head } from "$fresh/runtime.ts";

import { Handlers, PageProps } from "$fresh/server.ts";
import jsonProfile from "../profile/profile_home.json" assert { type: "json" };
import type Profile from "../profile/type.ts";

import AvatarComponent from "../components/Avatar.tsx";
import UsernameComponent from "../components/Username.tsx";
import BioComponent from "../components/Bio.tsx";
import LocationComponent from "../components/Location.tsx";
import SocialLinksComponent from "../components/SocialLinks.tsx";
import BannerComponent from "../components/Banner.tsx";
import TabsIsland from "../islands/Tabs.tsx";
import ProfileMisconfigComponent from "../components/ProfileMisconfig.tsx";
import ReadmeButtonComponent from "../components/ReadmeButton_home.tsx";

import fetchFeed from "../utils/rss.ts";

type HandlerProps = {
  feed: {
    title: string;
    date: Date;
    url: string;
  }[] | undefined;
};

export const handler: Handlers<HandlerProps | null> = {
  async GET(_, ctx) {
    const profile: Profile = jsonProfile;
    const { rss } = profile;

    let feed = undefined;
    if (rss) feed = await fetchFeed(rss);

    return ctx.render({
      feed,
    });
  },
};

export default function Home({ data }: PageProps<HandlerProps | null>) {
  if (!data) return <h1>Profile misconfiguration.</h1>;

  const profile: Profile = jsonProfile;
  const {
    avatar,
    username,
    bio,
    location,
    socialAccounts,
    banner,
    links,
    readme,
  } = profile;
  const { feed } = data;

  // validate profile configuration
  if (!avatar) {
    return (
      <ProfileMisconfigComponent>
        Property <i>avatar</i> can't be empty.
      </ProfileMisconfigComponent>
    );
  }
  if (!username) {
    return (
      <ProfileMisconfigComponent>
        Property <i>username</i> can't be empty.
      </ProfileMisconfigComponent>
    );
  }
  if (!bio) {
    return (
      <ProfileMisconfigComponent>
        Property <i>bio</i> can't be empty.
      </ProfileMisconfigComponent>
    );
  }
  if (links.length === 0) {
    return (
      <ProfileMisconfigComponent>
        Property <i>links</i> can't be of length zero.
      </ProfileMisconfigComponent>
    );
  }

  return (
    <>
      <Head>
        <title>Andrew 1412</title>
        <meta
          name="description"
          content="Website, personal blog and gallery of Andrew1412 a Kahanist Weeb, a Vtuber who wants to share his ideas on the internet. Links to YouTube, Twitch, Rumble, Anilist and Discord of Andrew 1412 a KahanistWeeb."
        />
      </Head>
      <body class="bg-black">
        <main class="w-10/12 sm:w-96 mx-auto">
          <div class="flex flex-col w-full mt-12">
            <div class="flex flex-col items-center w-full w-full rounded-xl p-4">
              <AvatarComponent avatar={avatar} />
              <UsernameComponent username={username} />
              <BioComponent bio={bio} />
              {readme && <ReadmeButtonComponent />}
              <SocialLinksComponent socialAccounts={socialAccounts} />
              {banner && (
                <BannerComponent
                  title={banner.title}
                  text={banner.text}
                />
              )} 
              <TabsIsland links={links} feed={feed} />
            </div>
          </div>
        </main>
        <footer class="w-10/12 sm:w-96 mx-auto flex flex-col items-center mt-4 mb-4">
          <p>
            <img
              src="https://andrew1412.deno.dev/counter.svg"
              style="width: 270px;"
              title="visit counter"
              alt=""
            />
          </p>
        </footer>
      </body>
    </>
  );
}
