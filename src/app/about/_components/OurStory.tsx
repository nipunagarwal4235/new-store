import Image from 'next/image';
import Link from 'next/link';

export default function OurStory() {
  return (
    <section className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Story
          </h2>
          <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Acme Software Solutions was founded in 2010 by a team of passionate
            software engineers who saw the need for a more efficient and
            user-friendly approach to enterprise software development. Over the
            years, we have grown to become a leading provider of innovative
            technology solutions, serving clients across a wide range of
            industries.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              prefetch={false}
            >
              Learn More
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              prefetch={false}
            >
              Meet the Team
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-start space-y-2">
            <Image
              src="/placeholder.svg"
              width="80"
              height="80"
              alt="John Doe"
              className="rounded-full"
              style={{ aspectRatio: '80/80', objectFit: 'cover' }}
            />
            <div>
              <h3 className="text-lg font-semibold">John Doe</h3>
              <p className="text-gray-500 dark:text-gray-400">CEO</p>
            </div>
          </div>
          <div className="flex flex-col items-start space-y-2">
            <Image
              src="/placeholder.svg"
              width="80"
              height="80"
              alt="Jane Smith"
              className="rounded-full"
              style={{ aspectRatio: '80/80', objectFit: 'cover' }}
            />
            <div>
              <h3 className="text-lg font-semibold">Jane Smith</h3>
              <p className="text-gray-500 dark:text-gray-400">CTO</p>
            </div>
          </div>
          <div className="flex flex-col items-start space-y-2">
            <Image
              src="/placeholder.svg"
              width="80"
              height="80"
              alt="Michael Johnson"
              className="rounded-full"
              style={{ aspectRatio: '80/80', objectFit: 'cover' }}
            />
            <div>
              <h3 className="text-lg font-semibold">Michael Johnson</h3>
              <p className="text-gray-500 dark:text-gray-400">Lead Developer</p>
            </div>
          </div>
          <div className="flex flex-col items-start space-y-2">
            <Image
              src="/placeholder.svg"
              width="80"
              height="80"
              alt="Emily Davis"
              className="rounded-full"
              style={{ aspectRatio: '80/80', objectFit: 'cover' }}
            />
            <div>
              <h3 className="text-lg font-semibold">Emily Davis</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Product Manager
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
