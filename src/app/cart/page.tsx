import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Component() {
  return (
    <div className="p-8">
      <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>
      <div className="grid gap-8 md:grid-cols-[1fr_300px]">
        <div>
          <div className="mb-8 border-b pb-6">
            <h2 className="text-xl font-semibold">Items</h2>
          </div>
          <Card>
            <CardContent className="flex items-start gap-6 p-6">
              <img
                src="/placeholder.svg"
                alt="Product Image"
                className="h-20 w-20 rounded-lg object-cover"
                width="80"
                height="80"
                style={{ aspectRatio: '80/80', objectFit: 'cover' }}
              />
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">Product 1</h3>
                <p className="text-sm text-gray-500">$49.99</p>
              </div>
              <div>Qty: 2</div>
            </CardContent>
          </Card>
          <Card className="mt-6">
            <CardContent className="flex items-start gap-6 p-6">
              <img
                src="/placeholder.svg"
                alt="Product Image"
                className="h-20 w-20 rounded-lg object-cover"
                width="80"
                height="80"
                style={{ aspectRatio: '80/80', objectFit: 'cover' }}
              />
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">Product 2</h3>
                <p className="text-sm text-gray-500">$59.99</p>
              </div>
              <div>Qty: 1</div>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>
            <div className="mt-2 flex justify-between">
              <span>Subtotal</span>
              <span>$159.97</span>
            </div>
            <div className="mt-2 flex justify-between">
              <span>Taxes</span>
              <span>$10.00</span>
            </div>
            <div className="mt-2 flex justify-between">
              <span>Shipping</span>
              <span>$20.00</span>
            </div>
            <div className="mb-8 mt-4 flex justify-between border-t pt-4">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">$189.97</span>
            </div>
            <Button className="w-full">Proceed to Checkout</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
