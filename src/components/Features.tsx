import { FeatureCard } from "./FeatureCard";

export default function Features() {
  return (
    <div class="w-full bg-secondary text-secondary-content p-10">
        <h2 class="text-3xl font-bold text-center p-5">Maximize Your Productivity with busylink.io</h2>
        <div class="sm:columns-1 md:columns-3 gap-5">
            <FeatureCard title="Beyond a Boilerplate"description="Forget about generic boilerplates. With busylink.io, you get a fully-featured binary ready for deployment. Enjoy seamless updates with new features—no hassle, just download the latest version." />
            <FeatureCard title="Code in Your Favorite Language" description="busylink.io is language agnostic. Whether you prefer Node.js, Go, Rust, Java, Python, or even PHP, we've got you covered. Develop with the tools you love." />
            <FeatureCard title="Seamless Authentication" description="Implement robust authentication effortlessly. From classic User-Password forms to Browser Basic authentication, and even social logins with Google and GitHub, it just works." />
            <FeatureCard title="Granular Roles and Permissions" description="Take control with precise user roles and permissions. Easily define what each user can do." />
            <FeatureCard title="Intuitive Admin Interface" description="Simplify server management with our Admin Interface. Create and manage users, assign roles, and oversee your server operations with ease." />
        </div>
    </div>
  )
}
