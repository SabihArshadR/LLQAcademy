"use client";

import Link from "next/link";
import { useState } from "react";
import StarMotif from "./StarMotif";
import Button from "./Button";
import { whatsappLink } from "@/lib/data";
import Image from "next/image";
import Logo from "@/public/images/logonew.png"

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  // { href: "/teachers", label: "Teachers" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-green-900/10 bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2">
        <Link href="/" className="focus-ring flex items-center gap-2.5">
          {/* <StarMotif className="h-7 w-7" tone="green" /> */}
          <Image src={Logo} alt="LLQ Academy" className="w-[200px] h-[50px] object-cover" />
          {/* <span className="font-display text-xl text-green-950">
            LLQ<span className="text-gold-600">Academy</span>
          </span> */}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring font-body text-sm font-medium text-ink-soft transition-colors hover:text-green-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block ">
          <Button
            href={whatsappLink("Assalamu Alaikum! I'd like to book a free trial class.")}
            external
            variant="secondary"
            className="!py-2.5 !px-5 !text-xs"
          >
            Book Free Trial
          </Button>
        </div>

        <button
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-full text-green-950 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <path
                d="M4 4L18 18M18 4L4 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <>
                <path d="M2 6H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M2 11H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M2 16H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-green-900/10 bg-bg px-5 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-md px-2 py-3 font-body text-base text-ink-soft hover:bg-green-100/60 hover:text-green-950"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button
            href={whatsappLink("Assalamu Alaikum! I'd like to book a free trial class.")}
            external
            variant="secondary"
            className="mt-4 w-full"
          >
            Book Free Trial
          </Button>
        </div>
      )}
    </header>
  );
}
