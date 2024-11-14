import React from "react";
import MainButton from "../common/MainButton";
import Link from "next/link";

interface IProps {
  iconUrl: string;
  title: string;
  description: string;
  url : string;
  action?: () => void;
}

function ServiceCard({ iconUrl, title, description, url, action }: IProps) {
  return (
    <div className="flex flex-grow flex-col gap-[2.56rem]  pt-[1.91rem] pb-[2.81rem] px-[2.56rem] items-center service-card-shadow rounded-[1.75rem]">
      <div>
        <img src={iconUrl} alt="service icon" />
      </div>
      <p className="text-[1.6rem] font-[700]">{title}</p>
      <p className="text-normal">{description}</p>
      <Link href={url}>
        <MainButton text="Daha Fazla" action={action} classes="w-[10.125rem]" />
      </Link>

      {/* <MainButton text="Learn More" action={action} classes="w-[10.125rem]" /> */}
    </div>
  );
}

export default ServiceCard;
