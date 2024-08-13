import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

export default function Component() {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-2 md:px-6">
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Cart Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                <img
                  src="/placeholder.svg"
                  width={64}
                  height={64}
                  alt="Product Image"
                  className="rounded-md"
                  style={{ aspectRatio: '64/64', objectFit: 'cover' }}
                />
                <div>
                  <div className="font-medium">Cozy Throw Blanket</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Color: Navy Blue
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">$49.99</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Qty: 1
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                <img
                  src="/placeholder.svg"
                  width={64}
                  height={64}
                  alt="Product Image"
                  className="rounded-md"
                  style={{ aspectRatio: '64/64', objectFit: 'cover' }}
                />
                <div>
                  <div className="font-medium">Plush Throw Pillow</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Color: Sage Green
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">$29.99</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Qty: 2
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <div className="font-medium">Subtotal</div>
            <div className="font-medium">$109.97</div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Order Details</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-[auto_1fr] items-center gap-4">
              <MapPinIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              <div>
                <div className="font-medium">Shipping Address</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  123 Main St, Anytown USA 12345
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[auto_1fr] items-center gap-4">
              <TruckIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              <div>
                <div className="font-medium">Delivery Method</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Standard Shipping - 5-7 business days
                </div>
              </div>
            </div>
            <Separator />
            <div className="grid grid-cols-[auto_1fr] items-center gap-4">
              <PercentIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              <div>
                <div className="font-medium">Discounts</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  10% off with promo code SAVE10
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[auto_1fr] items-center gap-4">
              <DollarSignIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              <div>
                <div className="font-medium">Fees</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  $5.99 Shipping
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Payment</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="payment-method">Payment Method</Label>
            <RadioGroup id="payment-method" defaultValue="credit-card">
              <div className="flex items-center gap-4">
                <Label
                  htmlFor="credit-card"
                  className="flex cursor-pointer items-center gap-2"
                >
                  <RadioGroupItem id="credit-card" value="credit-card" />
                  <CreditCardIcon className="h-6 w-6" />
                  Credit/Debit Card
                </Label>
                <Label
                  htmlFor="digital-wallet"
                  className="flex cursor-pointer items-center gap-2"
                >
                  <RadioGroupItem id="digital-wallet" value="digital-wallet" />
                  <WalletIcon className="h-6 w-6" />
                  Digital Wallet
                </Label>
                <Label
                  htmlFor="other"
                  className="flex cursor-pointer items-center gap-2"
                >
                  <RadioGroupItem id="other" value="other" />
                  <ExpandIcon className="h-6 w-6" />
                  Other
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="card-number">Card Number</Label>
            <Input id="card-number" placeholder="0000 0000 0000 0000" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="expiration-date">Expiration Date</Label>
              <div className="flex gap-2">
                <Select id="expiration-month">
                  <SelectTrigger>
                    <SelectValue placeholder="MM" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="01">01</SelectItem>
                    <SelectItem value="02">02</SelectItem>
                    <SelectItem value="03">03</SelectItem>
                    <SelectItem value="04">04</SelectItem>
                    <SelectItem value="05">05</SelectItem>
                    <SelectItem value="06">06</SelectItem>
                    <SelectItem value="07">07</SelectItem>
                    <SelectItem value="08">08</SelectItem>
                    <SelectItem value="09">09</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="11">11</SelectItem>
                    <SelectItem value="12">12</SelectItem>
                  </SelectContent>
                </Select>
                <Select id="expiration-year">
                  <SelectTrigger>
                    <SelectValue placeholder="YYYY" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2026">2026</SelectItem>
                    <SelectItem value="2027">2027</SelectItem>
                    <SelectItem value="2028">2028</SelectItem>
                    <SelectItem value="2029">2029</SelectItem>
                    <SelectItem value="2030">2030</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="cvc">CVC</Label>
              <Input id="cvc" placeholder="123" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="postal-code">Postal Code</Label>
              <Input id="postal-code" placeholder="12345" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="promo-code">Promo Code</Label>
            <div className="flex gap-2">
              <Input id="promo-code" placeholder="Enter promo code" />
              <Button>Apply</Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="font-medium">Total</div>
          <div className="text-2xl font-medium">$104.98</div>
        </CardFooter>
      </Card>
    </div>
  );
}

function CreditCardIcon(props) {
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
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function DollarSignIcon(props) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function ExpandIcon(props) {
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
      <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
      <path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
      <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
      <path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
    </svg>
  );
}

function MapPinIcon(props) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PercentIcon(props) {
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
      <line x1="19" x2="5" y1="5" y2="19" />
      <circle cx="6.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  );
}

function TruckIcon(props) {
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
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  );
}

function WalletIcon(props) {
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
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  );
}
