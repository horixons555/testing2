import React from "react";
import Heading from './../../../components/back-office/Heading';
import LargeCards from './../../../components/back-office/LargeCards';
import SmallCards from './../../../components/back-office/SmallCards';

export default function page() {
  return (
    <div>
      <Heading title="Dashboard Overview" />
      <LargeCards />
      <SmallCards />
    </div>
  );
}
