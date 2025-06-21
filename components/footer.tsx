import Link from "next/link"
import { Mail, Phone, MapPin, Heart } from "lucide-react"

const footerLinks = {
  pages: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Video Editing & Post Production", href: "#" },
    { name: "VFX & Compositing", href: "#" },
    { name: "3D Modeling & Rendering", href: "#" },
    { name: "YouTube Content Creation", href: "#" },
    { name: "Brand Promotional Videos", href: "#" },
  ],
  social: [
    { name: "Instagram", href: "https://instagram.com/shubham_kumkar_", external: true },
    { name: "LinkedIn", href: "https://linkedin.com/in/shubham-kumkar", external: true },
  ],
}

const contactInfo = [
  {
    icon: Mail,
    label: "shubhamkumkar2012@gmail.com",
    href: "mailto:shubhamkumkar2012@gmail.com",
  },
  {
    icon: Phone,
    label: "+91 9833440489",
    href: "tel:+919833440489",
  },
  {
    icon: MapPin,
    label: "Mumbai, Maharashtra, India",
    href: "https://maps.google.com/?q=Mumbai,India",
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
                Shubham Bhushan Kumkar
              </h3>
              <p className="text-gray-300 leading-relaxed">
                19-year-old aspiring filmmaker specializing in video editing, VFX, and 3D design. Currently pursuing
                formal education in filmmaking.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((info) => {
                const Icon = info.icon
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                  >
                    <Icon className="w-4 h-4 mr-3 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm">{info.label}</span>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 hover:translate-x-1 inline-block transform"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 hover:translate-x-1 inline-block transform"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Follow Me</h4>
            <div className="space-y-3">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-cyan-400 transition-all duration-200 hover:translate-x-1 transform"
                >
                  {social.name}
                </a>
              ))}
            </div>

            {/* Newsletter Signup - Commented out but available */}
            <div className="mt-8">
              <h5 className="text-lg font-semibold text-white mb-4">Stay Updated</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-l-lg text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors duration-200"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-r-lg text-white text-sm hover:from-cyan-600 hover:to-purple-700 transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 Shubham Bhushan Kumkar. All rights reserved.</p>
          <div className="flex items-center text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
