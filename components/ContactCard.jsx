import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const defaultProps = {
  imgName: "phone.png",
  contactNo: "0123 456 7890",
  contactMethod: "Call Us",
  availability: "24/7",
  responseTime: "0 Hours",
};

export default function ContactCard({
  imgName,
  contactNo,
  contactMethod,
  availability,
  responseTime,
}) {
  return (
    <div className="gap-3 bg-white flex flex-col border-box items-center py-7 px-3 xs:px-7 sm:px-10 rounded-2xl">
      {/* <FontAwesomeIcon icon={icon} className="brand-yellow text-3xl"/> */}
      <Image src={`/img/icons/${imgName || defaultProps.imgName}`} width={40} height={40} alt="icon"/>
      <h2 className="font-bold text-2xl">{contactNo || defaultProps.contactNo}</h2>
      <h3 className="font-semibold text-base">{contactMethod || defaultProps.contactMethod}</h3>
      <p className="break-words text-center whitespace-normal text-wrap text-lg">
        Service Available: <strong>{availability || defaultProps.availability}</strong> | Response Time: <strong>{responseTime || defaultProps.responseTime}</strong>
      </p>
    </div>
  );
}
