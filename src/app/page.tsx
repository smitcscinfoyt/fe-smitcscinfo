import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-50 dark:bg-gray-900 transition-colors">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <Image
          src="/Logo.png"
          alt="SMIT CSC Info Logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center">
          SMIT CSC Info
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-md">
          Our website is currently under construction.<br />
          Please check back soon!
        </p>
        <div className="mt-8">
          <span className="inline-block px-4 py-2 bg-yellow-200 dark:bg-yellow-700 text-yellow-800 dark:text-yellow-100 rounded-full font-semibold text-sm">
            🚧 Under Construction 🚧
          </span>
        </div>
      </main>
    </div>
  );
}
