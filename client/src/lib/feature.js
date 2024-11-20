export const fileFormat = (url = "") => {
  const fileExt = url.split(".").pop();
  if (["png", "jpg", "jpeg", "gif"].includes(fileExt)) {
    return "image";
  } else if (["mp4", "avi", "mov", "mkv"].includes(fileExt)) {
    return "video";
  } else if (["mp3", "wav"].includes(fileExt)) {
    return "audio";
  } else {
    return "file";
  }
};

export const TransformImage = (url = "", width = 100) => url;
