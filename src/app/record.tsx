// "use client";

// import { title } from "process";
// import { useState } from "react";

// type RecordProps = {
//     recordId: number;
//     customer: string;   
// }

// // type LikeState = "unset" | "liked";

// export function Record({ recordId, customer }: RecordProps) {
//     // const [likeState, setLikeState] = useState<LikeState>("unset");
//     // const setLike = () => {
//         if (likeState == "unset") {
//             setLikeState("liked")
//         } else {
//             setLikeState("unset")
//         }
//     // }
//     return (
//         <div className="md:flex">
//             <h2 className="mx-4"> {recordId} </h2>

//             <p className="mx-4"> {customer} </p>

//             {/* <button type="button" onClick={setLike}> */}
//                 {likeState === "unset" ? "like" : "Saved"}
//             {/* </button> */}
//         </div>
//     )
// }