import { useSignal } from "@preact/signals";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
    <div class="bg-[#5b5b5b]">
    <div class="container mx-auto">
    <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6 border-8"
          src="/logo.png"
          width="500"
          height="500"
          alt="logo: heavenzoo"
        />
      </div>
  </div>  
    <div class="px-4 py-8 mx-auto bg-[#bcbcbc]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <div class="max-w-screen-md mx-auto flex items-center justify-center">
        <a href="/character" class="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
          Character
      </a>
      
      </div>
        

      </div>
    </div>
    </div>
    </>
  );
}
