import { Mail, MapPin, Phone, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t border-white/10" id="contact">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Company Information */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-heading tracking-wide text-white">
              SANY HEAVY INDUSTRY INDIA PVT. LTD.
            </h2>
            
            <div className="flex items-start gap-4 text-gray-300">
              <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-white mb-1">Head Office Address:</p>
                <p className="leading-relaxed">
                  Plot no. E-4, Chakan Industrial Area, Phase-III,<br />
                  Village Kuruli, Taluka Khed,<br />
                  District Pune - 410501, Maharashtra, INDIA
                </p>
              </div>
            </div>
          </div>

          {/* Contact Links */}
          <div className="flex flex-col justify-center space-y-6 lg:pl-12">
            <a 
              href="mailto:customercare@sanygroup.com" 
              className="flex items-center gap-4 group p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 hover:border-primary/30"
            >
              <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400">E-mail</p>
                <p className="text-lg font-medium text-white">customercare@sanygroup.com</p>
              </div>
            </a>

            <a 
              href="https://www.sany.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 group p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 hover:border-primary/30"
            >
              <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Website</p>
                <p className="text-lg font-medium text-white">www.sany.in</p>
              </div>
            </a>

            <a 
              href="tel:18002093337" 
              className="flex items-center gap-4 group p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 hover:border-primary/30"
            >
              <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Toll Free No.</p>
                <p className="text-lg font-medium text-white">1800-209-3337</p>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} SANY Heavy Industry India Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;