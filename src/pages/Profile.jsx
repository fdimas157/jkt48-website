export default function Profile() {
  return (
    <>
      <main className="flex p-4">
        <div className="w-5/12 p-4">
          <img
            className="w-full rounded-lg"
            src="/src/assets/profile/oshi-adel.jpg"
            alt="Oshi"
          />
        </div>
        <div className="flex flex-col w-full p-4 gap-4">
          <div className="flex justify-start items-center h-16 px-6 bg-red-600 w-full text-white font-abel font-bold rounded-lg text-2xl">
            MY PAGE
          </div>
          <div className="flex flex-col p-2">
            <table className="font-dosis font-bold text-md justify-start">
              <tr className="border-b-2 border-gray-200">
                <td className="w-2/5 p-4">Nomor Anggota</td>
                <td className="">12345678</td>
              </tr>
              <tr className="border-b-2 border-gray-200">
                <td className="p-4">Jenis Keanggotaan</td>
                <td className="">Anggota Gratis</td>
              </tr>
              <tr className="border-b-2 border-gray-200">
                <td className="p-4">Anggota yang paling disukai (Oshimen)</td>
                <td className="">Reva Fidela</td>
              </tr>
              <tr className="border-b-2 border-gray-200">
                <td className="p-4">Jumlah kedatangan thetaer</td>
                <td className="">0 Kali</td>
              </tr>
              <tr className="border-b-2 border-gray-200">
                <td className="p-4">Barcode</td>
                <td className="">
                  <img
                    src="/src/assets/profile/barcode-adel.gif"
                    alt="Barcode"
                    className="w-1/2 p-2"
                  />
                </td>
              </tr>
              <tr className="border-b-2 border-gray-200">
                <td className="p-4">Jumlah JKT48 Points</td>
                <td className="p-2">
                  <p>0 P</p>
                  <p>Point berlaku sementara</p>
                  <p>Berlaku hingga 31 Desember 2024</p>
                </td>
              </tr>
              <tr className="border-b-2 border-gray-200">
                <td className="p-4">Bonus Points</td>
                <td className="p-2">
                  <p>0 P</p>
                  <p>Point berlaku sementara</p>
                  <p>Berlaku hingga 31 Desember 2024</p>
                </td>
              </tr>
            </table>
          </div>
          <div className="flex justify-start items-center h-16 px-6 bg-red-600 w-full text-white font-abel font-bold rounded-lg text-2xl">
            MENU ANGGOTA
          </div>
          <div className="flex flex-col p-2">
            <table className="font-dosis font-bold text-md justify-start">
              <tr className="border-b-2 border-gray-200">
                <td className="w-2/5 p-4">Email</td>
                <td className="">fdimas157@gmail.com</td>
              </tr>
              <tr className="border-b-2 border-gray-200">
                <td className="p-4">Kata Sandi</td>
                <td className="">*************</td>
              </tr>
              <tr className="border-b-2 border-gray-200">
                <td className="p-4">Nama Lengkap</td>
                <td className="">Dimas Firmansyah</td>
              </tr>
              <tr className="border-b-2 border-gray-200">
                <td className="p-4">Nama Panggilan</td>
                <td className="">Dimas</td>
              </tr>
              <tr className="border-b-2 border-gray-200">
                <td className="p-4">Anggota yang paling disukai (Oshimen)</td>
                <td className="">JKT48 Reva Fidela</td>
              </tr>
              <tr className="border-b-2 border-gray-200">
                <td className="p-4">Jenis Kelamin</td>
                <td className="flex gap-8 items-center flex-row p-4 px-0">
                  <label htmlFor="male" className="flex gap-2">
                    <input type="radio" name="male" />
                    Laki - Laki
                  </label>
                  <label htmlFor="female" className="flex gap-2">
                    <input type="radio" name="female" />
                    Perempuan
                  </label>
                </td>
              </tr>
              <tr className="border-b-2 border-gray-200">
                <td className="p-4">Tanggal Lahir</td>
                <td className="p-2">
                  <input
                    type="date"
                    onChange={(e) => console.log(e.target.value)}
                  />
                </td>
              </tr>
              <tr className="border-b-2 border-gray-200">
                <td className="p-4">
                  Nomor Identitas <br /> (KTP, Kartu Pelajar, SIM, atau paspor)
                </td>
                <td className="p-2">3279022505030002</td>
              </tr>
              <tr className="border-b-2 border-gray-200">
                <td className="p-4">No. Handphone</td>
                <td className="p-2">087735495185</td>
              </tr>
              <tr>
                <td className="p-4 text-center" colSpan={2}>
                  <button className="w-1/2 bg-red-600 h-12 rounded-lg text-white">
                    Ubah Data
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
