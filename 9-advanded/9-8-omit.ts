{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://",
      data: "byte-data",
    };
  }

  type VideoMetadata = Omit<Video, "url" | "data">;

  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id,
      title: "video",
    };
  }
}
