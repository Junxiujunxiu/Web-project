import StaffAvatar from "./StaffAvatar";

type Staff = {
  staff_name: string;
  staff_position: string;
  staff_img_url: string;
};
//testing commit
//testing commit
//testing commit
const staffList = [
  {
    staff_name: "松子",
    staff_position: "主席",
    staff_img_url:
      "https://drive.google.com/uc?export=view&id=1vVnPpQbAMumQLQpN3oMc5Yin_MFhGWdD",
  },
  {
    staff_name: "暂时没有",
    staff_position: "秘书",
    staff_img_url:
      "https://autcsa-web-assets.s3.ap-southeast-2.amazonaws.com/staff/ranger.png",
  },
  {
    staff_name: "Evan Zhou",
    staff_position: "IT部长",
    staff_img_url:
      "https://autcsa-web-assets.s3.ap-southeast-2.amazonaws.com/staff/draka.png",
  },
  {
    staff_name: "France",
    staff_position: "宣传部长",
    staff_img_url:
      "https://drive.google.com/uc?export=view&id=1-vThRRFw-Oc_CkU7amBY77RDL_MiWEdq",
  },
  {
    staff_name: "Josh",
    staff_position: "策划部长",
    staff_img_url:
      "https://drive.google.com/uc?export=view&id=1a7W1VD6n7FhnrbgQ1vgzeT_ks10JUcvg",
  },
  {
    staff_name: "Leo",
    staff_position: "外联部长",
    staff_img_url:
      "https://drive.google.com/uc?export=view&id=1pMZHwC576WSQCpCj3aS7W0M3MRkTToZK",
  },
  {
    staff_name: "忻忻",
    staff_position: "设计部长",
    staff_img_url:
      "https://drive.google.com/uc?export=view&id=1DvcQ45ix71cHvYEW8PPD0xaCVkp60n1I",
  },
  {
    staff_name: "Barry",
    staff_position: "摄影部长",
    staff_img_url:
      "https://drive.google.com/uc?export=view&id=1WuvN_lkfauifaMUaWAwor933Sxspcy62",
  },
];

const StaffList: React.FC = () => {
  return (
    <div
      id="staff_list_wrap"
      className="w-full px-12 pt-6 pb-[600px] bg-[url(https://s1.pearlcdn.com/NAEU/contents/img/portal/gameinfo/classes_main_bg.jpg)] bg-bottom bg-no-repeat"
    >
      <h1 className="font-black text-6xl text-gray-100 text-center pt-16">
        关于我们 About Us
      </h1>
      <div className="flex flex-wrap w-[1278px] max-w-[90%] mt-14 mx-auto">
        {staffList.map((staff, index) => {
          return <StaffAvatar staffInfo={staff} />;
        })}
      </div>
      <div className="pt-[200px] box-border flex flex-col items-center">
        <p className="font-[1000] text-5xl text-center">
          充盈你的大学生涯。参与。成长。
        </p>
        <button className="mt-[60px] w-[400px] h-[100px] text-3xl text-white tracking-widest font-black bg-subRed rounded-md">
          加入我们
        </button>
      </div>
    </div>
  );
};

export default StaffList;
