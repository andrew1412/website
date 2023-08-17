import { Head } from "$fresh/runtime.ts";

import jsonProfile from "../profile/profile_500.json" assert { type: "json" };
import type Profile from "../profile/type.ts";

import AvatarComponent from "../components/Avatar.tsx";
import UsernameComponent from "../components/Username.tsx";
import BioComponent from "../components/Bio.tsx";
import ReadmeButtonComponent from "../components/ReadmeButton.tsx";

export default function Error500() {
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
        <title>Error 500 - Error interno en el servidor</title>
      </Head>
      <main class="w-10/12 sm:w-96 mx-auto">
        <div class="flex flex-col w-full mt-12 mb-28">
          <div class="flex flex-col items-center w-full w-full rounded-xl p-4">
            <AvatarComponent avatar={avatar} />
            <UsernameComponent username={username} />
            <BioComponent bio={bio} />
            {readme && <ReadmeButtonComponent />}
          </div>
        </div>
      </main>
    </>
  );
}
