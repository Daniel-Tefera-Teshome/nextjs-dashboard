import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import styles from "@/app/ui/home.module.css";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      {/* Top Banner */}
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-28">
        <AcmeLogo />
      </div>

      {/* Content Layout */}
      <div className="mt-6 flex grow flex-col gap-6 md:flex-row">
        {/* Left Panel */}
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-12">
          <h1 className="text-3xl font-bold text-gray-800 md:text-4xl">
            Welcome to <span className="text-blue-500">Dani Shopping</span>
          </h1>
          <p className="text-gray-700 text-base md:text-lg">
            Your one-stop shop for fashion, electronics, home essentials, and
            more. Explore trending products, enjoy great discounts, and
            experience seamless shopping.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-4 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>

        {/* Right Panel: Hero Section with Images */}
        {/* Product Preview Grid (2x2 Images) */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Image
            src="/shpping-image1.jpg"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full h-auto object-cover"
            alt="Product 1"
          />
          <Image
            src="/shpping-image2.jpg"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full h-auto object-cover"
            alt="Product 2"
          />
          <Image
            src="/shpping-image3.jpeg"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full h-auto object-cover"
            alt="Product 3"
          />
          <Image
            src="/shpping-image4.jpeg"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full h-auto object-cover"
            alt="Product 4"
          />
        </div>
      </div>

      {/* Optional: Featured Categories Preview */}
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {["Fashion", "Electronics", "Home", "Beauty"].map((category) => (
          <div
            key={category}
            className="rounded-lg bg-white p-4 text-center shadow hover:shadow-md transition"
          >
            <h3 className="font-semibold text-gray-700">{category}</h3>
            <p className="text-sm text-gray-500">Shop now</p>
          </div>
        ))}
      </div>
    </main>
  );
}
