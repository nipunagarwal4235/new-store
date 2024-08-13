import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Component() {
  return (
    <section className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 md:p-6 lg:grid-cols-3">
      <Card className="group transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
        <CardContent className="relative">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View Details</span>
          </Link>
          <img
            src="/placeholder.svg"
            alt="Product 1"
            width={500}
            height={400}
            className="h-64 w-full object-cover"
            style={{ aspectRatio: '500/400', objectFit: 'cover' }}
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">Product 1</h3>
            <p className="text-lg">$59.99</p>
            <Button variant="outline" className="mt-4">
              View Details
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card className="group transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
        <CardContent className="relative">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View Details</span>
          </Link>
          <img
            src="/placeholder.svg"
            alt="Product 2"
            width={500}
            height={400}
            className="h-64 w-full object-cover"
            style={{ aspectRatio: '500/400', objectFit: 'cover' }}
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">Product 2</h3>
            <p className="text-lg">$89.99</p>
            <Button variant="outline" className="mt-4">
              View Details
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card className="group transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
        <CardContent className="relative">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View Details</span>
          </Link>
          <img
            src="/placeholder.svg"
            alt="Product 3"
            width={500}
            height={400}
            className="h-64 w-full object-cover"
            style={{ aspectRatio: '500/400', objectFit: 'cover' }}
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">Product 3</h3>
            <p className="text-lg">$69.99</p>
            <Button variant="outline" className="mt-4">
              View Details
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card className="group transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
        <CardContent className="relative">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View Details</span>
          </Link>
          <img
            src="/placeholder.svg"
            alt="Product 4"
            width={500}
            height={400}
            className="h-64 w-full object-cover"
            style={{ aspectRatio: '500/400', objectFit: 'cover' }}
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">Product 4</h3>
            <p className="text-lg">$79.99</p>
            <Button variant="outline" className="mt-4">
              View Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
