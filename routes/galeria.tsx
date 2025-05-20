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
        <title>Gallery</title>
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
            <div class="grid grid-cols-2 md:grid-cols-2 gap-4">
              <div class="relative group">
                <a href="/galeria/mi-gata">
                  <img
                    class="h-auto max-w-full rounded-lg cursor-pointer group-hover:opacity-50 group-hover:scale-105 transition duration-300 ease-in-out"
                    src="https://github.com/andrew1412/website/raw/main/static/imagenes/andrew1412.galeria.lain.webp"
                    alt=""
                    loading="lazy"
                  />
                  <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 hover:scale-105 transition duration-500">
                    <div class="flex-row text-center">
                      <h1 class="text-white font-bold text-lg">
                        MY CAT
                      </h1>
                    </div>
                  </div>
                </a>
              </div>
              <div class="relative group">
                <a href="/galeria/fumos">
                  <img
                    class="h-auto max-w-full rounded-lg cursor-pointer group-hover:opacity-50 group-hover:scale-105 transition duration-300 ease-in-out"
                    src="https://github.com/andrew1412/website/raw/main/static/imagenes/andrew1412.galeria.fumo.webp"
                    alt=""
                    loading="lazy"
                  />
                  <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 hover:scale-105 transition duration-500">
                    <div class="flex-row text-center">
                      <h1 class="text-white font-bold text-lg">
                        FUMO
                      </h1>
                    </div>
                  </div>
                </a>
              </div>
              <div class="relative group">
                <a href="/galeria/paisajes">
                  <img
                    class="h-auto max-w-full rounded-lg cursor-pointer group-hover:opacity-50 group-hover:scale-105 transition duration-300 ease-in-out"
                    src="https://github.com/andrew1412/website/raw/main/static/imagenes/andrew1412.galeria.playa.webp"
                    alt=""
                    loading="lazy"
                  />
                  <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 hover:scale-105 transition duration-500">
                    <div class="flex-row text-center">
                      <h1 class="text-white font-bold text-lg">
                        PHOTOGRAPH
                      </h1>
                    </div>
                  </div>
                </a>
              </div>
              <div class="relative group">
                <a href="/galeria/dibujos">
                  <img
                    class="h-auto max-w-full rounded-lg cursor-pointer group-hover:opacity-50 group-hover:scale-105 transition duration-300 ease-in-out"
                    src="https://github.com/andrew1412/website/raw/main/static/imagenes/andrew1412.galeria.dibujo.webp"
                    alt=""
                    loading="lazy"
                  />
                  <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 hover:scale-105 transition duration-500">
                    <div class="flex-row text-center">
                      <h1 class="text-white font-bold text-lg">
                        DRAWING
                      </h1>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>
      </body>
    </>
  );
}
