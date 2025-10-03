import { UserAvatar } from "../../assets/images";

export const ChatUser = () => {
  return (
    <div class="flex gap-2 items-center">
      <img class="aspect-square w-6 rounded-full outline-1 outline-white -outline-offset-1" src={UserAvatar} alt="" />
      <div class="grid gap-[0.1875rem]">
        <p class="text-[0.6875rem] text-white font-medium">Samuel Green</p>
        <span class="text-[0.5rem] text-gray-100">Available to Walk</span>
      </div>
    </div>
  );
};
