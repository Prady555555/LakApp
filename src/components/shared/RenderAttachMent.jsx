import { TransformImage } from "../../lib/feature";
import { FileOpen } from "@mui/icons-material";

const RenderAttachMent = (file, url) => {
  switch (file) {
    case "vdeo":
      return <video src={url} preload="none" width={"200px"} controls />;

    case "image":
      return (
        <img
          src={TransformImage(url, 200)}
          alt="image"
          width={"200px"}
          height={"200px"}
          style={{
            objectFit: "cover",
          }}
        />
      );

    case "audio":
      return <audio src={url} controls preload="none" />;

    default:
      <FileOpen />;
  }
};

export default RenderAttachMent;
