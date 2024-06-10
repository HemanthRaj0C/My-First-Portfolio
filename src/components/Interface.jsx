const Section = (props) => {

    const {children}=props;

    return (<section className={`
    h-screen w-screen p-8 max-w-screen-2xl mx-auto
    flex flex-col items-start justify-center
    `}>
        {children}
    </section>)
}

export const Interface = (props) => {

    const {setSection}=props;

    return (<>
    <div className="flex flex-col items-center w-screen">
    <HomeSection setSection={setSection}/>
    <AboutSection setSection={setSection}/>
    <SkillSection setSection={setSection}/>
    <ProjectSection setSection={setSection}/>
    <ContactSection setSection={setSection}/>
    </div>
    </>)
}

const HomeSection=(props)=>{

    const {setSection}=props

    return (<>
    <Section>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 from-20% via-purple-500 via-30% to-pink-500 to-90% text-transparent bg-clip-text p-1">Welcome to My Portfolio</h1>
        <div className="flex items-stretch">
        <button onClick={()=>setSection(1)} className="m-2">About Me</button>
        <button onClick={()=>setSection(2)} className="m-2">Skills</button>
        <button onClick={()=>setSection(3)} className="m-2">Projects</button>
        <button onClick={()=>setSection(4)}className="m-2">Contact Me</button>
        </div>
    </Section>
    </>)
}

const AboutSection=(props)=>{

    const { setSection } = props;
    const svg1 = document.getElementById('triangles-1');
    const svgFlip1 = document.getElementById('triangles-flip-1');

    if(svg1){
        svg1.onclick=()=>setSection(2)
    }
    if(svgFlip1){
        svgFlip1.onclick=()=>setSection(0)
    }

    return (<>
    <Section>
        <h1>About Me</h1>
        <div className="flex items-stretch">
        <div className="mr-10">
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="triangles-1" clip-path="url(#clip0_1_2)">
            <g id="LightGroup">
            <path id="Light1" opacity="0.8" d="M60.573 43.7085C59.408 45.6517 56.592 45.6517 55.427 43.7085L37.3409 13.5426C36.142 11.5431 37.5824 9 39.9139 9L76.0861 9C78.4176 9 79.858 11.5431 78.6591 13.5426L60.573 43.7085Z"/>
            </g>
            <g id="DarkGroup">
            <path id="Dark2" d="M60.573 43.7085C59.408 45.6517 56.592 45.6517 55.427 43.7085L37.3409 13.5426C36.142 11.5431 37.5824 9 39.9139 9L76.0861 9C78.4176 9 79.858 11.5431 78.6591 13.5426L60.573 43.7085Z" fill-opacity="0.8"/>
            <path id="Dark1" d="M60.573 55.7085C59.408 57.6517 56.592 57.6517 55.427 55.7085L37.3409 25.5426C36.142 23.5431 37.5824 21 39.9139 21L76.0861 21C78.4176 21 79.858 23.5431 78.6591 25.5426L60.573 55.7085Z" fill-opacity="0.8"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_1_2">
            <rect width="120" height="100" fill="white"/>
            </clipPath>
            </defs>
        </svg>
        </div>
        <div className="">
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="flipped">
            <g id="triangles-flip-1" clip-path="url(#clip0_1_2)">
            <g id="LightGroup">
            <path id="Light1" opacity="0.8" d="M60.573 43.7085C59.408 45.6517 56.592 45.6517 55.427 43.7085L37.3409 13.5426C36.142 11.5431 37.5824 9 39.9139 9L76.0861 9C78.4176 9 79.858 11.5431 78.6591 13.5426L60.573 43.7085Z" />
            </g>
            <g id="DarkGroup">
            <path id="Dark2" d="M60.573 43.7085C59.408 45.6517 56.592 45.6517 55.427 43.7085L37.3409 13.5426C36.142 11.5431 37.5824 9 39.9139 9L76.0861 9C78.4176 9 79.858 11.5431 78.6591 13.5426L60.573 43.7085Z" fill-opacity="0.8"/>
            <path id="Dark1" d="M60.573 55.7085C59.408 57.6517 56.592 57.6517 55.427 55.7085L37.3409 25.5426C36.142 23.5431 37.5824 21 39.9139 21L76.0861 21C78.4176 21 79.858 23.5431 78.6591 25.5426L60.573 55.7085Z" fill-opacity="0.8"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_1_2">
            <rect width="120" height="100" fill="white"/>
            </clipPath>
            </defs>
        </svg>
        </div>
        </div>
    </Section>
    </>)
}

const SkillSection=(props)=>{

    const { setSection } = props;
    const svg2 = document.getElementById('triangles-2');
    const svgFlip2 = document.getElementById('triangles-flip-2');

    if(svg2){
        svg2.onclick=()=>setSection(3)
    }
    if(svgFlip2){
        svgFlip2.onclick=()=>setSection(1)
    }

    return (<>
    <Section>
        <h1>Skills</h1>
        <div className="flex items-stretch">
        <div className="mr-10">
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="triangles-2" clip-path="url(#clip0_1_2)">
            <g id="LightGroup">
            <path id="Light1" opacity="0.8" d="M60.573 43.7085C59.408 45.6517 56.592 45.6517 55.427 43.7085L37.3409 13.5426C36.142 11.5431 37.5824 9 39.9139 9L76.0861 9C78.4176 9 79.858 11.5431 78.6591 13.5426L60.573 43.7085Z"/>
            </g>
            <g id="DarkGroup">
            <path id="Dark2" d="M60.573 43.7085C59.408 45.6517 56.592 45.6517 55.427 43.7085L37.3409 13.5426C36.142 11.5431 37.5824 9 39.9139 9L76.0861 9C78.4176 9 79.858 11.5431 78.6591 13.5426L60.573 43.7085Z" fill-opacity="0.8"/>
            <path id="Dark1" d="M60.573 55.7085C59.408 57.6517 56.592 57.6517 55.427 55.7085L37.3409 25.5426C36.142 23.5431 37.5824 21 39.9139 21L76.0861 21C78.4176 21 79.858 23.5431 78.6591 25.5426L60.573 55.7085Z" fill-opacity="0.8"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_1_2">
            <rect width="120" height="100" fill="white"/>
            </clipPath>
            </defs>
        </svg>
        </div>
        <div className="">
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="flipped">
            <g id="triangles-flip-2" clip-path="url(#clip0_1_2)">
            <g id="LightGroup">
            <path id="Light1" opacity="0.8" d="M60.573 43.7085C59.408 45.6517 56.592 45.6517 55.427 43.7085L37.3409 13.5426C36.142 11.5431 37.5824 9 39.9139 9L76.0861 9C78.4176 9 79.858 11.5431 78.6591 13.5426L60.573 43.7085Z"/>
            </g>
            <g id="DarkGroup">
            <path id="Dark2" d="M60.573 43.7085C59.408 45.6517 56.592 45.6517 55.427 43.7085L37.3409 13.5426C36.142 11.5431 37.5824 9 39.9139 9L76.0861 9C78.4176 9 79.858 11.5431 78.6591 13.5426L60.573 43.7085Z" fill-opacity="0.8"/>
            <path id="Dark1" d="M60.573 55.7085C59.408 57.6517 56.592 57.6517 55.427 55.7085L37.3409 25.5426C36.142 23.5431 37.5824 21 39.9139 21L76.0861 21C78.4176 21 79.858 23.5431 78.6591 25.5426L60.573 55.7085Z" fill-opacity="0.8"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_1_2">
            <rect width="120" height="100" fill="white"/>
            </clipPath>
            </defs>
        </svg>
        </div>
        </div>
    </Section>
    </>)
}

const ProjectSection=(props)=>{

    const { setSection } = props;
    const svg3 = document.getElementById('triangles-3');
    const svgFlip3 = document.getElementById('triangles-flip-3');

    if(svg3){
        svg3.onclick=()=>setSection(4)
    }
    if(svgFlip3){
        svgFlip3.onclick=()=>setSection(2)
    }

    return (<>
    <Section>
        <h1>Projects</h1>
        <div className="flex items-stretch">
        <div className="mr-10">
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="triangles-3" clip-path="url(#clip0_1_2)">
            <g id="LightGroup">
            <path id="Light1" opacity="0.8" d="M60.573 43.7085C59.408 45.6517 56.592 45.6517 55.427 43.7085L37.3409 13.5426C36.142 11.5431 37.5824 9 39.9139 9L76.0861 9C78.4176 9 79.858 11.5431 78.6591 13.5426L60.573 43.7085Z"/>
            </g>
            <g id="DarkGroup">
            <path id="Dark2" d="M60.573 43.7085C59.408 45.6517 56.592 45.6517 55.427 43.7085L37.3409 13.5426C36.142 11.5431 37.5824 9 39.9139 9L76.0861 9C78.4176 9 79.858 11.5431 78.6591 13.5426L60.573 43.7085Z" fill-opacity="0.8"/>
            <path id="Dark1" d="M60.573 55.7085C59.408 57.6517 56.592 57.6517 55.427 55.7085L37.3409 25.5426C36.142 23.5431 37.5824 21 39.9139 21L76.0861 21C78.4176 21 79.858 23.5431 78.6591 25.5426L60.573 55.7085Z" fill-opacity="0.8"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_1_2">
            <rect width="120" height="100" fill="white"/>
            </clipPath>
            </defs>
        </svg>
        </div>
        <div className="">
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="flipped">
            <g id="triangles-flip-3" clip-path="url(#clip0_1_2)">
            <g id="LightGroup">
            <path id="Light1" opacity="0.8" d="M60.573 43.7085C59.408 45.6517 56.592 45.6517 55.427 43.7085L37.3409 13.5426C36.142 11.5431 37.5824 9 39.9139 9L76.0861 9C78.4176 9 79.858 11.5431 78.6591 13.5426L60.573 43.7085Z" />
            </g>
            <g id="DarkGroup">
            <path id="Dark2" d="M60.573 43.7085C59.408 45.6517 56.592 45.6517 55.427 43.7085L37.3409 13.5426C36.142 11.5431 37.5824 9 39.9139 9L76.0861 9C78.4176 9 79.858 11.5431 78.6591 13.5426L60.573 43.7085Z" fill-opacity="0.8"/>
            <path id="Dark1" d="M60.573 55.7085C59.408 57.6517 56.592 57.6517 55.427 55.7085L37.3409 25.5426C36.142 23.5431 37.5824 21 39.9139 21L76.0861 21C78.4176 21 79.858 23.5431 78.6591 25.5426L60.573 55.7085Z" fill-opacity="0.8"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_1_2">
            <rect width="120" height="100" fill="white"/>
            </clipPath>
            </defs>
        </svg>
        </div>
        </div>
    </Section>
    </>)
}

const ContactSection=(props)=>{

    const { setSection } = props;
    const svg4 = document.getElementById('triangles-4');
    const svgFlip4 = document.getElementById('triangles-flip-4');

    if(svg4){
        svg4.onclick=()=>setSection(0)
    }
    if(svgFlip4){
        svgFlip4.onclick=()=>setSection(3)
    }
    
    return (<>
    <Section>
        <h1>Contact Me</h1>
        <div className="flex items-stretch">
        <div className="mr-10">
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="triangles-4" clip-path="url(#clip0_1_2)">
            <g id="LightGroup">
            <path id="Light1" opacity="0.8" d="M60.573 43.7085C59.408 45.6517 56.592 45.6517 55.427 43.7085L37.3409 13.5426C36.142 11.5431 37.5824 9 39.9139 9L76.0861 9C78.4176 9 79.858 11.5431 78.6591 13.5426L60.573 43.7085Z"/>
            </g>
            <g id="DarkGroup">
            <path id="Dark2" d="M60.573 43.7085C59.408 45.6517 56.592 45.6517 55.427 43.7085L37.3409 13.5426C36.142 11.5431 37.5824 9 39.9139 9L76.0861 9C78.4176 9 79.858 11.5431 78.6591 13.5426L60.573 43.7085Z" fill-opacity="0.8"/>
            <path id="Dark1" d="M60.573 55.7085C59.408 57.6517 56.592 57.6517 55.427 55.7085L37.3409 25.5426C36.142 23.5431 37.5824 21 39.9139 21L76.0861 21C78.4176 21 79.858 23.5431 78.6591 25.5426L60.573 55.7085Z" fill-opacity="0.8"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_1_2">
            <rect width="120" height="100" fill="white"/>
            </clipPath>
            </defs>
        </svg>
        </div>
        <div className="">
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="flipped">
            <g id="triangles-flip-4" clip-path="url(#clip0_1_2)">
            <g id="LightGroup">
            <path id="Light1" opacity="0.8" d="M60.573 43.7085C59.408 45.6517 56.592 45.6517 55.427 43.7085L37.3409 13.5426C36.142 11.5431 37.5824 9 39.9139 9L76.0861 9C78.4176 9 79.858 11.5431 78.6591 13.5426L60.573 43.7085Z"/>
            </g>
            <g id="DarkGroup">
            <path id="Dark2" d="M60.573 43.7085C59.408 45.6517 56.592 45.6517 55.427 43.7085L37.3409 13.5426C36.142 11.5431 37.5824 9 39.9139 9L76.0861 9C78.4176 9 79.858 11.5431 78.6591 13.5426L60.573 43.7085Z" fill-opacity="0.8"/>
            <path id="Dark1" d="M60.573 55.7085C59.408 57.6517 56.592 57.6517 55.427 55.7085L37.3409 25.5426C36.142 23.5431 37.5824 21 39.9139 21L76.0861 21C78.4176 21 79.858 23.5431 78.6591 25.5426L60.573 55.7085Z" fill-opacity="0.8"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_1_2">
            <rect width="120" height="100" fill="white"/>
            </clipPath>
            </defs>
        </svg>
        </div>
        </div>
    </Section>
    </>)
}