import React, { useState } from "react";
import Image from 'next/image'

function Contact({ person }) {
  return (
    <>
      <li class="flex first:pt-0 last:pb-0 bg-white m-1 rounded-md shadow-lg">
        <Image class="rounded-full"  width={100} height={100} src={person.avatar} alt="" />
        <div class="ml-3 overflow-hidden">
          <p class="text-sm font-medium text-slate-900">{person.firstName}</p>
          <p class="text-sm font-medium text-slate-900">{person.lastName}</p>
          <p class="text-sm text-slate-500 truncate">{person.email}</p>
        </div>
      </li>
    </>
  );
}

export default Contact;
