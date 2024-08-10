import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="flex flex-col items-start space-y-4">
          <Image
            src="/placeholder.svg"
            width="80"
            height="80"
            alt="Company Logo"
            className="rounded-full"
            style={{ aspectRatio: '80/80', objectFit: 'cover' }}
          />
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Acme Software Solutions
          </h1>
          <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            At Acme Software Solutions, we are dedicated to empowering
            businesses with cutting-edge technology solutions. Our mission is to
            help our clients achieve their goals through innovative software
            development, seamless integration, and unparalleled customer
            service.
          </p>
        </div>
        <Image
          src="/placeholder.svg"
          width="550"
          height="310"
          alt="About Us"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
        />
      </div>
    </section>
  );
}
