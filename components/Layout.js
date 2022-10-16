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
          <nav className="flex h-12 placeholder:justify-between shadow-md items-center px-4 border-b border-gray-800 ">
            <Link href="/">
              <a className="text-lg font-bold">
                hacktoberfest<span>UG</span>
              </a>
            </Link>
            <div className="uppercase flex ">
              <Link href="/projects">
                <a className="p-2">projects</a>
              </Link>
              <Link href="/participants">
                <a className="p-2">participants</a>
              </Link>
              <Link href="/events">
                <a className="p-2">events</a>
              </Link>
              <Link href="/about">
                <a className="p-2">about</a>
              </Link>
              <Link href="#">
                <button className="primary-button w-full">Start Hacking</button>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center items-center h-10 shadow-inner">
          Copyright &copy; 2022 hacktoberfest uganda
        </footer>
      </div>
    </>
  );
}
