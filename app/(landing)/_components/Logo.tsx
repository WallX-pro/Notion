import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-x-2">
      <Image
        width={485.44}
        height={505.7}
        src="/logo.svg"
        alt="Notion logo"
        className="h-10 w-10 dark:hidden"
      />
      <Image
        width={485.44}
        height={505.7}
        src="/logo-dark.svg"
        alt="Notion logo"
        className="hidden h-10 w-10 dark:block"
      />
      <span className="text-2xl font-semibold tracking-tight">Notion</span>
    </div>
  );
};
