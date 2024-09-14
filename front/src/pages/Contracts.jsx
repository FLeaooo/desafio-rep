import React from "react"
import Logo from "@/components/Logo"

const Contracts = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="flex bg-[#d3dbb1] w-[60%] h-[90%] p-5 justify-center items-center">
        <div className="bg-white w-[95%] h-[95%] rounded-lg shadow-lg text-center">
          <div className="flex justify-between p-5 items-center w-full">
            <Logo/>
            <h1 className="font-bold text-5xl ml-4 text-center flex-1">Pagamento de fornecedor</h1>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Contracts;
