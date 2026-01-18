import { Skeleton } from "../ui/Skeleton";

const ProjectCardSkeleton = () => {
    return (
        <div className="flex flex-col gap-4">
            {/* Image area */}
            <Skeleton className="w-full aspect-video rounded-3xl" />

            {/* Title and metadata */}
            <div className="flex justify-between items-start mt-2">
                <div className="space-y-2">
                    <Skeleton className="h-8 w-48" />
                    <Skeleton className="h-4 w-32" />
                </div>
                <Skeleton className="h-10 w-10 rounded-full" />
            </div>

            {/* Tags */}
            <div className="flex gap-2">
                <Skeleton className="h-6 w-16 rounded-full" />
                <Skeleton className="h-6 w-16 rounded-full" />
                <Skeleton className="h-6 w-16 rounded-full" />
            </div>
        </div>
    );
};

export default ProjectCardSkeleton;
