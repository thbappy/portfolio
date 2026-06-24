"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Three.js animated particle background with floating wireframe shapes.
 * Responsive particle count — reduced on mobile for performance.
 * Follows mouse movement for parallax camera effect.
 */
export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // ── Scene Setup ──────────────────────────────────────
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.001);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.z = 1000;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // ── Mouse tracking ──────────────────────────────────
    let mouseX = 0;
    let mouseY = 0;
    const halfW = window.innerWidth / 2;
    const halfH = window.innerHeight / 2;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX - halfW;
      mouseY = e.clientY - halfH;
    };

    // ── Responsive particle count ───────────────────────
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 800 : 2000;

    // ── Particles ───────────────────────────────────────
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x00ff88);
    const color2 = new THREE.Color(0x00b8ff);
    const color3 = new THREE.Color(0xffffff);

    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = (Math.random() - 0.5) * 3000;
      positions[i + 1] = (Math.random() - 0.5) * 3000;
      positions[i + 2] = (Math.random() - 0.5) * 3000;

      const mix = Math.random();
      const c = mix < 0.4 ? color1 : mix < 0.8 ? color2 : color3;
      colors[i] = c.r;
      colors[i + 1] = c.g;
      colors[i + 2] = c.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 4,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // ── Floating Wireframe Shapes ───────────────────────
    const geoTypes = [
      new THREE.IcosahedronGeometry(40, 0),
      new THREE.TorusGeometry(30, 10, 16, 100),
      new THREE.TetrahedronGeometry(40, 0),
    ];

    const shapes: { mesh: THREE.Mesh; rx: number; ry: number }[] = [];
    const shapeCount = isMobile ? 5 : 10;

    for (let i = 0; i < shapeCount; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x00ff88 : 0x00b8ff,
        wireframe: true,
        transparent: true,
        opacity: 0.15,
      });

      const mesh = new THREE.Mesh(geoTypes[i % geoTypes.length], mat);
      mesh.position.set(
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 1000 - 500
      );
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);

      shapes.push({
        mesh,
        rx: (Math.random() - 0.5) * 0.01,
        ry: (Math.random() - 0.5) * 0.01,
      });

      scene.add(mesh);
    }

    // ── Animation Loop ──────────────────────────────────
    let animationId: number;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const targetX = mouseX * 0.5;
      const targetY = mouseY * 0.5;

      camera.position.x += (targetX - camera.position.x) * 0.02;
      camera.position.y += (-targetY - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      particleSystem.rotation.y += 0.001;
      particleSystem.rotation.x += 0.0005;

      shapes.forEach((s) => {
        s.mesh.rotation.x += s.rx;
        s.mesh.rotation.y += s.ry;
      });

      renderer.render(scene, camera);
    };

    animate();

    // ── Resize Handler ──────────────────────────────────
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    document.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);

    // ── Cleanup ─────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animationId);
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="canvas-container"
      aria-hidden="true"
      className="fixed inset-0 w-screen h-screen -z-10 pointer-events-none"
    />
  );
}
