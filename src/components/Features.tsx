import { FeatureCard } from "./FeatureCard";

export default function Features() {
  return (
    <div class="w-full bg-secondary text-secondary-content p-10">
        <h2 class="text-3xl font-bold text-center p-5">Features</h2>
        <div class="sm:columns-1 md:columns-3 gap-5">
            <FeatureCard title="Not a boilerplate" description="This is not a boilerplate that you download some code and we forget about you. You get a binary with all the features included. When there is a new release, just download the new version and you get all the new features." />
            <FeatureCard title="Use your preferred language" description="busylink.io is language agnostic. You can have your backed with Node.js (Next.js, Vue, Vite, ...), Go, Rust, Java, Python, even PHP" />
            <FeatureCard title="Working Authentication" description="Authentication working out of the box. User-Password form. Browser Basic authentication, Social with Google, Github, ..." />
            <FeatureCard title="User Roles and Permissions" description="Control what your users can access assigning them roles." />
            <FeatureCard title="Admin interface" description="Manage your server with the Admin Interface. Create users, assign roles, ..." />
        </div>
    </div>
  )
}
