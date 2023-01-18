import React, { useContext } from "react";
import { MailContext } from "../../../../context/MailProvider";
import { BsTrash } from "react-icons/bs";

const Spam = () => {
  const { spam, setSpam, setSelectedMail, deleted, setDeleted } =
    useContext(MailContext);
  const shortenDesc = (desc) => desc.slice(0, 43) + " ...";

  const handleDelete = (delMail) => {
    const filterSpam = spam.filter((mail) => mail.mId !== delMail.mId);
    setSpam(filterSpam);
    setDeleted([...deleted, delMail]);
  };

  return (
    <>
      {/* Loop here spam json*/}
      {spam.map((mail) => (
        <div
          key={mail.mId}
          className="mt-5 cursor-pointer"
          onClick={() => setSelectedMail(mail)}
        >
          <div
            className={`pl-5 border-l-2 ${
              mail.unread ? "border-l-[#2B76DA]" : "border-l-slate-50"
            }  hover:bg-blue-100 py-2 pr-2 active:scale-95 transition-all`}
          >
            {/* Subject */}
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-slate-700">
                {mail.subject}
              </p>
              <BsTrash
                onClick={() => handleDelete(mail)}
                className="text-lg hover:text-red-400"
              />
            </div>
            <div className="flex justify-between text-[#2B76DA]">
              {/* content */}
              <small className=" uppercase font-medium">
                {shortenDesc(mail.content)}
              </small>
              <small className="font-medium">11:50</small>
            </div>
            {/* Content */}
            <p className="text-slate-700">{shortenDesc(mail.content)}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Spam;
