import Image from "next/image";

const InfoBlocks = ({ data }) => {
  const { headline, text, button, reversed } = data;
  return (
    <div className={`info ${reversed ? "info--reversed" : ""}`}>
      <Image
        className="info__image"
        src="/info-blocks/rectangle.png"
        alt=""
        height={400}
        width={400}
      />
      <div className="info__text">
        <h2 className="info__headline">{headline}</h2>
        {text}
        {button}
      </div>
    </div>
  );
};

export default InfoBlocks;
