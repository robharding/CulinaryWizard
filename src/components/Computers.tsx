"use client";

import { trpc } from "@/lib/trpc/client";
import { FC } from "react";

interface ComputersProps {}

const Computers: FC<ComputersProps> = ({}) => {
  const { data } = trpc.computers.getComputers.useQuery();

  return (
    <div>
      {data?.computers &&
        data.computers.map((computer) => (
          <div key={computer.id}>{computer.brand}</div>
        ))}
    </div>
  );
};

export default Computers;
