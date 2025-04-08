import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white p-4">
      <motion.div
        className="max-w-5xl mx-auto py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-cyan-400 mb-2 drop-shadow-xl">
            Oni Interaction Hub
          </h1>
          <p className="text-lg text-zinc-300">
            Interface for managing conversations, agents, and media inputs.
          </p>
        </div>

        <Card className="bg-zinc-850/90 border border-zinc-700 rounded-3xl shadow-lg">
          <CardContent className="p-6">
            <Tabs defaultValue="chat">
              <TabsList className="grid grid-cols-3 bg-zinc-900 text-cyan-300 shadow-inner">
                <TabsTrigger value="chat" className="hover:text-cyan-400 transition-all">Chat</TabsTrigger>
                <TabsTrigger value="voice" className="hover:text-cyan-400 transition-all">Voice</TabsTrigger>
                <TabsTrigger value="video" className="hover:text-cyan-400 transition-all">Video</TabsTrigger>
              </TabsList>
              <TabsContent value="chat">
                <ScrollArea className="h-64 p-4 bg-zinc-800 rounded-xl border border-zinc-700">
                  <div className="space-y-2">
                    <p className="text-sm text-cyan-100">[Assistant]: Welcome back, Oni.</p>
                    <p className="text-sm text-zinc-300">[User]: What's the current system load?</p>
                    <p className="text-sm text-cyan-100">[Assistant]: 27% and holding.</p>
                  </div>
                </ScrollArea>
                <div className="mt-4 flex items-center space-x-2">
                  <Input placeholder="Send a command or message..." className="bg-zinc-800 border-zinc-600 text-white" />
                  <Button className="bg-cyan-600 hover:bg-cyan-500 transition-colors">Send</Button>
                </div>
              </TabsContent>
              <TabsContent value="voice">
                <div className="space-y-4 text-center">
                  <p className="text-zinc-300">Voice interaction module is initializing...</p>
                  <Button className="bg-purple-600 hover:bg-purple-500">Start Listening</Button>
                </div>
              </TabsContent>
              <TabsContent value="video">
                <div className="space-y-4 text-center">
                  <p className="text-zinc-300">Video module coming soon. Stand by.</p>
                  <Button className="bg-pink-600 hover:bg-pink-500">Activate Camera</Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <p className="text-zinc-500 text-sm italic">
            Oni is your modular intelligence agent. Every interaction strengthens the mind.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
