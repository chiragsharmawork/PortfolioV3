import { Metadata } from "next";
import GiscusComments from "@/components/layout/GiscusComments";
import HackerBadge from "@/components/layout/HackerBadge";
import { MessageSquarePlus } from "lucide-react";

export const metadata: Metadata = {
  title: "Guestbook",
  description: "Leave a message on Chirag Sharma's interactive portfolio.",
};

export default function GuestbookPage() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-24 min-h-[calc(100vh-100px)]">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <MessageSquarePlus className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tighter">Guestbook.</h1>
            <p className="text-muted-foreground mt-2 font-mono text-sm">
              <span className="text-primary">~/</span>var/log/visitors
            </p>
          </div>
        </div>
        
        <p className="text-foreground leading-relaxed mb-6 text-lg border-l-2 border-primary/50 pl-4">
          Welcome to the guestbook! You can sign in with your GitHub account below to leave a permanent message, feedback, or just say hello. This is directly connected to a decentralized GitHub Discussions database.
        </p>

        <HackerBadge />

        <div className="mt-10">
          <GiscusComments />
        </div>
      </div>
    </div>
  );
}
