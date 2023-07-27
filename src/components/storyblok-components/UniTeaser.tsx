import Link from "next/link";
// import { useState } from "react";

const UniTeaser = ({ uniPost }: any) => {

    return (
        <section className="w-full py-2 h-full" key={uniPost.uuid}>
        <div className="w-full px-4 h-full">
            <Link href={`/university/${uniPost.slug}`}>
            <a className="w-full flex flex-col items-center h-full">
                <h1>{uniPost.title}</h1>
                <img src={uniPost.thumbnail.filename} alt="" />
            </a>
            </Link>
        </div>
        </section>
  );
};

export default UniTeaser;