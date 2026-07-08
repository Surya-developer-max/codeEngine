import React, { useEffect, useState } from "react";
export default function MCQAssessmentBoard() {
  const MCQ = [
    {
      course_name: "Python",
      difficulty_level: "Easy",
      marks: 4,
      question: "What is the output of the following Python code?",
      code: "print(10 // 3)",
      topic: "Python Operators & Expressions",
      option_a: "3.33",
      option_b: "3",
      option_c: "4",
      option_d: "Error",
      correct_answer: "B",
      explanation: "The // operator performs floor division. 10 // 3 equals 3."
    },
    {
      course_name: "Python",
      difficulty_level: "Easy",
      marks: 4,
      question: "What is the output of the following Python code?",
      code: "print(10 % 3)",
      topic: "Python Operators & Expressions",
      option_a: "1",
      option_b: "3",
      option_c: "0",
      option_d: "10",
      correct_answer: "A",
      explanation: "The % operator returns the remainder after division. 10 % 3 equals 1."
    },
    {
      course_name: "Python",
      difficulty_level: "Easy",
      marks: 4,
      question: "Which operator is used for exponentiation in Python?",
      code: "",
      topic: "Python Operators & Expressions",
      option_a: "^",
      option_b: "**",
      option_c: "*",
      option_d: "^^",
      correct_answer: "B",
      explanation: "The ** operator is used to raise a number to the power of another."
    },
    {
      course_name: "Python",
      difficulty_level: "Easy",
      marks: 4,
      question: "What is the output of the following Python code?",
      code: "print(5 == 5)",
      topic: "Python Comparison Operators",
      option_a: "True",
      option_b: "False",
      option_c: "5",
      option_d: "Error",
      correct_answer: "A",
      explanation: "The == operator checks equality. Since both values are equal, the result is True."
    },
    {
      course_name: "Python",
      difficulty_level: "Easy",
      marks: 4,
      question: "What is the output of the following Python code?",
      code: "print(7 != 5)",
      topic: "Python Comparison Operators",
      option_a: "False",
      option_b: "True",
      option_c: "7",
      option_d: "Error",
      correct_answer: "B",
      explanation: "The != operator checks if two values are not equal. Since 7 and 5 are different, the result is True."
    },
    {
      course_name: "Python",
      difficulty_level: "Easy",
      marks: 4,
      question: "What is the output of the following Python code?",
      code: "print(True and False)",
      topic: "Python Logical Operators",
      option_a: "True",
      option_b: "False",
      option_c: "None",
      option_d: "Error",
      correct_answer: "B",
      explanation: "The logical 'and' operator returns True only if both operands are True."
    },
    {
      course_name: "Python",
      difficulty_level: "Easy",
      marks: 4,
      question: "What is the output of the following Python code?",
      code: "print(not False)",
      topic: "Python Logical Operators",
      option_a: "False",
      option_b: "True",
      option_c: "None",
      option_d: "Error",
      correct_answer: "B",
      explanation: "The not operator reverses the boolean value. not False is True."
    },
    {
      course_name: "Python",
      difficulty_level: "Easy",
      marks: 4,
      question: "What is the output of the following Python code?",
      code: "print(4 > 2)",
      topic: "Python Comparison Operators",
      option_a: "True",
      option_b: "False",
      option_c: "4",
      option_d: "Error",
      correct_answer: "A",
      explanation: "The > operator checks whether the left operand is greater than the right operand."
    },
    {
      course_name: "Python",
      difficulty_level: "Easy",
      marks: 4,
      question: "What is the output of the following Python code?",
      code: "print(5 <= 2)",
      topic: "Python Comparison Operators",
      option_a: "True",
      option_b: "False",
      option_c: "5",
      option_d: "Error",
      correct_answer: "B",
      explanation: "Since 5 is not less than or equal to 2, the result is False."
    },
    {
      course_name: "Python",
      difficulty_level: "Easy",
      marks: 4,
      question: "What is the output of the following Python code?",
      code: "print((3 + 2) * 4)",
      topic: "Python Operators & Expressions",
      option_a: "11",
      option_b: "20",
      option_c: "14",
      option_d: "Error",
      correct_answer: "B",
      explanation: "Parentheses are evaluated first. (3 + 2) = 5, then 5 × 4 = 20."
    }
  ];
  const [mark, setMark] = useState(0);
  const [answers, setAnswers] = useState({});
  const [markForRev, setMarkForRev] = useState({});
  useEffect(() => {
  }, [])

  const [currentQuestion, setCurrentQuestion] = useState(0);
  function handleCurrentQuestion(inx) {
    setCurrentQuestion(inx)
  }
  function handleNext() {
    if (currentQuestion >= MCQ.length - 1) {
      return;
    }
    else {
      setCurrentQuestion(prev => prev + 1)
    }
  }

  function handlePrev() {
    if (currentQuestion == 0) {
      return;
    }
    else {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  function handleSeletOption(inx, val) {
    setAnswers(prev => ({
      ...prev,
      [inx]: val
    }))
  }
  function handleMarkForRev(inx, dec) {
    setMarkForRev(prev => ({
      ...prev,
      [inx]: dec

    }))
  }
  function handleFinishTest() {
    setMark(0)
    Object.entries(answers).forEach(([key, val]) => {
      console.log()
      if (MCQ[key].correct_answer == val) {
        setMark(prev => prev + 1)
      }
      // else {
      //   setMark(prev => prev - 1)
      // }
    })
  }
  console.log(answers)
  return (
    <div>
      <div className="grid lg:grid-cols-[1fr_300px] grid-cols-1 gap-5">
        <div className="w-full bg-white  border rounded-xl border-[var(--border)] p-5 ">
          <div className="">
            <div className="flex justify-between">
              <p>Question {currentQuestion + 1} of {MCQ.length}</p>
              <p>Marks:{mark}</p>
            </div>
            <div className="w-full p-5 border border-[var(--border)] h-full mt-5">
              <h2 className="text-xl font-semibold">{MCQ[currentQuestion].question}</h2>
              {MCQ[currentQuestion].code && <div className="w-full bg-blue-900 flex mt-5 items-center rounded">
                <p className="text-white px-3 py-3">{MCQ[currentQuestion].code}</p>
              </div>}

              <label htmlFor="option-a" className="w-full hover:cursor-pointer hover:shadow-md hover:bg-blue-100/50 transition border border-[var(--border)] flex mt-5 items-center rounded">
                <input checked={answers[currentQuestion] == "A"} onChange={(e) => { handleSeletOption(currentQuestion, "A") }} id="option-a" name="answer" type="radio" className="ms-2" />
                <p className="px-3 py-3">A) {MCQ[currentQuestion].option_a}</p>
              </label>
              <label htmlFor="option-b" className="w-full hover:cursor-pointer hover:shadow-md hover:bg-blue-100/50 transition border border-[var(--border)] flex mt-5 items-center rounded">
                <input checked={answers[currentQuestion] == "B"} onChange={(e) => { handleSeletOption(currentQuestion, "B") }} id="option-b" name="answer" type="radio" className="ms-2" />
                <p className="px-3 py-3">B) {MCQ[currentQuestion].option_b}</p>
              </label>
              <label htmlFor="option-c" className="w-full hover:cursor-pointer hover:shadow-md hover:bg-blue-100/50 transition border border-[var(--border)] flex mt-5 items-center rounded">
                <input checked={answers[currentQuestion] == "C"} onChange={(e) => { handleSeletOption(currentQuestion, "C") }} id="option-c" name="answer" type="radio" className="ms-2" />
                <p className="px-3 py-3">C) {MCQ[currentQuestion].option_c}</p>
              </label><label htmlFor="option-d" className="w-full hover:cursor-pointer hover:shadow-md hover:bg-blue-100/50 transition border border-[var(--border)] flex mt-5 items-center rounded">
                <input checked={answers[currentQuestion] == "D"} onChange={(e) => { handleSeletOption(currentQuestion, "D") }} id="option-d" name="answer" type="radio" className="ms-2" />
                <p className="px-3 py-3">D) {MCQ[currentQuestion].option_d}</p>
              </label>
            </div>
          </div>
        </div>

        <div className="border rounded-xl bg-white border-[var(--border)] p-5 ">
          <h1>QUESTION NAVIGATOR</h1>
          <div className="flex flex-col justify-around h-full">

            <div className="grid grid-cols-5 justify-items-center gap-3 ">
              {MCQ.map((val, inx) => {
                return (
                  <div onClick={() => { handleCurrentQuestion(inx) }} className={`h-10 w-10 rounded  text-black border border-[var(--border)] hover:cursor-pointer active:scale-95 flex justify-center  items-center font-bold ${markForRev[inx] ? "bg-[var(--secondary)] text-white" : ""} ${answers[inx] ? "bg-[var(--primary)] text-white" : ""} ${inx == currentQuestion ? "border-5  bg-[#152270] text-white" : ""} `} key={inx}> <p>{inx + 1}</p></div>
                )
              })}
            </div>
            <div className="w-full  border border-[var(--border)] rounded-xl p-2 " >
              <p className="text-sm text-gray-500 ">Status Legend</p>
              <div className="grid grid-cols-2">
                <div className="flex  items-center gap-2">
                  <div className="w-3 h-3 bg-[var(--primary)] rounded-full"></div><p>Answered</p>
                </div>
                <div className="flex  items-center gap-2">
                  <div className="w-3 h-3 bg-[var(--secondary)] rounded-full"></div><p>Flagged</p>
                </div>
                <div className="flex  items-center gap-2">
                  <div className="w-3 h-3 bg-white border  rounded-full"></div><p>Unvisited</p>
                </div>
                <div className="flex  items-center gap-2">
                  <div className="w-3 h-3 bg-[#152270] rounded-full"></div><p>Current</p>
                </div>
              </div>
            </div>
            <div className="">
              <button className="w-full bg-red-600 text-white font-bold text-xl py-2 rounded-lg hover:cursor-pointer active:scale-99" onClick={handleFinishTest}>Finish Test</button>
            </div>
          </div>

        </div>
        <div className="lg:col-span-2 border  border-[var(--border)] flex justify-between items-center p-5 rounded-xl">
          <button onClick={handlePrev} className="px-5 py-2 border bg-green-200/10  rounded border-green-800 font-bold text-gray-500 hover:cursor-pointer active:scale-97">Previous</button>
          <div>
            <button className="px-5 py-2 border bg-[var(--secondary)]/10 rounded border-yellow-500 font-bold text-yellow-500 hover:cursor-pointer active:scale-97 me-2" onClick={() => { handleMarkForRev(currentQuestion, "summa tha") }}>Mark for Review</button>
            <button onClick={handleNext} className="px-5 py-2   rounded  font-bold  hover:cursor-pointer active:scale-97 me-2 bg-[var(--primary)] text-white">Save & Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
