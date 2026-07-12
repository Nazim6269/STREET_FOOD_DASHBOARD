"use client";

import React from "react";
import CustomModal from "./reusable/CustomModal";
import { LogOut } from "lucide-react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export default function LogoutModal({ isOpen, onClose, onConfirm }: Props) {
  if (!isOpen) return null;

  return (
    <CustomModal size="xsm" open={isOpen} onOpenChange={onClose}>
      <div className="p-8 flex flex-col items-center text-center">
        <div className="relative mb-6">
          <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-gradient-to-br from-[#4C1D95] to-[#7C3AED] shadow-lg shadow-purple-500/20">
            <LogOut className="h-[44px] w-[44px] text-white" strokeWidth={1.5} />
          </div>
          
          <div className="absolute top-[15px] left-0 w-2 h-2 bg-purple-300 rounded-full"></div>
          <div className="absolute top-[30px] left-[15px] w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
          <div className="absolute bottom-[15px] right-0 w-2 h-2 bg-purple-300 rounded-full"></div>
          <div className="absolute top-1/2 -right-10 w-1.5 h-1.5 bg-purple-400 rounded-full -translate-y-1/2"></div>
        </div>

        <h2 className="text-[#2A3542] font-[Lora] text-2xl font-bold mb-3">Sign Out</h2>
        <p className="text-[#697586] text-base leading-[160%] mb-8 max-w-[280px]">
          Are you sure you want to sign out of your account?
        </p>

        <div className="flex gap-3 w-full">
          <button
            onClick={onClose}
            className="flex-1 h-12 justify-center items-center rounded-xl border border-purple-200 text-[#697586] font-medium hover:bg-purple-50 transition-colors"
          >
            Cancel          
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 h-12 justify-center items-center rounded-xl bg-gradient-to-r from-[#4C1D95] to-[#7C3AED] text-white font-semibold hover:shadow-lg hover:shadow-purple-500/20 transition-all"
          >
            Sign out
          </button>
        </div>
      </div>
    </CustomModal>
  );
}
