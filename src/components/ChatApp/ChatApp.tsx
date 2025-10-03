import { ChatHeader } from "./ChatHeader";
import { ChatMessageForm } from "./ChatMessageForm";
import { ChatMessageList } from "./ChatMessageList";

export const ChatApp = () => {
  return (
    <div class="w-[15.4375rem] relative h-[31.5625rem] bg-gray-100 flex flex-col justify-end rounded-[1.875rem] shadow-2xl p-[0.625rem] ">
      <div class="absolute pointer-events-none inset-0 rounded-[inherit] outline-offset-[-0.625rem] outline-white outline-[0.625rem] z-50"></div>
      <ChatHeader />
      <ChatMessageList />
      <ChatMessageForm />
    </div>
  );
};
