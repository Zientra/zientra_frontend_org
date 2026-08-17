import Editor from "@monaco-editor/react";
import { useState } from "react";
import type {
    ChatMessage,
    RoomState,
    RoomUser
} from "./platform";

interface CodeEditorProps {
    room: RoomState;
    users: RoomUser[];
    code: string;
    language: string;
    messages: ChatMessage[];
    connected: boolean;

    onCodeChange: (code: string) => void;
    onLanguageChange: (language: string) => void;
    onSendMessage: (message: string) => void;
    onLeaveRoom: () => void;
}

const languages = [
    "javascript",
    "typescript",
    "python",
    "java",
    "cpp",
    "c",
    "go",
    "rust",
    "html",
    "css",
    "json",
];

const CodeEditor = ({
    room,
    users,
    code,
    language,
    messages,
    connected,
    onCodeChange,
    onLanguageChange,
    onSendMessage,
    onLeaveRoom,
}: CodeEditorProps) => {

    const [message, setMessage] = useState("");

    const sendChat = () => {
        const trimmed = message.trim();

        if (!trimmed) {
            return;
        }

        onSendMessage(trimmed);
        setMessage("");
    };

    return (
        <div className="h-screen w-full bg-[#101010] text-[#ddd] flex flex-col overflow-hidden">

            {/* =====================================================
                TOP BAR
            ===================================================== */}

            <header className="h-12 shrink-0 flex items-center px-4 border-b border-[#292929] bg-[#111111]">

                {/* Logo */}

                <div className="flex items-center gap-2 font-['Manrope'] font-semibold text-[15px] text-[#f5f5ee]">

                    <img
                        src="/logo.png"
                        className="w-5 h-5 object-contain"
                        alt="Zientra"
                    />

                    <span>
                        zientra
                    </span>

                </div>


                {/* Room */}

                <div className="ml-8 flex items-center gap-2 text-[12px] text-[#aaa]">

                    <span className="w-1.5 h-1.5 rounded-full bg-[#6b8769]" />

                    <span>
                        {room.room_name}
                    </span>

                </div>


                {/* Right */}

                <div className="ml-auto flex items-center gap-5">

                    <div className="text-[11px] text-[#777]">
                        {connected
                            ? "CONNECTED"
                            : "DISCONNECTED"
                        }
                    </div>

                    <div className="text-[11px] text-[#777]">
                        {room.join_code}
                    </div>

                    <button
                        type="button"
                        onClick={onLeaveRoom}
                        className="
                            text-[12px]
                            px-3
                            py-1.5
                            border
                            border-[#444]
                            text-[#aaa]
                            hover:border-[#888]
                            hover:text-[#fff]
                            transition-colors
                        "
                    >
                        Leave
                    </button>

                </div>

            </header>


            {/* =====================================================
                MAIN
            ===================================================== */}

            <div className="flex flex-1 min-h-0">


                {/* =================================================
                    SIDEBAR
                ================================================= */}

                <aside className="w-[190px] shrink-0 border-r border-[#292929] bg-[#111111] p-3 overflow-y-auto">

                    {/* Room label */}

                    <div className="
                        text-[10px]
                        tracking-[0.12em]
                        text-[#555]
                        mb-3
                    ">
                        ROOM
                    </div>


                    {/* Room name */}

                    <div className="
                        px-2
                        py-2
                        rounded
                        bg-[#1d1d1d]
                        text-[13px]
                        text-[#eee]
                        mb-8
                    ">
                        # {room.room_name}
                    </div>


                    {/* Members label */}

                    <div className="
                        text-[10px]
                        tracking-[0.12em]
                        text-[#555]
                        mb-3
                    ">
                        MEMBERS
                    </div>


                    {/* Members */}

                    {users.map((user) => (

                        <div
                            key={user.user_id}
                            className="
                                flex
                                items-center
                                gap-2
                                px-2
                                py-2
                                text-[13px]
                                text-[#aaa]
                            "
                        >

                            <div className="
                                w-6
                                h-6
                                rounded-full
                                bg-[#292929]
                                flex
                                items-center
                                justify-center
                                text-[10px]
                                text-[#ccc]
                                shrink-0
                            ">

                                {user.display_name
                                    .charAt(0)
                                    .toUpperCase()
                                }

                            </div>

                            <span className="truncate">
                                {user.display_name}
                            </span>

                        </div>

                    ))}


                    {users.length === 0 && (

                        <div className="
                            text-[11px]
                            text-[#555]
                            px-2
                        ">
                            No members
                        </div>

                    )}

                </aside>


                {/* =================================================
                    CODE EDITOR
                ================================================= */}

                <main className="
                    flex-1
                    min-w-0
                    flex
                    flex-col
                ">

                    {/* Editor header */}

                    <div className="
                        h-10
                        shrink-0
                        flex
                        items-center
                        justify-between
                        px-4
                        border-b
                        border-[#292929]
                        bg-[#101010]
                    ">

                        <span className="text-[12px] text-[#777]">
                            main.{language}
                        </span>


                        <select
                            value={language}
                            onChange={(event) => {
                                onLanguageChange(
                                    event.target.value
                                );
                            }}
                            className="
                                bg-[#101010]
                                text-[#777]
                                border
                                border-[#292929]
                                text-[12px]
                                px-2
                                py-1
                                outline-none
                            "
                        >

                            {languages.map((lang) => (

                                <option
                                    key={lang}
                                    value={lang}
                                >
                                    {lang}
                                </option>

                            ))}

                        </select>

                    </div>


                    {/* Monaco */}

                    <div className="flex-1 min-h-0">

                        <Editor
                            height="100%"
                            language={language}
                            value={code}
                            theme="vs-dark"

                            onChange={(value) => {
                                onCodeChange(
                                    value ?? ""
                                );
                            }}

                            options={{
                                minimap: {
                                    enabled: false,
                                },

                                fontSize: 14,

                                automaticLayout: true,

                                padding: {
                                    top: 18,
                                },

                                smoothScrolling: true,

                                cursorBlinking: "smooth",

                                tabSize: 4,
                            }}
                        />

                    </div>

                </main>


                {/* =================================================
                    CHAT
                ================================================= */}

                <aside className="
                    w-[300px]
                    shrink-0
                    border-l
                    border-[#292929]
                    bg-[#111111]
                    flex
                    flex-col
                ">


                    {/* Chat header */}

                    <div className="
                        h-10
                        shrink-0
                        flex
                        items-center
                        justify-between
                        px-4
                        border-b
                        border-[#292929]
                        text-[13px]
                        text-[#ddd]
                    ">

                        <span>
                            Team
                        </span>

                        <span className="text-[12px] text-[#666]">
                            {users.length}
                        </span>

                    </div>


                    {/* Messages */}

                    <div className="
                        flex-1
                        overflow-y-auto
                        p-4
                    ">

                        {messages.map((msg) => (

                            <div
                                key={msg.message_id}
                                className="mb-5"
                            >

                                {/* Sender */}

                                <div className="
                                    text-[12px]
                                    font-medium
                                    text-[#ddd]
                                ">
                                    {msg.sender_display_name}
                                </div>


                                {/* Message */}

                                <p className="
                                    mt-1
                                    text-[13px]
                                    leading-relaxed
                                    text-[#888]
                                ">
                                    {msg.content}
                                </p>

                            </div>

                        ))}


                        {messages.length === 0 && (

                            <div className="
                                text-[11px]
                                text-[#555]
                            ">
                                No messages yet.
                            </div>

                        )}

                    </div>


                    {/* Chat input */}

                    <div className="
                        p-3
                        border-t
                        border-[#292929]
                    ">

                        <div className="
                            flex
                            gap-2
                            border
                            border-[#292929]
                            px-2
                            py-1.5
                        ">

                            <input
                                value={message}
                                onChange={(event) => {
                                    setMessage(
                                        event.target.value
                                    );
                                }}
                                onKeyDown={(event) => {

                                    if (
                                        event.key === "Enter" &&
                                        !event.shiftKey
                                    ) {
                                        event.preventDefault();

                                        sendChat();
                                    }

                                }}
                                placeholder="Message team..."
                                className="
                                    flex-1
                                    min-w-0
                                    bg-transparent
                                    outline-none
                                    text-[13px]
                                    text-[#ccc]
                                    placeholder:text-[#555]
                                "
                            />

                            <button
                                type="button"
                                onClick={sendChat}
                                className="
                                    text-[13px]
                                    text-[#777]
                                    hover:text-[#fff]
                                    transition-colors
                                "
                            >
                                ↑
                            </button>

                        </div>

                    </div>

                </aside>

            </div>

        </div>
    );
};

export default CodeEditor;