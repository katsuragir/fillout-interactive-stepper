import { Stepper } from "@/features/form-builder/components/Stepper";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-gray-100 flex flex-col items-center pt-8">
      {/* Konten halaman */}
      <div className="p-8 text-center text-gray-500">
        <p>Konten utama halaman bisa di sini</p>
      </div>

      {/* Stepper sticky di bawah tengah layar */}
      <div className="fixed bottom-0 w-full flex justify-center  py-4 z-50">
        <Stepper />
      </div>
    </div>
  );
}
