import CodeEditor from "./codeEngine/CodeEditor";

export default function Workshop() {
    return (
        <div>
            <div className="grid lg:grid-cols-[500px_1fr] grid-rows-[650px] justify-items-center">

                <div className="overflow-y-auto scrollbar-none">
                    <div className=" overflow-y-auto ">
                        <div className="flex items-center justify-between mb-4">
                            <span
                                className="px-2 py-1 text-[12px] rounded uppercase ">Problem
                                042</span>
                            <span
                                className="px-2 py-1 bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-[12px] rounded">Medium</span>
                        </div>
                        <h1 className="text-4xl  font-bold mb-4 text-blue-600">Two Sum</h1>

                        <div className="">
                            <div>
                                <h3 className="uppercase ">
                                    Description</h3>
                                <p className="mt-4">
                                    Given an array of integers <code className="bg-surface-variant px-1 rounded">nums</code> and
                                    an integer <code className="bg-surface-variant px-1 rounded">target</code>, return indices
                                    of the two numbers such that they add up to target.
                                </p>
                                <p className=" mt-4">
                                    You may assume that each input would have exactly one solution, and you may not use the
                                    same element twice. You can return the answer in any order.
                                </p>
                            </div>
                            <div>
                                <h3
                                    className="uppercase mt-4">
                                    Constraints</h3>
                                <ul className="list-disc list-inside space-y-1 font-body-sm text-body-sm text-on-surface">
                                    <li>2 ≤ nums.length ≤ 10<sup>5</sup></li>
                                    <li>-10<sup>9</sup> ≤ nums[i] ≤ 10<sup>9</sup></li>
                                    <li>-10<sup>9</sup> ≤ target ≤ 10<sup>9</sup></li>
                                    <li className="text-secondary font-bold">Time Complexity: O(n) required</li>
                                </ul>
                            </div>
                            <div className="p-4 space-y-5">
                                <h3
                                    className="mt-4 uppercase ">
                                    Examples</h3>
                                <div className="border rounded-lg p-4 w-full border-gray-400 bg-blue-100/50 ">
                                    <span className="mb-2">Example 1</span>
                                    <div className="grid grid-cols-1 gap-3">
                                        <div>
                                            <p className="text-[11px] font-bold text-on-surface-variant uppercase">Input</p>
                                            <code className="font-code-md text-code-md">nums = [2,7,11,15], target = 9</code>
                                        </div>
                                        <div>
                                            <p className="text-[11px] font-bold text-on-surface-variant uppercase">Output</p>
                                            <code className="font-code-md text-code-md">[0,1]</code>
                                        </div>
                                        <div>
                                            <p className="text-[11px] font-bold text-on-surface-variant uppercase">Explanation
                                            </p>
                                            <p className="font-body-sm text-body-sm italic">Because nums[0] + nums[1] == 9, we
                                                return [0, 1].</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=" border-gray-400 border  rounded-lg p-4 bg-blue-100/50">
                                    <span className="font-label-md text-label-md text-primary block mb-2">Example 2</span>
                                    <div className="grid grid-cols-1 gap-3">
                                        <div>
                                            <p className="text-[11px] font-bold text-on-surface-variant uppercase">Input</p>
                                            <code className="font-code-md text-code-md">nums = [3,2,4], target = 6</code>
                                        </div>
                                        <div>
                                            <p className="text-[11px] font-bold text-on-surface-variant uppercase">Output</p>
                                            <code className="font-code-md text-code-md">[1,2]</code>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CodeEditor />
            </div>
        </div>
    )
}