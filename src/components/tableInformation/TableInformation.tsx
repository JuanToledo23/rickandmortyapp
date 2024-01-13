type TableInformationProps = {
  min: number;
  max: number;
  total: number;
};

function TableInformation({ min, max, total }: TableInformationProps) {
    
  return (
    <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
      Showing{" "}
      <span className="font-semibold text-gray-900 dark:text-white">
        {min}-{max}
      </span>{" "}
      of{" "}
      <span className="font-semibold text-gray-900 dark:text-white">
        {total}
      </span>
    </span>
  );
}

export default TableInformation;
