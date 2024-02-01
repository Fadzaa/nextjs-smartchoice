function BiographyCandidate({number, birthdatePlace, position, asset}) {
    return (
        <div className="h-[100px] w-full flex justify-between items-center">
            <div>
                <h1 className="font-bold text-[30px] text-[#333132]">No.{number}</h1>
                <p className="text-primary">No Urut</p>
            </div>

            <div className="w-[1px] h-[50%] bg-gray-300"></div>

            <div>
                <h1 className="font-bold text-[30px] text-[#333132]">{birthdatePlace}</h1>
                <p className="text-primary">Tempat & Tanggal Lahir</p>
            </div>

            <div className="w-[1px] h-[50%] bg-gray-300"></div>

            <div>
                <h1 className="font-bold text-[30px] text-[#333132]">{position}</h1>
                <p className="text-primary">Dicalonkan Sebagai</p>
            </div>

            <div className="w-[1px] h-[50%] bg-gray-300"></div>

            <div>
                <h1 className="font-bold text-[30px] text-[#333132]">± {asset}</h1>
                <p className="text-primary">Jumlah Asset</p>
            </div>

        </div>
    );
}

export default BiographyCandidate;