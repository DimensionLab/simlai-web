import Link from "next/link";

export default function TryPlatformButton() {
  return (
    <Link href={"https://platform.siml.ai"} className="flex w-full my-10" target="_blank">
      <button className="bg-btnPurple px-10 py-3 font-bold text-xl rounded w-full">
        Try the platform now!
      </button>
    </Link>
  );
}
