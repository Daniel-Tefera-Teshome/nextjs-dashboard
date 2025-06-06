import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <ShoppingCartIcon className="h-12 w-12 rotate-[15deg] mr-8" />
      <p className="text-[44px]"></p>
      <p className="text-[44px] text-center">Dani Shopping</p>
    </div>
  );
}
