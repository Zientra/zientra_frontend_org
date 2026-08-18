import Editor from "@monaco-editor/react";
import { useState, useRef, useEffect } from "react";
import {
    ChevronRight,
    ChevronDown,
    Folder,
    FolderOpen,
    FileCode,
    Users,
    X
} from "lucide-react";
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

// ============================================================
// LANGUAGE -> FILE ICON COLOR
// ============================================================
//
// Loosely matches the community file-icon colors VS Code users
// already recognize, so the explorer reads as familiar rather
// than arbitrary.
//
const languageColors: Record<string, string> = {
    javascript: "#f0db4f",
    typescript: "#3b82f6",
    python: "#4b8bbe",
    java: "#e76f00",
    cpp: "#659ad2",
    c: "#a8b9cc",
    go: "#00add8",
    rust: "#dea584",
    html: "#e34c26",
    css: "#8a67d7",
    json: "#c9b25a",
};

const languageExtensions: Record<string, string> = {
    javascript: "js",
    typescript: "ts",
    python: "py",
    java: "java",
    cpp: "cpp",
    c: "c",
    go: "go",
    rust: "rs",
    html: "html",
    css: "css",
    json: "json",
};

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
    const [folderExpanded, setFolderExpanded] = useState(true);
    const [membersOpen, setMembersOpen] = useState(false);

    const membersRef = useRef<HTMLDivElement | null>(null);

    const sendChat = () => {
        const trimmed = message.trim();

        if (!trimmed) {
            return;
        }

        onSendMessage(trimmed);
        setMessage("");
    };

    // Close the members popover on outside click.
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                membersRef.current &&
                !membersRef.current.contains(event.target as Node)
            ) {
                setMembersOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const fileName = `main.${languageExtensions[language] ?? language}`;
    const fileColor = languageColors[language] ?? "#888";

    const visibleAvatars = users.slice(0, 4);
    const overflowCount = users.length - visibleAvatars.length;

    return (
        <div className="h-screen w-full bg-[#101010] text-[#ddd] flex flex-col overflow-hidden">

            {/* =====================================================
                TOP BAR
            ===================================================== */}

            <header className="h-12 shrink-0 flex items-center px-4 border-b border-[#292929] bg-[#111111] relative">

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


                    {/* ===========================================
                        MEMBERS AVATAR STACK
                    =========================================== */}

                    <div
                        ref={membersRef}
                        className="relative"
                    >

                        <button
                            type="button"
                            onClick={() => {
                                setMembersOpen((open) => !open);
                            }}
                            className="
                                flex
                                items-center
                                gap-1.5
                                px-2
                                py-1
                                rounded
                                hover:bg-[#1d1d1d]
                                transition-colors
                            "
                        >

                            <div className="flex -space-x-2">

                                {visibleAvatars.map((user) => (

                                    <div
                                        key={user.user_id}
                                        className="
                                            w-6
                                            h-6
                                            rounded-full
                                            bg-[#292929]
                                            border
                                            border-[#111111]
                                            flex
                                            items-center
                                            justify-center
                                            text-[10px]
                                            text-[#ccc]
                                        "
                                    >
                                        {user.display_name
                                            .charAt(0)
                                            .toUpperCase()
                                        }
                                    </div>

                                ))}

                                {overflowCount > 0 && (

                                    <div className="
                                        w-6
                                        h-6
                                        rounded-full
                                        bg-[#2a2a2a]
                                        border
                                        border-[#111111]
                                        flex
                                        items-center
                                        justify-center
                                        text-[9px]
                                        text-[#999]
                                    ">
                                        +{overflowCount}
                                    </div>

                                )}

                            </div>

                            <Users
                                size={13}
                                className="text-[#777]"
                            />

                        </button>


                        {/* Members popover */}

                        {membersOpen && (

                            <div className="
                                absolute
                                right-0
                                top-[calc(100%+8px)]
                                w-56
                                bg-[#161616]
                                border
                                border-[#292929]
                                rounded-lg
                                shadow-xl
                                z-50
                                overflow-hidden
                            ">

                                <div className="
                                    flex
                                    items-center
                                    justify-between
                                    px-3
                                    py-2.5
                                    border-b
                                    border-[#292929]
                                ">
                                    <span className="text-[11px] tracking-[0.1em] text-[#666]">
                                        MEMBERS — {users.length}
                                    </span>

                                    <button
                                        type="button"
                                        onClick={() => {
                                            setMembersOpen(false);
                                        }}
                                        className="text-[#666] hover:text-[#ccc] transition-colors"
                                    >
                                        <X size={13} />
                                    </button>
                                </div>

                                <div className="max-h-64 overflow-y-auto py-1">

                                    {users.map((user) => (

                                        <div
                                            key={user.user_id}
                                            className="
                                                flex
                                                items-center
                                                gap-2.5
                                                px-3
                                                py-2
                                                text-[13px]
                                                text-[#ccc]
                                                hover:bg-[#1d1d1d]
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

                                        <div className="px-3 py-3 text-[11px] text-[#555]">
                                            No members
                                        </div>

                                    )}

                                </div>

                            </div>

                        )}

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
                    FILE EXPLORER
                ================================================= */}

                <aside className="w-[190px] shrink-0 border-r border-[#292929] bg-[#111111] p-2 overflow-y-auto">

                    <div className="
                        text-[10px]
                        tracking-[0.12em]
                        text-[#555]
                        px-2
                        py-2
                        mb-1
                    ">
                        EXPLORER
                    </div>


                    {/* Root folder row */}

                    <button
                        type="button"
                        onClick={() => {
                            setFolderExpanded((expanded) => !expanded);
                        }}
                        className="
                            w-full
                            flex
                            items-center
                            gap-1
                            px-1
                            py-1.5
                            rounded
                            text-[12px]
                            text-[#ccc]
                            hover:bg-[#1a1a1a]
                            transition-colors
                        "
                    >

                        {folderExpanded
                            ? <ChevronDown size={13} className="text-[#666] shrink-0" />
                            : <ChevronRight size={13} className="text-[#666] shrink-0" />
                        }

                        {folderExpanded
                            ? <FolderOpen size={14} className="text-[#8a9a7e] shrink-0" />
                            : <Folder size={14} className="text-[#8a9a7e] shrink-0" />
                        }

                        <span className="truncate font-medium">
                            {room.room_name}
                        </span>

                    </button>


                    {/* Single active file */}

                    {folderExpanded && (

                        <div className="ml-4 mt-0.5 border-l border-[#242424] pl-2">

                            <div className="
                                flex
                                items-center
                                gap-1.5
                                px-2
                                py-1.5
                                rounded
                                bg-[#1d1d1d]
                                text-[12px]
                                text-[#eee]
                                cursor-default
                            ">

                                <FileCode
                                    size={13}
                                    style={{ color: fileColor }}
                                    className="shrink-0"
                                />

                                <span className="truncate">
                                    {fileName}
                                </span>

                            </div>

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

                        <div className="flex items-center gap-1.5">
                            <FileCode
                                size={13}
                                style={{ color: fileColor }}
                            />
                            <span className="text-[12px] text-[#999]">
                                {fileName}
                            </span>
                        </div>


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