import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Image from "next/image";
export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            {/* Logo placeholder - will be replaced with actual logo */}
            <div className="text-2xl font-bold dark:text-white">
              <Image
                src="/logo.png"
                width="100"
                height="60"
                alt="Zoela - your trusted distrubutor"
              />
            </div>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-[#D0B30C] dark:hover:text-[#D0B30C]" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-[#D0B30C] dark:hover:text-[#D0B30C]" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-[#D0B30C] dark:hover:text-[#D0B30C]" />
            </Link>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Phone className="h-4 w-4 mr-2" />
              <span>+260 773 732590</span>
            </div>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Mail className="h-4 w-4 mr-2" />
              <span>sales@zoela.co</span>
            </div>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Kalundu, Lusaka, Zambia</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
          Copyright ©2024 All Right Reserved
        </div>
      </div>
    </footer>
  );
}
