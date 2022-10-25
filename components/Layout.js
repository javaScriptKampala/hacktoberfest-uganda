import React from "react";
import Head from "next/head";
import Link from "next/link";
import Button from "./Button/Button";
import { BsGithub } from "react-icons/bs";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>
          {title ? title + " - hacktoberfest uganda" : "hacktoberfest uganda"}
        </title>
        <meta name="description" content="HacktoberFest Uganda Website" />
        <link rel="icon" href="/hack.jpg" />
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
            <div className="flex items-center space-x-2">
              <Link href="#">
                <Button
                  color={"black"}
                  text={"START HACKING"}
                  textColor={"white"}
                  backgroundColor={"amber-300"}
                />
              </Link>
              <a
                target={"_blank"}
                rel="noopener noreferrer"
                style={{
                  cursor: "pointer",
                  marginLeft: "20px",
                }}
                href={
                  "https://github.com/javaScriptKampala/hacktoberfest-uganda"
                }
              >
                <BsGithub size={30} />
              </a>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer
          className="flex justify-center items-center h-10 shadow-inner text-gray-400
        flex-col pb-12
        "
        >
          Copyright &copy; 2022 hacktoberfest uganda
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://vercel.com?utm_source=JavaScriptKampala&utm_campaign=oss"
          >
            <img
              alt="Powered by Vercel"
              style={{
                marginTop: "8px",
              }}
              height="32"
              src="/imgs/powered-by-vercel.svg"
            />
          </a>
        </footer>
      </div>
    </>
  );
}
