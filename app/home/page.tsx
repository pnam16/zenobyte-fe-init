import {Button} from "@/components/ui/button";
import Image from "next/image";
import {
  Calendar,
  ChevronRight,
  Facebook,
  Instagram,
  MapPin,
  Twitter,
  Users,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import {Badge} from "@/components/ui/badge";
import {Card} from "@/components/ui/card";

export default function HalongFestival() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          width={1600}
          height={800}
          alt="Halong Bay"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/70 via-zinc-900/50 to-zinc-900"></div>
        <div className="absolute inset-0 flex flex-col justify-center px-4">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              <h1 className="mb-4 text-5xl font-bold tracking-tight text-white md:text-6xl">
                2025
                <br />
                HALONG
                <br />
                FESTIVAL
              </h1>
              <div className="flex items-center space-x-2">
                <span className="h-1 w-8 bg-teal-500"></span>
                <p className="text-lg text-zinc-300">Celebrating Art & Nature</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-4 top-4 flex flex-col space-y-2">
          <Link
            href="#"
            className="rounded-full bg-zinc-800/80 p-2 text-white hover:bg-zinc-700/80"
          >
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            href="#"
            className="rounded-full bg-zinc-800/80 p-2 text-white hover:bg-zinc-700/80"
          >
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="#"
            className="rounded-full bg-zinc-800/80 p-2 text-white hover:bg-zinc-700/80"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="#"
            className="rounded-full bg-zinc-800/80 p-2 text-white hover:bg-zinc-700/80"
          >
            <Youtube className="h-5 w-5" />
            <span className="sr-only">Youtube</span>
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-teal-600 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-2xl font-bold text-white">What makes this festival special?</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-teal-50">
                The Halong Festival 2025 brings together artists, environmentalists, and communities
                to celebrate the unique cultural heritage and natural beauty of Vietnam&apos;s most
                iconic UNESCO World Heritage site.
              </p>
              <p className="text-teal-50">
                Through art installations, performances, workshops, and discussions, we explore the
                relationship between culture, creativity, and climate action.
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-teal-50">
                This year&apos;s theme focuses on sustainable tourism and conservation efforts,
                highlighting innovative approaches to protecting Halong Bay&apos;s fragile ecosystem
                while celebrating its cultural significance.
              </p>
              <p className="text-teal-50">
                Join us for an unforgettable experience that combines artistic expression with
                environmental awareness in one of the world&apos;s most breathtaking natural
                settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-6">
              <h2 className="text-2xl font-bold text-white">Welcome to the festival</h2>
              <div className="space-y-2">
                <h3 className="text-5xl font-bold text-white">ART&CLIMATE</h3>
                <p className="text-xl text-teal-500">VIETNAM&apos;S PREMIER ECO-CULTURAL EVENT</p>
              </div>
              <p className="text-zinc-300">
                Art & Climate brings together Vietnam&apos;s rich cultural heritage and contemporary
                artistic expressions to address one of the most pressing issues of our time: climate
                change and environmental conservation.
              </p>
              <Button className="w-fit bg-teal-600 hover:bg-teal-700">Learn More</Button>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Halong Bay Landscape"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Attractions */}
      <section className="py-16 bg-zinc-800/50">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">Key Attractions</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-lg bg-zinc-800 p-6">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-600/20">
                <Calendar className="h-8 w-8 text-teal-500" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Art Exhibitions</h3>
              <p className="text-zinc-300">
                Explore stunning installations and artworks from Vietnamese and international
                artists that highlight environmental themes.
              </p>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-zinc-800 p-6">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-600/20">
                <Users className="h-8 w-8 text-teal-500" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Cultural Performances</h3>
              <p className="text-zinc-300">
                Experience traditional and contemporary Vietnamese performances that celebrate the
                country&apos;s rich cultural heritage.
              </p>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-zinc-800 p-6">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-600/20">
                <MapPin className="h-8 w-8 text-teal-500" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Eco Tours</h3>
              <p className="text-zinc-300">
                Join guided tours of Halong Bay that focus on conservation efforts and the
                bay&apos;s unique ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">Our Partners</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            <div className="flex h-24 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
              <Image
                src="/placeholder.svg?height=60&width=120"
                width={120}
                height={60}
                alt="Partner Logo"
                className="max-h-12 w-auto"
              />
            </div>
            <div className="flex h-24 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
              <Image
                src="/placeholder.svg?height=60&width=120"
                width={120}
                height={60}
                alt="Partner Logo"
                className="max-h-12 w-auto"
              />
            </div>
            <div className="flex h-24 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
              <Image
                src="/placeholder.svg?height=60&width=120"
                width={120}
                height={60}
                alt="Partner Logo"
                className="max-h-12 w-auto"
              />
            </div>
            <div className="flex h-24 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
              <Image
                src="/placeholder.svg?height=60&width=120"
                width={120}
                height={60}
                alt="Partner Logo"
                className="max-h-12 w-auto"
              />
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <div className="flex h-10 items-center justify-center rounded-lg bg-zinc-800/50 px-4">
              <span className="text-xs text-zinc-400">Ministry of Culture</span>
            </div>
            <div className="flex h-10 items-center justify-center rounded-lg bg-zinc-800/50 px-4">
              <span className="text-xs text-zinc-400">UNESCO Vietnam</span>
            </div>
            <div className="flex h-10 items-center justify-center rounded-lg bg-zinc-800/50 px-4">
              <span className="text-xs text-zinc-400">Halong Bay Management</span>
            </div>
            <div className="flex h-10 items-center justify-center rounded-lg bg-zinc-800/50 px-4">
              <span className="text-xs text-zinc-400">Vietnam Tourism Board</span>
            </div>
            <div className="flex h-10 items-center justify-center rounded-lg bg-zinc-800/50 px-4">
              <span className="text-xs text-zinc-400">Environmental Protection Agency</span>
            </div>
            <div className="flex h-10 items-center justify-center rounded-lg bg-zinc-800/50 px-4">
              <span className="text-xs text-zinc-400">Cultural Heritage Department</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Speaker */}
      <section className="py-16 bg-zinc-800/30">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">Featured Speaker</h2>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-lg bg-zinc-800/50">
            <div className="grid md:grid-cols-2">
              <div className="relative h-[300px] md:h-auto">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  width={400}
                  height={400}
                  alt="Featured Speaker"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-900 p-4 md:hidden">
                  <h3 className="text-xl font-bold text-white">Dr. Nguyen Van Minh</h3>
                  <p className="text-teal-500">Minister of Culture and Environment</p>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="mb-4 hidden md:block">
                  <h3 className="text-xl font-bold text-white">Dr. Nguyen Van Minh</h3>
                  <p className="text-teal-500">Minister of Culture and Environment</p>
                </div>
                <p className="mb-4 text-zinc-300">
                  `The Halong Festival represents our commitment to preserving Vietnam&apos;s
                  natural wonders while celebrating our rich cultural heritage. Through art and
                  community engagement, we can raise awareness about environmental challenges and
                  inspire action.`
                </p>
                <p className="text-zinc-300">
                  Dr. Minh has been instrumental in developing Vietnam&apos;s cultural policy and
                  environmental protection initiatives. His leadership has helped establish the Art
                  & Climate festival as a premier event that bridges artistic expression with
                  environmental advocacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">Featured Artists</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=300"
                width={300}
                height={300}
                alt="Artist 1"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-bold text-white">Linh Nguyen</h3>
                <p className="text-sm text-teal-400">Visual Artist</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=300"
                width={300}
                height={300}
                alt="Artist 2"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-bold text-white">Tran Minh</h3>
                <p className="text-sm text-teal-400">Performer</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=300"
                width={300}
                height={300}
                alt="Artist 3"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-bold text-white">Mai Phuong</h3>
                <p className="text-sm text-teal-400">Sculptor</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=300"
                width={300}
                height={300}
                alt="Artist 4"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-bold text-white">Hoang Anh</h3>
                <p className="text-sm text-teal-400">Musician</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=300"
                width={300}
                height={300}
                alt="Artist 5"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-bold text-white">Thu Ha</h3>
                <p className="text-sm text-teal-400">Photographer</p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button className="bg-teal-600 hover:bg-teal-700">View All Artists</Button>
          </div>
        </div>
      </section>

      {/* Festival Stats */}
      <section className="py-16 bg-zinc-800/50">
        <div className="container mx-auto px-4">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-zinc-800 p-6 text-center">
              <div className="mb-2 text-4xl font-bold text-teal-500">180</div>
              <div className="text-sm text-zinc-400">Days</div>
              <div className="mt-2 h-1 w-full bg-teal-600"></div>
            </div>
            <div className="rounded-lg bg-zinc-800 p-6 text-center">
              <div className="mb-2 text-4xl font-bold text-teal-500">3</div>
              <div className="text-sm text-zinc-400">Venues</div>
              <div className="mt-2 h-1 w-full bg-teal-600"></div>
            </div>
            <div className="rounded-lg bg-zinc-800 p-6 text-center">
              <div className="mb-2 text-4xl font-bold text-teal-500">2M</div>
              <div className="text-sm text-zinc-400">Visitors</div>
              <div className="mt-2 h-1 w-full bg-teal-600"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Featured Events</h2>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="border-zinc-700 text-zinc-400 hover:text-white"
              >
                <ChevronRight className="h-4 w-4 rotate-180" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-zinc-700 text-zinc-400 hover:text-white"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="overflow-hidden bg-zinc-800 border-zinc-700">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  width={400}
                  height={200}
                  alt="Event 1"
                  className="h-full w-full object-cover"
                />
                <Badge className="absolute left-2 top-2 bg-teal-600 hover:bg-teal-700">
                  Exhibition
                </Badge>
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold text-white">Ocean Conservation Art</h3>
                <p className="mb-4 text-sm text-zinc-400">
                  An exhibition featuring artworks that highlight marine conservation efforts in
                  Halong Bay.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-zinc-500">
                    <Calendar className="mr-1 h-3 w-3" />
                    <span>June 15-30</span>
                  </div>
                  <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                    Details
                  </Button>
                </div>
              </div>
            </Card>
            <Card className="overflow-hidden bg-zinc-800 border-zinc-700">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  width={400}
                  height={200}
                  alt="Event 2"
                  className="h-full w-full object-cover"
                />
                <Badge className="absolute left-2 top-2 bg-teal-600 hover:bg-teal-700">
                  Workshop
                </Badge>
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold text-white">Traditional Craft Workshop</h3>
                <p className="mb-4 text-sm text-zinc-400">
                  Learn traditional Vietnamese crafts using sustainable materials and techniques.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-zinc-500">
                    <Calendar className="mr-1 h-3 w-3" />
                    <span>July 5-10</span>
                  </div>
                  <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                    Details
                  </Button>
                </div>
              </div>
            </Card>
            <Card className="overflow-hidden bg-zinc-800 border-zinc-700">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  width={400}
                  height={200}
                  alt="Event 3"
                  className="h-full w-full object-cover"
                />
                <Badge className="absolute left-2 top-2 bg-teal-600 hover:bg-teal-700">
                  Performance
                </Badge>
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold text-white">Water Puppet Theater</h3>
                <p className="mb-4 text-sm text-zinc-400">
                  Experience Vietnam&apos;s famous water puppet performances with environmental
                  themes.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-zinc-500">
                    <Calendar className="mr-1 h-3 w-3" />
                    <span>August 1-15</span>
                  </div>
                  <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                    Details
                  </Button>
                </div>
              </div>
            </Card>
            <Card className="overflow-hidden bg-zinc-800 border-zinc-700">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  width={400}
                  height={200}
                  alt="Event 4"
                  className="h-full w-full object-cover"
                />
                <Badge className="absolute left-2 top-2 bg-teal-600 hover:bg-teal-700">
                  Conference
                </Badge>
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold text-white">Sustainable Tourism Summit</h3>
                <p className="mb-4 text-sm text-zinc-400">
                  Join experts to discuss the future of sustainable tourism in Vietnam&apos;s
                  natural wonders.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-zinc-500">
                    <Calendar className="mr-1 h-3 w-3" />
                    <span>September 5-7</span>
                  </div>
                  <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                    Details
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-zinc-800/30">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">Festival Timeline</h2>
          <div className="mx-auto max-w-3xl">
            <div className="relative border-l border-teal-600 pl-8 pb-8">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-teal-600"></div>
              <div className="mb-2 text-sm text-teal-500">June 1, 2025</div>
              <h3 className="mb-2 text-xl font-bold text-white">Opening Ceremony</h3>
              <p className="text-zinc-300">
                The festival kicks off with a spectacular opening ceremony featuring performances,
                light shows, and speeches from dignitaries.
              </p>
            </div>
            <div className="relative border-l border-teal-600 pl-8 pb-8">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-teal-600"></div>
              <div className="mb-2 text-sm text-teal-500">June 15-30, 2025</div>
              <h3 className="mb-2 text-xl font-bold text-white">Art Exhibitions</h3>
              <p className="text-zinc-300">
                Multiple venues across Halong City will host exhibitions featuring works from over
                100 artists focused on environmental themes.
              </p>
            </div>
            <div className="relative border-l border-teal-600 pl-8 pb-8">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-teal-600"></div>
              <div className="mb-2 text-sm text-teal-500">July 1-31, 2025</div>
              <h3 className="mb-2 text-xl font-bold text-white">Performance Series</h3>
              <p className="text-zinc-300">
                A month-long series of traditional and contemporary performances including music,
                dance, and theater that celebrate Vietnamese culture and raise awareness about
                environmental issues.
              </p>
            </div>
            <div className="relative border-l border-teal-600 pl-8 pb-8">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-teal-600"></div>
              <div className="mb-2 text-sm text-teal-500">August 15-20, 2025</div>
              <h3 className="mb-2 text-xl font-bold text-white">Sustainable Tourism Summit</h3>
              <p className="text-zinc-300">
                International experts gather to discuss innovative approaches to sustainable tourism
                and conservation in UNESCO World Heritage sites.
              </p>
            </div>
            <div className="relative pl-8">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-teal-600"></div>
              <div className="mb-2 text-sm text-teal-500">September 30, 2025</div>
              <h3 className="mb-2 text-xl font-bold text-white">Closing Ceremony</h3>
              <p className="text-zinc-300">
                The festival concludes with a grand celebration featuring a drone light show over
                Halong Bay and the announcement of environmental initiatives.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button className="bg-teal-600 hover:bg-teal-700">View Full Schedule</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
