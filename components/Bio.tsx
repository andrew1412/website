export default function Bio(props: { bio: string }) {
  const { bio } = props;

  return (
    <p class="mb-2 text-white font-sans text-center w-full">
      {bio}
    </p>
  );
}
