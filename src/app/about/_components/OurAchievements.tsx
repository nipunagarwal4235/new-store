import Image from 'next/image';

export default function OurAchievements() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <Image
          src="/placeholder.svg"
          width="550"
          height="310"
          alt="Achievements"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
        />
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Achievements
          </h2>
          <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Over the years, Acme Software Solutions has achieved numerous
            milestones, including being recognized as a top software development
            company, winning industry awards, and delivering innovative
            solutions that have transformed the way our clients do business.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h3 className="text-xl font-semibold">10+</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Years in Business
              </p>
            </div>
            <div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h3 className="text-xl font-semibold">100+</h3>
              <p className="text-gray-500 dark:text-gray-400">Clients Served</p>
            </div>
            <div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h3 className="text-xl font-semibold">20+</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Industry Awards
              </p>
            </div>
            <div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h3 className="text-xl font-semibold">98%</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Client Satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
