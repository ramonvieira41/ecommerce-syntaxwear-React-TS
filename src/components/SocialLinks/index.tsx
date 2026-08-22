import iconInstagram from "@/assets/images/icon-instagram.png";
import iconFacebook from "@/assets/images/icon-facebook.png";
import iconWhatsapp from "@/assets/images/icon-whats.png";
import iconTikTok from "@/assets/images/icon-tiktok.png";

const socialLinks = [
    { href: "https://www.instagram.com/", icon: iconInstagram, name: "Instagram" },
    { href: "https://www.facebook.com/", icon: iconFacebook, name: "Facebook" },
    { href: "https://www.whatsapp.com/", icon: iconWhatsapp, name: "Whatsapp" },
    { href: "https://www.tiktok.com/", icon: iconTikTok, name: "TikTok" }
];

export const SocialLinks = () => {
    return (
        <div>
            <p className="mb-4 text-xl font-medium text-surface">Redes Sociais</p>

            <ul className="flex gap-5">
                {socialLinks.map(({ href, icon, name }) => (
                    <li key={name}>
                        <a href={href} aria-label={name}>
                            <img src={icon} alt={name} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}