import { FeatureCard } from "./FeatureCard";

export default function Features() {
  return (
    <div class="w-full bg-secondary text-secondary-content p-10">
        <h2 class="text-3xl font-bold text-center p-5">Features</h2>
        <div class="sm:columns-1 md:columns-3 gap-5">
            <FeatureCard title="Working Authentication" description="Authentication working out of the box. User/Password. Basic authentication, Social with Google, Github, ..." />
            <FeatureCard title="User Management" description="User management workflows already implemented." />
            <FeatureCard title="User Roles" description="Assign and control roles of your users." />
        </div>
    </div>
  )
}
