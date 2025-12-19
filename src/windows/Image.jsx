import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import useWindowStore from "#store/window.js";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile.data;

  if (!data) return null;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{data.name}</h2>
      </div>
      <div className="p-4 flex justify-center">
        {data.imageUrl && (
          <img
            src={data.imageUrl}
            alt={data.name}
            className="max-w-full max-h-full"
          />
        )}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, "imgfile");
export default ImageWindow;
