import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Search() {
  return (
    <div className="mx-auto flex w-full max-w-md items-center">
      <div className="relative flex-1">
        <Input
          type="search"
          placeholder="Search..."
          className="w-full rounded-md border border-input bg-background pr-12 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <SearchIcon className="h-5 w-5 text-muted-foreground" />
        </div>
      </div>
      <Button className="ml-2">Search</Button>
    </div>
  );
}

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
