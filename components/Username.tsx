export default function Username(props: { username: string }) {
  const { username } = props;

  return (
    <h1 class="mb-2 font-sans text-4xl font-bold" style="color: #e8e6e3;">
      {username}
    </h1>
  );
}
