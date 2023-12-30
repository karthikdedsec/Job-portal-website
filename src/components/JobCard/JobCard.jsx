import dayjs from "dayjs";

function JobCard() {
  const skills = ["javascript", "React", "Nodejs"];
  const date1 = dayjs(Date.now());
  const diffInDays = date1.diff("2023-30-12", "day");
  return (
    <div className="mx-40 mb-4">
      <div className="flex justify-between items-center px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103 duration-300">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-lg font-semibold">Frontend developer - amazon</h1>
          <p>Full Time &#x2022; Fresher &#x2022; In-Office</p>
          <div className="flex items-center gap-2">
            {skills.map((skill) => (
              <p>{skill}</p>
            ))}
          </div>
        </div>
        <div>
          <p>Posted {diffInDays} ago</p>
          <button>Apply</button>
        </div>
      </div>
    </div>
  );
}
export default JobCard;
