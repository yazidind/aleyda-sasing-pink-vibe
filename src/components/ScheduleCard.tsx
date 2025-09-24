interface Course {
  name: string;
  time: string;
  room: string;
  lecturer: string;
}

interface ScheduleCardProps {
  day: string;
  courses: Course[];
}

const ScheduleCard = ({ day, courses }: ScheduleCardProps) => {
  return (
    <div className="bg-gradient-card rounded-2xl shadow-pink p-6 card-hover">
      <div className="bg-primary-soft rounded-xl p-4 mb-6">
        <h3 className="font-poppins font-bold text-xl text-primary text-center">
          {day}
        </h3>
      </div>
      
      <div className="space-y-4">
        {courses.map((course, index) => (
          <div key={index} className="border-l-4 border-primary-soft pl-4 py-2">
            <h4 className="font-poppins font-semibold text-primary text-lg mb-2">
              {course.name}
            </h4>
            <div className="space-y-1 text-muted-foreground">
              <p className="flex items-center font-poppins">
                <span className="mr-2">⏰</span>
                {course.time}
              </p>
              <p className="flex items-center font-poppins">
                <span className="mr-2">🏫</span>
                {course.room}
              </p>
              <p className="flex items-center font-poppins">
                <span className="mr-2">👥</span>
                {course.lecturer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleCard;