import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Users, Globe, Award} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          width={1600}
          height={800}
          alt="Art and Climate Initiative"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/70 via-zinc-900/50 to-zinc-900"></div>
        <div className="absolute inset-0 flex flex-col justify-center px-4">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              <h1 className="mb-4 text-5xl font-bold tracking-tight text-white md:text-6xl">
                ABOUT
                <br />
                ART & CLIMATE
              </h1>
              <div className="flex items-center space-x-2">
                <span className="h-1 w-8 bg-teal-500"></span>
                <p className="text-lg text-zinc-300">
                  Preserving Vietnam&apos;s natural heritage through art
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-zinc-800/30">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-6">
              <h2 className="text-2xl font-bold text-white">Our Mission</h2>
              <p className="text-zinc-300">
                The Art & Climate initiative was founded in 2020 with a clear mission: to harness
                the power of artistic expression to raise awareness about environmental conservation
                in Vietnam, particularly focusing on the preservation of Halong Bay and other
                natural wonders.
              </p>
              <p className="text-zinc-300">
                We believe that art has the unique ability to communicate complex environmental
                issues in ways that resonate emotionally with people, inspiring action and change.
                Through our festivals, exhibitions, and community programs, we aim to build a
                sustainable future where Vietnam&apos;s natural heritage is protected for
                generations to come.
              </p>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Our Mission"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">Our Core Values</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-lg bg-zinc-800 p-6">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-600/20">
                <Globe className="h-8 w-8 text-teal-500" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Environmental Stewardship</h3>
              <p className="text-zinc-300">
                We are committed to promoting sustainable practices and conservation efforts that
                protect Vietnam&apos;s natural ecosystems, particularly focusing on marine
                conservation in Halong Bay.
              </p>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-zinc-800 p-6">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-600/20">
                <Users className="h-8 w-8 text-teal-500" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Community Engagement</h3>
              <p className="text-zinc-300">
                We believe in the power of collective action. By engaging local communities,
                artists, and visitors, we create a movement that transcends cultural boundaries and
                inspires environmental awareness.
              </p>
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-zinc-800 p-6">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-600/20">
                <Award className="h-8 w-8 text-teal-500" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Artistic Excellence</h3>
              <p className="text-zinc-300">
                We showcase high-quality artistic expressions that not only raise awareness about
                environmental issues but also celebrate Vietnam&apos;s rich cultural heritage and
                contemporary creative talents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-zinc-800/30">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">Our Team</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Team Member"
                  className="h-[200px] w-[200px] object-cover mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-white">Nguyen Thi Mai</h3>
              <p className="text-teal-500">Founder & Director</p>
            </div>
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Team Member"
                  className="h-[200px] w-[200px] object-cover mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-white">Tran Van Hoang</h3>
              <p className="text-teal-500">Artistic Director</p>
            </div>
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Team Member"
                  className="h-[200px] w-[200px] object-cover mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-white">Le Minh Duc</h3>
              <p className="text-teal-500">Environmental Officer</p>
            </div>
            <div className="text-center">
              <div className="mb-4 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  width={200}
                  height={200}
                  alt="Team Member"
                  className="h-[200px] w-[200px] object-cover mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-white">Pham Thu Ha</h3>
              <p className="text-teal-500">Community Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">Our Journey</h2>
          <div className="mx-auto max-w-3xl">
            <div className="relative border-l border-teal-600 pl-8 pb-8">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-teal-600"></div>
              <div className="mb-2 text-sm text-teal-500">2020</div>
              <h3 className="mb-2 text-xl font-bold text-white">Foundation</h3>
              <p className="text-zinc-300">
                Art & Climate was founded by a group of artists and environmentalists concerned
                about the impacts of climate change on Vietnam&apos;s natural heritage.
              </p>
            </div>
            <div className="relative border-l border-teal-600 pl-8 pb-8">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-teal-600"></div>
              <div className="mb-2 text-sm text-teal-500">2021</div>
              <h3 className="mb-2 text-xl font-bold text-white">First Exhibition</h3>
              <p className="text-zinc-300">
                Launched our first exhibition in Hanoi featuring works from 25 Vietnamese artists
                focused on environmental themes and conservation.
              </p>
            </div>
            <div className="relative border-l border-teal-600 pl-8 pb-8">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-teal-600"></div>
              <div className="mb-2 text-sm text-teal-500">2023</div>
              <h3 className="mb-2 text-xl font-bold text-white">International Partnership</h3>
              <p className="text-zinc-300">
                Established partnerships with UNESCO and international environmental organizations
                to expand our impact and reach.
              </p>
            </div>
            <div className="relative pl-8">
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-teal-600"></div>
              <div className="mb-2 text-sm text-teal-500">2025</div>
              <h3 className="mb-2 text-xl font-bold text-white">Halong Festival Launch</h3>
              <p className="text-zinc-300">
                Launched the first Halong Festival, bringing together artists, environmentalists,
                and communities to celebrate and protect Vietnam&apos;s most iconic natural wonder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Join Our Mission</h2>
          <p className="mb-8 mx-auto max-w-2xl text-teal-50">
            Whether you&apos;re an artist, environmentalist, or simply someone who cares about
            preserving Vietnam&apos;s natural heritage, there are many ways to get involved with Art
            & Climate.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-teal-600 hover:bg-zinc-100">Become a Volunteer</Button>
            <Button variant="outline" className="border-white text-white hover:bg-teal-700">
              Partner With Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
