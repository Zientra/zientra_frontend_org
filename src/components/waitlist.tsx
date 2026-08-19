import { Waitlist } from "@clerk/react";
import Nav from "./nav";

export default function WaitlistPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5ee] text-[#101010] relative overflow-hidden font-sans antialiased">
      {/* Gentle background accent for depth */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-black/[0.02] rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <Nav />

      <main className="flex-1 flex items-center justify-center px-4 py-12 relative z-10">
        <Waitlist
  appearance={{
    variables: {
      colorPrimary: "#101010",
      colorBackground: "#ffffff", // Controls card background
      colorInputText: "#101010",
      colorText: "#101010",
      colorTextSecondary: "#666660",
      colorNeutral: "#e5e5dd",
      borderRadius: "6px",
      fontSize: "14px",
    },
    elements: {
      /* CARD CONTAINERS */
      cardBox: "shadow-xl shadow-black/[0.04] rounded-xl overflow-hidden",
      card: "bg-white border border-[#e5e5dd] p-8 space-y-6 shadow-none",

      /* HEADER */
      header: "space-y-1 text-left",
      headerTitle: "text-lg font-medium tracking-tight text-[#101010]",
      headerSubtitle: "text-xs tracking-wide text-[#666660] leading-relaxed",

      /* FORM ELEMENTS */
      formFieldLabel: "text-xs font-mono uppercase tracking-wider text-[#55554f] mb-1.5",
      formFieldInput: `
        h-10 bg-[#fcfcf9] border border-[#d8d8d0] rounded-md text-sm text-[#101010]
        placeholder:text-[#a0a098] shadow-none transition-all duration-200
        focus:border-[#101010] focus:ring-1 focus:ring-[#101010]/10 focus:outline-none
      `,

      /* PRIMARY BUTTON */
      formButtonPrimary: `
        h-10 bg-[#101010] text-[#f5f5ee] rounded-md text-sm font-medium tracking-tight
        shadow-none transition-all duration-200 hover:bg-[#222222] active:scale-[0.99]
        cursor-pointer
      `,

      /* FOOTER / CLERK BRANDING */
      footer: "bg-white border-t border-[#f0f0e8] pt-4",
      footerActionText: "text-xs text-[#8a8a82]",
      footerActionLink: "text-xs text-[#101010] underline decoration-[#ccc] underline-offset-4 hover:decoration-[#101010] transition-colors",
      footerPagesLink: "text-xs text-[#666660] hover:text-[#101010] transition-colors",
    },
  }}
/>
      </main>
    </div>
  );
}
