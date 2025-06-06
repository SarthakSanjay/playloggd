export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="h-12 flex items-center px-2 bg-greyblue-200  w-full text-zinc-400">
      ©Playloggd LLC {currentYear}
    </div>
  );
}
