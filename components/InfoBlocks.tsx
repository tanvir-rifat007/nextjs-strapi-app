import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

const InfoBlocks = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.map((res) => (
        <div
          key={res.id}
          className={`info ${res.showImageRight ? "info--reversed" : ""}`}
        >
          <Image
            className="info__image"
            src={"http://localhost:1337" + res.image.url}
            alt=""
            height={400}
            width={400}
          />
          <div className="info__text">
            <h2 className="info__headline">{res.headline}</h2>

            {res.text.map((text) =>
              text.children.map((child, i) => (
                <Markdown className="copy" key={i}>
                  {child.text}
                </Markdown>
              ))
            )}
            {/* {res.button} */}

            <Link
              href={res.button.slug}
              className={`btn btn--${res.button.colour} btn--medium`}
            >
              {res.button.text}
            </Link>
          </div>
        </div>
      ))}
    </>
    // <div className={`info ${reversed ? "info--reversed" : ""}`}>
    //   <Image
    //     className="info__image"
    //     src={
    //       reversed
    //         ? "/info-blocks/Rectangle2.png"
    //         : "/info-blocks/rectangle.png"
    //     }
    //     alt=""
    //     height={400}
    //     width={400}
    //   />
    //   <div className="info__text">
    //     <h2 className="info__headline">{headline}</h2>
    //     {text}
    //     {button}
    //   </div>
    // </div>
  );
};

export default InfoBlocks;
