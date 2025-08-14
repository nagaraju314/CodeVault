"use client";

import { Suspense } from "react";
import NavbarContent from "./NavbarContent";

export default function Navbar() {
  return (
    <Suspense fallback={<div className="p-4">Loading navigation...</div>}>
      <NavbarContent />
    </Suspense>
  );
}
