'use client';

import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import React from 'react';

export default function Component() {
  return (
    <React.Fragment>
      <div className="mx-auto grid max-w-6xl items-start gap-6 px-4 py-6 md:grid-cols-2 lg:gap-12">
        <div className="grid items-start gap-4 md:gap-10">
          <div className="hidden items-start md:flex">
            <div className="grid gap-4">
              <h1 className="text-2xl font-bold sm:text-3xl">
                CottonSculpt Prism Tee: The Cozy Chromatic Blend
              </h1>
              <div>
                <p>60% combed ringspun cotton/40% polyester jersey tee.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-0.5">
                  <StarIcon className="h-5 w-5 fill-primary" />
                  <StarIcon className="h-5 w-5 fill-primary" />
                  <StarIcon className="h-5 w-5 fill-primary" />
                  <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
                  <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
                </div>
              </div>
            </div>
            <div className="ml-auto text-4xl font-bold">$99</div>
          </div>
          <form className="grid gap-4 md:gap-10">
            <div className="grid gap-2">
              <Label htmlFor="color" className="text-base">
                Color
              </Label>
              <RadioGroup
                id="color"
                defaultValue="black"
                className="flex items-center gap-2"
              >
                <Label
                  htmlFor="color-black"
                  className="flex cursor-pointer items-center gap-2 rounded-md border p-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                >
                  <RadioGroupItem id="color-black" value="black" />
                  Black
                </Label>
                <Label
                  htmlFor="color-white"
                  className="flex cursor-pointer items-center gap-2 rounded-md border p-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                >
                  <RadioGroupItem id="color-white" value="white" />
                  White
                </Label>
                <Label
                  htmlFor="color-blue"
                  className="flex cursor-pointer items-center gap-2 rounded-md border p-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                >
                  <RadioGroupItem id="color-blue" value="blue" />
                  Blue
                </Label>
              </RadioGroup>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="size" className="text-base">
                Size
              </Label>
              <RadioGroup
                id="size"
                defaultValue="m"
                className="flex items-center gap-2"
              >
                <Label
                  htmlFor="size-xs"
                  className="flex cursor-pointer items-center gap-2 rounded-md border p-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                >
                  <RadioGroupItem id="size-xs" value="xs" />
                  XS
                </Label>
                <Label
                  htmlFor="size-s"
                  className="flex cursor-pointer items-center gap-2 rounded-md border p-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                >
                  <RadioGroupItem id="size-s" value="s" />S
                </Label>
                <Label
                  htmlFor="size-m"
                  className="flex cursor-pointer items-center gap-2 rounded-md border p-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                >
                  <RadioGroupItem id="size-m" value="m" />M
                </Label>
                <Label
                  htmlFor="size-l"
                  className="flex cursor-pointer items-center gap-2 rounded-md border p-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                >
                  <RadioGroupItem id="size-l" value="l" />L
                </Label>
                <Label
                  htmlFor="size-xl"
                  className="flex cursor-pointer items-center gap-2 rounded-md border p-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                >
                  <RadioGroupItem id="size-xl" value="xl" />
                  XL
                </Label>
              </RadioGroup>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="quantity" className="text-base">
                Quantity
              </Label>
              <Select defaultValue="1">
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">Add to cart</Button>
              <Button size="lg" variant="outline">
                <HeartIcon className="mr-2 h-4 w-4" />
                Add to wishlist
              </Button>
            </div>
          </form>
          <Separator />
          <div className="grid gap-4 text-sm leading-loose">
            <p>
              Introducing the Acme Prism T-Shirt, a perfect blend of style and
              comfort for the modern individual. This tee is crafted with a
              meticulous composition of 60% combed ringspun cotton and 40%
              polyester jersey, ensuring a soft and breathable fabric that feels
              gentle against the skin.
            </p>
            <p>
              The design of the Acme Prism T-Shirt is as striking as it is
              comfortable. The shirt features a unique prism-inspired pattern
              that adds a modern and eye-catching touch to your ensemble.
            </p>
          </div>
        </div>
        <div className="grid items-start gap-3">
          <div className="flex items-start md:hidden">
            <div className="grid gap-4">
              <h1 className="text-2xl font-bold sm:text-3xl">
                CottonSculpt Prism Tee: The Cozy Chromatic Blend
              </h1>
              <div>
                <p>60% combed ringspun cotton/40% polyester jersey tee.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-0.5">
                  <StarIcon className="h-5 w-5 fill-primary" />
                  <StarIcon className="h-5 w-5 fill-primary" />
                  <StarIcon className="h-5 w-5 fill-primary" />
                  <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
                  <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
                </div>
              </div>
            </div>
            <div className="ml-auto text-4xl font-bold">$99</div>
          </div>
          <div className="grid gap-4">
            <img
              src="/placeholder.svg"
              alt="Product Image"
              width={600}
              height={600}
              className="aspect-square w-full overflow-hidden rounded-lg border border-gray-200 object-cover dark:border-gray-800"
            />
            <div className="hidden items-start gap-4 md:flex">
              <button className="overflow-hidden rounded-lg border transition-colors hover:border-gray-900 dark:hover:border-gray-50">
                <img
                  src="/placeholder.svg"
                  alt="Preview thumbnail"
                  width={100}
                  height={100}
                  className="aspect-square object-cover"
                />
                <span className="sr-only">View Image 1</span>
              </button>
              <button className="overflow-hidden rounded-lg border transition-colors hover:border-gray-900 dark:hover:border-gray-50">
                <img
                  src="/placeholder.svg"
                  alt="Preview thumbnail"
                  width={100}
                  height={100}
                  className="aspect-square object-cover"
                />
                <span className="sr-only">View Image 2</span>
              </button>
              <button className="overflow-hidden rounded-lg border transition-colors hover:border-gray-900 dark:hover:border-gray-50">
                <img
                  src="/placeholder.svg"
                  alt="Preview thumbnail"
                  width={100}
                  height={100}
                  className="aspect-square object-cover"
                />
                <span className="sr-only">View Image 3</span>
              </button>
              <button className="overflow-hidden rounded-lg border transition-colors hover:border-gray-900 dark:hover:border-gray-50">
                <img
                  src="/placeholder.svg"
                  alt="Preview thumbnail"
                  width={100}
                  height={100}
                  className="aspect-square object-cover"
                />
                <span className="sr-only">View Image 4</span>
              </button>
              <button className="overflow-hidden rounded-lg border transition-colors hover:border-gray-900 dark:hover:border-gray-50">
                <img
                  src="/placeholder.svg"
                  alt="Preview thumbnail"
                  width={100}
                  height={100}
                  className="aspect-square object-cover"
                />
                <span className="sr-only">View Image 4</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-6 lg:gap-12">
        <div className="grid gap-4">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold">Customer Reviews</h2>
            <div className="flex items-center gap-0.5">
              <StarIcon className="h-5 w-5 fill-primary" />
              <StarIcon className="h-5 w-5 fill-primary" />
              <StarIcon className="h-5 w-5 fill-primary" />
              <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
              <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
              <span className="text-sm font-medium text-muted">
                [&quot;4.0 average rating&quot;]
              </span>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <h3 className="text-lg font-semibold">Great fit and style</h3>
              <div className="flex items-center gap-2 text-sm text-muted">
                <span>Posted by Alice on September 24, 2023</span>
              </div>
            </div>
            <p>
              Really happy with my purchase. The shirt arrived quickly and looks
              even better in person. The fit is just right, and I love the
              attention to detail in the design. Will definitely be shopping
              here again!
            </p>
          </div>
          <div className="grid gap-4 border-t pt-4">
            <div className="grid gap-2">
              <h3 className="text-lg font-semibold">Comfortable and stylish</h3>
              <div className="flex items-center gap-2 text-sm text-muted">
                <span>Posted by Mark on September 20, 2023</span>
              </div>
            </div>
            <p>
              The Acme Prism T-Shirt is a winner in my book. It&apos;s
              incredibly soft and feels great against my skin. The design is
              unique and eye-catching, and I&apos;ve already received
              compliments on my new shirt. I&apos;ll be recommending this to all
              my friends!
            </p>
          </div>
        </div>
        <div className="grid gap-4">
          <h2 className="text-xl font-bold">Related Products</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Link href="#" className="flex flex-col gap-2" prefetch={false}>
              <img
                src="/placeholder.svg"
                alt="Related product"
                width={300}
                height={300}
                className="aspect-square w-full overflow-hidden rounded-lg border border-gray-200 object-cover transition-transform duration-200 hover:scale-105 dark:border-gray-800"
              />
              <div className="grid gap-1.5">
                <h3 className="text-base font-semibold leading-none">
                  Prism Collection: Rainbow Dreams T-Shirt
                </h3>
                <p className="text-base font-semibold">$49</p>
              </div>
            </Link>
            <Link href="#" className="flex flex-col gap-2" prefetch={false}>
              <img
                src="/placeholder.svg"
                alt="Related product"
                width={300}
                height={300}
                className="aspect-square w-full overflow-hidden rounded-lg border border-gray-200 object-cover transition-transform duration-200 hover:scale-105 dark:border-gray-800"
              />
              <div className="grid gap-1.5">
                <h3 className="text-base font-semibold leading-none">
                  Prism Collection: Rainbow Dreams T-Shirt
                </h3>
                <p className="text-base font-semibold">$49</p>
              </div>
            </Link>
            <Link href="#" className="flex flex-col gap-2" prefetch={false}>
              <img
                src="/placeholder.svg"
                alt="Related product"
                width={300}
                height={300}
                className="aspect-square w-full overflow-hidden rounded-lg border border-gray-200 object-cover transition-transform duration-200 hover:scale-105 dark:border-gray-800"
              />
              <div className="grid gap-1.5">
                <h3 className="text-base font-semibold leading-none">
                  Prism Collection: Rainbow Dreams T-Shirt
                </h3>
                <p className="text-base font-semibold">$49</p>
              </div>
            </Link>
            <Link href="#" className="flex flex-col gap-2" prefetch={false}>
              <img
                src="/placeholder.svg"
                alt="Related product"
                width={300}
                height={300}
                className="aspect-square w-full overflow-hidden rounded-lg border border-gray-200 object-cover transition-transform duration-200 hover:scale-105 dark:border-gray-800"
              />
              <div className="grid gap-1.5">
                <h3 className="text-base font-semibold leading-none">
                  Prism Collection: Rainbow Dreams T-Shirt
                </h3>
                <p className="text-base font-semibold">$49</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
