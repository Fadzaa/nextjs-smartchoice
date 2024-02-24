import statistic from "@/app/lib/services/statistic";
import timestamp from "@/app/lib/services/timestamp-realcount";

export default async function RealCountPage() {
  const timestampData = await timestamp();
  const timestampDate = new Date(timestampData);

    const formattedDate = timestampDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
  const data = await statistic();
  const dataStatistic = [
    {
      title: "Wilayah Pemilihan",
      value: "Nasional",
    },
    {
      title: "Total pemilih",
      value: data.total,
    },
    {
      title: "Yang sudah memilih",
      value: data.current,
    },
    {
      title: "Presentase yang sudah memilih",
      value: data.percentage + "%",
    },
    {
      title: "Terakhir di update pada",
      value: timestampData.timestamp,
    },
    {
      title: "Progress",
      value: data.description,
    },
  ];

  return (
    <main className="w-screen pt-32 pb-32 px-36 bg-white ">
      <h1 className="text-textSemiBlack font-extrabold text-[80px] pt-24 pb-12 text-center">
        QUICK COUNT <span className="text-primary">PILPRES 2024</span>
      </h1>

      <div className="mt-24 w-full px-8 py-8 rounded-xl bg-[#FF7171]">
        <h1 className="text-[28px] font-semibold">Statistik</h1>

        <div className="mt-8">
          {dataStatistic.map((item, index) => (
            <div key={index} className="flex  gap-4">
              <div className="flex w-[20%] justify-between">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-lg font-semibold">:</p>
              </div>
              <h3 className="text-lg font-semibold">{item.value}</h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
