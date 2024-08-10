import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-muted py-12">
      <div className="container grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div className="grid gap-6">
          <div className="flex items-center gap-2">
            <MountainIcon className="h-8 w-8" />
            <span className="text-xl font-bold">Acme Inc.</span>
          </div>
          <p className="text-muted-foreground">
            Acme Inc. is a leading provider of innovative solutions for
            businesses of all sizes. We are dedicated to helping our customers
            succeed.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary"
              prefetch={false}
            >
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary"
              prefetch={false}
            >
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary"
              prefetch={false}
            >
              <LinkedinIcon className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary"
              prefetch={false}
            >
              <InstagramIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="grid gap-1">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <Link
            href="#"
            className="text-muted-foreground hover:text-primary"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-primary"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-primary"
            prefetch={false}
          >
            Products
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-primary"
            prefetch={false}
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-primary"
            prefetch={false}
          >
            Contact
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="text-lg font-semibold">Resources</h3>
          <Link
            href="#"
            className="text-muted-foreground hover:text-primary"
            prefetch={false}
          >
            Documentation
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-primary"
            prefetch={false}
          >
            Tutorials
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-primary"
            prefetch={false}
          >
            Blog
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-primary"
            prefetch={false}
          >
            FAQs
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-primary"
            prefetch={false}
          >
            Support
          </Link>
        </div>
        <div className="grid gap-1">
          <h3 className="text-lg font-semibold">Contact</h3>
          <div className="text-muted-foreground">
            <p>123 Main Street</p>
            <p>Anytown, USA 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@acmeinc.com</p>
          </div>
        </div>
      </div>
      <div className="container mt-8 max-w-7xl text-xs text-muted-foreground">
        <p>&copy; 2024 Acme Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
