import { FaGithub, FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
import type { IconType } from "react-icons";
import { socials } from "@/lib/data";

const icons: Record<(typeof socials)[number]["icon"], IconType> = {
  github: FaGithub,
  x: FaXTwitter,
  linkedin: FaLinkedinIn,
  substack: SiSubstack,
  youtube: FaYoutube,
};

export default function Social() {
  return (
    <div className="social">
      {socials.map((s) => {
        const Icon = icons[s.icon];
        return (
          <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} title={s.label}>
            <Icon size={21} aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
