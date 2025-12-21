import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";

export default function Background() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      style={{ position: "fixed", inset: 0, zIndex: -1 }}
    >
      <ambientLight intensity={0.7} />
      <Stars radius={100} depth={50} count={4000} factor={4} fade />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
