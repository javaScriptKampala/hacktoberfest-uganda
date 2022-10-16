import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>
          {title ? title + " - hacktoberfest uganda" : "hacktoberfest uganda"}
        </title>
        <meta name="description" content="HacktoberFest Uganda Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header className="">
          <nav className="flex  justify-around px-4 py-4 border-b border-gray-800">
            <div>
              <Link href="/">
                <a className="text-2xl font-bold ">
                  hacktoberfest<span className="primary-yellow">Uganda</span>
                </a>
              </Link>
            </div>
            <div className="uppercase flex ">
              <Link href="/projects">
                <a className="p-2 text-sm">projects</a>
              </Link>
              <Link href="/participants">
                <a className="p-2  text-sm">participants</a>
              </Link>
              <Link href="/events">
                <a className="p-2  text-sm">events</a>
              </Link>
              <Link href="/about">
                <a className="p-2  text-sm">about</a>
              </Link>
            </div>
            <div>
              {" "}
              <Link href="#">
                <button className="primary-button w-full uppercase border border-amber-300  text-md">
                  Start Hacking
                </button>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center items-center h-10 shadow-inner text-gray-400">
          Copyright &copy; 2022 hacktoberfest uganda
        </footer>
      </div>
    </>
  );
}
