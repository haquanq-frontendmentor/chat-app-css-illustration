import { ChatUser } from "./ChatUser";

export const ChatHeader = () => {
  return (
    <div class="h-[4.1875rem] shrink-0 [background:var(--gradient-purple-90)] rounded-b-sm px-[0.9375rem] pb-3 flex justify-between items-center flex-col">
      <div class="h-[1.1875rem] bg-white w-[8.0625rem] rounded-b-2xl"></div>
      <div class="flex justify-between items-center w-full">
        <div class="flex gap-2 items-center">
          <div class="w-1 h-1"></div>
          <ChatUser />
        </div>
        <button
          class="w-4 focus-visible:outline-offset-1 focus-visible:outline-1 focus-visible:outline-dashed relative overflow-hidden right-[-0.375rem] hover:text-pink-500 text-white transition-colors hover:bg-gray-100 focus-visible:outline-white flex justify-center group items-center  aspect-square rounded-full"
          type="button"
          aria-label="More"
        >
          <svg
            class="outline-1"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="6" fill="currentColor" r="2" />
            <circle cx="12" cy="12" fill="currentColor" r="2" />
            <circle cx="12" cy="18" fill="currentColor" r="2" />
          </svg>
        </button>
      </div>
    </div>
  );
};
