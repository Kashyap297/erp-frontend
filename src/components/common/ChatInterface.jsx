"use client"

import { useState } from "react"
import { Box, TextField, Avatar, Paper, IconButton, InputAdornment } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"

const ChatInterface = () => {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    { id: 1, text: "", sender: "user" },
    { id: 2, text: "", sender: "other" },
    { id: 3, text: "", sender: "user" },
  ])

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { id: Date.now(), text: message, sender: "user" }])
      setMessage("")
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", maxWidth: "100%", mx: "auto" }}>
      {/* Chat messages area */}
      <Box sx={{ flexGrow: 1, mt: 2,  p : 4, overflow: "auto", display: "flex", flexDirection: "column", gap: 2 }}>
        {messages.map((msg) => (
          <Box
            key={msg.id}
            sx={{
              display: "flex",
              justifyContent: msg.sender === "user" ? "flex-start" : "flex-end",
              alignItems: "center",
              gap: 1,
            }}
          >
            {msg.sender === "user" && (
              <Avatar src="/abstract-geometric-shapes.png" alt="User" sx={{ width: 36, height: 36 }} />
            )}
            <Paper
              elevation={0}
              sx={{
                p: 1.5,
                borderRadius: 2,
                maxWidth: "70%",
                border: "1px solid #e0e0e0",
                backgroundColor: "white",
                minHeight: 40,
                minWidth: 300,
              }}
            >
              {msg.text}
            </Paper>
            {msg.sender === "other" && (
              <Avatar src="/abstract-geometric-shapes.png" alt="Other" sx={{ width: 36, height: 36 }} />
            )}
          </Box>
        ))}
      </Box>

      {/* Message input area */}
      <Box sx={{ p: 2, borderTop: "1px solid #e0e0e0" }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="What i do for u"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 4,
              "& fieldset": {
                borderColor: "#e0e0e0",
              },
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleSendMessage}
                  edge="end"
                  sx={{ bgcolor: "#000", color: "#fff", "&:hover": { bgcolor: "#333" } }}
                >
                  <AddIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  )
}

export default ChatInterface