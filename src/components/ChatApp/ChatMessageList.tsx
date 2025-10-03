import { createEffect, For, Show } from "solid-js";
import {
  getConversation,
  getConversationLength,
  getConversationPaddingBottom,
  isOtherUserTyping,
} from "../../stores/conversationStore";
import { ChatMessageItem } from "./ChatMessageItem";

export const ChatMessageList = () => {
  let container: HTMLDivElement | undefined;
  let firstMessage = true;
  let fromMe = true;

  createEffect(() => {
    if (!container) return;

    const scrollToBottom = () => {
      container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
    };

    if (getConversationPaddingBottom()) {
      scrollToBottom();
    }

    if (getConversationLength()) {
      scrollToBottom();
    }

    if (isOtherUserTyping()) {
      scrollToBottom();
    }
  });
  return (
    <div
      class="py-[0.6875rem] pb-14 relative px-[0.4375rem] h-full flex flex-col gap-2 overflow-y-scroll no-scrollbar"
      style={{ "padding-bottom": getConversationPaddingBottom() / 16 + "rem" }}
      ref={container}
    >
      <For each={getConversation()}>
        {(message) => {
          if (firstMessage) {
            firstMessage = false;
            fromMe = message.fromMe;
          } else if (fromMe != message.fromMe) {
            fromMe = message.fromMe;
            return (
              <>
                <div class=""></div>
                <ChatMessageItem message={message} />
              </>
            );
          }
          return <ChatMessageItem message={message} />;
        }}
      </For>
      <Show when={isOtherUserTyping()}>
        <div class="rounded-lg rounded-bl-sm bg-purple-100 p-1 *:w-[0.125rem] *:aspect-square *:rounded-full *:bg-purple-600 w-fit flex gap-[0.125rem]">
          <span class="animate-[blink_1.5s_ease_infinite]"></span>
          <span class="animate-[blink_1.5s_ease_infinite_0.2s] shrink-0"></span>
          <span class="animate-[blink_1.5s_ease_infinite_0.4s]"></span>
        </div>
      </Show>
    </div>
  );
};
