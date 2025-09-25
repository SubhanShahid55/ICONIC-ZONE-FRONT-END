import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Globe, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light elegant-text mb-6">Our Story</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Founded on the belief that exceptional style should be accessible to all, ICONIC ZONE represents the
              perfect fusion of timeless elegance and contemporary design.
            </p>
          </div>

          <div className="relative rounded-lg overflow-hidden bg-muted mb-16">
            <img
              src="/elegant-fashion-model-in-minimalist-setting.jpg"
              alt="ICONIC ZONE Brand Story"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light elegant-text mb-6">
                Crafting tomorrow's
                <br />
                classics today
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At ICONIC ZONE, we believe that true style transcends trends. Our mission is to create pieces that not
                only look exceptional but also stand the test of time, both in quality and design.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Every garment in our collection is thoughtfully designed and meticulously crafted, using only the finest
                materials sourced from trusted suppliers around the world. We're committed to sustainable practices and
                ethical manufacturing, ensuring that our beautiful pieces contribute to a better world.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2">Sustainable Materials</h3>
                  <p className="text-sm text-muted-foreground">Eco-friendly fabrics and responsible sourcing</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Ethical Production</h3>
                  <p className="text-sm text-muted-foreground">Fair trade practices and worker welfare</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/artisan-crafting-luxury-fashion-item.jpg"
                alt="Artisan Craftsmanship"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light elegant-text mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do, from design to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  Uncompromising quality in every stitch, every detail, every piece.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Sustainability</h3>
                <p className="text-sm text-muted-foreground">
                  Responsible practices that protect our planet for future generations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Community</h3>
                <p className="text-sm text-muted-foreground">Building connections and supporting artisans worldwide.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Embracing new technologies while honoring traditional craftsmanship.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light elegant-text mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals behind ICONIC ZONE's vision and craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Creative Director",
                image: "/team-member-sarah.jpg",
                bio: "With over 15 years in fashion design, Sarah brings a unique vision that blends classic elegance with modern innovation.",
              },
              {
                name: "Marcus Rodriguez",
                role: "Head of Sustainability",
                image: "/team-member-marcus.png",
                bio: "Marcus leads our commitment to ethical practices and sustainable sourcing, ensuring every piece meets our environmental standards.",
              },
              {
                name: "Elena Volkov",
                role: "Master Tailor",
                image: "/team-member-elena.jpg",
                bio: "Elena's expertise in traditional tailoring techniques ensures that every garment meets our exacting standards of quality and fit.",
              },
            ].map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-medium mb-1">{member.name}</h3>
                  <Badge variant="outline" className="mb-3">
                    {member.role}
                  </Badge>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
