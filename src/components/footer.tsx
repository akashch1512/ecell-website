import { FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareThreads, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    const iconSize = 32;
    return (
        <footer className="mt-16 flex flex-col items-center gap-4 text-white">
            <div className="flex justify-center gap-2 opacity-80">
                <a href="mailto:ecelljnec2024@gmail.com"><MdEmail size={iconSize} /></a>
                <a href="https://github.com/akashch1512"><FaGithub size={iconSize} /></a>
                <a href=""><FaFacebook size={iconSize} /></a>
                <a href="https://www.youtube.com/@AkashChaudhari-o6d"><FaYoutube size={iconSize} /></a>
                <a href="https://x.com/ecell_jnec"><FaXTwitter size={iconSize} /></a>
                <a href="https://www.instagram.com/ecell_jnec/"><FaInstagramSquare size={iconSize} /></a>
                <a href="https://www.linkedin.com/company/e-cell-jnec"><FaLinkedin size={iconSize} /></a>
                <a href=""><FaSquareThreads size={iconSize} /></a>
            </div>
            <div>
                Akash Chaudhari • © 2024 • Website
            </div>
            <div>
                ECELL JNEC
            </div>
        </footer>
    );
}