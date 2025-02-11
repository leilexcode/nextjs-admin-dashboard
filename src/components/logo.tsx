import darkLogo from "@/assets/logos/eqqui-logo-dark-mode.png";
import logo from "@/assets/logos/eqqui-logo.png";
import Image from "next/image";

export function Logo() {
  return (
    <div className="relative h-8 max-w-[10.847rem]">
      <Image
        src={logo}
        className="dark:hidden"
        alt="NextAdmin logo"
        role="presentation"
        quality={100}
      />

      <Image
        src={darkLogo}
        className="hidden dark:block"
        alt="Eqqui logo"
        role="presentation"
        quality={100}
      />
    </div>
  );
}
