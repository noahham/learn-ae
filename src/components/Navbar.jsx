import { NavLink } from "react-router-dom";
import {
    IconPlayerPlay,
    IconLayersSubtract,
    IconShape,
    IconAdjustments,
    IconKeyframes,
    IconEaseInOutControlPoints,
    IconBlendMode,
    IconUpload,
} from "@tabler/icons-react";

// Map each icon to the route it should navigate to.
// Add a matching content file + <Route> in App.jsx before pointing a slug here,
// otherwise it'll hit whatever your catch-all/404 route renders.
const navItems = [
    { icon: IconPlayerPlay, slug: "getting-started", label: "Start" },
    { icon: IconLayersSubtract, slug: "layers", label: "Layers" },
    { icon: IconShape, slug: "shapes", label: "Shapes" },
    { icon: IconAdjustments, slug: "effects", label: "Effects" },
    { icon: IconKeyframes, slug: "keyframes", label: "Keyframes" },
    { icon: IconEaseInOutControlPoints, slug: "easing", label: "Easing" },
    { icon: IconBlendMode, slug: "blending", label: "Blending" },
    { icon: IconUpload, slug: "rendering", label: "Rendering" },
];

export default function Navbar() {
    return (
        <nav className="navbar">
            {navItems.map(({ icon: Icon, slug, label }) => (
                <NavLink
                    key={slug}
                    to={`/${slug}`}
                    className={({ isActive }) => `navbar-link${isActive ? " navbar-link-active" : ""}`}
                    aria-label={label}
                    title={label}
                >
                    <Icon size={24} stroke={2} color="white" />
                </NavLink>
            ))}
        </nav>
    );
}
