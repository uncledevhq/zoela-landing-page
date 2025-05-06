import { Clock } from "@/components/clock";
import { EmailForm } from "@/components/email-form";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div
        className="flex-1 bg-cover bg-center relative text-white dark:text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/images/port-background.jpg')",
        }}
      >
        <Header />

        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              {/* <div className="flex items-center space-x-2">
                <div className="h-0.5 w-12 bg-white"></div>
                <span className="uppercase tracking-wider text-sm font-medium">
                  Launching in
                </span>
              </div> */}

              <Clock initialDays={90} />
            </div>

            <div className="space-y-8">
              <div className="flex items-center space-x-2">
                <div className="h-0.5 w-12 bg-white"></div>
                <span className="uppercase tracking-wider text-sm font-medium">
                  Welcome to ZOELA
                </span>
              </div>

              <h1 className="text-3xl md:text-3xl lg:text-3xl font-bold leading-tight">
                WE&apos;RE ABOUT TO DISRUPT THE AFRICAN MARKET.
              </h1>

              <div className="space-y-4 text-gray-100">
                <p>
                  A new chapter is unfolding for the African continent. One that
                  promises to bring people, opportunities, and innovation
                  together like never before. Imagine a future where African
                  entrepreneurs, businesses, and communities thrive like never
                  before. A future where barriers are broken, and opportunities
                  are seized.
                </p>

                <p>
                  We&apos;re working on something big, and we can&apos;t wait to
                  share it with you. Stay tuned for a game-changing announcement
                  that will reshape the future of African business.
                </p>

                <p>
                  Get ready to elevate yourself and your business. We&apos;re
                  about to take you to the next level.
                </p>
              </div>

              <EmailForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
