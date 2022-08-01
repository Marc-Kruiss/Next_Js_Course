import React, { useState } from "react";

function Contact({person}) {
  console.log(person)
  return (
    <>
    <li class="flex py-4 first:pt-0 last:pb-0 bg-white m-1 rounded-sm shadow-lg">
            <img class="h-10 w-10 rounded-full" src={person.avatar} alt="" />
            <div class="ml-3 overflow-hidden">
              <p class="text-sm font-medium text-slate-900">
                {person.firstname}
              </p>
              <p class="text-sm text-slate-500 truncate">{person.email}</p>
            </div>
          </li>
    </>
          
  );
}

export default Contact;
