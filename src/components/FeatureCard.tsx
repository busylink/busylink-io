

interface FeatureCardProps {
    title: string;
    description: string;
}


export const FeatureCard = ({title, description}:FeatureCardProps) => {
    return (
        <div class="card bg-primary text-primary-content shadow-xl break-inside-avoid-column mb-6">
            <div class="card-body" break-after-column>
                <h2 class="card-title text-bold">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}
