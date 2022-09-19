import Image from "next/image";
import Link from "next/link";

const Mag1Col = ({ fields }) => {
  const { content, content_heading, title } = fields;
  return (
    <div className="main">
      <div className="page-title-wrapper">
        <h1 className="page-title">{title}</h1>
      </div>

      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
};

export default Mag1Col;
