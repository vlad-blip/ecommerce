import Action from "./Action";

import Person from "@/public/icons/Person.svg";
import Message from "@/public/icons/Message.svg";
import Cart from "@/public/icons/Cart.svg";
import Heart from "@/public/icons/Heart.svg";

export default function ActionsList({ className }: { className: string }) {
  return (
    <ul className={`flex gap-2 items-center ${className}`}>
      <li>
        <Action icon={Person}>
          <span className="hidden md:block">Profile</span>
        </Action>
      </li>
      <li>
        <Action icon={Message} className="hidden md:flex">
          <span>Message</span>
        </Action>
      </li>
      <li>
        <Action icon={Heart} className="hidden md:flex">
          <span>Orders</span>
        </Action>
      </li>
      <li>
        <Action icon={Cart}>
          <span className="hidden md:block">My cart</span>
        </Action>
      </li>
    </ul>
  );
}
