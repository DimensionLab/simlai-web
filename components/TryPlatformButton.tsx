import Link from "next/link";

export default function TryPlatformButton() {
  return (
    <Link href={"https://platform.siml.ai"} className="flex w-full">
      <button className="bg-btnPurple px-2 py-2 font-bold text-xl rounded w-full">
        Try the platform now!
      </button>
    </Link>
  );
}
