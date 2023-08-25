import { Head } from "$fresh/runtime.ts";

import jsonProfile from "../../profile/profile_galeria.json" assert {
  type: "json",
};
import type Profile from "../../profile/type.ts";

import AvatarComponent from "../../components/Avatar.tsx";
import UsernameComponent from "../../components/Username.tsx";
import BioComponent from "../../components/Bio.tsx";
import LocationComponent from "../../components/Location.tsx";
import SocialLinksComponent from "../../components/SocialLinks.tsx";
import BannerComponent from "../../components/Banner.tsx";
import ReadmeButtonComponent from "../../components/ReadmeButton.tsx";
import { ArrowLeft } from "preact-feather";

export default function Fotos() {
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

  return (
    <>
      <Head>
        <title>Fumos - Andrew 1412</title>
      </Head>
      <a
        class="bg-metal px-2 py-2 rounded-lg fixed top-4 left-4"
        href="/galeria"
      >
        <ArrowLeft size={18} color="#cdc8c2" stroke-width={2.5} />
      </a>
      <body class="bg-black">
        <main class="w-10/12 mx-auto">
          <div class="flex flex-col w-full mt-12 mb-28">
            <div class="grid grid-cols-1 md:grid-cols-1 gap-4 mx-auto">
              <div>
                <img
                  class="h-auto max-w-full rounded-lg"
                  src="https://raw.githubusercontent.com/andrew1412/website/main/static/logos/IMG_20220124_182709.jpg"
                  alt=""
                  style="width: 828px;"
                  loading="lazy"
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full rounded-lg"
                  src="https://search.zzls.xyz/image_proxy?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FkYyVt29IMSc%2Fmaxresdefault.jpg&h=a117d03175f867f494f24fd624824f72a211a31b84de2f2fc15796850a03b406"
                  alt=""
                  style="width: 828px;"
                  loading="lazy"
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div>
                <img
                  class="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </main>
      </body>
    </>
  );
}
