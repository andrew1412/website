import { Head } from "$fresh/runtime.ts";

import jsonProfile from "../profile/profile_galeria.json" assert {
  type: "json",
};
import type Profile from "../profile/type.ts";

import AvatarComponent from "../components/Avatar.tsx";
import UsernameComponent from "../components/Username.tsx";
import BioComponent from "../components/Bio.tsx";
import LocationComponent from "../components/Location.tsx";
import SocialLinksComponent from "../components/SocialLinks.tsx";
import BannerComponent from "../components/Banner.tsx";
import ReadmeButtonComponent from "../components/ReadmeButton.tsx";

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
        <title>Galeria - Andrew 1412</title>
      </Head>
      <body class="bg-black">
        <main class="w-10/12 sm:w-96 mx-auto">
          <div class="flex flex-col w-full mt-12 mb-28">
            <div class="flex flex-col items-center w-full w-full rounded-xl p-4">
              <AvatarComponent avatar={avatar} />
              <UsernameComponent username={username} />
              <BioComponent bio={bio} />
              {readme && <ReadmeButtonComponent />}
            </div>
            <div>
              <div class="grid grid-cols-3 md:grid-cols-3 gap-4">
                <a
                  href="https://github.com/andrew1412/website/raw/main/static/logos/pfp-4.webp"
                  target="_blank"
                >
                  <img
                    class="h-auto max-w-full rounded-lg hover:scale-105 transition duration-500 cursor-pointer"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                    alt=""
                    loading="lazy"
                  />
                </a>
                <a href="">
                  <img
                    class="h-auto max-w-full rounded-lg hover:scale-105 transition duration-500 cursor-pointer"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                    alt=""
                    loading="lazy"
                  />
                </a>
                <a href="">
                  <img
                    class="h-auto max-w-full rounded-lg hover:scale-105 transition duration-500 cursor-pointer"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                    alt=""
                    loading="lazy"
                  />
                </a>
                <a href="">
                  <img
                    class="h-auto max-w-full rounded-lg hover:scale-105 transition duration-500 cursor-pointer"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                    alt=""
                    loading="lazy"
                  />
                </a>
                <a href="">
                  <img
                    class="h-auto max-w-full rounded-lg hover:scale-105 transition duration-500 cursor-pointer"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                    alt=""
                    loading="lazy"
                  />
                </a>
                <a href="">
                  <img
                    class="h-auto max-w-full rounded-lg hover:scale-105 transition duration-500 cursor-pointer"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                    alt=""
                    loading="lazy"
                  />
                </a>
                <a href="">
                  <img
                    class="h-auto max-w-full rounded-lg hover:scale-105 transition duration-500 cursor-pointer"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
                    alt=""
                    loading="lazy"
                  />
                </a>
                <a href="">
                  <img
                    class="h-auto max-w-full rounded-lg hover:scale-105 transition duration-500 cursor-pointer"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
                    alt=""
                    loading="lazy"
                  />
                </a>
                <a href="">
                  <img
                    class="h-auto max-w-full rounded-lg hover:scale-105 transition duration-500 cursor-pointer"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
                    alt=""
                    loading="lazy"
                  />
                </a>
                <a href="">
                  <img
                    class="h-auto max-w-full rounded-lg hover:scale-105 transition duration-500 cursor-pointer"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
                    alt=""
                    loading="lazy"
                  />
                </a>
                <a href="">
                  <img
                    class="h-auto max-w-full rounded-lg hover:scale-105 transition duration-500 cursor-pointer"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
                    alt=""
                    loading="lazy"
                  />
                </a>
                <a href="">
                  <img
                    class="h-auto max-w-full rounded-lg hover:scale-105 transition duration-500 cursor-pointer"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
                    alt=""
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>
        </main>
      </body>
    </>
  );
}
