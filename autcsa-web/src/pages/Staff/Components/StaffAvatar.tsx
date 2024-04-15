type Staff = {
  staff_name: string;
  staff_position: string;
  staff_img_url: string;
};

const StaffAvatar: React.FC<{ staffInfo: Staff }> = ({ staffInfo }) => {
  return (
    <div className=" w-[calc(100%/4)] relative px-2 py-4 box-border">
      <img
        className="overflow-hidden object-cover object-center"
        src={staffInfo.staff_img_url}
      ></img>
      <div className="absolute bottom-0 w-[calc(100%-16px)] bg-white bg-opacity-50 py-2 box-border">
        <h2 className="text-center text-xl font-black">
          {staffInfo.staff_name}
        </h2>
        <h2 className="text-center text-xl font-black text-mainRed">
          {staffInfo.staff_position}
        </h2>
      </div>
    </div>
  );
};

export default StaffAvatar;
