import Axios from "axios";
import Image from "next/legacy/image";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Report() {
  const [data, setData] = useState(null);
  const router = useRouter();
  const { fid } = router.query;
  const [department, setDepartment] = useState("<Department>");
  const [facultyName, setFacultyName] = useState("<facultyName>");
  const [courseCode, setCourseCode] = useState("<courseCode>");
  const [courseTitle, setCourseTitle] = useState("<courseTitle>");
  const [courseDepartment, setCourseDepartment] =
    useState("<courseDepartment>");
  const [enrolledStudents, setEnrolledStudents] = useState(0);
  const [feedbackGiven, setFeedbackGiven] = useState(0);
  const [report, setReport] = useState(null);
  const [semester, setSemester] = useState(null);
  const [five, setFive] = useState(null);
  const [four, setFour] = useState(null);
  const [three, setThree] = useState(null);
  const [lteTwo, setLteTwo] = useState(null);
  const [p345, setP345] = useState(null);
  const [isGenerated, setIsGenerated] = useState(false);
  const romanNumerals = { 1: "I", 2: "II", 3: "III", 4: "IV" };

  const generateReport = async () => {
    const { data } = await Axios.get(
      "https://private-autumn-pullover.glitch.me/api/feedback/generate",
      { fid: fid }
    );
    setReport(data);
    setFacultyName(
      data.faculty.name +
        ", " +
        data.faculty.designation +
        "/" +
        data.faculty.department.slice(0, 3).toUpperCase()
    );
    setCourseCode(data.courseDetails.courseId);
    setCourseTitle(data.courseDetails.courseTitle);
    setDepartment(data.courseDetails.courseDepartment);
    setFeedbackGiven(data.noOfStudentsCompleted);
    setEnrolledStudents(data.rolls);
    setSemester(data.courseDetails.courseAssignedSemester);
    setCourseDepartment(data.courseDetails.courseCommonto);
    setFive(data.statement[5]);
    setFour(data.statement[4]);
    setThree(data.statement[3]);
    let two = data.statement[2];
    let one = data.statement[1];
    let three = data.statement[3];
    let four = data.statement[4];
    let five = data.statement[5];

    let lteTwo = {
      punctuality: 0,
      regularity: 0,
      personality: 0,
      clarity: 0,
      pace: 0,
      raiseDoubts: 0,
      discipline: 0,
      feedback: 0,
      attention: 0,
      materials: 0,
      examples: 0,
    };

    let p345 = {
      punctuality: 0,
      regularity: 0,
      personality: 0,
      clarity: 0,
      pace: 0,
      raiseDoubts: 0,
      discipline: 0,
      feedback: 0,
      attention: 0,
      materials: 0,
      examples: 0,
    };

    const criterions = Object.keys(lteTwo);

    criterions.map((criteria) => {
      lteTwo[criteria] += two[criteria] + one[criteria];
      p345[criteria] += three[criteria] + four[criteria] + five[criteria];
    });

    console.log(p345);

    criterions.map((criteria) => {
      p345[criteria] =
        String(
          ((p345[criteria] / data.noOfStudentsCompleted) * 100).toFixed(1)
        ) + "%";
    });

    let graph = [
      {
        name: "Punchuality",
        "total no of students": data.rolls.length,
        5: data.statement[5].punctuality,
        4: data.statement[4].punctuality,
        3: data.statement[3].punctuality,
        "<=2": lteTwo.punctuality,
        "% in 3,4,5": p345.punctuality.split("%")[0],
      },
      {
        name: "Regularity",
        "total no of students": data.rolls.length,
        5: data.statement[5].regularity,
        4: data.statement[4].regularity,
        3: data.statement[3].regularity,
        "<=2": lteTwo.regularity,
        "% in 3,4,5": p345.regularity.split("%")[0],
      },
      {
        name: "Personality",
        "total no of students": data.rolls.length,
        5: data.statement[5].personality,
        4: data.statement[4].personality,
        3: data.statement[3].personality,
        "<=2": lteTwo.personality,
        "% in 3,4,5": p345.personality.split("%")[0],
      },
      {
        name: "Clarity in Expression",
        "total no of students": data.rolls.length,
        5: data.statement[5].clarity,
        4: data.statement[4].clarity,
        3: data.statement[3].clarity,
        "<=2": lteTwo.personality,
        "% in 3,4,5": p345.clarity.split("%")[0],
      },
      {
        name: "Pace of covering syllubus",
        "total no of students": data.rolls.length,
        5: data.statement[5].pace,
        4: data.statement[4].pace,
        3: data.statement[3].pace,
        "<=2": lteTwo.pace,
        "% in 3,4,5": p345.pace.split("%")[0],
      },
      {
        name: "Encourage to raise and clarify doubts",
        "total no of students": data.rolls.length,
        5: data.statement[5].raiseDoubts,
        4: data.statement[4].raiseDoubts,
        3: data.statement[3].raiseDoubts,
        "<=2": lteTwo.raiseDoubts,
        "% in 3,4,5": p345.raiseDoubts.split("%")[0],
      },
      {
        name: "Ability to maintain Discipline",
        "total no of students": data.rolls.length,
        5: data.statement[5].discipline,
        4: data.statement[4].discipline,
        3: data.statement[3].discipline,
        "<=2": lteTwo.discipline,
        "% in 3,4,5": p345.discipline.split("%")[0],
      },
      {
        name: "Provision of feedback on learning deficiencies",
        "total no of students": data.rolls.length,
        5: data.statement[5].feedback,
        4: data.statement[4].feedback,
        3: data.statement[3].feedback,
        "<=2": lteTwo.feedback,
        "% in 3,4,5": p345.feedback.split("%")[0],
      },
      {
        name: "Ablity to sustain students attention and interest",
        "total no of students": data.rolls.length,
        5: data.statement[5].attention,
        4: data.statement[4].attention,
        3: data.statement[3].attention,
        "<=2": lteTwo.attention,
        "% in 3,4,5": p345.attention.split("%")[0],
      },
      {
        name: "Provision of sufficient course materials",
        "total no of students": data.rolls.length,
        5: data.statement[5].materials,
        4: data.statement[4].materials,
        3: data.statement[3].materials,
        "<=2": lteTwo.materials,
        "% in 3,4,5": p345.materials.split("%")[0],
      },
      {
        name: "Citations, Examples, Illustrations etc.",
        "total no of students": data.rolls.length,
        5: data.statement[5].examples,
        4: data.statement[4].examples,
        3: data.statement[3].examples,
        "<=2": lteTwo.examples,
        "% in 3,4,5": p345.examples.split("%")[0],
      },
    ];
    setData(graph);

    setLteTwo(lteTwo);
    setP345(p345);
    setIsGenerated(true);
  };

  return (
    <div className="flex justify-center w-screen min-h-screen h-max bg-slate-200">
      <div className="">
        <div className=" p-10 bg-white shadow-xl min-w-[49.606305462212rem] min-h-[70.157489153699rem]  max-w-[49.606305462212rem] max-h-[70.157489153699rem]">
          <div className="w-[100%] flex justify-between font-bold font-sans ">
            <h2>ISSUE 11.0/01.06.2021</h2>
            <button
              onClick={() => {
                generateReport();
              }}
              className="p-1 -mt-1 text-white bg-blue-500 rounded-full "
            >
              GENERATE
            </button>
            <h2>QP13/21-22/EI/FEB/31</h2>
          </div>
          <div className="flex justify-around">
            <div className="mt-2 flex    w-[100%] ">
              <div className="w-[12%]">
                <Image
                  src="https://www.srec.ac.in/lib/images/logo_trust.jpg"
                  width={15}
                  height={16}
                  layout={"responsive"}
                />
              </div>
              <div className="flex flex-col items-center justify-center ml-2">
                <h1 className="font-serif font-bold text-[1.2rem]">
                  SRI RAMAKRISHNA ENGINEERING COLLEGE
                </h1>
                <h1 className="font-serif text-[0.6rem]">
                  [Educational Service: SNR Sons Charitable Trust]
                </h1>
                <h1 className="font-serif text-[0.6rem]">
                  [Autonomous Institution Accredited by NAAC with 'A' Grade]
                </h1>
                <h1 className="font-serif text-[0.6rem]">
                  [Approved by AICTE and Permanently Affliated to Anna
                  University, Chennai]
                </h1>
                <h1 className="font-serif text-[0.6rem]">
                  [ISO 9001:2015 Certified and all eligible programmes
                  Accredited by NBA]
                </h1>
              </div>
            </div>

            <div className="w-[13%] mt-2 ">
              <Image
                src={"https://www.srec.ac.in/lib/images/logosrec.jpg"}
                height={30}
                width={32}
                layout={"responsive"}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <h1 className="text-[0.8rem] font-semibold">
              VATTAMALAIPALAYAM, N.G.G.O COLONY POST, COIMBATORE - 641 022{" "}
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center mt-2 font-serif font-semibold leading-5">
            <h1>DEPARTMENT OF {department.toUpperCase()}</h1>
            <h1>
              STUDENTS CONSOLIDATED FEEDBACK ON FACULTY & CORRECTIVE MEASURES
            </h1>
          </div>
          <div className="flex justify-around p-4 -mt-5 font-semibold">
            <h1>ACADEMIC YEAR: 2021-2022</h1>
            <h1>
              SEMESTER: {parseInt(semester) % 2 == 0 ? "EVEN" : "ODD"} SEMESTER
            </h1>
          </div>
          <div className="flex flex-col justify-center flex-shrink ">
            <div className="flex justify-center">
              <table className="text-start">
                <tbody>
                  <tr className="">
                    <td className="p-2 font-semibold border border-black border-left">
                      Name of the Faculty
                    </td>
                    <td className="p-2 border border-black border-left-0">
                      {facultyName}
                    </td>
                    <td className="p-2 font-semibold border border-black border-left-0">
                      Semester
                    </td>
                    <td className="p-2 border border-black border-left-0">
                      {parseInt(semester) % 2 == 0 ? "EVEN" : "ODD"}
                    </td>
                  </tr>

                  <tr className="">
                    <td className="p-2 font-semibold border border-black border-left">
                      Course Code & Name
                    </td>
                    <td className="p-2 border border-black border-left-0 text-[0.9rem]">
                      {courseCode.toUpperCase()} - {courseTitle.toUpperCase()}
                    </td>
                    <td className="p-2 font-semibold border border-black border-left-0">
                      Class
                    </td>
                    <td className="p-2 border border-black border-left-0 text-[0.8rem]">
                      {courseDepartment != "<courseDepartment>"
                        ? `${
                            romanNumerals[
                              report.courseDetails.courseAssignedYear
                            ]
                          } ` +
                          courseDepartment.join(
                            `, ${
                              romanNumerals[
                                report.courseDetails.courseAssignedYear
                              ]
                            } `
                          )
                        : courseDepartment}
                    </td>
                  </tr>

                  <tr className="">
                    <td className="p-2 font-semibold border border-black">
                      No. of Students in the class
                    </td>
                    <td className="p-2 border border-black border-left-0">
                      {enrolledStudents.length > 0
                        ? enrolledStudents.length
                        : enrolledStudents}
                    </td>
                    <td className="p-2 font-semibold border border-black b border-left-0">
                      No. of Students offered the feedback
                    </td>
                    <td className="p-2 border border-black border-left-0">
                      {feedbackGiven}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="h-[max] border border-black border-t-0">
              <Image
                src="/theader.png"
                height={10}
                width={100}
                layout="responsive"
                priority
              />
            </div>
            <table>
              <tbody className="">
                <tr>
                  <td className="w-[5%]  p-2 border bg-[#d1cecf] border-black">
                    5
                  </td>
                  <td className="p-2 w-[5.2%] border border-black">
                    {five ? five.punctuality : ""}
                  </td>
                  <td className="p-2 w-[6.5%] border border-black">
                    {five ? five.regularity : ""}
                  </td>
                  <td className="p-2 border w-[5.10173%] border-black">
                    {five ? five.personality : ""}
                  </td>
                  <td className="p-2 border w-[9%] border-black">
                    {five ? five.clarity : ""}
                  </td>
                  <td className="p-2 border w-[6.43471%] border-black">
                    {five ? five.pace : ""}
                  </td>
                  <td className="p-2 border w-[10.3%] border-black">
                    {five ? five.raiseDoubts : ""}
                  </td>
                  <td className="p-2 border w-[7%] border-black">
                    {five ? five.discipline : ""}
                  </td>
                  <td className="p-2 border w-[11.4%] border-black">
                    {five ? five.feedback : ""}
                  </td>
                  <td className="p-2 border w-[14%] border-black">
                    {five ? five.attention : ""}
                  </td>
                  <td className="p-2 border w-[11.4%] border-black">
                    {five ? five.materials : ""}
                  </td>
                  <td className="p-2 border border-black">
                    {five ? five.examples : ""}
                  </td>
                </tr>
                <tr>
                  <td className="w-[5%] p-2 border bg-[#d1cecf] border-black">
                    4
                  </td>

                  <td className="p-2 w-[5.2%] border border-black">
                    {four ? four.punctuality : ""}
                  </td>
                  <td className="p-2 w-[6.5%] border border-black">
                    {four ? four.regularity : ""}
                  </td>
                  <td className="p-2 border w-[5.10173%] border-black">
                    {four ? four.personality : ""}
                  </td>
                  <td className="p-2 border w-[9%] border-black">
                    {four ? four.clarity : ""}
                  </td>
                  <td className="p-2 border w-[6.43471%] border-black">
                    {four ? four.pace : ""}
                  </td>
                  <td className="p-2 border w-[10.3%] border-black">
                    {four ? four.raiseDoubts : ""}
                  </td>
                  <td className="p-2 border w-[7%] border-black">
                    {four ? four.discipline : ""}
                  </td>
                  <td className="p-2 border w-[11.4%] border-black">
                    {four ? four.feedback : ""}
                  </td>
                  <td className="p-2 border w-[14%] border-black">
                    {four ? four.attention : ""}
                  </td>
                  <td className="p-2 border w-[11.4%] border-black">
                    {four ? four.materials : ""}
                  </td>
                  <td className="p-2 border border-black">
                    {four ? four.examples : ""}
                  </td>
                </tr>
                <tr>
                  <td className="w-[5%] p-2 border bg-[#d1cecf] border-black">
                    3
                  </td>
                  <td className="p-2 w-[5.2%] border border-black">
                    {three ? three.punctuality : ""}
                  </td>
                  <td className="p-2 w-[6.5%] border border-black">
                    {three ? three.regularity : ""}
                  </td>
                  <td className="p-2 border w-[5.10173%] border-black">
                    {three ? three.personality : ""}
                  </td>
                  <td className="p-2 border w-[9%] border-black">
                    {three ? three.clarity : ""}
                  </td>
                  <td className="p-2 border w-[6.43471%] border-black">
                    {three ? three.pace : ""}
                  </td>
                  <td className="p-2 border w-[10.3%] border-black">
                    {three ? three.raiseDoubts : ""}
                  </td>
                  <td className="p-2 border w-[7%] border-black">
                    {three ? three.discipline : ""}
                  </td>
                  <td className="p-2 border w-[11.4%] border-black">
                    {three ? three.feedback : ""}
                  </td>
                  <td className="p-2 border w-[14%] border-black">
                    {three ? three.attention : ""}
                  </td>
                  <td className="p-2 border w-[11.4%] border-black">
                    {three ? three.materials : ""}
                  </td>
                  <td className="p-2 border border-black">
                    {three ? three.examples : ""}
                  </td>
                </tr>
                <tr>
                  <td className="w-[5%] p-2 border bg-[#d1cecf] border-black text-[0.88rem]">
                    &lt;=
                    <br />2
                  </td>
                  <td className="p-2 w-[5.2%] border border-black">
                    {lteTwo ? lteTwo.punctuality : ""}
                  </td>
                  <td className="p-2 w-[6.5%] border border-black">
                    {lteTwo ? lteTwo.regularity : ""}
                  </td>
                  <td className="p-2 border w-[5.10173%] border-black">
                    {lteTwo ? lteTwo.personality : ""}
                  </td>
                  <td className="p-2 border w-[9%] border-black">
                    {lteTwo ? lteTwo.clarity : ""}
                  </td>
                  <td className="p-2 border w-[6.43471%] border-black">
                    {lteTwo ? lteTwo.pace : ""}
                  </td>
                  <td className="p-2 border w-[10.3%] border-black">
                    {lteTwo ? lteTwo.raiseDoubts : ""}
                  </td>
                  <td className="p-2 border w-[7%] border-black">
                    {lteTwo ? lteTwo.discipline : ""}
                  </td>
                  <td className="p-2 border w-[11.4%] border-black">
                    {lteTwo ? lteTwo.feedback : ""}
                  </td>
                  <td className="p-2 border w-[14%] border-black">
                    {lteTwo ? lteTwo.attention : ""}
                  </td>
                  <td className="p-2 border w-[11.4%] border-black">
                    {lteTwo ? lteTwo.materials : ""}
                  </td>
                  <td className="p-2 border border-black">
                    {lteTwo ? lteTwo.examples : ""}
                  </td>
                </tr>
                <tr>
                  <td className="w-[5%] p-2 border bg-[#d1cecf] border-black text-[0.7rem]">
                    %in 3,4 &5
                  </td>
                  <td className="p-1 w-[5.2%] border border-black text-[0.6rem]">
                    {p345 ? p345.punctuality : ""}
                  </td>
                  <td className="p-1 w-[6.5%] border border-black text-[0.6rem]">
                    {p345 ? p345.regularity : ""}
                  </td>
                  <td className="p-1 border w-[5.10173%] border-black text-[0.6rem]">
                    {p345 ? p345.personality : ""}
                  </td>
                  <td className="p-1 border w-[9%] border-black text-[0.6rem]">
                    {p345 ? p345.clarity : ""}
                  </td>
                  <td className="p-1 border w-[6.43471%] border-black text-[0.6rem]">
                    {p345 ? p345.pace : ""}
                  </td>
                  <td className="p-1 border w-[10.3%] border-black text-[0.6rem]">
                    {p345 ? p345.raiseDoubts : ""}
                  </td>
                  <td className="p-1 border w-[7%] border-black text-[0.6rem]">
                    {p345 ? p345.discipline : ""}
                  </td>
                  <td className="p-1 border w-[11.4%] border-black text-[0.6rem]">
                    {p345 ? p345.feedback : ""}
                  </td>
                  <td className="p-1 border w-[14%] border-black text-[0.6rem]">
                    {p345 ? p345.attention : ""}
                  </td>
                  <td className="p-1 border w-[11.4%] border-black text-[0.6rem]">
                    {p345 ? p345.materials : ""}
                  </td>
                  <td className="p-1 border border-black text-[0.6rem]">
                    {p345 ? p345.examples : ""}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="h-[12rem] border border-black border-t-0">
              {isGenerated == false ? (
                <Image
                  src="/sgraph.png"
                  height={40}
                  width={150}
                  layout="responsive"
                />
              ) : (
                <div className="h-[12rem] w-[100%]">
                  <ResponsiveContainer width={"100%"} height="100%">
                    <BarChart
                      barGap={1}
                      className="w-[100%]"
                      data={data}
                      barSize={10}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                      }}
                    >
                      <XAxis
                        dataKey="name"
                        height={54}
                        allowDecimals={true}
                        allowDataOverflow={true}
                        interval={0}
                        tick={{
                          fontSize: "0.46rem",
                          fontWeight: "bold",
                          marginBottom: "8px",
                          width: "100px",
                          wordWrap: "break-word",
                        }}
                      ></XAxis>
                      <YAxis type="number" domain={[0, 100]} />
                      <Tooltip />
                      <Legend
                        className="mt-10"
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      />
                      <Bar
                        isAnimationActive={false}
                        label={{
                          dataKey: "total no of students",
                          position: "top",
                          fontSize: "0.6rem",
                          fill: "black",
                        }}
                        dataKey="total no of students"
                        fill="lightblue"
                      >
                        {/* <LabelList dataKey="total no of students" position="top"/> */}
                      </Bar>
                      <Bar
                        isAnimationActive={false}
                        label={{
                          dataKey: "5",
                          position: "top",
                          fontSize: "0.6rem",
                          fill: "black",
                        }}
                        dataKey="5"
                        fill="orange"
                      ></Bar>
                      <Bar
                        isAnimationActive={false}
                        label={{
                          dataKey: "4",
                          position: "top",
                          fontSize: "0.6rem",
                          fill: "black",
                        }}
                        dataKey="4"
                        fill="grey"
                      ></Bar>
                      <Bar
                        isAnimationActive={false}
                        label={{
                          dataKey: "3",
                          position: "top",
                          fontSize: "0.6rem",
                          fill: "black",
                        }}
                        dataKey="3"
                        fill="yellow"
                      ></Bar>
                      <Bar
                        isAnimationActive={false}
                        dataKey="<=2"
                        label={{
                          dataKey: "<=2",
                          position: "top",
                          fontSize: "0.6rem",
                          fill: "black",
                        }}
                        fill="darkblue"
                      ></Bar>
                      <Bar
                        isAnimationActive={false}
                        dataKey="% in 3,4,5"
                        label={{
                          dataKey: "% in 3,4,5",
                          position: "top",
                          fontSize: "0.6rem",
                          fill: "black",
                        }}
                        fill="lightgreen"
                      ></Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              )}
            </div>
            <div className="flex justify-between flex-grow p-4 mt-8 font-semibold">
              <h1>Signature of the Faculty</h1>
              <h1>HOD</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
