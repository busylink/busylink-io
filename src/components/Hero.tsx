

import codeImage from '../../assets/code-min.png';

const Hero = () => {
    return (<>
        <div class="hero bg-base-200 min-h-[70vh]">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={codeImage}
                    class="max-w-sm rounded-lg shadow-2xl"
                    alt="Code illustration"
                     />
                <div>
                <h1 class="mb-8 text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-yellow-600">Start coding your SaaS in 1 hour</h1>
                <p class="mb-8 text-xl">You can focus on your business, we handle the boring tasks.</p>
                </div>
            </div>
        </div>
    </>);
};

export default Hero;