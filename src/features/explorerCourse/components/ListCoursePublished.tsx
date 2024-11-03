import { CourseCard } from "./CourseCard"

export const ListCoursePublished = ({courses}: {courses: any}) => {
  return <div className="flex items-center gap-5 flex-wrap mb-10">
    {courses.map((course: any) => (
      <CourseCard key={course.id} course={course} />
    ))}
  </div>
}