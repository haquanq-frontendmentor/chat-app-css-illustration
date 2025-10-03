import { For, Match, Switch } from "solid-js";
import type { Message } from "../../stores/conversationStore";
import { cn } from "../../utils/cn";

interface ChatMessageProps {
  message: Message;
}

export const ChatMessageItem = (props: ChatMessageProps) => {
  return (
    <div class={cn("rounded-lg", props.message.fromMe ? "self-end rounded-br-sm" : "rounded-bl-sm")}>
      <Switch>
        <Match when={props.message.type === "text"}>
          <div
            class={cn("py-[0.375rem] px-2 rounded-[inherit] max-w-32", {
              "bg-white text-purple-950": props.message.fromMe,
              "bg-purple-100 text-purple-600": !props.message.fromMe,
            })}
          >
            <p class="text-[0.5rem] leading-[0.6875rem] wrap-break-word">{props.message.content}</p>
          </div>
        </Match>

        <Match when={props.message.type === "images"}>
          <ul class="grid grid-cols-3 gap-2">
            <For each={props.message.content as string[]}>
              {(image) => (
                <li>
                  <img class="w-10 shrink-0 aspect-square rounded-lg" src={image} alt="" />{" "}
                </li>
              )}
            </For>
          </ul>
        </Match>
        <Match when={props.message.type === "payment"}>
          <button
            class="rounded-[inherit] focus-visible:outline-offset-1 focus-visible:outline-1 focus-visible:outline-dashed hover:opacity-70 active:scale-[0.97] transition-[opacity,transform] leading-none flex items-center justify-between pl-2 pr-4 py-[0.625rem] w-[9.9375rem] [background:var(--gradient-purple-90x)]"
            type="button"
          >
            <span class="flex items-center gap-2">
              <span class="w-3 aspect-square rounded-full border border-white"></span>
              <span class="text-[0.5rem] text-gray-100">{props.message.content}</span>
            </span>
            <span class="text-xs leading-none font-bold text-white">
              ${props.message.type === "payment" && props.message.value}
            </span>
          </button>
        </Match>
      </Switch>
    </div>
  );
};
