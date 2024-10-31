import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

export function BreadCrumbAdminStats() {
    return <Breadcrumb className="gap-5 w-full mt-2 border-b pb-2 dark:border-zinc-800 border-zinc-200">
        <BreadcrumbList className="max-w-3xl mx-auto">
            <BreadcrumbItem className="flex items-center gap-5">
                <BreadcrumbLink href="/account" className="text-sm p-2 cursor-pointer dark:hover:bg-zinc-800 hover:bg-zinc-200 rounded-md">Back</BreadcrumbLink>
                <BreadcrumbLink href="/admin" className="text-sm dark:hover:text-white hover:text-black">admin</BreadcrumbLink>
            </BreadcrumbItem>
        </BreadcrumbList>
    </Breadcrumb>
}

export function BreadCrumbAdminCourses() {
    return <Breadcrumb className="gap-5 w-full mt-2 border-b pb-2 dark:border-zinc-800 border-zinc-200">
        <BreadcrumbList className="max-w-3xl mx-auto">
            <BreadcrumbItem className="flex items-center gap-5">
                <BreadcrumbLink href="/admin" className="text-xs p-2 cursor-pointer dark:hover:bg-zinc-800 hover:bg-zinc-200 rounded-md">Back</BreadcrumbLink>
                <BreadcrumbLink href="/admin" className="text-xs dark:hover:text-white hover:text-black">admin</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbLink href="/admin/courses" className="text-xs dark:hover:text-white hover:text-black">courses</BreadcrumbLink>
            </BreadcrumbItem>
        </BreadcrumbList>
    </Breadcrumb>
}

export function BreadCrumbAdminCreateNewCourse() {
    return <Breadcrumb className="gap-5 w-full mt-2 border-b pb-2 dark:border-zinc-800 border-zinc-200">
        <BreadcrumbList className="max-w-3xl mx-auto">
            <BreadcrumbItem className="flex items-center gap-5">
                <BreadcrumbLink href="/admin/courses" className="text-xs p-2 cursor-pointer dark:hover:bg-zinc-800 hover:bg-zinc-200 rounded-md">Back</BreadcrumbLink>
                <BreadcrumbLink href="/admin" className="text-xs dark:hover:text-white hover:text-black">admin</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbLink href="/admin/courses" className="text-xs dark:hover:text-white hover:text-black">courses</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbLink href="/admin/courses/new" className="text-xs dark:hover:text-white hover:text-black">new</BreadcrumbLink>
            </BreadcrumbItem>
        </BreadcrumbList>
    </Breadcrumb>
}

export function BreadCrumbAdminCourseId({courseId}: {courseId: string}) {
    return <Breadcrumb className="gap-5 w-full mt-2 border-b pb-2 dark:border-zinc-800 border-zinc-200">
        <BreadcrumbList className="max-w-3xl mx-auto">
            <BreadcrumbItem className="flex items-center gap-5">
                <BreadcrumbLink href="/admin/courses" className="text-xs p-2 cursor-pointer dark:hover:bg-zinc-800 hover:bg-zinc-200 rounded-md">Back</BreadcrumbLink>
                <BreadcrumbLink href="/admin" className="text-xs dark:hover:text-white hover:text-black">admin</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbLink href="/admin/courses" className="text-xs dark:hover:text-white hover:text-black">courses</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
                <BreadcrumbLink href={`/admin/courses/${courseId}`} className="text-xs dark:hover:text-white hover:text-black">{courseId}</BreadcrumbLink>
            </BreadcrumbItem>
        </BreadcrumbList>
    </Breadcrumb>
}