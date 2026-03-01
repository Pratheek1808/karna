import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Hero = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // ── Scene ──────────────────────────────────────────────────────────────
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2('#FFF2F1', 0.035); // Deep fog for depth

        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100);
        camera.position.set(0, 0, 20);

        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // ── Floating Structures ────────────────────────────────────────────────
        const group = new THREE.Group();
        scene.add(group);

        const geometries = [
            new THREE.IcosahedronGeometry(1.0, 0),
            new THREE.OctahedronGeometry(1.0, 0),
            new THREE.DodecahedronGeometry(1.0, 0)
        ];

        const materialWire = new THREE.LineBasicMaterial({
            color: 0x6d5b99, // Dark Purple
            transparent: true,
            opacity: 0.25
        });

        const materialSolid = new THREE.MeshBasicMaterial({
            color: 0xCBC5EA, // Core matches background
            polygonOffset: true,
            polygonOffsetFactor: 1, // Draw behind lines
            polygonOffsetUnits: 1
        });

        const shapes = [];
        for (let i = 0; i < 40; i++) {
            const geoIndex = Math.floor(Math.random() * geometries.length);
            const geometry = geometries[geoIndex];

            const wireframe = new THREE.WireframeGeometry(geometry);
            const line = new THREE.LineSegments(wireframe, materialWire.clone());

            const isHighlight = Math.random() > 0.8;
            if (isHighlight) {
                line.material.color.setHex(0xA855F7); // Purple highlight
                line.material.opacity = 0.5;
            } else {
                line.material.opacity = 0.1 + Math.random() * 0.2;
            }

            const mesh = new THREE.Mesh(geometry, materialSolid);

            const shapeGroup = new THREE.Group();
            shapeGroup.add(mesh);
            shapeGroup.add(line);

            shapeGroup.position.set(
                (Math.random() - 0.5) * 40,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20 - 5
            );

            const scale = 0.5 + Math.random() * 1.5;
            shapeGroup.scale.set(scale, scale, scale);

            shapeGroup.userData = {
                rotSpeed: {
                    x: (Math.random() - 0.5) * 0.01,
                    y: (Math.random() - 0.5) * 0.01,
                    z: (Math.random() - 0.5) * 0.01
                },
                floatSpeed: 0.2 + Math.random() * 0.3,
                floatOffset: Math.random() * Math.PI * 2,
                baseY: shapeGroup.position.y
            };

            group.add(shapeGroup);
            shapes.push(shapeGroup);
        }

        // ── Mouse Interaction ──────────────────────────────────────────────────
        let mouseX = 0, mouseY = 0;

        const handleMouseMove = (event) => {
            mouseX = (event.clientX / window.innerWidth - 0.5);
            mouseY = (event.clientY / window.innerHeight - 0.5);
        };
        document.addEventListener('mousemove', handleMouseMove);

        // ── Animation Loop ─────────────────────────────────────────────────────
        const clock = new THREE.Clock();
        let animationFrameId;

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            const t = clock.getElapsedTime();

            group.rotation.y = t * 0.05;

            shapes.forEach((shape) => {
                const data = shape.userData;
                shape.rotation.x += data.rotSpeed.x;
                shape.rotation.y += data.rotSpeed.y;
                shape.rotation.z += data.rotSpeed.z;
                shape.position.y = data.baseY + Math.sin(t * data.floatSpeed + data.floatOffset) * 0.5;
            });

            camera.position.x += (mouseX * 5 - camera.position.x) * 0.02;
            camera.position.y += (-mouseY * 3 - camera.position.y) * 0.02;
            camera.lookAt(0, 0, 0);

            renderer.render(scene, camera);
        };

        animate();

        // ── Resize ─────────────────────────────────────────────────────────────
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('mousemove', handleMouseMove);
            renderer.dispose();
            materialSolid.dispose();
            materialWire.dispose();
            // Free WebGL context
        };
    }, []);

    return (
        <header id="home" className="hero">
            <div className="container">
                <div className="hero-content fade-in">
                    <h1>Precision in Every <span className="gold-text">Audit</span>.</h1>
                    <p className="hero-subtitle">Empowering your business with clarity, integrity, and world-class financial
                        expertise.</p>
                    <div className="hero-buttons">
                        <a href="#services" className="btn btn-primary">Our Services</a>
                        <a href="#contact" className="btn btn-outline">Get in Touch</a>
                    </div>
                </div>
            </div>
            <canvas id="hero-canvas" ref={canvasRef}></canvas>
        </header>
    );
};

export default Hero;
