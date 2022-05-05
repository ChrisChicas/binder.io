// import React, { Fragment, useState } from "react";
// const EditNote = ({ notes }) => {
//   const [description, setDescription] = useState(notes.noteContent);
//   //edit description function
//   const updateDescription = async e => {
//     e.preventDefault();
//     try {
//       const body = { description };
//       const response = await fetch(
//         `https://binder-io-api.herokuapp.com/notes/${noteId}`,
//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(body)
//         }
//       );
//       window.location = "/";
//     } catch (err) {
//       console.error(err.message);
//     }
//   };
//   return (
//     <Fragment>
//       <button
//         type="button"
//         class="btn btn-warning"
//         data-toggle="modal"
//         data-target={`#noteId${notes.noteId}`}
//       >
//         Edit
//       </button>
//       <div
//         class="modal"
//         id={`noteId${notes.noteId}`}
//         onClick={() => setDescription(notes.noteContent)}
//       >
//         <div class="modal-dialog">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h4 class="modal-title">Edit Note</h4>
//               <button
//                 type="button"
//                 class="close"
//                 data-dismiss="modal"
//                 onClick={() => setDescription(notes.noteContent)}
//               >
//                 &times;
//               </button>
//             </div>
//             <div class="modal-body">
//               <input
//                 type="text"
//                 className="form-control"
//                 value={description}
//                 onChange={e => setDescription(e.target.value)}
//               />
//             </div>
//             <div class="modal-footer">
//               <button
//                 type="button"
//                 class="btn btn-warning"
//                 data-dismiss="modal"
//                 onClick={e => updateDescription(e)}
//               >
//                 Edit
//               </button>
//               <button
//                 type="button"
//                 class="btn btn-danger"
//                 data-dismiss="modal"
//                 onClick={() => setDescription(notes.noteContent)}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// };
// export default EditNote;