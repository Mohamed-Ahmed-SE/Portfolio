import { Skeleton } from "../ui/Skeleton";

const PageSkeleton = () => {
    return (
        <div className="bg-black min-h-screen w-full overflow-hidden">
            {/* Navbar Skeleton */}
            <div className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center border-b border-white/5 bg-black/80 backdrop-blur-md">
                <Skeleton className="h-8 w-24" />
                <div className="hidden md:flex gap-8">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-20" />
                </div>
                <Skeleton className="h-10 w-32 rounded-full" />
            </div>

            {/* Hero Skeleton */}
            <div className="pt-40 px-6 md:px-10 max-w-7xl mx-auto mb-20">
                <Skeleton className="h-4 w-32 mb-8" />
                <Skeleton className="h-20 w-3/4 mb-4" />
                <Skeleton className="h-20 w-1/2 mb-12" />

                <div className="flex gap-4">
                    <Skeleton className="h-12 w-40 rounded-full" />
                    <Skeleton className="h-12 w-40 rounded-full" />
                </div>
            </div>

            {/* Content Skeleton grid */}
            <div className="px-6 md:px-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 pb-20">
                <Skeleton className="h-64 w-full rounded-3xl" />
                <Skeleton className="h-64 w-full rounded-3xl" />
            </div>
        </div>
    );
};

export default PageSkeleton;
