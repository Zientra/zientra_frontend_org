import { useEffect, useRef, useState } from "react";
import CodeEditor from "./code_editor";

const WS_URL = "ws://localhost:8080";

export interface RoomUser {
    user_id: string;
    username: string;
    display_name: string;
}

export interface ChatMessage {
    message_id: string;

    room_id: string;

    sender_id: string;
    sender_username: string;
    sender_display_name: string;

    content: string;

    created_at: string;
}

export interface RoomState {
    room_id: string;
    join_code: string;
    room_name: string;
}

const Platform = () => {

    const socketRef = useRef<WebSocket | null>(null);

    const [username, setUsername] = useState("");
    const [roomName, setRoomName] = useState("");
    const [joinCode, setJoinCode] = useState("");

    const [room, setRoom] = useState<RoomState | null>(null);
    const [users, setUsers] = useState<RoomUser[]>([]);

    const [code, setCode] = useState("");
    const [language, setLanguage] = useState("javascript");

    const [messages, setMessages] = useState<ChatMessage[]>([]);

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [connected, setConnected] = useState(false);

    const [mode, setMode] = useState<"home" | "create" | "join">(
        "home"
    );



    //CONNECT WEBSOCKET

    const connectSocket = () => {

        return new Promise<WebSocket>((resolve, reject) => {

            console.log(
                "[WS] Connecting to:",
                WS_URL
            );

            const socket = new WebSocket(WS_URL);

            socketRef.current = socket;



            // MESSAGE HANDLER


            // Attach this BEFORE onopen so we cannot miss the
            // backend's initial "connected" message.
            //

            socket.onmessage = handleMessage;



            // OPEN


            socket.onopen = () => {

                console.log(
                    "[WS] WebSocket connected"
                );

                setConnected(true);

                resolve(socket);

            };



            // ERROR


            socket.onerror = (event) => {

                console.error(
                    "[WS] WebSocket error:",
                    event
                );

                setConnected(false);

                reject(
                    new Error(
                        "Could not connect to backend"
                    )
                );

            };



            // CLOSE


            socket.onclose = (event) => {

                console.log(
                    "[WS] WebSocket disconnected"
                );

                console.log(
                    "[WS] Close code:",
                    event.code
                );

                console.log(
                    "[WS] Close reason:",
                    event.reason
                );

                console.log(
                    "[WS] Clean:",
                    event.wasClean
                );

                setConnected(false);

            };

        });

    };


    /*
    CREATE ROOM
    */

    const createRoom = async () => {

        if (!username.trim()) {

            setError("Enter your username");

            return;
        }

        if (!roomName.trim()) {

            setError("Enter a room name");

            return;
        }

        setError("");
        setLoading(true);

        try {

            const socket = await connectSocket();


            socket.send(
                JSON.stringify({
                    type: "create_room",
                    room_name: roomName.trim()
                })
            );

        } catch {

            setError(
                "Could not connect to the backend"
            );

            setLoading(false);
        }
    };


    /*
    JOIN ROOM
    */

    const joinRoom = async () => {

        if (!username.trim()) {

            setError("Enter your username");

            return;
        }

        if (!joinCode.trim()) {

            setError("Enter a room code");

            return;
        }

        setError("");
        setLoading(true);

        try {

            const socket = await connectSocket();


            socket.send(
                JSON.stringify({
                    type: "join_room",
                    join_code: joinCode
                        .trim()
                        .toUpperCase(),

                    username: username.trim(),

                    display_name: username.trim()
                })
            );

        } catch {

            setError(
                "Could not connect to the backend"
            );

            setLoading(false);
        }
    };


    /*
    HANDLE SERVER EVENTS
    */

    const handleMessage = (
        event: MessageEvent
    ) => {

        try {

            const data = JSON.parse(
                event.data
            );

            console.log(
                "SERVER:",
                data
            );


            /*
            CONNECTION
            */

            if (data.type === "connected") {

                console.log(
                    "[WS] Server connection confirmed"
                );

                return;
            }


            /*
            ROOM CREATED
            */

            if (
                data.type === "room_created"
            ) {

                console.log(
                    "Created room:",
                    data.join_code
                );

                /*
                The backend creates the room,
                but doesn't add the creator.

                So immediately join it.
                */

                socketRef.current?.send(
                    JSON.stringify({
                        type: "join_room",

                        join_code:
                            data.join_code,

                        username:
                            username.trim(),

                        display_name:
                            username.trim()
                    })
                );

                return;
            }


            /*
            ROOM STATE
            */

            if (
                data.type === "room_state"
            ) {

                setRoom({
                    room_id:
                        data.room.room_id,

                    join_code:
                        data.room.join_code,

                    room_name:
                        data.room.room_name
                });

                setUsers(
                    data.members ?? []
                );

                setCode(
                    data.code?.content ?? ""
                );

                setLanguage(
                    data.code?.language ??
                    "javascript"
                );

                return;
            }


            /*
            JOIN SUCCESS
            */

            if (
                data.type ===
                "join_room_success"
            ) {

                setRoom({
                    room_id:
                        data.room_id,

                    join_code:
                        data.join_code,

                    room_name:
                        data.room_name
                });

                setLoading(false);

                return;
            }


            /*
            USER JOINED
            */

            if (
                data.type ===
                "user_joined"
            ) {

                setUsers(
                    current => {

                        const exists =
                            current.some(
                                user =>
                                    user.user_id ===
                                    data.user.user_id
                            );

                        if (exists) {
                            return current;
                        }

                        return [
                            ...current,
                            data.user
                        ];
                    }
                );

                return;
            }


            /*
            USER LEFT
            */

            if (
                data.type ===
                "user_left"
            ) {

                setUsers(
                    current =>
                        current.filter(
                            user =>
                                user.user_id !==
                                data.user.user_id
                        )
                );

                return;
            }


            /*
            CODE UPDATED
            */

            if (
                data.type ===
                "code_updated"
            ) {

                setCode(
                    data.code?.content ?? ""
                );

                if (
                    data.code?.language
                ) {

                    setLanguage(
                        data.code.language
                    );
                }

                return;
            }


            /*
            LANGUAGE CHANGED
            */

            if (
                data.type ===
                "language_changed"
            ) {

                setLanguage(
                    data.language
                );

                return;
            }


            /*
            CHAT MESSAGE
            */

            if (data.type === "message") {

                console.log(
                    "CHAT MESSAGE RECEIVED:",
                    data
                );

                const incomingMessage: ChatMessage =
                    data.content;

                setMessages(current => [
                    ...current,
                    incomingMessage
                ]);

                return;
            }

            /*
            ERROR
            */

            if (
                data.type ===
                "error"
            ) {

                setError(
                    data.message
                );

                setLoading(false);

                return;
            }

        } catch (err) {

            console.error(
                "Invalid server message:",
                err
            );
        }
    };


    /*
    SEND CODE
    */

    const updateCode = (
        newCode: string
    ) => {

        setCode(newCode);

        if (
            socketRef.current?.readyState ===
            WebSocket.OPEN
        ) {

            socketRef.current.send(
                JSON.stringify({
                    type: "update_code",
                    content: newCode
                })
            );
        }
    };


    /*
    CHANGE LANGUAGE
    */

    const changeLanguage = (
        newLanguage: string
    ) => {

        setLanguage(newLanguage);

        if (
            socketRef.current?.readyState ===
            WebSocket.OPEN
        ) {

            socketRef.current.send(
                JSON.stringify({
                    type: "change_language",
                    language: newLanguage
                })
            );
        }
    };


    /*
    SEND CHAT
    */

    const sendMessage = (
        content: string
    ) => {

        if (!content.trim()) {
            return;
        }

        if (
            socketRef.current?.readyState !==
            WebSocket.OPEN
        ) {
            return;
        }

        socketRef.current.send(
            JSON.stringify({
                type: "send_message",
                content: content.trim()
            })
        );
    };


    /*
    LEAVE ROOM
    */

    const leaveRoom = () => {

        socketRef.current?.close();

        socketRef.current = null;

        setRoom(null);
        setUsers([]);
        setMessages([]);
        setCode("");
        setLanguage("javascript");

        setConnected(false);

        setLoading(false);
    };


    /*
    CLEANUP
    */

    useEffect(() => {

        return () => {

            socketRef.current?.close();

        };

    }, []);


    /*
    PLATFORM UI
    */

    if (room) {

        return (
            <CodeEditor
                room={room}
                users={users}
                code={code}
                language={language}
                messages={messages}
                connected={connected}
                onCodeChange={updateCode}
                onLanguageChange={changeLanguage}
                onSendMessage={sendMessage}
                onLeaveRoom={leaveRoom}
            />
        );
    }
    /*
    HOME
    */

    return (
        <div className="platform-home">

            <div className="platform-home-card">

                {/* 
                LOGO
              */}

                <div className="platform-home-logo">

                    <img
                        src="/logo.png"
                        alt="Zientra"
                    />

                    <span>
                        zientra
                    </span>

                </div>


                {/* 
                TITLE
                */}

                <h1 className="platform-home-title">
                    Enter workspace
                </h1>


                <p className="platform-home-description">
                    Create a workspace or join an existing one.
                </p>


                {/* 
                CREATE WORKSPACE
               */}

                <label className="platform-form-label">
                    Username
                </label>

                <input
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    placeholder="sahil"
                    className="platform-form-input"
                />


                <label className="platform-form-label">
                    Workspace name
                </label>

                <input
                    value={roomName}
                    onChange={(e) => {
                        setRoomName(e.target.value);
                    }}
                    placeholder="My Project"
                    className="platform-form-input"
                />


                <button
                    type="button"
                    onClick={createRoom}
                    disabled={loading}
                    className="platform-primary-button"
                >
                    {loading
                        ? "Creating..."
                        : "Create workspace"
                    }
                </button>


                {/* 
                DIVIDER
                */}

                <div className="platform-divider">

                    <div className="platform-divider-line" />

                    <span className="platform-divider-text">
                        OR
                    </span>

                    <div className="platform-divider-line" />

                </div>


                {/* 
                JOIN WORKSPACE
                */}

                <input
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    placeholder="sahil"
                    className="platform-form-input"
                />


                <label className="platform-form-label">
                    Join code
                </label>

                <input
                    value={joinCode}
                    onChange={(e) => {
                        setJoinCode(
                            e.target.value.toUpperCase()
                        );
                    }}
                    placeholder="ABC123"
                    maxLength={6}
                    className="platform-form-input"
                />


                <button
                    type="button"
                    onClick={joinRoom}
                    disabled={loading}
                    className="platform-secondary-button"
                >
                    {loading
                        ? "Joining..."
                        : "Join workspace"
                    }
                </button>


                {/* 
                ERROR
                 */}

                {error && (
                    <p className="platform-error">
                        {error}
                    </p>
                )}

            </div>

        </div>
    );
};

export default Platform;