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

export default function Navbar() {
  return (
    <nav className="navbar">
      <IconPlayerPlay size={24} stroke={2} color="white" />
      <IconLayersSubtract size={24} stroke={2} color="white" />
      <IconShape size={24} stroke={2} color="white" />
      <IconAdjustments size={24} stroke={2} color="white" />
      <IconKeyframes size={24} stroke={2} color="white" />
      <IconEaseInOutControlPoints size={24} stroke={2} color="white" />
      <IconBlendMode size={24} stroke={2} color="white" />
      <IconUpload size={24} stroke={2} color="white" />
    </nav>
  );
}
