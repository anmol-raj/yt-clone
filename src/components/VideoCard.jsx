const VideoCard = ({ info }) => {
  if (!info) {
    return <div>Error: Video information not available</div>;
  }
  console.log(info);
  const { statistics, snippet } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 w-72 ">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className=" font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
