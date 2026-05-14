import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import a7 from './a7iii_3D6.glb';

export default function Scene({ mainRef }) {
    const mountRef = useRef();
    const initialized = useRef(false);
    const principalRef = useRef();

    useEffect(() => {
        const container = mountRef.current;

        const width = container.clientWidth;
        const height = container.clientHeight;
        // CRIAR CENA
        const scene = new THREE.Scene();

        // CRIAR CAMERA
        const camera = new THREE.PerspectiveCamera(
            45,
            width / height,
            0.1,
            100
        );
        camera.position.set(0, 0, 10);

        // RENDER

        const ctx = gsap.context(() => {
            const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(width, height);
            renderer.outputEncoding = THREE.sRGBEncoding;

            while (mountRef.current.firstChild) {
                mountRef.current.removeChild(mountRef.current.firstChild);
            }
            mountRef.current.appendChild(renderer.domElement);
            renderer.domElement.style.width = '100%';

            // LUZ (sem isso fica preto)
            const light = new THREE.DirectionalLight(0xFFFAE5, 3);
            light.position.set(-10, 5, 20);
            scene.add(light);

            // LOADER
            const loader = new GLTFLoader();

            let model;
            let pivot
            console.log(a7);

            loader.load(a7, (gltf) => {
                model = gltf.scene;

                // ajustes básicos (quase sempre necessário)

                model.rotation.set(-2, -0.5, 0);
                model.position.set(0, 0, 0);
                model.scale.set(0.5, 0.5, 0.5);

                scene.add(model);
                console.log(gltf.parser);

                camera.position.set(0, 1, 5);
                camera.lookAt(0, 0, 0);

                console.log(mainRef.current.clientHeight);

                gsap.to(model.rotation, {
                    x: 2,
                    ease: "none",
                    scrollTrigger: {
                        trigger: mainRef.current,
                        start: "top bottom",
                        end: "bottom bottom",
                        scrub: true
                    }
                });
                ScrollTrigger.refresh();
            });

            let animationId;

            // LOOP
            function animate() {
                animationId = requestAnimationFrame(animate);

                // teste: gira automaticamente (remove depois)
                /*if (model) {
                    model.rotation.y += 0.01;
                }*/

                renderer.render(scene, camera);
            }

            animate();

            // RESIZE
            function handleResize() {
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
            }

            window.addEventListener('resize', handleResize);
        });
        return () => ctx.revert();
    }, []);

    return <div ref={mountRef} className='canvas-3d' />;
}