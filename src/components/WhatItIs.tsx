
import archImg from '../../assets/architecture.svg';


export const WhatItIs = () => {

  return (<>

<section class="p-6 bg-base-300 mt-6 flex rounded-sm">
    <div class="w-1/2 bg-gray-200 rounded-lg flex items-center justify-center">
        <img class="m-10 place-content-center rounded-lg shadow-xl" 
                    src={archImg} alt="Architecture Diagram of busylink.io" />
    </div>
    <div class="w-1/2 pl-6">
        <h2 class="text-2xl font-bold mb-4">What is <a href="http://busylink.io">busylink.io</a>?</h2>
        <p class="mb-4 text-lg">busylink.io is an application gateway that simplifies SaaS development. It handles tasks like authentication, user workflows, roles management, and payments, so you can focus on building your app.</p>
        <p class="mb-4 text-lg">Configure busylink.io with YAML files to integrate your app quickly and easily, saving you significant time and effort.</p>
    </div>
</section>

  </>)
}
