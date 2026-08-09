const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-[#D7E2EA] text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider hover:opacity-70 transition-opacity duration-200"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
