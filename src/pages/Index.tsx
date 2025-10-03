import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="relative flex min-h-[min(880px,90vh)] max-w-7xl mx-auto flex-col items-center justify-center gap-10 px-8 py-32 text-center lg:py-36 xl:px-16">
      {/* Announcement Banner */}
      <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-muted-foreground">
        <a 
          href="#" 
          className="inline-flex items-center gap-1 rounded-full bg-muted px-4 py-1 hover:bg-muted/80 transition-colors"
        >
          <span>Portrait launches Public Testnet</span>
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 7l-10 10" />
            <path d="M8 7l9 0l0 9" />
          </svg>
        </a>
        <a 
          href="#" 
          className="inline-flex items-center gap-1 rounded-full bg-background/40 px-4 py-1 hover:bg-background/60 transition-colors"
        >
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" />
          </svg>
          <span>Discover Portrait in 90s</span>
        </a>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center gap-16">
        {/* Hero Text */}
        <div className="flex flex-col items-center gap-8">
          <h1 className="max-w-[10em] text-6xl font-medium text-foreground md:text-7xl lg:text-8xl">
            Your{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-7xl font-semibold italic text-transparent md:text-8xl lg:text-9xl px-1">
              forever
            </span>{" "}
            space for everything you are.
          </h1>
          <p className="mx-auto max-w-md text-lg text-muted-foreground">
            More than a link—a decentralized canvas to share your story, your work, and your life—in minutes.
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col items-center gap-6">
          <form className="relative w-full max-w-sm sm:max-w-md md:max-w-lg">
            <div className="relative flex flex-col items-center justify-center sm:flex-row">
              <div className="relative w-full">
                <span className="absolute left-6 top-1/2 hidden -translate-y-1/2 text-muted-foreground sm:inline-flex">
                  portrait.so/
                </span>
                <Input
                  type="text"
                  placeholder="yourname"
                  className="h-14 rounded-full border-2 bg-background pl-6 pr-32 text-lg sm:pl-32"
                />
                <Button
                  type="submit"
                  className="absolute right-2 top-1/2 hidden h-10 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 font-medium text-white hover:opacity-90 sm:inline-flex"
                >
                  Sign up
                </Button>
              </div>
            </div>
            <Button
              type="submit"
              className="mt-4 w-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-6 text-lg font-medium text-white hover:opacity-90 sm:hidden"
            >
              Sign up
            </Button>
          </form>
          <Button variant="ghost" className="font-medium text-muted-foreground hover:text-foreground">
            Already have a Portrait? Login
          </Button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Index;
