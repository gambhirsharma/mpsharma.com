'use client'
import { Mail, MapPin, Phone } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <div className="min-h-screen bg-[#00417C] ">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">Contact us</h1>
              {/*
              <p className="mt-4 text-gray-300">Get in touch with us for any inquiries or assistance.</p>
              */}
            </div>

            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Contact Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid gap-2">
                    <div className="font-medium">Phone</div>
                    <a href="tel:+919435339625" className="text-blue-600 hover:underline">
                      +91 9435339625
                    </a>
                  </div>
                  <div className="grid gap-2">
                    <div className="font-medium">Email</div>
                    <a href="mailto:mpsharma4444@gmail.com" className="text-blue-600 hover:underline break-all">
                      mpsharma4444@gmail.com
                    </a>
                  </div>
                  <div className="grid gap-2">
                    <div className="font-medium">WhatsApp</div>
                    <a href="https://wa.me/919435339625" className="text-blue-600 hover:underline">
                      +91 9435339625
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <address className="not-italic">
                    <div className="font-medium">LICI PREMIUM POINT</div>
                    <div className="text-gray-500">Jutlibari Borhula, Assam 786191</div>
                    <div className="text-gray-500">India</div>
                  </address>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex justify-between">
                      <div>Monday - Friday</div>
                      <div>9:00 AM - 5:00 PM</div>
                    </div>
                    <div className="flex justify-between">
                      <div>Saturday</div>
                      <div>9:00 AM - 3:00 PM</div>
                    </div>
                    <div className="flex justify-between text-gray-500">
                      <div>Sunday</div>
                      <div>Closed</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">Our Office</h1>
            {/* 
            <p className="mt-4 text-gray-300">
              LICI PREMIUM POINT<br />
              Jutlibari Borhula, Assam 786191<br />
              India
            </p>
            */}
            <div className="aspect-[2/1.5] w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d453489.3515087448!2d94.7810266903805!3d27.379286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x373f40e728b444f5%3A0x7e24d9ee5f3adcfa!2sLICI%20PREMIUM%20POINT!5e0!3m2!1sen!2sin!4v1725603130012!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <Button
              className="w-full"
              variant="secondary"
              onClick={() => window.open("https://maps.app.goo.gl/74hh99nqvv697JaH8", "_blank")}
            >
              Get Directions
            </Button>
          </div>
        </div>
      </div>
      <footer className="bg-yellow-400 py-4 mt-12">
        <div className="container text-center text-sm font-medium">
          mpsharma.com © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  )
}
