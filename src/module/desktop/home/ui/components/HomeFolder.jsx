import clsx from "clsx";
import OptimizedImage from "@module/shared/ui/components/OptimizedImage";

const HomeFolder = ({ project, onClick }) => {
  const displayName = project.name;
  return (
    <li
      className={clsx("group folder cursor-pointer", project.position || project.windowPosition)}
      onClick={onClick}
      title={`Open ${displayName}`}
    >
      <OptimizedImage
        src="/images/folder.webp"
        alt={displayName}
        width={72}
        height={72}
        className="w-[72px] h-[72px] object-contain p-1 rounded-md transition-all duration-200 group-hover:scale-110 pointer-events-none drop-shadow-lg"
      />
      <p className="!bg-black/45 !backdrop-blur-sm !px-2 !py-0.5 !mt-1 font-medium shadow-sm">
        {displayName}
      </p>
    </li>
  );
};

export default HomeFolder;
