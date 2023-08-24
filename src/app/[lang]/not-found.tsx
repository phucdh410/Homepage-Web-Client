import { useTranslations } from "next-intl";
import Link from "next-intl/link";

export default function NotFound() {
  const d = useTranslations("global");

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-5 bg-white">
      <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
      <h2 className="font-montserrat font-semibold text-9xl text-slate-500">
        404
      </h2>
      <p className="font-medium text-2xl 2xl:text-4xl text-slate-500">
        {d("wrong-page")}
      </p>
      <Link
        href="/"
        className="font-semibold font-serif4 px-5 py-2 text-center min-w-[200px] rounded-10px bg-slate-200 text-slate-700"
      >
        {d("back-home")}
      </Link>
    </div>
  );
}
