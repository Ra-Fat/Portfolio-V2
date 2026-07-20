import HoverLinks from "@/components/atoms/hover-link";

export interface NavbarLink {
  id: string;
  label: string;
  icon: string;
}

export const NavbarLinks: NavbarLink[] = [
  { id: "home", label: "Home", icon: "Home" },
  { id: "about", label: "About", icon: "User" },
  { id: "experiences", label: "Experiences", icon: "Briefcase" },
  { id: "projects", label: "Projects", icon: "FolderKanban" },
  { id: "contact", label: "Contact", icon: "Mail" },
];

interface DesktopNavProps {
  active: string;
  handleLinkClick: (id: string) => void;
}

export const DesktopNav = ({ active, handleLinkClick }: DesktopNavProps) => {
  return (
    <div className="hidden sm:flex items-center justify-center w-full">
      <div className="flex justify-center">
        <nav className="flex gap-3 rounded-full border border-black/10 bg-white/70 backdrop-blur-md shadow-sm px-3 py-2">
          {NavbarLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleLinkClick(id)}
              className={`rounded-2xl px-4 py-2 cursor-pointer text-sm transition ${
                active === id
                  ? "bg-black text-white font-semibold"
                  : " hover:text-black"
              }`}
            >
              <HoverLinks text={label}/>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};
