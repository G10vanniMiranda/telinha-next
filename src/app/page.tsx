import Image from "next/image";
import { AiOutlineEye } from "react-icons/ai";
import { CiCreditCard1, CiSearch } from "react-icons/ci";
import { FiHelpCircle, FiMessageSquare } from "react-icons/fi";
import { IoIosArrowForward, IoIosBarcode, IoMdNotificationsOutline } from "react-icons/io";
import { LiaPiggyBankSolid } from "react-icons/lia";
import { PiPixLogoThin } from "react-icons/pi";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center p-4">

      <div className="w-full h-20 flex items-center justify-center gap-4">

        <div className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center">
          GM
        </div>

        <div className="w-32 h-11 bg-gray-100 rounded-full flex items-center p-2">
          <CiSearch className="w-6 h-6" />
          <input
            type="text"
            className="w-full h-full bg-transparent outline-none pl-2"
            placeholder="Buscar"
          />
        </div>

        <div className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center">
          <FiHelpCircle className="w-6 h-6" />
        </div>

        <div className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center">
          <FiMessageSquare className="w-6 h-6" />
        </div>

        <div className="w-11 h-11 bg-gray-100 rounded-full flex items-center justify-center">
          <IoMdNotificationsOutline className="w-6 h-6" />
        </div>

      </div>

      <div className="w-full h-62 flex justify-center">
        <div className="bg-teal-600 w-96 h-[230px] rounded-2xl px-4 py-3 flex flex-col gap-4">

          <div className="flex justify-between">
            <p className="text-white text-sm">Conta</p>
            <p className="text-white text-sm flex items-center">Ver extrato <IoIosArrowForward className="w-4 h-4" /> </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-white text-2xl">Saldo em conta</p>
            <div className="bg-teal-500 w-20 h-5"></div>
          </div>

          <div className="flex justify-between pb-2">
            <p className="text-white">Rendendo 102% do CDI</p>
            <AiOutlineEye className="w-6 h-6 text-white" />
          </div>

          <button className="bg-white w-full h-10 rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold">Gardar dinheiro</span>
          </button>

        </div>
      </div>

      <div className="w-full h-auto flex flex-col gap-3">

        <p className="font-semibold text-xl">Pro dia a dia</p>

        <div className="w-full h-auto flex gap-3">

          <div className="flex flex-col items-center justify-center gap-2">
            <div className="w-22 h-18 flex items-center justify-center bg-teal-600 rounded-xl">
              <PiPixLogoThin className="w-8 h-8 text-white" />
            </div>
            <p className="text-xs bg-black text-white rounded-2xl px-2 py-1">EM ATÉ 12X</p>
            <p>Pix</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-22 h-18 flex items-center justify-center bg-gray-100 rounded-xl">
              <IoIosBarcode className="w-8 h-8 text-black" />
            </div>
            <p className="text-xs px-2 py-1">Pagar Boleto</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-22 h-18 flex items-center justify-center bg-gray-100 rounded-xl">
              <LiaPiggyBankSolid className="w-8 h-8 text-black" />
            </div>
            <p className="text-xs px-2 py-1">Cofrinhos</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-22 h-18 flex items-center justify-center bg-gray-100 rounded-xl">
              <CiCreditCard1 className="w-8 h-8 text-black" />
            </div>
            <p className="text-xs px-2 py-1">Cartão virtual</p>
          </div>

        </div>

      </div>

    </div>
  );
}
