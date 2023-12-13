import {Text, Html,Float ,Environment,useGLTF, PresentationControls, ContactShadows } from '@react-three/drei'
import { useState, useEffect } from 'react';

export default function Experience()
{

    const computer = useGLTF('https://threejs-journey.com/resources/models/macbook_model.gltf')
    const [isHovered, setIsHovered] = useState(false);


  

    useEffect(() => {
        // Botón de redirección
        const redirectButton = document.createElement('button');
        redirectButton.innerText = 'Ir a la versión original';
        redirectButton.style.position = 'absolute';
        redirectButton.style.top = '10px';
        redirectButton.style.right = '55px';
        redirectButton.style.zIndex = '999';
        redirectButton.style.color = 'white';
        redirectButton.style.background = 'none';
        redirectButton.style.border = 'none';
        redirectButton.style.cursor = 'pointer';

        redirectButton.addEventListener('click', () => {
            window.location.href = 'https://portfolioagustinboasso.vercel.app/';
        });

        document.body.appendChild(redirectButton);

        // // Logotipos de LinkedIn y GitHub
        // const logosContainer = document.createElement('div');
        // logosContainer.style.position = 'fixed';
        // logosContainer.style.bottom = '10px';
        // logosContainer.style.right = '10px';
        // logosContainer.style.display = 'flex';
        // logosContainer.style.flexDirection = 'row';

        // const linkedinLogo = document.createElement('a');
        // linkedinLogo.href = 'https://www.linkedin.com/in/tu_usuario_de_linkedin';
        // linkedinLogo.target = '_blank';
        // linkedinLogo.rel = 'noopener noreferrer';
        // linkedinLogo.innerHTML = '<img src="https://www.flaticon.com/free-icon/linkedin_174857" alt="LinkedIn" style="width: 30px; height: 30px; margin-right: 10px; cursor: pointer;">';

        // const githubLogo = document.createElement('a');
        // githubLogo.href = 'https://github.com/tu_usuario_de_github';
        // githubLogo.target = '_blank';
        // githubLogo.rel = 'noopener noreferrer';
        // githubLogo.innerHTML = '<img src="ruta_del_logo_github.png" alt="GitHub" style="width: 30px; height: 30px; cursor: pointer;">';

        // logosContainer.appendChild(linkedinLogo);
        // logosContainer.appendChild(githubLogo);
        // document.body.appendChild(logosContainer);

        return () => {
            document.body.removeChild(redirectButton);
            document.body.removeChild(logosContainer);
        };
    }, []);
    
    return <>

        <Environment preset="city"/>

        <color args={['#241a1a']} attach="background" />
       
       
        <PresentationControls
            global
            //limita las rotaciones en todos los aspectos
            rotation={[0.13,0.1,0]}
            polar={[-0.4,0.2]}
            azimuth={[-1,0.75]}
            config={{mass:2, tension:400}}
            //vuelve a su posicion original con snap
            snap={{mass: 4, tension:400}}
        >
            <Float 
                rotationIntensity={0.4}
            >
                <rectAreaLight
                    width={2.5}
                    height={1.65}
                    intensity={65}
                    color={'#6900ff'}
                    rotation={[0.1, Math.PI, 0]}
                    position={[0,0.55,-1.15]}
                />
                <primitive
                    object={computer.scene}
                    position-y={-1.2}
                >
                    <Html
                        transform
                        wrapperClass='htmlScreen'
                        distanceFactor={1.17}
                        position={[0,1.56,-1.4]}
                        rotation-x={-0.256}
                        onPointerMove={(event) => {
                            event.stopPropagation();
                            setIsHovered(true);
                        }}
                        onPointerLeave={(event) => {
                            event.stopPropagation();
                            setIsHovered(false);
                        }}
                    >
                    <iframe
                        src="https://portfolioagustinboasso.vercel.app/" 
                        frameborder="0"
                        style={{
                            width: isHovered ? '1200px' : '1024px',
                            height: isHovered ? '800px' : '670px',
                            border: 'none',
                            borderRadius: '20px',
                            background: '#000000',
                            pointerEvents: 'auto',
                        }}
                    />
                   
                               
                                
                    </Html>
                </primitive>
               
                <Text
                    font='./bangers-v20-latin-regular.woff'
                    fontSize={1}
                    position={[2,0.75,0.75]}
                    rotation-y={-1.25}
                    maxWidth={2}
                    textAlign='center'
                >
                    AGUSTIN BOASSO
                </Text>    
            </Float>
        </PresentationControls>

        <ContactShadows
            position-y={-1.4}
            opacity={0.4}
            scale={5}
            blur={2.4}
        />

        

    </>
}